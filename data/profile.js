/* =====================================================================
   CENTRAL SOURCE OF TRUTH  (site + every CV version read from here)
   Rule: nothing below may be added unless a document (CV, certificate,
   letter, project file) supports it. Unproven items carry verified:false
   and are hidden on the public site until evidence is uploaded.
   ===================================================================== */
window.SITE = {
  url: "https://bilalsd1.github.io",           // TODO: set real domain (canonical, sitemap, OpenGraph)
  showUnverified: false                 // true = also show "evidence pending" items (review only)
};

window.PROFILE = {
  name: "Syed Bilal Ali",
  title: "Multidisciplinary Engineering & Technology Solutions Expert",
  shortTitle: "Engineering & Technology Solutions",
  location: "Karachi, Pakistan",
  email: "Bilalsd1@live.com",           // public contact = email + form only (no phone / address / DOB)
  languages: ["English", "Urdu"],
  yearsExperience: 14,                  // CV: "14 years of experience"
  enterpriseProjects: 48,               // CV: "Completed 48 enterprise IT projects"
  summary: "Technology solutions professional with 14 years of experience delivering enterprise IT infrastructure, ERP and database integration, and device-level systems integration. Recent professional training extends this into industrial automation (PLC) and Danfoss Turbocor compressor technology.",
  variants: {
    full: {
      label: "Full CV",
      headline: "Engineering & Technology Solutions",
      summary: "Technology solutions professional with 14 years of experience delivering enterprise IT infrastructure, ERP and database integration, and device-level systems integration. Recent professional training extends this into industrial automation (PLC) and Danfoss Turbocor compressor technology.",
      bullets: ["it", "dev", "auto", "eng", "mgmt"],
      certCats: null, skills: null
    },
    it: {
      label: "IT-focused CV",
      headline: "IT Infrastructure, Enterprise Systems & Integration",
      summary: "IT Head with 14 years of experience across networking, servers, Active Directory, Oracle/MySQL databases, APIs and enterprise systems (ERP, POS, e-commerce) for retail, hospitality and multi-industry clients.",
      bullets: ["it", "dev", "mgmt"],
      certCats: ["IT", "Networking", "Database", "Programming", "Management"], skills: ["DevOps & Cloud", "Development", "Data & ERP", "Infrastructure", "Management & Creative"]
    },
    eng: {
      label: "Engineering-focused CV",
      headline: "Systems Integration & Engineering Support",
      summary: "Hands-on technologist who integrates physical devices, power systems and control equipment with enterprise software, backed by formal training in PLC programming and compressor technology.",
      bullets: ["eng", "auto"],
      certCats: ["PLC", "Automation", "HVAC", "Refrigeration", "Safety", "Electrical", "Mechanical"], skills: ["Infrastructure"]
    },
    auto: {
      label: "Automation / HVAC CV",
      headline: "Automation, PLC & Compressor Technology",
      summary: "Technologist with PLC programming training (Siemens) and a completed Danfoss Turbocor TT & TG compressor training program, plus field experience integrating turnstiles, scales and handheld terminals with enterprise databases.",
      bullets: ["auto"],
      certCats: ["PLC", "Automation", "HVAC", "Refrigeration", "Safety"], skills: []
    }
  },
  /* Hero badges: only areas with evidence */
  positioning: ["IT Infrastructure", "Networking", "Databases", "Systems Integration", "Industrial Automation (PLC)", "HVAC & Refrigeration (Danfoss Turbocor)", "Enterprise Systems"]
};

window.EDUCATION = [
  { degree: "Bachelor's degree, Computer Science", inst: "Virtual University of Pakistan", place: "Karachi, Pakistan", years: "2024 – 2026", status: "In progress", source: "CV" },
  { degree: "Associate degree, Computer Science (14 years of education)", inst: "Virtual University of Pakistan", place: "Karachi, Pakistan", years: "2022 – 2024", status: "Completed", source: "CV" },
  { degree: "Intermediate in Commerce (12 years of education)", inst: "Board of Intermediate and Secondary Education Karachi", place: "Karachi, Pakistan", years: "2018", status: "Completed", source: "CV" },
  { degree: "Secondary Education / Matriculation, Computer Science", inst: "Federal Board of Intermediate and Secondary Education, Islamabad (Pakistani International School Jeddah)", place: "Jeddah, Saudi Arabia", years: "2012 – 2013", status: "Completed", source: "CV" }
];
window.TRAINING = [
  { name: "Windows Networking", org: "NET. INN Computer Network, Karachi", when: "Jan 2009 – Apr 2009", source: "CV" },
  { name: "Computer Hardware & Software", org: "Institute of Development Council, Government of Pakistan · 3D Educators, Karachi", when: "Jul 2011 – Sep 2011", source: "CV" }
];

