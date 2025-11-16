# RI Index - Quick Start Guide

## Installation

No installation required - the RI Index is ready to use!

## 5-Minute Quick Start

### 1. View All Personas

```bash
python ri_index.py summary
```

**Output**: List of all 11 personas with sizes and descriptions

### 2. Query a Specific Persona

```python
from ri_index import RIIndex

ri = RIIndex()
persona = ri.get_persona(0)  # Tech Builders

print(f"Name: {persona['name']}")
print(f"Description: {persona['description']}")
print(f"Size: {persona['size']} tweets")
print(f"Top terms: {[t['term'] for t in persona['language_fingerprint']['top_terms'][:5]]}")
```

### 3. Find Similar Personas

```bash
python ri_index.py similar 0
```

**Output**: Top 3 personas similar to Tech Builders

### 4. Filter Personas

```python
# Find large personas (>100 tweets)
large = ri.filter_personas(min_size=100)

# Find personas mentioning 'delivery'
delivery = ri.filter_personas(top_terms=['delivery'])

# Find business-hours personas (9am-5pm peak)
business = ri.filter_personas(peak_hour_range=(9, 17))
```

### 5. Get Tweet Samples

```python
# Get 5 sample tweets from persona 0
samples = ri.get_tweet_samples(0, n_samples=5)
for sample in samples:
    print(sample[:100] + "...")
```

## Common Use Cases

### Marketing Campaign Targeting

```python
# Find large, engaged personas
targets = ri.filter_personas(min_size=100, peak_hour_range=(9, 17))

for p in targets:
    persona = ri.get_persona(p['persona_id'])
    print(f"Target: {p['name']}")
    print(f"  Keywords: {[t['term'] for t in persona['language_fingerprint']['top_terms'][:3]]}")
    print(f"  Copy hint: {persona['copy_hints']['do_say'][0]}")
```

### Content Strategy

```python
# Identify underserved personas
small = ri.filter_personas(max_size=100)
print(f"Underserved: {len(small)} personas")
```

### A/B Testing

```python
# Find similar personas for control group
test_group = 0  # Tech Builders
control_group = ri.find_similar_personas(test_group, top_k=2, method='size')
```

## File Locations

All outputs are in the `reports/` directory:

- **personas_enriched.json** - Full persona data
- **persona_briefs.json** - Stakeholder summaries  
- **personas_for_review.csv** - Quick scan spreadsheet
- **tweet_persona_mapping.json** - Tweet assignments
- **ri_index_app.json** - Application export

## Next Steps

1. **Run the demo**: `python examples/ri_index_demo.py`
2. **Read full docs**: See `RI_INDEX_README.md`
3. **Explore API**: Import `RIIndex` and explore methods

## Getting Help

```python
from ri_index import RIIndex

# Print comprehensive summary
ri = RIIndex()
ri.print_summary()

# Get statistics
stats = ri.get_summary_stats()
print(stats)

# List all methods
help(RIIndex)
```

## The 11 Personas (Quick Reference)

| ID | Name | Size | % | Focus |
|----|------|------|---|-------|
| 0 | Tech Builders | 337 | 23% | Payment infrastructure |
| 1 | UX Shoppers | 100 | 7% | Shopping experience |
| 2 | Delivery Trackers | 98 | 7% | Package tracking |
| 3 | Return Scrutinizers | 80 | 6% | Return policies |
| 4 | India Watchers | 213 | 15% | India e-commerce |
| 5 | Counterfeit Warriors | 102 | 7% | Product authenticity |
| 6 | Platform Complainers | 38 | 3% | Platform issues |
| 7 | Payment Gateway Shoppers | 95 | 7% | Payment comparisons |
| 8 | Trust-First Buyers | 93 | 6% | Trust & safety |
| 9 | Customer Service Critics | 104 | 7% | Support quality |
| 10 | Conversational Commerce | 194 | 13% | AI shopping |

---

**Total**: 1,454 tweets across 11 personas (100% coverage)

**Ready to use!** 🚀
