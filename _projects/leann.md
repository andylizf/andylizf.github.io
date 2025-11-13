---
layout: page
title: LEANN — the Smallest Vector Index in the World
description: 97% storage savings for RAG workloads while maintaining accuracy; production-ready Python package with CI/CD.
importance: 1
category: work
github: https://github.com/yichuan-w/LEANN
stars: 4100
tags:
  - vector-database
  - storage-optimization
  - compound-ai
---

**Impact**: {{ site.data.stats.performance.storage_reduction }}% storage reduction | <{{ site.data.stats.performance.latency_impact }}% latency impact | {{ site.data.stats.github_stars.leann }}+ GitHub stars

## Key Contributions

- Co-designed and implemented the two-level recompute algorithm by extending FAISS's C++ vector indexing, enabling dynamic query‑time decompression
- Led open-source engineering to refactor research prototype into a Python package, set up CI/CD, and grow community contributors
- Developed evaluation framework demonstrating effectiveness across diverse RAG workloads

## Technical Highlights

- **Algorithm**: Two-level hierarchical compression with selective recomputation
- **Implementation**: C++ extensions to FAISS with Python bindings
- **Production**: Automated CI/CD pipeline, comprehensive testing, documentation