/* 13 requested expertise areas. evidence[] = what backs it. verified:false => hidden publicly. */
window.EXPERTISE = [
  { id: "hvac", name: "HVAC & Refrigeration", verified: true, level: "Training", evidence: ["14 Danfoss Learning certificates (Mar–Aug 2025): compressor fundamentals, refrigeration cycle, Turbocor operation, cooling, interface, safety, SMT & TurboTool tools", "Completed Danfoss Turbocor TT & TG Compressor Training Program and Assessment (28 Aug 2025)"], note: "Training-level evidence. Field project documents pending." },
  { id: "automation", name: "Industrial Automation", verified: true, level: "Training + field integration", evidence: ["RealPars: PLC Programming Made Easy (Level 1); Siemens PLC Basics (12 Oct 2025)", "CV: integrated ZKT turnstiles, DIGI SM100 scales and Windows CE handhelds with Oracle ERP"] },
  { id: "plc", name: "PLC / HMI / SCADA", verified: true, level: "PLC training only", evidence: ["RealPars: Siemens PLC Basics – Introduction to Programming & Configuration", "RealPars: PLC Programming Made Easy (Level 1)"], note: "HMI and SCADA: no evidence yet (not shown)." },
  { id: "infra", name: "IT Infrastructure", verified: true, level: "14 years", evidence: ["CV: IT infrastructure for 3 supermarket branches (POS, network, AD, firewall, ERP)", "CV: 45 IT infrastructure projects in Saudi Arabia (2012–2018)"] },
  { id: "network", name: "Networking", verified: true, level: "Project + certificate", evidence: ["Cisco Networking Academy: CCNA – Introduction to Networks (issued 10 Jun 2026)", "CV: IKEv2 IPsec between all branches; Cisco & MikroTik administration", "CV: CCNA Routing & Switching (expired 2018)"] },
  { id: "servers", name: "Servers / Virtualization", verified: true, level: "Stated on CV", evidence: ["CV: Windows Server / Active Directory, server upgrades, redundancy cluster", "CV: MCSA Windows Server 2016 learning path", "CV headline lists virtualization (no project detail yet)"] },
  { id: "db", name: "Databases", verified: true, level: "Project", evidence: ["CV: Oracle 10g, PL/SQL queries, Oracle Forms & Reports", "CV: MySQL 8.0 synchronisation with Oracle via API"] },
  { id: "python", name: "Python / Automation", verified: true, level: "Stated on CV", evidence: ["CV headline and skills: Python, Apache Airflow, data pipelines", "CV: C# / ASP.NET applications (project)"] },
  { id: "enterprise", name: "Enterprise Systems", verified: true, level: "Project", evidence: ["CV: Oracle ERP, POS, inventory, purchasing, accounts, HR", "CV: ERP deployments for clients (accounts, HR, manufacturing, warehousing)"] },
  { id: "integration", name: "System Integration", verified: true, level: "Project", evidence: ["CV: Oracle ⇄ WooCommerce API sync; ZKT turnstile → Oracle HR; DIGI scale → Oracle; handhelds → Oracle", "CV: front-desk ⇄ booking channel manager APIs (hotels, Saudi Arabia)"] }
];

