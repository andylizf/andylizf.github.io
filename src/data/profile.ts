export const profile = {
  name: 'Zhifei Li',
  headline: 'Incoming Computer Science PhD at Princeton University, Fall 2026',
  summary:
    "I'm an incoming PhD student in Computer Science at Princeton University, starting in Fall 2026, where I will be advised by Tri Dao and Ravi Netravali. I previously worked as a Visiting Student Researcher at the Sky Computing Lab at UC Berkeley, advised by Ion Stoica, and also collaborated with Joseph E. Gonzalez and Matei Zaharia. I completed my B.S. in Computer Science (Turing Honors Class) at Renmin University of China.",
  researchSummary:
    'I work broadly on machine learning systems, with interests in efficient infrastructure, training and inference systems, and the design of systems for emerging AI workloads.',
  builderSummary:
    'Alongside research, I translate ML systems ideas into infrastructure and tools that people actually use — from a high-availability controller running in production to a vector index with tens of thousands of users.',
  photo: '/images/profile.jpg',
  links: [
    {
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=7MiEsfAAAAAJ',
    },
    {
      label: 'ORCID',
      url: 'https://orcid.org/0009-0003-1488-4871',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/andylizf',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/andylizf',
    },
    {
      label: 'Email',
      url: 'mailto:andylizf@gmail.com',
    },
  ],
  researchInterests: [
    'Machine learning systems',
    'Training and inference infrastructure',
    'Efficient systems for AI workloads',
    'Systems support for emerging AI applications',
  ],
  news: [
    { date: 'Jul 2026', text: 'SkyNomad accepted to NSDI 2027.' },
    { date: 'May 2026', text: 'LEANN received the Best Paper Award at MLSys 2026.' },
    { date: 'Apr 2026', text: 'FrontierCS accepted to ICML 2026.' },
    { date: 'Feb 2026', text: 'LEANN accepted to MLSys 2026.' },
    { date: 'Fall 2026', text: 'Will start a CS PhD at Princeton University, advised by Tri Dao and Ravi Netravali.' },
    { date: 'Aug 2025', text: 'Received CCF Elite Collegiate Award (<100 recipients nationally).' },
    { date: 'Jul 2025', text: 'Joined UC Berkeley Sky Computing Lab as a Visiting Student Researcher.' },
    { date: 'May 2025', text: "Received Dean's Scholarship, Gaoling School of AI." },
  ],
  awards: [
    {
      title: 'Beijing Municipal Outstanding Graduate',
      detail: '北京市优秀毕业生, top 5% of graduates citywide',
      date: 'Jun 2026',
    },
    {
      title: 'Wu Yuzhang Scholarship',
      detail: "吴玉章奖学金, RUC's highest student honor, ≤10 recipients/year",
      date: 'May 2026',
    },
    {
      title: 'CCF Elite Collegiate Award',
      detail: 'CCF优秀大学生奖, <100 recipients nationally',
      date: 'Aug 2025',
    },
    {
      title: 'Pioneer Medal',
      detail: '先锋奖章, Renmin University of China',
      date: 'May 2026',
    },
    {
      title: "Dean's Scholarship",
      detail: 'Gaoling School of AI (15/2000)',
      date: 'May 2025',
    },
    {
      title: 'National Scholarship',
      detail: '国家奖学金, Top 0.2% nationally',
      date: 'Sep 2024',
    },
    {
      title: 'First-Class Scholarship for Social Service',
      detail: '社会工作一等奖学金, 48/35000',
      date: 'Sep 2023',
    },
    {
      title: 'First Prize, NOIP',
      detail: 'National Olympiad in Informatics in Provinces',
      date: 'Dec 2019',
    },
  ],
  service: [
    "USENIX ATC '25 Artifact Evaluation Committee",
    'Head Teaching Assistant, Introduction to Computer Systems (Fall 2024 and Spring 2025)',
    'President, RUC Computer Association (Jul 2024 to Jul 2025)',
  ],
  // `stars` is the last known count — a fallback for when the build-time GitHub
  // fetch is rate-limited or offline, so the chip never renders blank.
  openSource: [
    {
      name: 'SkyPilot',
      repo: 'skypilot-org/skypilot',
      url: 'https://github.com/skypilot-org/skypilot',
      stars: 10449,
      metrics: ['Top 10 contributor', '50+ PRs merged', '30k+ LOC'],
      summary:
        'Built the High Availability Controller for SkyServe, later adopted by startups including Hypermode.',
    },
    {
      name: 'LEANN',
      repo: 'StarTrail-org/LEANN',
      url: 'https://github.com/StarTrail-org/LEANN',
      stars: 12761,
      metrics: ['40k+ downloads', '600k+ reach', 'research → production'],
      summary:
        'Led the research-to-production translation of a low-storage vector index for personal devices.',
    },
    {
      name: 'PixelRAG',
      repo: 'StarTrail-org/PixelRAG',
      url: 'https://github.com/StarTrail-org/PixelRAG',
      stars: 9132,
      metrics: ['10k+ downloads', 'Top contributor', 'live index of 8.28M pages'],
      summary:
        'Built the screenshot renderer and the hosted search service behind pixelrag.ai, taking the paper pipeline to a public API and pip package.',
    },
  ],
} as const;

