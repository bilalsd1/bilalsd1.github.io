/* TECHNOLOGY DATABASE — every entry is backed by the CV, a project record or a certificate.
   m   : words used to find the technology inside roles/projects (whole-word, case-insensitive)
   lvl : project (used in delivered work) | trained (certificate/course) | stated (listed on CV, no project record)
   rel : related technology ids                                                                     */
window.TECH_DB = [
  { id: "oracle", n: "Oracle", cat: "Database", m: ["Oracle"], lvl: "project", ev: "CV: IT Head (Oracle 10g, Oracle ERP)", cap: ["Oracle 10g database", "Oracle PL/SQL queries, procedures and views", "Oracle Forms and Reports", "Database integration with MySQL"], rel: ["plsql", "mysql", "erp", "aspnet"] },
  { id: "plsql", n: "PL/SQL", cat: "Database", m: ["PL/SQL"], lvl: "project", ev: "CV: IT Head", cap: ["Queries and report logic", "Forms and reports modification"], rel: ["oracle", "sql"] },
  { id: "mysql", n: "MySQL", cat: "Database", m: ["MySQL"], lvl: "project", ev: "CV: IT Head (MySQL 8.0)", cap: ["MySQL 8.0 for the e-commerce store", "Synchronisation with Oracle through the WooCommerce API"], rel: ["oracle", "woo", "sql"] },
  { id: "sql", n: "SQL", cat: "Database", m: ["SQL"], lvl: "stated", ev: "CV skills: SQL procedures, queries and views", cap: ["Procedures, queries and views", "WooCommerce table structures"], rel: ["oracle", "mysql", "plsql"] },
  { id: "airflow", n: "Data integration and pipelines", cat: "Database", m: ["Airflow", "pipeline", "pipelines", "data integration"], lvl: "stated", ev: "CV skills: Apache Airflow, data integration, data pipelines", cap: ["Apache Airflow", "Data integration", "Data pipelines", "Data analytics"], rel: ["python", "oracle"] },
  { id: "erp", n: "ERP systems", cat: "Enterprise", m: ["ERP"], lvl: "project", ev: "CV: IT Head, IT Manager", cap: ["Accounts, HR, inventory, purchasing, supply chain", "Manufacturing and warehousing modules", "Websites connected to ERP databases"], rel: ["oracle", "pos", "woo"] },
  { id: "pos", n: "POS systems", cat: "Enterprise", m: ["POS"], lvl: "project", ev: "CV: IT Head", cap: ["Branch POS deployment"], rel: ["erp", "oracle"] },
  { id: "woo", n: "WooCommerce and e-commerce", cat: "Enterprise", m: ["WooCommerce", "e-commerce", "Shopify"], lvl: "project", ev: "CV: IT Head", cap: ["Automatic price and stock update through API", "E-commerce integrated with the ERP", "Shopify and WordPress (CV skills)"], rel: ["mysql", "oracle", "api"] },
  { id: "zkt", n: "ZKTeco turnstile", cat: "Automation", m: ["ZKT", "ZKTeco"], lvl: "project", ev: "CV: IT Head", cap: ["Employee break-time monitoring", "Automatic attendance data pulling"], rel: ["erp", "oracle"] },
  { id: "digi", n: "DIGI SM100 scale", cat: "Automation", m: ["DIGI"], lvl: "project", ev: "CV: IT Head", cap: ["Connection to the Oracle database", "Automatic daily price change"], rel: ["oracle"] },
  { id: "siemensplc", n: "Siemens PLC", cat: "Automation", m: ["Siemens PLC"], lvl: "trained", ev: "RealPars: Siemens PLC Basics (12 Oct 2025)", cap: ["PLC programming and configuration (introductory)"], rel: ["plc"] },
  { id: "plc", n: "PLC programming", cat: "Automation", m: ["PLC"], lvl: "trained", ev: "RealPars: PLC Programming Made Easy, Level 1 (12 Oct 2025)", cap: ["PLC programming fundamentals, step by step"], rel: ["siemensplc", "turbocor"] },
  { id: "turbocor", n: "Danfoss Turbocor", cat: "HVAC", m: ["Turbocor"], lvl: "trained", ev: "Danfoss Learning: TT & TG training program and assessment (28 Aug 2025)", cap: ["Compressor operation: start-up and normal operation", "Motor and electronics cooling", "Compressor interface and communication", "Product capacity and operating range", "Safety"], rel: ["refrig", "smt", "turbotool", "plc"] },
  { id: "smt", n: "Danfoss Service Monitoring Tool", cat: "HVAC", m: ["Service Monitoring Tool", "SMT"], lvl: "trained", ev: "Danfoss Learning: Tools You Can Use 2 (25 Mar 2025)", cap: ["Service Monitoring Tool software and basic functions"], rel: ["turbocor", "turbotool"] },
  { id: "turbotool", n: "TurboTool®", cat: "HVAC", m: ["TurboTool"], lvl: "trained", ev: "Danfoss Learning: Tools You Can Use 3 (25 Mar 2025)", cap: ["TurboTool app and basic use"], rel: ["turbocor", "smt"] },
  { id: "refrig", n: "Refrigeration and compressors", cat: "HVAC", m: ["compressor", "compressors", "refrigeration"], lvl: "trained", ev: "Danfoss Learning: Basic Compressors, Centrifugal Compression Principles", cap: ["Compressor types and their role in the refrigeration cycle", "Centrifugal compression principles"], rel: ["turbocor"] },
  { id: "csharp", n: "C#", cat: "Programming", m: ["C#"], lvl: "project", ev: "CV: IT Head", cap: ["Windows and handheld applications", "Price-checker application"], rel: ["aspnet", "wince", "oracle"] },
  { id: "aspnet", n: "ASP.NET", cat: "Programming", m: ["ASP.NET"], lvl: "project", ev: "CV: IT Head", cap: ["Web and Windows applications", "Database-connected applications"], rel: ["csharp", "oracle"] },
  { id: "wince", n: "Windows CE and Zebra handhelds", cat: "Programming", m: ["Windows CE", "Zebra"], lvl: "project", ev: "CV: IT Head (Windows CE 6.5, Zebra MK3100)", cap: ["Handheld forms and reports", "Barcode reader applications"], rel: ["csharp", "oracle"] },
  { id: "python", n: "Python", cat: "Programming", m: ["Python"], lvl: "stated", ev: "CV headline and skills", cap: ["Scripting and automation"], rel: ["airflow", "api"] },
  { id: "web", n: "JavaScript and web frameworks", cat: "Programming", m: ["React", "Node", "JavaScript", "Vue", "Ionic", "GraphQL"], lvl: "stated", ev: "CV skills: React, React Native, Ionic, Vue.js, Node.js, MERN/MEAN, GraphQL", cap: ["React, React Native, Ionic, Vue.js", "Node.js", "MERN and MEAN stacks", "GraphQL"], rel: ["api"] },
  { id: "api", n: "APIs and microservices", cat: "Programming", m: ["API", "APIs", "microservices"], lvl: "project", ev: "CV: WooCommerce API, booking-channel APIs", cap: ["WooCommerce API for price and stock updates", "Front-desk to booking-channel integration"], rel: ["woo", "web"] },
  { id: "aws", n: "AWS", cat: "Cloud", m: ["AWS"], lvl: "stated", ev: "CV skills: AWS administration, static-IP routing; course completed (exam not taken)", cap: ["Administration", "Networking and routing with static IPs"], rel: ["gcp", "docker"] },
  { id: "gcp", n: "Google Cloud", cat: "Cloud", m: ["Google Cloud"], lvl: "stated", ev: "CV skills: Google Cloud administration, networking and routing", cap: ["Administration", "Networking and routing"], rel: ["aws"] },
  { id: "cicd", n: "CI/CD", cat: "DevOps", m: ["CI/CD", "Jenkins", "GitLab", "CircleCI", "Travis"], lvl: "stated", ev: "CV skills: Jenkins, GitLab CI, CircleCI, Travis CI", cap: ["Jenkins", "GitLab CI", "CircleCI", "Travis CI"], rel: ["docker", "k8s"] },
  { id: "docker", n: "Docker", cat: "DevOps", m: ["Docker"], lvl: "stated", ev: "CV skills", cap: ["Containers"], rel: ["k8s", "cicd"] },
  { id: "k8s", n: "Kubernetes", cat: "DevOps", m: ["Kubernetes"], lvl: "stated", ev: "CV skills", cap: ["Container orchestration"], rel: ["docker", "cicd"] },
  { id: "monitoring", n: "Prometheus, Grafana and ELK", cat: "DevOps", m: ["Prometheus", "Grafana", "ELK"], lvl: "stated", ev: "CV skills", cap: ["Metrics and dashboards", "Log analysis (Elasticsearch, Logstash, Kibana)"], rel: ["docker", "k8s"] },
  { id: "cisco", n: "Cisco networking", cat: "Networking", m: ["Cisco"], lvl: "trained", ev: "Cisco Networking Academy: CCNA Introduction to Networks (10 Jun 2026)", cap: ["Switch and router configuration", "IPv4 and IPv6 addressing", "Small-network security and troubleshooting"], rel: ["mikrotik", "ipsec"] },
  { id: "mikrotik", n: "MikroTik", cat: "Networking", m: ["MikroTik"], lvl: "stated", ev: "CV skills: MikroTik administration", cap: ["Administration"], rel: ["cisco", "ipsec"] },
  { id: "ipsec", n: "IKEv2 IPsec VPN", cat: "Networking", m: ["IKEv2", "IPsec"], lvl: "project", ev: "CV: IT Head", cap: ["Encrypted connectivity between all branches"], rel: ["firewall", "cisco", "ad"] },
  { id: "firewall", n: "Firewalls and network security", cat: "Networking", m: ["firewall", "firewalls"], lvl: "project", ev: "CV: IT Head, IT Manager", cap: ["Firewall deployment", "Software and firewall updating"], rel: ["ipsec", "cisco"] },
  { id: "voip", n: "IP telephony", cat: "Networking", m: ["telephony"], lvl: "project", ev: "CV: IT Manager (Panasonic, Siemens, Alcatel-Lucent, Avaya, Cisco)", cap: ["Multi-vendor IP telephone deployment"], rel: ["cisco"] },
  { id: "iptv", n: "IPTV", cat: "Networking", m: ["IPTV", "VOD"], lvl: "project", ev: "CV: IT Manager; PMI project record (2017)", cap: ["Middleware and infrastructure", "Linux and Android applications"], rel: ["linux"] },
  { id: "winserver", n: "Windows Server", cat: "Infrastructure", m: ["Windows Server"], lvl: "stated", ev: "CV skills; MCSA Windows Server 2016 learning path", cap: ["Server administration", "Server upgrades and redundancy cluster (CV)"], rel: ["ad"] },
  { id: "ad", n: "Active Directory", cat: "Infrastructure", m: ["Active Directory"], lvl: "project", ev: "CV: IT Head", cap: ["Directory server deployment for branches"], rel: ["winserver", "ipsec"] },
  { id: "linux", n: "Linux and Unix", cat: "Infrastructure", m: ["Linux", "Unix"], lvl: "stated", ev: "CV skills: command-line administration, Apache server", cap: ["Command-line administration", "Apache server"], rel: ["docker", "iptv"] },
  { id: "ups", n: "UPS and power systems", cat: "Infrastructure", m: ["UPS", "APC"], lvl: "project", ev: "CV: IT Head", cap: ["6 kVA line-interactive pure sine wave UPS", "Tubular battery backup (7 hours)", "Endpoint UPS for computers and IoT devices"], rel: [] },
  { id: "wifi", n: "Wireless networking", cat: "Networking", m: ["wireless", "Wi-Fi", "access point", "access points"], lvl: "project", ev: "PMI project records (2013–2018): wireless network installation and servicing", cap: ["Wireless network installation", "Wireless network configuration, servicing and upgrade", "Access point deployment"], rel: ["p2p", "lb", "netdev"] },
  { id: "p2p", n: "P2P wireless links", cat: "Networking", m: ["P2P", "PowerBeam"], lvl: "project", ev: "PMI project records (2015–2017): P2P links up to 10 km, PowerBeam AC", cap: ["Point-to-point wireless links", "PowerBeam AC 620", "Combining DSL lines over a P2P link"], rel: ["wifi", "lb", "dsl"] },
  { id: "lb", n: "Load balancing", cat: "Networking", m: ["load balancing", "load-balancing"], lvl: "project", ev: "PMI project records (2014–2017)", cap: ["Balancing traffic across routers and DSL lines", "QoS"], rel: ["wifi", "p2p", "netdev"] },
  { id: "dsl", n: "DSL / xDSL internet links", cat: "Networking", m: ["DSL", "xDSL"], lvl: "project", ev: "PMI project records (2016)", cap: ["Combining multiple DSL modems"], rel: ["p2p", "lb"] },
  { id: "netdev", n: "Routers and switches", cat: "Networking", m: ["router", "routers", "switch", "switches", "switcher"], lvl: "project", ev: "PMI project records (2014–2018)", cap: ["Router and switch configuration and replacement", "24-port gigabit switches"], rel: ["wifi", "lb", "cisco"] },
  { id: "cabling", n: "Structured cabling", cat: "Infrastructure", m: ["cabling", "Cat6", "Cat7e"], lvl: "project", ev: "PMI project records (2013–2018)", cap: ["Cat6 and DSL cabling", "Cabinets", "Re-cabling"], rel: ["wifi", "cctv"] },
  { id: "cctv", n: "CCTV and DVR systems", cat: "Security", m: ["CCTV", "DVR"], lvl: "project", ev: "PMI project records (2014–2017): 7 CCTV installation, upgrade and servicing projects", cap: ["CCTV installation, 8 to 48 cameras", "HD and 2 MP camera upgrades", "DVR and remote viewing"], rel: ["cabling", "access"] },
  { id: "access", n: "Biometric access control and time attendance", cat: "Security", m: ["biometric", "access control", "time attendance"], lvl: "project", ev: "PMI project records (2015–2017)", cap: ["Biometric access control installation", "Time attendance"], rel: ["cctv", "zkt"] },
  { id: "catv", n: "Cable TV and satellite distribution", cat: "Infrastructure", m: ["cable TV", "satellite", "Nilesat", "Arabsat", "STB", "set-top boxes"], lvl: "project", ev: "PMI project records (2013–2018)", cap: ["Analog and digital cable TV systems, 16 to 60 channels", "Nilesat / Arabsat satellite reception", "Set-top boxes"], rel: ["iptv"] },
  { id: "pbx", n: "PBX and telephone systems", cat: "Networking", m: ["PBX", "telephone", "telephones"], lvl: "project", ev: "PMI project records (2013); CV: Panasonic, Siemens, Alcatel-Lucent, Avaya IP telephony", cap: ["Telephone PBX installation (Panasonic)", "Voice recording and extensions"], rel: ["voip"] },
  { id: "webseo", n: "Website SEO", cat: "Programming", m: ["SEO"], lvl: "project", ev: "PMI project record (2016)", cap: ["Search visibility, tagging and keywords", "Social and map listings"], rel: ["web"] },
  { id: "virt", n: "Virtualization", cat: "Infrastructure", m: ["virtualization"], lvl: "stated", ev: "Listed in the CV profile headline (no project detail yet)", cap: ["Listed as a capability"], rel: ["winserver", "linux"] }
];
/* Display order and grouping used by Technology Explorer and the Advanced IT view */
window.TECH_CATS = ["Automation", "HVAC", "Programming", "Database", "Cloud", "DevOps", "Networking", "Infrastructure", "Security", "Enterprise"];
window.IT_DOMAINS = [
  { k: "Software Engineering", ids: ["csharp", "aspnet", "wince", "web", "python"] },
  { k: "Data and Database Engineering", ids: ["oracle", "plsql", "mysql", "sql", "airflow"] },
  { k: "APIs and Integration", ids: ["api", "woo", "zkt", "digi"] },
  { k: "Cloud", ids: ["aws", "gcp"] },
  { k: "DevOps", ids: ["cicd", "docker", "k8s", "monitoring"] },
  { k: "Networking and Security", ids: ["cisco", "mikrotik", "ipsec", "firewall", "voip", "iptv"] },
  { k: "Infrastructure and Virtualization", ids: ["winserver", "ad", "linux", "virt", "ups"] },
  { k: "Enterprise Systems", ids: ["erp", "pos", "woo"] },
  { k: "Wireless and Cabling", ids: ["wifi", "p2p", "lb", "dsl", "netdev", "cabling"] },
  { k: "Security and Surveillance", ids: ["cctv", "access"] },
  { k: "Telephony and Media", ids: ["pbx", "catv", "iptv", "voip"] }
];
/* Whole-word matchers, compiled once */
(function () {
  var esc = function (s) { return s.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&'); };
  window.TECH_DB.forEach(function (t) { t.re = new RegExp('(?<![A-Za-z0-9])(?:' + t.m.map(esc).join('|') + ')(?![A-Za-z0-9])', 'i'); });
})();
