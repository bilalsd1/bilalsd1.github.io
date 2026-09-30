/* EXPERIENCE: from the CV only. Each point has tags used by the CV variants:
   it = IT/infrastructure · dev = software · auto = device/automation integration
   eng = electrical/hardware/power · mgmt = management/business */
(function () {
  var p = function (t, tags) { return { t: t, tags: tags.split(",") }; };
  window.EXPERIENCE = [
    {
      when: "06.2021 — Present", role: "IT Head", company: "The Big Buy Super Market", place: "Karachi, Pakistan (CV: location not stated)",
      tech: ["Oracle ERP", "Oracle 10g", "PL/SQL", "MySQL 8.0", "WooCommerce API", "IKEv2 IPsec", "Active Directory", "C#", "ASP.NET", "Windows CE 6.5", "Zebra MK3100", "ZKTeco", "DIGI SM100", "UPS / APC"],
      achievements: ["Saved over 70K PKR per month by removing unnecessary ISP connections", "Delivered 7 hours of server backup on a 6 kVA line-interactive UPS"],
      projects: ["oracle-woo", "ikev2-network", "handheld-apps", "turnstile-hr", "digi-scale", "power-isp"],
      points: [
        p("Deployed and inaugurated IT infrastructure for the 2nd, 3rd and 4th branches: POS system, networking, Active Directory server, firewall, Oracle ERP, inventory, supply chain, purchasing & receiving goods, accounts, human resources and an integrated e-commerce website.", "it"),
        p("Connected the Oracle 10g database with MySQL 8.0 using the WooCommerce API for automatic price and stock updates.", "it,dev,auto"),
        p("Deployed IKEv2 IPsec network connections between all branches.", "it"),
        p("Upgraded servers and network topology, adding a redundancy cluster for the first branch.", "it"),
        p("Removed unnecessary ISP connections, saving over 70K PKR monthly.", "it,mgmt"),
        p("Developed C# and ASP.NET Windows and web applications for Windows CE mobile devices and handheld barcode readers (HHT).", "dev,auto"),
        p("Developed a price-checker application in C# on Windows CE 6.5 (Zebra MK3100) with Oracle 10g.", "dev,auto"),
        p("Wrote Oracle PL/SQL queries and modified Oracle forms and reports as required.", "dev,it"),
        p("Installed line-interactive pure sine wave UPS for the 6 kVA server load, giving 7 hours of backup on tubular batteries; replaced online APC SURT6KW units with long-backup line-interactive systems for every computer and IoT device.", "eng,it"),
        p("Implemented HR module policies for check-in/check-out and rosters; installed ZKT turnstile gates to monitor employee break time, integrated with Oracle ERP, with automatic attendance data pulling.", "auto,eng,it"),
        p("Connected DIGI SM100 scales to the Oracle database for automatic daily price changes.", "auto,it"),
        p("Team leader for IT-related products such as thermal rolls, barcode printing and shelf tags.", "mgmt"),
        p("Ran the head office as the master network branch, serving data to remote sales at the PAF Sasta Bazar exhibition.", "it")
      ]
    },
    {
      when: "04.2018 — 06.2021 (3 yrs 8 mos)", role: "Full Stack Developer / Cloud Solutions / Project Manager", company: "iNetworkSolution (sole proprietorship)", place: "",
      tech: ["Microsoft", "Cisco", "MikroTik", "AWS"], achievements: [], projects: [],
      points: [
        p("Set business strategy, led the business and allocated capital to priorities.", "mgmt"),
        p("Built and maintained long-term client relationships; provided remote services and training to clients.", "mgmt,it"),
        p("Worked with Microsoft Gold Partner, Cisco Gold Partner, MikroTik and AWS partner programs.", "it"),
        p("Designed paid promotional content to generate leads for products and services.", "mgmt"),
        p("Took on client challenges and delivered to project deadlines; kept Fiverr, Upwork, LinkedIn and Facebook accounts active.", "mgmt")
      ]
    },
    {
      when: "10.2012 — 04.2018 (6 yrs 7 mos)", role: "IT Manager", company: "Al Aqmar IT Solution and Services", place: "Buraidah, Saudi Arabia",
      tech: ["ERP", "IPTV middleware", "IP telephony", "Cisco", "Firewalls", "Android", "Linux"],
      achievements: ["Increased company sales by 30%", "Initiated and managed 45 successful IT infrastructure projects across Saudi Arabia (hotels, hospitals, manufacturing, education, energy, telecom)"],
      projects: ["hospitality-it"],
      points: [
        p("Increased company sales by 30% through strong customer relationships.", "mgmt"),
        p("Initiated and managed 45 successful IT infrastructure projects across Saudi Arabia for hotels, hospitals, manufacturing, education, energy and telecommunications.", "it,mgmt"),
        p("Deployed ERP (accounts, HR, manufacturing, inventory and warehousing); developed websites connected to ERP databases.", "it,dev"),
        p("Developed native and cross-platform apps; integrated front-desk systems with booking channel managers via APIs.", "dev"),
        p("Deployed IT infrastructure: cabling, servers, routers, switches and firewalls; secured and updated software and firewalls to prevent intrusions.", "it,eng"),
        p("Deployed IP telephony (Panasonic, Siemens, Alcatel-Lucent, Avaya Oceano, Cisco) and installed IPTV middleware, infrastructure, Linux and Android applications.", "it,auto"),
        p("Kept stakeholders updated on progress, resources and budget; collected lessons learned for faster future delivery; sold and marketed company products and services.", "mgmt")
      ]
    },
    {
      when: "03.2011 — 09.2012", role: "IT Technician", company: "Dar Al Zeer IT Solution", place: "Buraidah, Saudi Arabia",
      tech: [], achievements: [], projects: [],
      points: [
        p("Installed and configured hardware and software; troubleshot and repaired hardware and software issues.", "it,eng"),
        p("Upgraded systems for software compatibility; installed and upgraded antivirus; tested new software and hardware.", "it"),
        p("Ran daily backups, ensured electrical safety standards and maintained technical documentation.", "it,eng")
      ]
    },
    {
      when: "08.2010 — 02.2011", role: "IT Technician", company: "Al Mada IT Solution and Services", place: "Jeddah, Saudi Arabia",
      tech: [], achievements: [], projects: [],
      points: [
        p("Installed servers, routers, access points and computers; hardware repair including SMD and capacitor replacement by soldering.", "it,eng"),
        p("Promoted and sold products and services, built customer relationships and generated leads through cold calling; coordinated sales efforts with the team.", "mgmt")
      ]
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
