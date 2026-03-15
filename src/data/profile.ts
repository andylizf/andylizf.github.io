export const profile = {
  name: 'Zhifei Li',
  headline: 'Incoming PhD student in Computer Science, Fall 2026',
  summary:
    "I'm an incoming PhD student in Computer Science starting in Fall 2026. I previously worked as a Visiting Student Researcher at Sky Computing Lab at UC Berkeley, advised by Ion Stoica, and also collaborated with Joseph E. Gonzalez and Matei Zaharia. I completed my B.S. in Computer Science (Turing Honors Class) at Renmin University of China.",
  researchSummary:
    'My work focuses on designing efficient systems for ML, with an emphasis on cloud resource orchestration, distributed training infrastructure, and compound AI systems for increasingly heterogeneous workloads.',
  builderSummary:
    'Alongside research, I care about translating systems ideas into open-source infrastructure and product-facing bets. That builder lens is part of the site, but it should not replace the research identity.',
  photo: '/images/profile.png',
  links: [
    {
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=7MiEsfAAAAAJ',
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
      url: 'mailto:zhifei.li@berkeley.edu',
    },
  ],
  researchInterests: [
    'Efficient systems for ML',
    'Cloud resource orchestration and scheduling',
    'Distributed training and inference infrastructure',
    'Compound AI systems and systems-aware AI methods',
  ],
  news: [
    { date: 'Feb 2026', text: 'LEANN accepted to MLSys 2026.' },
    { date: 'Fall 2026', text: 'Will start a PhD in Computer Science.' },
    { date: 'Aug 2025', text: 'SkyWalker accepted to EuroSys 2026.' },
    { date: 'Aug 2025', text: 'Received CCF Elite Collegiate Award (<100 recipients nationally).' },
    { date: 'Jul 2025', text: 'Joined UC Berkeley Sky Computing Lab as a Visiting Student Researcher.' },
    { date: 'May 2025', text: "Received Dean's Scholarship, Gaoling School of AI." },
  ],
  awards: [
    {
      title: 'CCF Elite Collegiate Award',
      detail: 'CCF优秀大学生奖, <100 recipients nationally',
      date: 'Aug 2025',
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
  openSource: [
    {
      name: 'SkyPilot',
      url: 'https://github.com/skypilot-org/skypilot',
      summary: 'Top 10 contributor; 70+ issues, 50+ PRs merged; 30,000+ lines of code contributed.',
      impact: 'Built the High Availability Controller for SkyServe, later adopted by startups including Hypermode.',
    },
    {
      name: 'LEANN',
      url: 'https://github.com/yichuan-w/LEANN',
      summary: 'Led research-to-production translation; 40k+ community downloads.',
      impact: 'Technical outreach around the project reached 600k+ views.',
    },
  ],
} as const;

export const publications = [
  {
    year: 2026,
    title: 'SkyWalker: A Locality-Aware Cross-Region Load Balancer for LLM Inference',
    authors:
      'Tian Xia, Ziming Mao, Jamison Kerney, Ethan J. Jackson, Zhifei Li, Jiarong Xing, Scott Shenker, Ion Stoica',
    venue: 'EuroSys 2026',
    note: 'Preprint',
    paperUrl: 'https://arxiv.org/abs/2505.24095v2',
    featured: true,
  },
  {
    year: 2026,
    title: 'SkyNomad: Cost-Effective Multi-Region Scheduling for Deadline-Sensitive Workloads on Spot Instances',
    authors: 'Zhifei Li*, Tian Xia*, and others, Ion Stoica',
    venue: 'OSDI 2026',
    note: 'In submission',
    paperUrl: 'https://arxiv.org/abs/2601.06520',
    featured: true,
  },
  {
    year: 2026,
    title: 'LEANN: A Low-Storage Vector Index for Personal Devices',
    authors:
      'Yichuan Wang, Zhifei Li, Shu Liu, Yongji Wu, Ziming Mao, Yilong Zhao, Xiao Yan, Zhiying Xu, Yang Zhou, Ion Stoica, Sewon Min, Matei Zaharia, Joseph E. Gonzalez',
    venue: 'MLSys 2026',
    note: 'To appear',
    paperUrl: 'https://arxiv.org/abs/2506.08276',
    featured: true,
  },
  {
    year: 2024,
    title: 'Barbarians at the Gate: How AI is Upending Systems Research',
    authors:
      'Audrey Cheng*, Shu Liu*, Melissa Pan*, Zhifei Li, Bowen Wang, Alex Krentsel, Tian Xia, Mert Cemri, Jongseok Park, Shuo Yang, Jeff Chen, Aditya Desai, Jiarong Xing, Koushik Sen, Matei Zaharia, Ion Stoica',
    venue: 'arXiv',
    note: '2024',
    paperUrl: 'https://arxiv.org/abs/2510.06189',
    featured: true,
  },
  {
    year: 2024,
    title: 'FrontierCS: The Next Frontier of Computer Science',
    authors:
      'Qiuyang Mang*, Wenhao Cai*, Zhifei Li*, Huanzhi Mao*, and others, Ion Stoica, Jingbo Shang, Zhuang Liu, Alvin Cheung',
    venue: 'arXiv',
    note: '2024',
    paperUrl: 'https://arxiv.org/abs/2512.15699',
    featured: true,
  },
] as const;