/* Technologies. level: project | trained | stated.   verified:false => hidden. */
window.TECHNOLOGIES = [
  // Automation / HVAC
  { n: "Siemens PLC", g: "Automation", level: "trained", ev: "RealPars – Siemens PLC Basics" },
  { n: "PLC programming", g: "Automation", level: "trained", ev: "RealPars – PLC Programming Made Easy (Level 1)" },
  { n: "Danfoss Turbocor TT & TG", g: "HVAC & Refrigeration", level: "trained", ev: "Danfoss Learning – Training Program & Assessment" },
  { n: "Danfoss Service Monitoring Tool (SMT)", g: "HVAC & Refrigeration", level: "trained", ev: "Danfoss Learning – Tools You Can Use 2" },
  { n: "TurboTool®", g: "HVAC & Refrigeration", level: "trained", ev: "Danfoss Learning – Tools You Can Use 3" },
  // Networking & infrastructure
  { n: "IKEv2 / IPsec VPN", g: "Networking", level: "project", ev: "CV – multi-branch network, The Big Buy" },
  { n: "Cisco networking", g: "Networking", level: "trained", ev: "Cisco Networking Academy – CCNA: Introduction to Networks (2026)" },
  { n: "MikroTik", g: "Networking", level: "stated", ev: "CV skills; MikroTik solution partner work" },
  { n: "Firewalls", g: "Networking", level: "project", ev: "CV – firewall deployment and security updating" },
  { n: "Windows Server / Active Directory", g: "Servers", level: "project", ev: "CV – AD server deployment; MCSA 2016 learning path" },
  { n: "Linux / Unix administration", g: "Servers", level: "stated", ev: "CV skills" },
  { n: "Docker · Kubernetes", g: "Servers", level: "stated", ev: "CV skills" },
  { n: "UPS & power systems", g: "Infrastructure", level: "project", ev: "CV – 6 kVA line-interactive UPS, 7 h backup" },
  { n: "IP telephony (Panasonic, Siemens, Alcatel-Lucent, Avaya, Cisco)", g: "Infrastructure", level: "project", ev: "CV – Al Aqmar (2012–2018)" },
  { n: "IPTV middleware", g: "Infrastructure", level: "project", ev: "CV – Al Aqmar (2012–2018)" },
  // Data & software
  { n: "Oracle 10g · PL/SQL · Forms & Reports", g: "Databases & Software", level: "project", ev: "CV – The Big Buy" },
  { n: "MySQL 8.0", g: "Databases & Software", level: "project", ev: "CV – WooCommerce synchronisation" },
  { n: "WooCommerce API", g: "Databases & Software", level: "project", ev: "CV – automatic price & stock update" },
  { n: "C# · ASP.NET", g: "Databases & Software", level: "project", ev: "CV – Windows CE and web apps" },
  { n: "Windows CE 6.5 · Zebra MK3100", g: "Databases & Software", level: "project", ev: "CV – price checker app" },
  { n: "ZKTeco turnstile · DIGI SM100 scale", g: "Databases & Software", level: "project", ev: "CV – Oracle ERP integrations" },
  { n: "Python · Apache Airflow", g: "Databases & Software", level: "stated", ev: "CV headline & skills" },
  { n: "React · Node.js · Vue.js · React Native · Ionic", g: "Databases & Software", level: "stated", ev: "CV skills" },
  { n: "CI/CD: Jenkins · GitLab CI · CircleCI · Travis CI", g: "Databases & Software", level: "stated", ev: "CV skills" },
  { n: "Prometheus · Grafana · ELK", g: "Databases & Software", level: "stated", ev: "CV skills" },
  { n: "AWS · Google Cloud", g: "Databases & Software", level: "stated", ev: "CV skills (AWS course completed, exam not taken)" },
  { n: "Oracle Primavera P6 · PMP · Agile", g: "Management", level: "stated", ev: "CV skills / courses" }
];

