---
layout: page
permalink: /publications/
title: publications
description: Publications rendered from BibTeX.
nav: true
nav_order: 2
---

## Selected publications

{% bibliography --query @*[selected=true] %}

## All publications

{% bibliography --query @*[selected=false] --group_by year --group_order descending %}
