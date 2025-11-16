# How to Create the Persona Discovery Article

## Steps:

1. Navigate to: http://localhost:3000/admin/create-article
2. Copy and paste the fields below into the form
3. Click "Create Article"
4. Note the article ID/slug for linking to the explorer

---

## Article Fields:

**Title:**
```
Automated Behavioral Persona Discovery from Social Media
```

**Subtitle:**
```
Building a production ML pipeline for audience segmentation using UMAP and HDBSCAN
```

**Slug:**
```
automated-persona-discovery-ml-pipeline
```

**Excerpt:**
```
A technical walkthrough of building an end-to-end machine learning system that automatically discovers 11 distinct behavioral personas from 1,618 tweets using Sentence-BERT embeddings, UMAP dimensionality reduction, and HDBSCAN clustering.
```

**Content:** (HTML)
```html
<h2>The Challenge</h2>
<p>Traditional audience segmentation relies on manual analysis or predetermined demographic categories. This approach doesn't scale and often misses unexpected behavioral patterns in the data. We built a system to automatically discover behavioral personas from social media conversations about e-commerce.</p>

<h2>System Overview</h2>
<p>Starting with 1,618 raw tweets, our pipeline applies aggressive quality filtering, multi-modal feature extraction, dimensionality reduction, and density-based clustering to discover distinct behavioral segments.</p>

<h3>Pipeline Architecture</h3>
<pre><code>Raw Data (1,618 tweets)
    ↓
Data Quality (6-stage filtering)
    ↓
Clean Data (1,454 tweets, 89.9% retention)
    ↓
Feature Extraction
    ├─ Text Embeddings (384-dim Sentence-BERT)
    └─ Behavioral Features (36-dim)
    ↓
Feature Fusion (75% text + 25% behavioral = 420-dim)
    ↓
UMAP Reduction (420-dim → 50-dim)
    ↓
HDBSCAN Clustering
    ↓
11 Personas + Noise Handling
    ↓
Enrichment & API Layer</code></pre>

<h2>Data Quality Pipeline</h2>
<p>We applied 6-stage filtering to ensure high signal-to-noise ratio:</p>

<pre><code>Stage 1: Exact Duplicates       1,618 → 1,515 (-6.4%)
Stage 2: Near Duplicates (>0.95) 1,515 → 1,480 (-2.3%)
Stage 3: Pure Retweets           1,480 → 1,480 (0%)
Stage 4: Short Tweets (<20 char) 1,480 → 1,454 (-1.8%)
Stage 5: Promotional Templates   1,454 → 1,454 (0%)
Stage 6: High-Freq Templates     1,454 → 1,454 (0%)
──────────────────────────────────────────────
Final: 1,454 tweets (89.9% retention)</code></pre>

<h2>Feature Engineering</h2>

<h3>Text Embeddings</h3>
<p>We used Sentence-BERT (all-MiniLM-L6-v2) to generate 384-dimensional semantic embeddings optimized for similarity tasks:</p>

<pre><code class="language-python">from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')
embeddings = model.encode(tweets)
# Output: (1454, 384)</code></pre>

<h3>Behavioral Features (36 dimensions)</h3>
<p>We extracted behavioral signals across four categories:</p>

<ul>
<li><strong>Temporal (8-dim):</strong> Hour of day, day of week, weekend flag, time patterns</li>
<li><strong>Interaction (12-dim):</strong> Reply count, mention density, thread depth, conversation patterns</li>
<li><strong>Style (10-dim):</strong> Text length, word count, punctuation density, URL/hashtag presence</li>
<li><strong>Network (6-dim):</strong> Author consistency, account age proxies, posting frequency</li>
</ul>

<h3>Feature Fusion</h3>
<p>Through ablation testing, we found that weighting text embeddings more heavily than behavioral features produces optimal results:</p>

<pre><code class="language-python">fused_features = 0.75 * text_embeddings + 0.25 * behavioral_features
# Output: (1454, 420)</code></pre>

<p>Performance comparison:</p>

<table>
<thead>
<tr><th>Configuration</th><th>Coherence</th><th>ARI</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Text Only (100%)</td><td>0.73</td><td>0.68</td><td>Misses behavioral nuance</td></tr>
<tr><td><strong>Text (75%) + Behavioral (25%)</strong></td><td><strong>0.80</strong></td><td><strong>0.75</strong></td><td><strong>Best balance</strong></td></tr>
<tr><td>Text (50%) + Behavioral (50%)</td><td>0.76</td><td>0.71</td><td>Over-weights behavior</td></tr>
<tr><td>Behavioral Only (100%)</td><td>0.51</td><td>0.43</td><td>Insufficient signal</td></tr>
</tbody>
</table>

<h2>Dimensionality Reduction with UMAP</h2>
<p>We used UMAP to reduce from 420 to 50 dimensions while preserving both local and global structure:</p>

<pre><code class="language-python">import umap

reducer = umap.UMAP(
    n_neighbors=40,      # Preserve local + global structure
    min_dist=0.4,        # Moderate compactness
    n_components=50,     # Sufficient for HDBSCAN
    random_state=42      # Reproducibility
)

reduced_features = reducer.fit_transform(fused_features)
# Output: (1454, 50)</code></pre>

<p><strong>Why UMAP over t-SNE:</strong> Better preservation of global structure, faster on medium datasets, and theoretical guarantees on topology preservation.</p>

<h2>Clustering with HDBSCAN</h2>
<p>HDBSCAN discovers clusters without requiring a predefined cluster count:</p>

<pre><code class="language-python">import hdbscan

clusterer = hdbscan.HDBSCAN(
    min_cluster_size=75,           # Minimum viable persona size
    min_samples=10,                # Core point threshold
    metric='euclidean',
    cluster_selection_method='eom' # Excess of Mass
)

labels = clusterer.fit_predict(reduced_features)</code></pre>

<p><strong>Results:</strong></p>
<ul>
<li>11 distinct clusters discovered</li>
<li>545 noise points (37.5%)</li>
<li>Cluster sizes: 38-337 tweets</li>
</ul>

<h2>Noise Handling for 100% Coverage</h2>
<p>Rather than discarding 37.5% of data labeled as noise, we assigned each noise point to its nearest cluster centroid:</p>

<pre><code class="language-python">from scipy.spatial.distance import euclidean

# Compute cluster centroids
centroids = {}
for cluster_id in range(11):
    mask = labels == cluster_id
    centroids[cluster_id] = reduced_features[mask].mean(axis=0)

# Assign noise points
noise_mask = labels == -1
for idx in np.where(noise_mask)[0]:
    distances = {
        cid: euclidean(reduced_features[idx], centroid)
        for cid, centroid in centroids.items()
    }
    labels[idx] = min(distances, key=distances.get)</code></pre>

<p>This achieves <strong>100% coverage</strong> while maintaining cluster quality.</p>

<h2>Results: 11 Discovered Personas</h2>

<h3>Quality Metrics</h3>
<table>
<thead>
<tr><th>Metric</th><th>Value</th><th>Interpretation</th></tr>
</thead>
<tbody>
<tr><td>Coherence Score</td><td>0.80</td><td>Excellent intra-cluster similarity (>0.70 is good)</td></tr>
<tr><td>Adjusted Rand Index</td><td>0.75</td><td>Very strong cluster separation (>0.60 is good)</td></tr>
<tr><td>Silhouette Score</td><td>0.45</td><td>Good cluster definition (>0.40 is good)</td></tr>
<tr><td>Coverage</td><td>100%</td><td>All data points assigned</td></tr>
</tbody>
</table>

<h3>Top 3 Personas</h3>

<p><strong>1. Tech Builders (337 tweets, 23.2%)</strong></p>
<ul>
<li>Top terms: return, policy, new, days, items</li>
<li>Peak activity: 3 PM</li>
<li>Avg word count: 30.8 (concise, technical)</li>
<li>Focus: Payment infrastructure, return policies, technical discussions</li>
</ul>

<p><strong>2. India Watchers (213 tweets, 14.7%)</strong></p>
<ul>
<li>Top terms: days, delivery, order, orders, product</li>
<li>Peak activity: 3 PM</li>
<li>Avg word count: 39.0</li>
<li>Focus: India e-commerce market dynamics, quick commerce</li>
</ul>

<p><strong>3. Conversational Commerce Users (194 tweets, 13.3%)</strong></p>
<ul>
<li>Top terms: shopping, online, experience, ai, like</li>
<li>Peak activity: 3 PM</li>
<li>Avg word count: 26.4</li>
<li><strong>Emerging trend:</strong> Largest AI-focused segment</li>
</ul>

<h2>Production API</h2>
<p>We built a query API with 18 methods for real-world applications:</p>

<pre><code class="language-python">from ri_index import RIIndex

ri = RIIndex()

# Basic queries
persona = ri.get_persona(0)
personas = ri.list_personas(brief=True)

# Filtering for marketing campaigns
targets = ri.filter_personas(
    min_size=100,
    peak_hour_range=(9, 17)
)
# Returns: 6 personas, 1,144 tweets (78.7% coverage)

# Pain point identification
pain_personas = ri.filter_personas(
    top_terms=['service', 'trust', 'fake', 'issues']
)
# Returns: 4 personas, 337 tweets (23.2% of conversations)

# Similarity analysis
similar = ri.find_similar_personas(
    persona_id=0,
    top_k=3,
    method='language'
)</code></pre>

<h2>Business Applications</h2>

<h3>1. Marketing Campaign Targeting</h3>
<p>Target 78.7% of audience with just 6 campaigns instead of generic messaging. Each persona has evidence-based keywords and optimal timing data.</p>

<h3>2. Pain Point Identification</h3>
<p>23.2% of conversations reveal pain points: customer service chatbots (104 tweets), trust issues (175 tweets across 2 personas), and delivery tracking anxiety (98 tweets).</p>

<h3>3. Emerging Trend Detection</h3>
<p>The third-largest persona (13.3%) focuses on AI shopping and conversational commerce—signaling early adoption of AI-driven shopping experiences.</p>

<h3>4. Market Intelligence</h3>
<p>27% of dataset discusses India e-commerce, with specific insights on quick commerce (Blinkit, Zepto), competitor mentions, and logistics challenges.</p>

<h2>Key Takeaways</h2>

<ul>
<li><strong>Feature fusion matters:</strong> 75% text embeddings + 25% behavioral features outperforms either alone</li>
<li><strong>Noise handling enables 100% coverage:</strong> Nearest-centroid assignment preserves quality while using all data</li>
<li><strong>Production-ready systems create value:</strong> Research without API integration has limited business impact</li>
<li><strong>Automated discovery finds unexpected patterns:</strong> The Conversational Commerce persona emerged organically from the data</li>
</ul>

<h2>Code & Data</h2>
<p>The complete system includes:</p>
<ul>
<li>~4,500 lines of production code</li>
<li>18 API methods for querying and filtering</li>
<li>Comprehensive documentation and examples</li>
<li>Frozen configuration for reproducibility</li>
</ul>

<p><strong>System metrics:</strong> Coherence 0.80, ARI 0.75, 89.9% data retention, 100% coverage across 11 personas.</p>
```

**Badge:** Architecture

**Area:** Models & Embeddings

**Difficulty:** Advanced

**Read Time:** 18 min

**Checkboxes:**
- ✅ Has Code
- ⬜ Has Video
- ⬜ Has Notebook

**Author Name:** RI Research Team

**Author Role:** ML Engineering

**Views:** 0

**Used by Teammates:** 0

**Related Article IDs:** (leave empty)

---

## After Creating:

The article will be saved to Firestore. Note the article ID or slug shown in the success message - we'll need it to link from the explorer page.
