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

<span class='anchor' id='about-me'></span>

I am a Senior undergraduate student (Class of 2026) majoring in Automation at Guohao College (Honors College), Tongji University.

I have been admitted to the Direct Ph.D. program at Fudan University (starting Fall 2026), where I will be advised by [Prof. Siyu Zhu](https://sites.google.com/site/zhusiyucs/home).

My research interests lie at the intersection of Generative World Models and 3D Vision. I aim to build Interactive Video Models that can physically understand and simulate the real world.

Specifically, my future research at Fudan University will focus on:

- Next-Gen Diffusion Architectures: Developing efficient and unified architectures for high-fidelity, long-term, and interactive video generation.
- Visual Generation for AGI: Exploring the synergy between generation and perception, particularly using Reinforcement Learning to align generative models with physical laws and leveraging video generation to enhance multimodal understanding.

# 🔥 News

- _2026.01_: &nbsp;🎉🎉 One paper (GeoPurify) has been accepted by ICLR 2026!
- _2025.09_: &nbsp;🎉🎉 I successfully received the admission offer for the Direct Ph.D. program at Fudan University.

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/geopurify.png' alt="GeoPurify" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

GeoPurify: A Data-Efficient Geometric Distillation Framework for Open-Vocabulary 3D Segmentation

Weijia Dou, Xu Zhang, Yi Bin\*, Jian Liu, Bo Peng, Guoqing Wang, Yang Yang, Heng Tao Shen

_The 14th International Conference on Learning Representations (ICLR), 2026_

<a href="https://arxiv.org/abs/2510.02186"><img src="https://img.shields.io/badge/arXiv-2510.02186-b31b1b.svg?style=flat-square" alt="arXiv"></a>
<a href="https://openreview.net/forum?id=mN49LupE8l"><img src="https://img.shields.io/badge/OpenReview-Paper-8c1b13.svg?style=flat-square" alt="OpenReview"></a>
<a href="https://github.com/tj12323/GeoPurify"><img src="https://img.shields.io/badge/Github-Code-black?style=flat-square&logo=github" alt="GitHub"></a>

- Identified the limitation of feature inconsistency when projecting 2D VLM features to 3D space.
- Proposed GeoPurify, a data-efficient framework that recovers latent geometric structures from noisy semantic features via Geometric Contrastive Distillation.
- Achieved state-of-the-art performance on major benchmarks using only ~1.5% of annotated data.

</div>
</div>

# 💻 Research Experience

- 2025.02 - 2025.09: Research Intern at Tsinghua University
  - Advised by [Prof. Jiwen Lu](https://scholar.google.com/citations?user=TN8uDQoAAAAJ&hl=zh-CN&oi=ao) and mentored by [Dr. Wenzhao Zheng](https://wzzheng.net/).
  - _Topic_: 3D Spatial Geometric Consistency in Video Generation.
  - Identified that existing fidelity-centric metrics (e.g., FVD) fail to capture geometric distortions in generative videos.
  - Proposed SGC (Spatial Geometric Consistency), a novel metric that quantifies geometric instability by measuring the divergence of local camera poses estimated from spatially coherent sub-regions.
  - Validated that SGC effectively detects critical failures (e.g., warping, object impermanence) missed by current benchmarks.

- 2024.09 - Present: Research Intern at Tongji University
  - Advised by [Prof. Yi Bin](https://scholar.google.com/citations?user=KDdkZKQAAAAJ&hl=zh-CN&oi=ao).
  - _Topic_: Open-Vocabulary 3D Scene Understanding.
  - Investigated the geometric disconnect in VLM-based 3D segmentation. Developed a geometric distillation method to align 2D semantic richness with 3D structural priors, effectively solving the noise and fragmentation issues in feature lifting.

# 🎖 Honors and Awards

Scholarships

- _2025_, Xiaomi Scholarship (Awarded to excellent students in technology fields)
- _2024_, National Scholarship (Highest Honor for Undergraduates in China, Top 0.2%)
- _2024_, Tongji Qidi Scholarship (Top 20 students in the college)
- _2023 - 2025_, Merit Student of Tongji University (Awarded for 3 consecutive years)

Competitions

- _2024_, "Star" Level Award (First Prize), The 18th "Challenge Cup" National Undergraduate Curricular Academic Science and Technology Works Competition ("Black Technology" Track).
- _2024_, Second Prize, The 7th National Undergraduate Embedded Chip and System Design Competition (FPGA Track).
- _2024_, Most Popular Project, The 17th National Conference on Undergraduate Innovation and Entrepreneurship.
