# RI Index: Responsive Influence Persona Query System

**Version**: 1.0
**Status**: Production Ready
**Total Personas**: 11
**Total Tweets Mapped**: 1,454

---

## Overview

The **RI Index** is a production-ready persona discovery and query system built on clustering analysis of Twitter/X data. It identifies distinct behavioral personas from social media conversations and provides a comprehensive API for querying, filtering, and analyzing these personas.

### Key Features

✅ **11 Enriched Personas** - Complete behavioral, temporal, and language fingerprints
✅ **100% Tweet Coverage** - Every tweet mapped to a persona
✅ **Query API** - Python interface for persona lookup and filtering
✅ **Similarity Engine** - Find related personas by language, style, or size
✅ **Export Ready** - JSON outputs for applications and integrations
✅ **Evidence-Based** - All insights grounded in data with PII-cleaned samples

---

## Architecture

### Data Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                     RAW TWITTER DATA                            │
│                    (1,618 tweets)                               │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                  DENOISING PIPELINE                             │
│  - Exact duplicates                                             │
│  - Near-duplicates (semantic similarity >0.95)                  │
│  - Short tweets (<20 chars or <5 words)                         │
│  - Promotional templates                                        │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                  FEATURE EXTRACTION                             │
│  - Text embeddings (384-dim, all-MiniLM-L6-v2)                  │
│  - Behavioral features (36-dim)                                 │
│    • Temporal (hour, weekday/weekend)                           │
│    • Interaction (replies, mentions)                            │
│    • Style (length, punctuation)                                │
│    • Network (author patterns)                                  │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│               CLUSTERING (HDBSCAN + UMAP)                       │
│  - Fusion: 75% text embeddings + 25% behavioral                 │
│  - UMAP reduction: 420-dim → 50-dim                             │
│  - HDBSCAN: min_cluster_size=75, min_samples=10                 │
│  - Result: 11 clusters + noise → nearest cluster                │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                  PERSONA ENRICHMENT                             │
│  - Temporal fingerprints (24-hour activity patterns)            │
│  - Style fingerprints (length, word count, punctuation)         │
│  - Language fingerprints (TF-IDF top terms, n-grams)            │
│  - Evidence snippets (PII-cleaned samples)                      │
│  - Copy hints (do/don't messaging)                              │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                      RI INDEX                                   │
│            Query API + Export Utilities                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## The 11 Personas

### Original 7 (Frozen Configuration)

| ID | Name | Size | % | Description |
|----|------|------|---|-------------|
| 0 | **Tech Builders** | 337 | 23.2% | Payment gateway developers and security researchers focused on technical infrastructure |
| 1 | **UX Shoppers** | 100 | 6.9% | Design-aware consumers who value seamless online shopping experiences and beautiful UX |
| 2 | **Delivery Trackers** | 98 | 6.7% | Anxious package trackers obsessed with delivery timelines and shipping transparency |
| 3 | **Return Scrutinizers** | 80 | 5.5% | Rights-aware consumers who scrutinize return policies and demand clear refund terms |
| 4 | **India Watchers** | 213 | 14.7% | India-focused e-commerce watchers tracking market dynamics and quick commerce trends |
| 5 | **Counterfeit Warriors** | 102 | 7.0% | Brand-conscious consumers wary of counterfeit products and demanding authenticity |
| 6 | **Platform Complainers** | 38 | 2.6% | Frustrated customers who publicly complain about platform issues and warn about scams |

### New 4 (Expanded Discovery)

| ID | Name | Size | % | Description |
|----|------|------|---|-------------|
| 7 | **Payment Gateway Shoppers** | 95 | 6.5% | Comparison shoppers evaluating payment gateways and fintech solutions for transactions |
| 8 | **Trust-First Buyers** | 93 | 6.4% | Security-conscious buyers prioritizing trust, authenticity, and verified sellers |
| 9 | **Customer Service Critics** | 104 | 7.2% | Vocal critics of customer service quality, especially automated chatbots and support systems |
| 10 | **Conversational Commerce Users** | 194 | 13.3% | Tech-savvy shoppers interested in AI-driven commerce and conversational shopping experiences |

---

## Usage

### Quick Start

```python
from ri_index import RIIndex

# Initialize
ri = RIIndex()

# Get persona
persona = ri.get_persona(0)
print(f"{persona['name']}: {persona['description']}")

# Find similar personas
similar = ri.find_similar_personas(0, top_k=3)
for s in similar:
    print(f"- {s['name']}: {s['similarity_score']}")

# Filter personas
large_personas = ri.filter_personas(min_size=100)
print(f"Found {len(large_personas)} large personas")
```

### Command Line Interface

```bash
# Print summary
python ri_index.py summary

# Get persona by ID
python ri_index.py persona 0

# Find similar personas
python ri_index.py similar 0

# Export for applications
python ri_index.py export
```

---

## API Reference

### Core Methods

#### `get_persona(persona_id: int) -> Dict`
Get full persona by ID.

```python
persona = ri.get_persona(0)
# Returns full persona with fingerprints, copy hints, evidence
```

#### `get_persona_by_name(name: str) -> Dict`
Get persona by name (case-insensitive).

```python
persona = ri.get_persona_by_name("Tech Builders")
```

#### `list_personas(brief: bool = False) -> List[Dict]`
List all personas. Set `brief=True` for ID, name, description, size only.

```python
personas = ri.list_personas(brief=True)
```

### Tweet Queries

#### `get_persona_tweets(persona_id: int, limit: int = None) -> List[str]`
Get tweet IDs for a persona.

```python
tweet_ids = ri.get_persona_tweets(0, limit=10)
```

#### `get_tweet_persona(tweet_id: str) -> Dict`
Get persona for a specific tweet.

```python
persona_info = ri.get_tweet_persona("1234567890")
# Returns: {'persona_id': 0, 'persona_name': 'Tech Builders'}
```

#### `get_tweet_samples(persona_id: int, n_samples: int = 5) -> List[str]`
Get PII-cleaned sample tweets.

```python
samples = ri.get_tweet_samples(0, n_samples=5)
```

### Filtering

#### `filter_personas(...) -> List[Dict]`
Filter personas by criteria:

```python
# By size
large = ri.filter_personas(min_size=100, max_size=500)

# By peak hour (business hours)
business_hours = ri.filter_personas(peak_hour_range=(9, 17))

# By top terms
delivery_personas = ri.filter_personas(top_terms=['delivery', 'shipping'])

# By word count (verbose personas)
verbose = ri.filter_personas(min_avg_word_count=40)
```

### Similarity

#### `find_similar_personas(persona_id: int, top_k: int = 3, method: str = 'language') -> List[Dict]`
Find similar personas.

Methods:
- `'language'`: Top terms overlap (Jaccard similarity)
- `'style'`: Word count similarity
- `'size'`: Persona size similarity

```python
similar = ri.find_similar_personas(0, top_k=3, method='language')
# Returns: [{'persona_id': 6, 'name': '...', 'similarity_score': 0.25}, ...]
```

### Analytics

#### `get_summary_stats() -> Dict`
Get summary statistics.

```python
stats = ri.get_summary_stats()
# Returns: total_personas, total_tweets, size_distribution, peak_hours, etc.
```

#### `get_persona_coverage() -> Dict[int, float]`
Get coverage percentage for each persona.

```python
coverage = ri.get_persona_coverage()
# Returns: {0: 23.18, 1: 6.88, ...}
```

### Export

#### `export_for_app(output_path: str = "reports/ri_index_app.json")`
Export slim version for applications.

```python
ri.export_for_app("path/to/output.json")
```

#### `print_summary()`
Print human-readable summary.

```python
ri.print_summary()
```

---

## Output Files

### Core Outputs

| File | Description | Size |
|------|-------------|------|
| `personas_enriched.json` | Full enriched personas with all fingerprints | ~1,600 lines |
| `persona_briefs.json` | Stakeholder-friendly summaries | ~250 lines |
| `personas_for_review.csv` | Quick scan spreadsheet | 12 rows |
| `tweet_persona_mapping.json` | Complete tweet → persona mapping | 1,420 tweets |
| `persona_assignment_stats.json` | Assignment statistics | Stats |
| `persona_samples_full.json` | Sample tweets per persona | 11 personas |
| `ri_index_app.json` | Slim export for applications | Export |

### File Locations

```
reports/
├── personas_enriched.json          # Full enrichment
├── persona_briefs.json             # Stakeholder pack
├── personas_for_review.csv         # Quick review
├── tweet_persona_mapping.json      # Tweet assignments
├── persona_assignment_stats.json   # Statistics
├── persona_samples_full.json       # Samples
└── ri_index_app.json               # App export
```

---

## Use Cases

### 1. Marketing Campaign Targeting

**Goal**: Find large, engaged personas for campaign targeting

```python
targets = ri.filter_personas(min_size=100, peak_hour_range=(9, 17))
for p in targets:
    persona = ri.get_persona(p['persona_id'])
    print(f"Target: {p['name']}")
    print(f"  Top terms: {[t['term'] for t in persona['language_fingerprint']['top_terms'][:3]]}")
    print(f"  Copy hint: {persona['copy_hints']['do_say'][0]}")
```

### 2. Content Gap Analysis

**Goal**: Identify underserved personas

```python
small_personas = ri.filter_personas(max_size=100)
print(f"Underserved personas: {len(small_personas)}")
```

### 3. A/B Testing

**Goal**: Find control group for experiments

```python
test_persona = 0  # Tech Builders
control = ri.find_similar_personas(test_persona, top_k=2, method='size')
print(f"Test: {ri.get_persona(test_persona)['name']}")
print(f"Control: {[c['name'] for c in control]}")
```

### 4. Persona-Based Filtering

**Goal**: Segment tweets by persona characteristics

```python
# Get all tweets from delivery-focused personas
delivery_personas = ri.filter_personas(top_terms=['delivery', 'tracking'])
for p in delivery_personas:
    tweets = ri.get_persona_tweets(p['persona_id'], limit=10)
    print(f"{p['name']}: {len(tweets)} tweets")
```

---

## Technical Details

### Feature Fusion

- **Embeddings**: 384-dim (all-MiniLM-L6-v2)
- **Behavioral**: 36-dim (temporal, interaction, style, network)
- **Fusion**: 75% embeddings + 25% behavioral
- **Final**: 420-dim → UMAP → 50-dim

### Clustering Configuration

```python
{
    "embed_weight": 0.75,
    "feat_weight": 0.25,
    "umap_n_neighbors": 40,
    "umap_min_dist": 0.4,
    "umap_n_components": 50,
    "min_cluster_size": 75,
    "min_samples": 10,
    "random_seed": 42
}
```

### Quality Metrics

- **Retention Rate**: 89.9% (1,454 / 1,618 tweets)
- **Noise Ratio**: 37.5% (reassigned to nearest cluster)
- **Coverage**: 100% (all tweets assigned)
- **Coherence**: 0.8 (frozen configuration)
- **ARI**: 0.75 (adjusted Rand index)

---

## Scripts & Tools

### Core Scripts

| Script | Purpose |
|--------|---------|
| `ri_index.py` | Main query API and CLI |
| `scripts/persona_enrichment_v2.py` | Enrichment pipeline (all 11 personas) |
| `scripts/persona_assignment.py` | Tweet-level persona assignment |
| `scripts/extract_persona_samples.py` | Sample extraction from mapping |
| `examples/ri_index_demo.py` | Comprehensive usage examples |

### Running Scripts

```bash
# Enrich personas
python scripts/persona_enrichment_v2.py

# Assign tweets to personas
python scripts/persona_assignment.py

# Extract samples
python scripts/extract_persona_samples.py

# Run demos
python examples/ri_index_demo.py
```

---

## Development

### Requirements

```
numpy
pandas
scikit-learn
sentence-transformers
umap-learn
hdbscan
```

### Project Structure

```
ri_personas/
├── ri_index.py                 # Main API
├── db/
│   └── mysql_io.py            # Database access
├── data/
│   └── denoising.py           # Denoising pipeline
├── features/
│   ├── behavioral_core.py     # Behavioral features
│   ├── text_embeddings.py     # Text embeddings
│   └── ...
├── modeling/
│   └── dimensionality_reduction.py
├── scripts/
│   ├── persona_enrichment_v2.py
│   ├── persona_assignment.py
│   └── extract_persona_samples.py
├── examples/
│   └── ri_index_demo.py
└── reports/
    ├── personas_enriched.json
    ├── tweet_persona_mapping.json
    └── ...
```

---

## Future Enhancements

### Potential Additions

- **Temporal Analysis**: Persona activity timelines over time
- **Network Analysis**: Cross-persona interaction patterns
- **Topic Modeling**: Dynamic topic extraction per persona
- **Sentiment Analysis**: Persona sentiment profiles
- **Predictive Models**: Tweet → persona classification for new data
- **Web Dashboard**: Interactive persona explorer (Streamlit/Dash)
- **REST API**: Flask/FastAPI service wrapper

---

## FAQ

### Q: How do I add new tweets to the index?

A: Re-run the assignment pipeline with the updated dataset:
```bash
python scripts/persona_assignment.py
python scripts/extract_persona_samples.py
python scripts/persona_enrichment_v2.py
```

### Q: Can I change the number of personas?

A: Yes, adjust `min_cluster_size` in the frozen config and re-run clustering. Note: This will invalidate current mappings.

### Q: How are noise points handled?

A: Noise points (37.5%) are assigned to their nearest cluster centroid using Euclidean distance in UMAP space.

### Q: What's the difference between personas 0 and 7?

A: Persona 0 (Tech Builders) focuses on technical implementation, while Persona 7 (Payment Gateway Shoppers) focuses on comparing payment solutions as a consumer.

---

## Citation

If you use this system in your research or applications, please cite:

```
RI Index: Responsive Influence Persona Query System
Version 1.0 (2025)
11 enriched personas from 1,454 tweets
```

---

## License

Internal use only. All rights reserved.

---

## Contact

For questions or support, please refer to the project documentation or contact the development team.

**Last Updated**: 2025-11-11
**Version**: 1.0
**Status**: Production Ready ✅
