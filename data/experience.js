/* CAREER — single source for the Experience page and every CV version.
   Every line is taken from the CV; wording is condensed, nothing is added.
   tags (CV variants): it = IT/infrastructure · dev = software · auto = device/automation integration · eng = electrical/hardware/power · mgmt = management */
(function () {
  var r = function (l, t, tags) { return { l: l, t: t, tags: tags.split(",") }; };
  window.EXPERIENCE = [
    {
      id: "bigbuy", start: "2021-06", end: "", role: "IT Head", company: "The Big Buy Super Market", place: "",
      focus: "Leads IT for a multi-branch supermarket: infrastructure, Oracle ERP, e-commerce integration and in-store devices.",
      responsibilities: [
        r("Infrastructure rollout", "Deployed POS, networking, Active Directory, firewall and Oracle ERP modules (inventory, supply chain, purchasing, accounts, HR) for the 2nd, 3rd and 4th branches.", "it"),
        r("Secure networking", "Connected all branches with IKEv2 IPsec, upgraded servers and added a redundancy cluster at the first branch.", "it"),
        r("Database integration", "Connected Oracle 10g to MySQL 8.0 through the WooCommerce API for automatic price and stock updates.", "it,dev,auto"),
        r("Application development", "Built C# and ASP.NET applications for Windows CE handheld barcode readers, including a price checker on Zebra MK3100 devices.", "dev,auto"),
        r("ERP customisation", "Modified Oracle PL/SQL queries, forms and reports to business requirements.", "dev,it"),
        r("Device integration", "Integrated ZKT turnstiles (attendance and break time) and DIGI SM100 scales with Oracle ERP.", "auto,eng,it"),
        r("Power systems", "Installed 6 kVA line-interactive UPS and replaced online APC SURT6KW units with long-backup line-interactive systems.", "eng,it"),
        r("Team leadership", "Team leader for IT-related products such as thermal rolls, barcode printing and shelf tags.", "mgmt")
      ],
      contributions: [
        "Saved over **70K PKR per month** by removing unnecessary ISP connections.",
        "Delivered **7 hours of server backup** on the 6 kVA UPS system.",
        "Automated daily price changes (DIGI scales) and e-commerce price and stock updates.",
        "Ran the head office as master network branch, serving data to remote sales at the PAF Sasta Bazar exhibition."
      ],
      tech: ["Oracle ERP", "Oracle 10g", "PL/SQL", "MySQL 8.0", "WooCommerce API", "IKEv2 IPsec", "Active Directory", "C#", "ASP.NET", "Windows CE 6.5", "Zebra MK3100", "ZKTeco", "DIGI SM100"],
      projects: ["oracle-woo", "branch-network", "handheld-apps", "turnstile-hr", "digi-scale", "power-isp"]
    },
    {
      id: "inetwork", start: "2018-04", end: "2021-06", role: "Full Stack Developer, Cloud Solutions and Project Manager", company: "iNetworkSolution (sole proprietorship)", place: "",
      focus: "Ran an independent IT consultancy delivering remote services, training and technology solutions to clients.",
      responsibilities: [
        r("Client delivery", "Provided remote services and training and maintained long-term client relationships.", "mgmt,it"),
        r("Partner ecosystem", "Worked with Microsoft Gold, Cisco Gold, MikroTik and AWS partner programs.", "it"),
        r("Business management", "Set business objectives and strategy and allocated capital to priorities.", "mgmt"),
        r("Lead generation", "Produced promotional content and maintained Fiverr, Upwork and LinkedIn profiles.", "mgmt")
      ],
      contributions: ["Delivered client projects to agreed deadlines."],
      tech: ["Microsoft", "Cisco", "MikroTik", "AWS"], projects: []
    },
    {
      id: "aqmar", start: "2012-10", end: "2018-04", role: "IT Manager", company: "Al Aqmar IT Solution and Services", place: "Buraidah, Saudi Arabia",
      focus: "Managed delivery of IT infrastructure projects for hotels, hospitals, manufacturers and other clients across Saudi Arabia.",
      responsibilities: [
        r("Project delivery", "Initiated and managed 45 IT infrastructure projects across hospitality, healthcare, manufacturing, education, energy and telecom.", "it,mgmt"),
        r("Infrastructure", "Deployed cabling, servers, routers, switches and firewalls, and kept software and firewalls updated to prevent intrusion.", "it,eng"),
        r("Enterprise systems", "Deployed ERP (accounts, HR, manufacturing, inventory, warehousing) and websites connected to ERP databases.", "it,dev"),
        r("Integration", "Integrated hotel front-desk systems with booking channel managers through APIs.", "dev"),
        r("Telephony and IPTV", "Deployed Panasonic, Siemens, Alcatel-Lucent, Avaya and Cisco IP telephony, and installed IPTV middleware, infrastructure, Linux and Android applications.", "it,auto"),
        r("Application development", "Developed native and cross-platform applications.", "dev"),
        r("Stakeholder reporting", "Reported progress, resources and budget to stakeholders and recorded lessons learned for faster delivery.", "mgmt")
      ],
      contributions: ["Completed **45 IT infrastructure projects** across Saudi Arabia.", "Increased company sales by **30%**."],
      tech: ["ERP", "Cisco", "Firewalls", "IP telephony", "IPTV middleware", "Android", "Linux"], projects: ["saudi-infrastructure"]
    },
    {
      id: "daralzeer", start: "2011-03", end: "2012-09", role: "IT Technician", company: "Dar Al Zeer IT Solution", place: "Buraidah, Saudi Arabia",
      focus: "First-line hardware, software and backup support for client systems.",
      responsibilities: [
        r("Installation and support", "Installed and configured hardware and software; diagnosed and repaired hardware and software faults.", "it,eng"),
        r("System maintenance", "Upgraded systems, installed antivirus and tested new software and hardware.", "it"),
        r("Operations", "Ran daily backups, applied electrical safety standards and maintained technical documentation.", "it,eng")
      ],
      contributions: [], tech: [], projects: []
    },
    {
      id: "almada", start: "2010-08", end: "2011-02", role: "IT Technician", company: "Al Mada IT Solution and Services", place: "Jeddah, Saudi Arabia",
      focus: "Installed IT equipment for clients and supported sales.",
      responsibilities: [
        r("Installation", "Installed servers, routers, access points and computers.", "it,eng"),
        r("Hardware repair", "Repaired hardware, including SMD and capacitor replacement by soldering.", "eng"),
        r("Customer relations", "Promoted products and services, generated leads and coordinated with the sales team.", "mgmt")
      ],
      contributions: [], tech: [], projects: []
    }
  ];

  window.SKILLS = {
    "DevOps & Cloud": ["DevOps", "AWS administration & static-IP routing", "Google Cloud administration", "CI/CD: Jenkins, GitLab CI, CircleCI, Travis CI", "Docker", "Kubernetes", "Prometheus", "Grafana", "ELK Stack", "Linux/Unix command line", "Apache server"],
    "Development": ["React", "React Native", "Ionic", "Vue.js", "JavaScript", "Node.js", "ASP.NET", "C#", "Python", "MERN & MEAN", "GraphQL", "APIs & microservices", "Visual Studio 2003–2013", "Basic ABAP (SAP S/4HANA)"],
    "Data & ERP": ["Oracle PL/SQL", "Oracle Forms & Reports", "SQL procedures, queries & views", "Data integration & pipelines", "Apache Airflow", "Data analytics", "Excel & Google Sheets", "WooCommerce tables & structures", "Shopify & WordPress"],
    "Infrastructure": ["Windows Server / Active Directory", "Cisco switches & routers", "MikroTik administration", "IKEv2 IPsec VPN", "Firewalls", "IP telephony", "IPTV"],
    "Management & Creative": ["PMP", "Agile", "Oracle Primavera P6", "Adobe Photoshop", "Adobe Premiere", "Adobe After Effects"]
  };
})();