export const publications = [
  {
    year: 2027,
    title: 'SkyNomad: On Using Multi-Region Spot Instances to Minimize AI Batch Job Cost',
    authors:
      'Zhifei Li*, Tian Xia*, Ziming Mao, Zihan Zhou, Ethan J. Jackson, Jamison Kerney, Zhanghao Wu, Pratik Mishra, Yi Xu, Yifan Qiao, Ion Stoica',
    venue: 'NSDI 2027',
    venueUrl: 'https://www.usenix.org/conference/nsdi27',
    note: 'To appear',
    paperUrl: 'https://arxiv.org/abs/2601.06520',
    featured: true,
  },
  {
    year: 2026,
    title: 'LEANN: A Low-Storage Vector Index for Personal Devices',
    authors:
      'Yichuan Wang, Zhifei Li, Shu Liu, Yongji Wu, Ziming Mao, Yilong Zhao, Xiao Yan, Zhiying Xu, Yang Zhou, Ion Stoica, Sewon Min, Matei Zaharia, Joseph E. Gonzalez',
    venue: 'MLSys 2026',
    venueUrl: 'https://mlsys.org/Conferences/2026',
    honor: 'Best Paper Award',
    paperUrl: 'https://arxiv.org/abs/2506.08276',
    codeUrl: 'https://github.com/StarTrail-org/LEANN',
    featured: true,
  },
  {
    year: 2026,
    title: 'SkyWalker: A Locality-Aware Cross-Region Load Balancer for LLM Inference',
    authors:
      'Tian Xia, Ziming Mao, Jamison Kerney, Ethan J. Jackson, Zhifei Li, Jiarong Xing, Scott Shenker, Ion Stoica',
    venue: 'EuroSys 2026',
    venueUrl: 'https://2026.eurosys.org/',
    paperUrl: 'https://arxiv.org/abs/2505.24095',
    featured: false,
  },
  {
    year: 2026,
    title: 'FrontierCS: Evolving Challenges for Evolving Intelligence',
    authors:
      'Qiuyang Mang*, Wenhao Chai*, Zhifei Li*, Huanzhi Mao*, and others, Ion Stoica, Jingbo Shang, Zhuang Liu, Alvin Cheung',
    venue: 'ICML 2026',
    venueUrl: 'https://icml.cc/Conferences/2026',
    paperUrl: 'https://arxiv.org/abs/2512.15699',
    codeUrl: 'https://github.com/FrontierCS/Frontier-CS',
    projectUrl: 'https://frontier-cs.org',
    featured: true,
  },
  {
    year: 2026,
    title: 'PixelRAG: Web Screenshots Beat Text for Retrieval-Augmented Generation',
    authors:
      'Yichuan Wang*, Zhifei Li*, Zirui Wang, Paul Teiletche, Lesheng Jin, Matei Zaharia, Joseph E. Gonzalez, Sewon Min',
    venue: 'arXiv',
    note: 'Preprint',
    paperUrl: 'https://arxiv.org/abs/2606.28344',
    codeUrl: 'https://github.com/StarTrail-org/PixelRAG',
    projectUrl: 'https://pixelrag.ai',
    featured: true,
  },
  {
    year: 2025,
    title: 'Barbarians at the Gate: How AI is Upending Systems Research',
    authors:
      'Audrey Cheng*, Shu Liu*, Melissa Pan*, Zhifei Li, Bowen Wang, Alex Krentsel, Tian Xia, Mert Cemri, Jongseok Park, Shuo Yang, Jeff Chen, Aditya Desai, Jiarong Xing, Koushik Sen, Matei Zaharia, Ion Stoica',
    venue: 'arXiv',
    note: 'Preprint',
    paperUrl: 'https://arxiv.org/abs/2510.06189',
    featured: false,
  },
] as const;
