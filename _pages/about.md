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

<section class="hero-grid">
  <div class="hero-signature">
    <p class="hero-kicker">AI RESEARCH | WORLD MODELS | 3D VISION</p>
    <p class="hero-value">Building geometrically grounded video intelligence for interactive understanding and generation.</p>
    <div class="signal-row">
      <span class="signal-chip">Generative World Models</span>
      <span class="signal-chip">3D Vision</span>
      <span class="signal-chip">Interactive Video</span>
    </div>
  </div>

  <div class="profile-intro">
    <div class="intro-row">
      <div class="intro-icon">EDU</div>
      <div class="intro-text">
        B.Eng. in <b>Automation</b> at <b>Tongji University</b> (Class of 2026).
      </div>
    </div>

    <div class="intro-row">
      <div class="intro-icon">PHD</div>
      <div class="intro-text">
        Incoming <b>Direct Ph.D. student</b> at <b class="highlight-text">Fudan University</b> (Fall 2026), advised by <a href="https://sites.google.com/site/zhusiyucs/home">Prof. Siyu Zhu</a>.
      </div>
    </div>

    <div class="intro-row">
      <div class="intro-icon">FOCUS</div>
      <div class="intro-text">
        <b>Research:</b> Generative world models and 3D vision, with a focus on <i>interactive video models</i> that are geometrically and physically consistent.
      </div>
    </div>

    <div class="intro-row">
      <div class="intro-icon">OPEN</div>
      <div class="intro-text">
        Open to collaboration on video generation and world model; please reach out for citation questions or joint research.
      </div>
    </div>
  </div>
</section>

<div class="action-rail" aria-label="Primary actions for citation and collaboration">
  <a class="action-rail__item" href="#selected-publication">Read Featured Paper</a>
  <a class="action-rail__item" href="mailto:renrendwj@tongji.edu.cn">Contact by Email</a>
  <a class="action-rail__item" href="https://scholar.google.com/citations?user=ivv7mSwAAAAJ">Google Scholar</a>
</div>

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
<div class='paper-box paper-box--featured'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">ICLR 2026</div>
      <picture>
        <source
          type="image/webp"
          srcset="images/geopurify-480.webp 480w, images/geopurify-768.webp 768w, images/geopurify-1024.webp 1024w"
          sizes="(max-width: 768px) 100vw, 34vw"
        >
        <img
          src="images/geopurify-1024.png"
          alt="GeoPurify"
          width="1024"
          height="534"
          loading="lazy"
          decoding="async"
        >
      </picture>
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
    
    <div class="meta-links">
      <a class="meta-link" href="https://arxiv.org/abs/2510.02186">arXiv</a>
      <a class="meta-link" href="https://openreview.net/forum?id=mN49LupE8l">OpenReview</a>
      <a class="meta-link" href="https://github.com/tj12323/GeoPurify">Code</a>
    </div>

    <div class="paper-abstract">
      <ul>
        <li>Diagnosed feature inconsistency when projecting 2D VLM features into 3D.</li>
        <li>Proposed <b>GeoPurify</b> with geometric contrastive distillation to recover latent 3D structure.</li>
        <li>Reached SOTA with only <b>~1.5%</b> annotated data.</li>
      </ul>
    </div>

  </div>
</div>

## Research Experience {#research-experience}
<div class="timeline">
  
  <div class="timeline-item">
    <div class="timeline-logo">
      <img src="images/tsinghua.png" alt="Tsinghua University">
    </div>
    <div class="timeline-content">
      <div class="timeline-head">
        <span class="timeline-date">2025.02 - 2025.09</span>
        <div class="timeline-title">Research Intern at Tsinghua University</div>
      </div>
      <p class="timeline-orgline">
        Advised by <a href="https://scholar.google.com/citations?user=TN8uDQoAAAAJ" target="_blank" rel="noopener noreferrer">Prof. Jiwen Lu</a> and mentored by <a href="https://wzzheng.net/" target="_blank" rel="noopener noreferrer">Dr. Wenzhao Zheng</a>.
      </p>
      <p class="timeline-topic">
        <span class="timeline-topic-pill">Topic</span>
        <b>3D Spatial Geometric Consistency in Video Generation</b>
      </p>
      <div class="timeline-highlights-title">Research Highlights</div>
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
      <div class="timeline-head">
        <span class="timeline-date">2024.09 - Present</span>
        <div class="timeline-title">Research Intern at Tongji University</div>
      </div>
      <p class="timeline-orgline">
        Advised by <a href="https://scholar.google.com/citations?user=KDdkZKQAAAAJ" target="_blank" rel="noopener noreferrer">Prof. Yi Bin</a>.
      </p>
      <p class="timeline-topic">
        <span class="timeline-topic-pill">Topic</span>
        <b>Open-Vocabulary 3D Scene Understanding</b>
      </p>
      <div class="timeline-highlights-title">Research Highlights</div>
      <ul>
        <li>Analyzed the geometric gap in VLM-based 3D segmentation.</li>
        <li>Developed <b>GeoPurify</b> to align 2D semantics with 3D structural priors.</li>
      </ul>
    </div>
  </div>

</div>

## Honors and Awards {#honors-and-awards}
<div class="awards-grid">
  <section class="awards-group" id="scholarships" aria-labelledby="scholarships-title">
    <h3 id="scholarships-title">Scholarships</h3>
    <ul>
      <li><i>2025</i> Xiaomi Scholarship (Awarded to excellent students in technology fields)</li>
      <li><i>2024</i> National Scholarship (Highest Honor for Undergraduates in China, Top 0.2%)</li>
      <li><i>2024</i> Tongji Qidi Scholarship (Top 20 students in the college)</li>
      <li><i>2023 - 2025</i> Merit Student of Tongji University (Awarded for 3 consecutive years)</li>
    </ul>
  </section>

  <section class="awards-group" id="competitions" aria-labelledby="competitions-title">
    <h3 id="competitions-title">Competitions</h3>
    <ul>
      <li><i>2024</i> "Star" Level Award (First Prize), The 18th "Challenge Cup" National Undergraduate Curricular Academic Science and Technology Works Competition ("Black Technology" Track).</li>
      <li><i>2024</i> Second Prize, The 7th National Undergraduate Embedded Chip and System Design Competition (FPGA Track).</li>
      <li><i>2024</i> Most Popular Project, The 17th National Conference on Undergraduate Innovation and Entrepreneurship.</li>
    </ul>
  </section>
</div>

