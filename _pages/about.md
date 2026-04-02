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

<div class="profile-intro">
  <div class="intro-row">
    <div class="intro-icon">🎓</div>
    <div class="intro-text">
      B.Eng. in <b>Automation</b> at <b>Tongji University</b> (Class of 2026).
    </div>
  </div>
  
  <div class="intro-row">
    <div class="intro-icon">🔜</div>
    <div class="intro-text">
      Incoming <b>Direct Ph.D. student</b> at <b class="highlight-text">Fudan University</b> (Fall 2026), advised by <a href="https://sites.google.com/site/zhusiyucs/home">Prof. Siyu Zhu</a>.
    </div>
  </div>

  <div class="intro-row">
    <div class="intro-icon">🧠</div>
    <div class="intro-text">
      <b>Research:</b> Generative world models and 3D vision, with a focus on <i>interactive video models</i> that are geometrically and physically consistent.
    </div>
  </div>

  <div class="intro-row">
    <div class="intro-icon">🤝</div>
    <div class="intro-text">
      Open to collaboration on video generation and world model; please reach out for citation questions or joint research.
    </div>
  </div>
</div>

<span id="-news"></span>

# 🔥 News

<div class="news-box">
<ul>
  <li><i>2026.01</i>: <b>GeoPurify</b> was accepted to <b>ICLR 2026</b>.</li>
  <li><i>2025.09</i>: Admitted to the Direct Ph.D. program at <b>Fudan University</b>.</li>
</ul>
</div>

<span id="-publications"></span>

# 📝 Publications

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">ICLR 2026</div>
      <img src='images/geopurify.png' alt="GeoPurify" width="100%">
    </div>
  </div>
  
  <div class='paper-box-text'>
    
    <div class="paper-title">
      GeoPurify: A Data-Efficient Geometric Distillation Framework for Open-Vocabulary 3D Segmentation
    </div>
    
    <div class="paper-authors">
      <strong>Weijia Dou</strong>, Xu Zhang, Yi Bin*, Jian Liu, Bo Peng, Guoqing Wang, Yang Yang, Heng Tao Shen
    </div>
    
    <div class="paper-venue">
      The 14th International Conference on Learning Representations (ICLR), 2026
    </div>
    
    <div class="paper-links">
      <a href="https://arxiv.org/abs/2510.02186"><img src="https://img.shields.io/badge/arXiv-2510.02186-b31b1b.svg?style=flat-square" alt="arXiv"></a>
      <a href="https://openreview.net/forum?id=mN49LupE8l"><img src="https://img.shields.io/badge/OpenReview-Paper-8c1b13.svg?style=flat-square" alt="OpenReview"></a>
      <a href="https://github.com/tj12323/GeoPurify"><img src="https://img.shields.io/badge/Github-Code-black?style=flat-square&logo=github" alt="GitHub"></a>
    </div>
    <p class="paper-cta">For citation or collaboration, start with arXiv, then OpenReview and code.</p>

    <div class="paper-abstract">
      <ul>
        <li>Diagnosed feature inconsistency when projecting 2D VLM features into 3D.</li>
        <li>Proposed <b>GeoPurify</b> with geometric contrastive distillation to recover latent 3D structure.</li>
        <li>Reached SOTA with only <b>~1.5%</b> annotated data.</li>
      </ul>
    </div>

  </div>
</div>

<span id="-research-experience"></span>

# 💻 Research Experience

<div class="timeline">
  
  <div class="timeline-item">
    <div class="timeline-logo">
      <img src="images/tsinghua.png" alt="Tsinghua University">
    </div>
    <div class="timeline-content">
      <span class="timeline-date">2025.02 - 2025.09</span>
      <div class="timeline-title">Research Intern at Tsinghua University</div>
      <p>
        Advised by <a href="https://scholar.google.com/citations?user=TN8uDQoAAAAJ" target="_blank">Prof. Jiwen Lu</a> and mentored by <a href="https://wzzheng.net/" target="_blank">Dr. Wenzhao Zheng</a>.<br>
        Topic: <b>3D Spatial Geometric Consistency in Video Generation</b>.
      </p>
      <ul>
        <li>Showed that fidelity-centric metrics (e.g., FVD) miss geometric distortions.</li>
        <li>Proposed <b>SGC</b> to quantify geometric instability via local camera-pose divergence.</li>
      </ul>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-logo">
      <img src="images/tongji.svg" alt="Tongji University">
    </div>
    <div class="timeline-content">
      <span class="timeline-date">2024.09 - Present</span>
      <div class="timeline-title">Research Intern at Tongji University</div>
      <p>
        Advised by <a href="https://scholar.google.com/citations?user=KDdkZKQAAAAJ" target="_blank">Prof. Yi Bin</a>.<br>
        Topic: <b>Open-Vocabulary 3D Scene Understanding</b>.
      </p>
      <ul>
        <li>Analyzed the geometric gap in VLM-based 3D segmentation.</li>
        <li>Developed <b>GeoPurify</b> to align 2D semantics with 3D structural priors.</li>
      </ul>
    </div>
  </div>

</div>

<span id="-honors-and-awards"></span>

# 🎖 Honors and Awards

### Scholarships

- _2025_, Xiaomi Scholarship (Awarded to excellent students in technology fields)
- _2024_, National Scholarship (Highest Honor for Undergraduates in China, Top 0.2%)
- _2024_, Tongji Qidi Scholarship (Top 20 students in the college)
- _2023 - 2025_, Merit Student of Tongji University (Awarded for 3 consecutive years)

### Competitions

- _2024_, "Star" Level Award (First Prize), The 18th "Challenge Cup" National Undergraduate Curricular Academic Science and Technology Works Competition ("Black Technology" Track).
- _2024_, Second Prize, The 7th National Undergraduate Embedded Chip and System Design Competition (FPGA Track).
- _2024_, Most Popular Project, The 17th National Conference on Undergraduate Innovation and Entrepreneurship.
