---
layout: page
title: projects
permalink: /projects/
description: Selected projects.
nav: true
nav_order: 3
---

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
{% for project in sorted_projects %}
  <div class="project">
    <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
    <p>{{ project.description }}</p>
  </div>
{% endfor %}
</div>