/* Skill -> Technology -> Project -> Evidence  (no percentage bars) */
window.SKILL_CHAINS = [
  { skill: "PLC programming", tech: "Siemens PLC", project: "— (project documents pending)", evidence: "RealPars: Siemens PLC Basics; PLC Programming Made Easy (12 Oct 2025)" },
  { skill: "Compressor technology", tech: "Danfoss Turbocor TT & TG · SMT · TurboTool®", project: "Carrier chiller / Turbocor retrofit (case study in preparation)", evidence: "Danfoss Learning: 14 certificates, Mar–Aug 2025" },
  { skill: "ERP & database integration", tech: "Oracle 10g ⇄ MySQL 8.0 · WooCommerce API", project: "Oracle ⇄ WooCommerce price & stock sync", evidence: "CV – IT Head, The Big Buy (2021–present)" },
  { skill: "Secure multi-site networking", tech: "IKEv2 IPsec · firewalls · MikroTik", project: "Multi-branch network & redundancy cluster", evidence: "CV – IT Head; Cisco Academy CCNA: Introduction to Networks (2026)" },
  { skill: "Device-to-ERP integration", tech: "ZKTeco turnstile · Oracle HR", project: "Turnstile attendance & break tracking", evidence: "CV – IT Head, The Big Buy" },
  { skill: "Device-to-ERP integration", tech: "DIGI SM100 scale · Oracle", project: "Automatic daily price change", evidence: "CV – IT Head, The Big Buy" },
  { skill: "Handheld application development", tech: "C# · Windows CE 6.5 · Zebra MK3100 · Oracle 10g", project: "Handheld barcode & price-checker apps", evidence: "CV – IT Head, The Big Buy" },
  { skill: "Power resilience", tech: "6 kVA line-interactive UPS · APC", project: "Server & endpoint power backup (7 h)", evidence: "CV – IT Head, The Big Buy" },
  { skill: "Hospitality systems", tech: "IPTV middleware · IP telephony · booking-channel APIs", project: "Hotel & multi-industry infrastructure (Saudi Arabia)", evidence: "CV – IT Manager, Al Aqmar (2012–2018)" }
];

/* Interactive diagrams */
window.DIAGRAM_ITOT = [
  { k: "Sensors", s: "pending", d: "No sensor / instrumentation project document uploaded yet." },
  { k: "PLC", s: "trained", d: "Siemens PLC Basics and PLC Programming Made Easy (Level 1), RealPars, 12 Oct 2025." },
  { k: "HMI / SCADA", s: "pending", d: "No HMI or SCADA document uploaded yet." },
  { k: "Network", s: "project", d: "IKEv2 IPsec between branches, firewalls, Cisco/MikroTik; CCNA: Introduction to Networks (2026)." },
  { k: "API / IoT gateway", s: "project", d: "REST API integration: Oracle ⇄ WooCommerce; front-desk ⇄ booking channel managers. (IoT platforms: no document yet.)" },
  { k: "Database", s: "project", d: "Oracle 10g with PL/SQL, forms & reports; MySQL 8.0 synchronisation." },
  { k: "Dashboard / Analytics", s: "stated", d: "CV lists data analytics, Excel/Google Sheets, Grafana/ELK; no dashboard project document yet." }
];
window.DIAGRAM_INTEGRATION = [
  { k: "Mechanical", s: "pending", d: "No mechanical engineering document uploaded yet." },
  { k: "Electrical controls", s: "project", d: "Power systems: 6 kVA UPS with 7 h backup (CV). Electrical-safety standards in technician roles." },
  { k: "PLC / Automation", s: "trained", d: "PLC training (RealPars) and Danfoss Turbocor controls training." },
  { k: "Networking", s: "project", d: "Multi-branch IKEv2 IPsec network." },
  { k: "Software", s: "project", d: "C#, ASP.NET, Windows CE applications; APIs." },
  { k: "Database", s: "project", d: "Oracle 10g / MySQL 8.0." },
  { k: "IoT", s: "pending", d: "No IoT document uploaded yet." }
];

/* Document vault. Only access:"public" items are ever linked. */
window.VAULT = [
  { cat: "Certificates", access: "public", note: "25 entries (17 with original PDFs) — see Certifications." },
  { cat: "CV", access: "public", note: "Generated from the central data (no DOB, address or phone)." },
  { cat: "Degrees & transcripts", access: "restricted", note: "Shared on request after verification." },
  { cat: "Experience letters", access: "restricted", note: "Shared on request after verification." },
  { cat: "Training records", access: "private", note: "Available to the owner only." },
  { cat: "Project reports & drawings", access: "restricted", note: "May contain client-confidential information." },
  { cat: "Identity documents (CNIC / passport)", access: "private", note: "Never published." }
];

