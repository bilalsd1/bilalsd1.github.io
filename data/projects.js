/* PROJECTS / CASE STUDIES. Only fields backed by the CV or an uploaded document are filled.
   Empty/absent fields are simply not shown; add them when you provide documents.
   status: "verified" (from CV) | "draft" (in preparation - no documents yet)
   images: [{src, caption}]  drawings: [{src, caption}]  screenshots: [{src, caption}]  (put files in /projects) */
window.PROJECTS = [
  {
    id: "turbocor-retrofit", featured: true, status: "draft", category: "HVAC & Automation",
    title: "Carrier chiller / Danfoss Turbocor retrofit",
    role: "", company: "", year: "",
    scope: ["Mechanical engineering", "HVAC / refrigeration", "Danfoss Turbocor compressor", "EXV", "PLC", "HMI", "Sensors & instrumentation", "Modbus / RS485", "Control logic", "Chilled-water system", "Commissioning"],
    summary: "Integrated retrofit of a Carrier chiller with Danfoss Turbocor compression, combining refrigeration mechanics, instrumentation and PLC/HMI control. Full case study in preparation.",
    verifiedBasis: ["Danfoss Learning: Turbocor TT & TG Compressor Training Program and Assessment (28 Aug 2025)", "Danfoss modules: compressor operation, cooling, interface, safety, SMT and TurboTool®", "RealPars: PLC Programming Made Easy (Level 1); Siemens PLC Basics (12 Oct 2025)"],
    missing: ["Client (only if safe to publish)", "Year and duration", "Your role", "Problem and engineering challenge", "Solution, architecture and control logic", "Equipment models and sensor list", "PLC/HMI screenshots, drawings / P&ID, photos", "Commissioning data, before/after results"]
  },
  {
    id: "oracle-woo", status: "verified", category: "Integration",
    title: "Oracle ⇄ WooCommerce price & stock synchronisation",
    role: "IT Head", company: "The Big Buy Super Market", year: "Employment period 2021 – present",
    solution: "Connected the Oracle 10g ERP database with MySQL 8.0 through the WooCommerce API so that prices and stock update automatically on the e-commerce site.",
    tech: ["Oracle 10g", "MySQL 8.0", "WooCommerce API", "PL/SQL"],
    missing: ["Problem statement", "Architecture diagram", "Sync frequency / results"]
  },
  {
    id: "ikev2-network", status: "verified", category: "IT Infrastructure",
    title: "Multi-branch IKEv2 IPsec network with redundancy cluster",
    role: "IT Head", company: "The Big Buy Super Market", year: "Employment period 2021 – present",
    solution: "Deployed IKEv2 IPsec connectivity between all branches, upgraded servers and network topology, and added a redundancy cluster for the first branch. Head office operates as the master network branch.",
    tech: ["IKEv2 / IPsec", "Firewall", "Windows Server", "Active Directory"],
    missing: ["Topology diagram", "Hardware models", "Uptime / results"]
  },
  {
    id: "handheld-apps", status: "verified", category: "Software",
    title: "Handheld barcode & price-checker applications",
    role: "IT Head · developer", company: "The Big Buy Super Market", year: "Employment period 2021 – present",
    solution: "Developed C# / ASP.NET Windows CE applications for handheld barcode readers, including a price checker on the Zebra MK3100 (Windows CE 6.5) connected to Oracle 10g.",
    tech: ["C#", "ASP.NET", "Windows CE 6.5", "Zebra MK3100", "Oracle 10g"],
    missing: ["Screenshots", "Workflow description"]
  },
  {
    id: "turnstile-hr", status: "verified", category: "Automation",
    title: "Turnstile attendance & break-time tracking",
    role: "IT Head", company: "The Big Buy Super Market", year: "Employment period 2021 – present",
    solution: "Installed ZKT turnstile gates to monitor employee break time, integrated them with Oracle ERP, and automated attendance data pulling. Implemented HR check-in/check-out policies for rosters.",
    tech: ["ZKTeco turnstile", "Oracle ERP (HR)", "PL/SQL"],
    missing: ["Wiring / network diagram", "Photos"]
  },
  {
    id: "digi-scale", status: "verified", category: "Automation",
    title: "DIGI SM100 scale → Oracle automatic price change",
    role: "IT Head", company: "The Big Buy Super Market", year: "Employment period 2021 – present",
    solution: "Connected DIGI SM100 scales to the Oracle database so daily price changes are applied automatically.",
    tech: ["DIGI SM100", "Oracle"],
    missing: ["Interface details", "Photos"]
  },
  {
    id: "power-isp", status: "verified", category: "IT Infrastructure",
    title: "Power resilience & ISP optimisation",
    role: "IT Head", company: "The Big Buy Super Market", year: "Employment period 2021 – present",
    solution: "Installed line-interactive pure sine wave UPS on the 6 kVA server load (7 hours backup on tubular batteries) and replaced online APC SURT6KW units with long-backup line-interactive systems for every computer and IoT device. Removed unnecessary ISP connections.",
    results: ["7 hours backup on the 6 kVA server load", "Over 70K PKR saved monthly on ISP costs"],
    tech: ["6 kVA UPS", "Tubular batteries", "APC SURT6KW"],
    missing: ["Before/after comparison", "Photos"]
  },
  {
    id: "hospitality-it", status: "verified", category: "IT Infrastructure",
    title: "Hospitality & multi-industry IT infrastructure (Saudi Arabia)",
    role: "IT Manager", company: "Al Aqmar IT Solution and Services", year: "2012 – 2018",
    solution: "Delivered 45 IT infrastructure projects for hotels, hospitals, manufacturing, education, energy and telecom: cabling, servers, routers, switches and firewalls; IP telephony; IPTV middleware with Linux and Android apps; ERP; websites connected to ERP databases; front-desk integration with booking channel managers via APIs.",
    results: ["45 successful projects", "30% increase in company sales"],
    tech: ["IPTV middleware", "IP telephony", "ERP", "Firewalls", "Android", "Linux"],
    missing: ["Individual project write-ups (client names only if safe)", "Photos"]
  }
];
