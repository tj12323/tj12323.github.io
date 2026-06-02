---
permalink: /
title: ""
excerpt: "Academic Homepage of Weijia Dou"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<div class="anchor" id="about-me" aria-hidden="true"></div>

{% include hero-grid.html %}

{% include action-rail.html %}

## Research Updates {#research-updates}
<p class="section-lead">Recent milestones relevant for citation and collaboration.</p>
<div class="news-box">
<ul>
  <li><i>2026.01</i>: <b>GeoPurify</b> was accepted to <b>ICLR 2026</b>.</li>
  <li><i>2025.09</i>: Admitted to the Direct Ph.D. program at <b>Fudan University</b>.</li>
</ul>
</div>

## Selected Publication {#selected-publication}
<p class="section-lead">Primary evidence block. If you plan to cite or collaborate, start here.</p>
{% include featured-paper.html %}

## Research Experience {#research-experience}
{% include research-experience-timeline.html %}

## Honors and Awards {#honors-and-awards}
{% include awards-grid.html %}