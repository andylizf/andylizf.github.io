---
layout: about
title: about
permalink: /
subtitle: >
  Visiting Student Researcher @ UC Berkeley Sky Computing Lab · Senior CS undergrad @ Renmin University of China

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  # more_info intentionally omitted for a cleaner header (no phone/email inline)

selected_papers: true
social: true

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
---

I'm a Visiting Student Researcher at UC Berkeley's [Sky Computing Lab](https://sky.cs.berkeley.edu/), working with [Prof. Ion Stoica](https://people.eecs.berkeley.edu/~istoica/). I'm also a senior-year CS undergraduate at [Renmin University of China](https://www.ruc.edu.cn/) (Turing Honors Class, Rank: {{ site.data.stats.academic.rank }}/{{ site.data.stats.academic.total }}).

## Research Interests

My research focuses on designing efficient systems for machine learning workloads, with particular interests in cloud resource orchestration, distributed training infrastructure, and storage-optimized serving. I am particularly interested in cross-layer optimizations and exploring how AI techniques can advance systems design methodologies.

## Current Projects

- **[SkyNomad](https://github.com/skypilot-org/skypilot)**: Multi-region spot instance scheduling for deadline-sensitive ML workloads, achieving {{ site.data.stats.performance.cost_reduction }}% cost reduction over state-of-the-art baselines
- **[LEANN](https://github.com/yichuan-w/LEANN)**: Storage-efficient vector index for compound AI systems, achieving {{ site.data.stats.performance.storage_reduction }}% storage reduction while maintaining <{{ site.data.stats.performance.latency_impact }}% latency impact ({{ site.data.stats.github_stars.leann | divided_by: 1000.0 | round: 1 }}k+ GitHub stars)
- **AI-driven systems research**: Exploring automated optimization through evolutionary algorithms and LLM-guided design space exploration

## Selected Awards

{% for award in site.data.stats.awards limit:3 %}
- **{{ award.name }}** ({{ award.year }}), {{ award.organization }} {% if award.note %}– {{ award.note }}{% endif %}
{% endfor %}
