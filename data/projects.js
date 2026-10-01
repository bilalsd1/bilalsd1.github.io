/* PROJECT RECORDS — structured model. One object per project; add records here (see README "Adding projects").
   Layers:  sources[] = SOURCE data (original wording, kept verbatim)  ->  fields below = NORMALIZED + PUBLIC presentation.
   Identity : id, title, start/end (year, "" = ongoing/unknown), startYM/endYM ("YYYY-MM"), dateLabel, company (organisation the project was for),
              location (documented only; city + country, never a street address)
   Role     : careerPosition = job title held at the time | projectRole = role ON the project (Project Manager, Supervisor...). Never mix them.
   Taxonomy : type (specific, e.g. "Network Deployment")  cat (controlled list, see TAXONOMY in app.js)  industry[]
   Purpose  : objective[], need[], challenge[]      Delivery: deliverables[], scope{}, details{}, architecture[], solution[]
   PM data  : pm {initiating, planning, executing, monitoring, closing} = documented activity HOURS (not duration)
   Result   : outcome[] (documented results only, as recorded)   responsibilities[] (as recorded in the source)
   Links    : tech[], skills[], experience[] (career ids), certifications[] (credential ids)
   Quality  : verification = verified | partial | review | duplicate (internal)   status = delivered | draft   kind = "summary" (career-level record, not counted as a project)
   Never put contact names, emails, phone numbers or street addresses in any field. */
window.PROJECTS = [
 {
  "id": "turbocor-retrofit",
  "featured": true,
  "status": "draft",
  "verification": "review",
  "title": "Carrier Chiller Retrofit with Danfoss Turbocor",
  "start": "",
  "end": "",
  "period": "",
  "company": "",
  "location": "",
  "careerPosition": "",
  "projectRole": "",
  "type": "HVAC Retrofit",
  "cat": "HVAC & Refrigeration",
  "category": "HVAC and Automation",
  "disciplines": [
   "HVAC",
   "Automation",
   "PLC"
  ],
  "industry": [],
  "oneLine": "Retrofit of a Carrier chiller with Danfoss Turbocor compression, combining refrigeration equipment, instrumentation and PLC/HMI control.",
  "objective": [],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [],
  "scope": {
   "Mechanical": [
    "Chiller and compressor retrofit",
    "Chilled-water system"
   ],
   "Electrical": [
    "Sensors and instrumentation"
   ],
   "Automation": [
    "PLC and HMI",
    "Control logic",
    "EXV control"
   ],
   "IT": [
    "Modbus / RS485 communication"
   ],
   "Integration": [
    "Equipment-to-controller integration",
    "Commissioning"
   ]
  },
  "details": {},
  "architecture": [
   "Chilled-water system",
   "Carrier chiller",
   "Danfoss Turbocor compressor",
   "EXV",
   "Sensors and instrumentation",
   "PLC",
   "HMI",
   "Modbus / RS485"
  ],
  "solution": [],
  "pm": null,
  "outcome": [],
  "tech": [
   "Danfoss Turbocor",
   "Carrier chiller",
   "PLC",
   "HMI",
   "Modbus / RS485",
   "EXV"
  ],
  "skills": [
   "HVAC",
   "Refrigeration",
   "Compressor technology",
   "Industrial automation",
   "PLC",
   "Instrumentation"
  ],
  "experience": [],
  "certifications": [
   "c02",
   "c03",
   "c04",
   "c05",
   "c06",
   "c07",
   "c08",
   "c09",
   "c10",
   "c11",
   "c12",
   "c13",
   "c14",
   "c15",
   "c16",
   "c17"
  ],
  "evidence": {},
  "basis": [
   "Danfoss Turbocor TT & TG Compressor Training Program and Assessment (Aug 2025)",
   "Danfoss modules: compressor operation, cooling, interface, safety, SMT and TurboTool®",
   "RealPars: PLC Programming Made Easy (Level 1) and Siemens PLC Basics (Oct 2025)"
  ],
  "sources": [
   {
    "type": "Owner statement",
    "ref": "Project scope listed by the owner; no project documents supplied",
    "original": "Carrier chiller / Danfoss Turbocor retrofit: Mechanical Engineering, HVAC/Refrigeration, Danfoss Turbocor, Compressor technology, EXV, PLC, HMI, Sensors, Instrumentation, Modbus/RS485, Control logic, Chilled-water system, Commissioning"
   },
   {
    "type": "Certificates",
    "ref": "Danfoss Learning (14 certificates, 2025); RealPars (2 certificates, 2025)",
    "original": ""
   }
  ],
  "missing": [
   "Client (if safe to publish)",
   "Year and duration",
   "Your role",
   "Objective, challenge and solution",
   "Equipment models and sensor list",
   "PLC/HMI screenshots, drawings / P&ID, photos",
   "Commissioning data and results"
  ]
 },
 {
  "id": "oracle-woo",
  "featured": true,
  "status": "verified",
  "verification": "verified",
  "title": "Oracle ERP to E-Commerce Price and Stock Synchronisation",
  "start": "2021",
  "end": "",
  "period": "2021 – Present",
  "company": "The Big Buy Super Market",
  "location": "",
  "careerPosition": "IT Head",
  "projectRole": "",
  "type": "Database Integration",
  "cat": "Database",
  "category": "Data and Enterprise Systems",
  "disciplines": [
   "Database",
   "E-commerce",
   "ERP",
   "Systems Integration"
  ],
  "industry": [
   "Retail"
  ],
  "oneLine": "Automatic price and stock updates from the Oracle ERP to the company e-commerce store.",
  "objective": [
   "Keep e-commerce prices and stock aligned with the Oracle ERP automatically."
  ],
  "need": [],
  "challenge": [
   "Two database platforms to connect: Oracle 10g (ERP) and MySQL 8.0 (WooCommerce)."
  ],
  "myRole": [
   "Connected the Oracle 10g database with the MySQL 8.0 WooCommerce database.",
   "Implemented the update process through the WooCommerce API."
  ],
  "deliverables": [],
  "scope": {
   "Software": [
    "API-based update process"
   ],
   "Integration": [
    "Oracle 10g ⇄ MySQL 8.0 / WooCommerce"
   ]
  },
  "details": {},
  "solution": [
   "API-based synchronisation between the ERP and the online store.",
   "Prices and stock update without manual entry."
  ],
  "pm": null,
  "outcome": [
   "Automatic price and stock updates on the e-commerce website.",
   "E-commerce site integrated for the 2nd, 3rd and 4th branches."
  ],
  "tech": [
   "Oracle 10g",
   "MySQL 8.0",
   "WooCommerce API",
   "PL/SQL"
  ],
  "skills": [
   "Database integration",
   "API integration",
   "E-commerce integration"
  ],
  "experience": [
   "bigbuy"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "CV",
    "ref": "CV (Syed Bilal Ali DevOps, Aug 2024) — IT Head, The Big Buy Super Market",
    "original": "Connected Oracle 10G Database with MySQL 8.0 using WooCommerce auto price and stock update using API."
   }
  ],
  "missing": [
   "Architecture diagram",
   "Update frequency and volumes"
  ]
 },
 {
  "id": "branch-network",
  "featured": true,
  "status": "verified",
  "verification": "verified",
  "title": "Secure Multi-Branch Network and Server Resilience",
  "start": "2021",
  "end": "",
  "period": "2021 – Present",
  "company": "The Big Buy Super Market",
  "location": "",
  "careerPosition": "IT Head",
  "projectRole": "",
  "type": "Network Deployment",
  "cat": "Networking",
  "category": "IT Infrastructure",
  "disciplines": [
   "Networking",
   "IT Infrastructure"
  ],
  "industry": [
   "Retail"
  ],
  "oneLine": "Encrypted connectivity between all branches and a redundancy cluster for the first branch.",
  "objective": [
   "Connect all branches securely to the head office.",
   "Improve server availability at the first branch."
  ],
  "need": [],
  "challenge": [],
  "myRole": [
   "Deployed IKEv2 IPsec connections between all branches.",
   "Upgraded servers and network topology.",
   "Added a redundancy cluster for the first branch."
  ],
  "deliverables": [],
  "scope": {
   "IT": [
    "IKEv2 IPsec site-to-site connectivity",
    "Server upgrades and redundancy cluster",
    "Firewall and Active Directory"
   ]
  },
  "details": {},
  "solution": [
   "Head office operates as the master network branch.",
   "Branch data served over encrypted links."
  ],
  "pm": null,
  "outcome": [
   "All branches connected over IKEv2 IPsec.",
   "Head office served remote sales at the PAF Sasta Bazar exhibition."
  ],
  "tech": [
   "IKEv2",
   "IPsec",
   "Firewall",
   "Windows Server",
   "Active Directory"
  ],
  "skills": [
   "Secure networking",
   "Server administration",
   "Redundancy"
  ],
  "experience": [
   "bigbuy"
  ],
  "certifications": [
   "c01"
  ],
  "evidence": {},
  "sources": [
   {
    "type": "CV",
    "ref": "CV (Syed Bilal Ali DevOps, Aug 2024) — IT Head, The Big Buy Super Market",
    "original": "Deployed IKEV2 IPSEC network connection between all the branches. | Upgraded Servers, Network topology adding redundancy cluster for the first branch. | Head office as a Master network branch giving data to its clients as remote sales in PAF Sasta Bazar Exhibition."
   }
  ],
  "missing": [
   "Topology diagram",
   "Hardware models"
  ]
 },
 {
  "id": "handheld-apps",
  "status": "verified",
  "verification": "verified",
  "title": "Handheld Barcode and Price-Checker Applications",
  "start": "2021",
  "end": "",
  "period": "2021 – Present",
  "company": "The Big Buy Super Market",
  "location": "",
  "careerPosition": "IT Head",
  "projectRole": "",
  "type": "Software Development",
  "cat": "Software Engineering",
  "category": "Software and Mobile",
  "disciplines": [
   "Software",
   "Systems Integration"
  ],
  "industry": [
   "Retail"
  ],
  "oneLine": "C# and ASP.NET applications for Windows CE handheld barcode readers connected to Oracle.",
  "objective": [
   "Support store and supply-chain operations with handheld barcode devices linked to the ERP."
  ],
  "need": [],
  "challenge": [],
  "myRole": [
   "Developed C# and ASP.NET applications for Windows CE handhelds.",
   "Developed the price-checker application for Zebra MK3100 (Windows CE 6.5) connected to Oracle 10g."
  ],
  "deliverables": [],
  "scope": {
   "Software": [
    "C# / ASP.NET Windows and web applications",
    "Windows CE 6.5 handheld forms"
   ],
   "Integration": [
    "Handheld to Oracle 10g"
   ]
  },
  "details": {},
  "solution": [
   "Price-checker application connected to Oracle 10g."
  ],
  "pm": null,
  "outcome": [
   "Price-checker application for Zebra MK3100 handhelds, connected to Oracle 10g."
  ],
  "tech": [
   "C#",
   "ASP.NET",
   "Windows CE 6.5",
   "Zebra MK3100",
   "Oracle 10g"
  ],
  "skills": [
   "Application development",
   "Handheld devices",
   "Database connectivity"
  ],
  "experience": [
   "bigbuy"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "CV",
    "ref": "CV (Syed Bilal Ali DevOps, Aug 2024) — IT Head, The Big Buy Super Market",
    "original": "Developing C#, Asp.net windows and web application for windows CE Mobile devices HHT Barcode reader. | Developed price checker application on C# windows CE 6.5 Zebra MK3100 with Oracle 10g."
   }
  ],
  "missing": [
   "Screenshots"
  ]
 },
 {
  "id": "turnstile-hr",
  "status": "verified",
  "verification": "verified",
  "title": "Turnstile Attendance and Break-Time Monitoring",
  "start": "2021",
  "end": "",
  "period": "2021 – Present",
  "company": "The Big Buy Super Market",
  "location": "",
  "careerPosition": "IT Head",
  "projectRole": "",
  "type": "Device Integration",
  "cat": "Systems Integration",
  "category": "Automation and Integration",
  "disciplines": [
   "Automation",
   "ERP",
   "Systems Integration"
  ],
  "industry": [
   "Retail"
  ],
  "oneLine": "ZKT turnstile gates integrated with Oracle ERP to monitor attendance and break time.",
  "objective": [
   "Monitor employee attendance and break time automatically."
  ],
  "need": [],
  "challenge": [],
  "myRole": [
   "Installed the ZKT turnstile gates.",
   "Integrated the gates with Oracle ERP.",
   "Implemented check-in / check-out policies for rosters in the HR module."
  ],
  "deliverables": [],
  "scope": {
   "Electrical": [
    "Turnstile gate installation"
   ],
   "Integration": [
    "Turnstile to Oracle ERP",
    "Automatic attendance data pulling"
   ]
  },
  "details": {},
  "solution": [
   "Turnstile events feed the HR module for rosters and break-time policy."
  ],
  "pm": null,
  "outcome": [
   "Attendance and break time recorded automatically in Oracle ERP."
  ],
  "tech": [
   "ZKTeco turnstile",
   "Oracle ERP (HR)",
   "PL/SQL"
  ],
  "skills": [
   "Device integration",
   "HR systems",
   "Attendance automation"
  ],
  "experience": [
   "bigbuy"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "CV",
    "ref": "CV (Syed Bilal Ali DevOps, Aug 2024) — IT Head, The Big Buy Super Market",
    "original": "Installed the ZKT turnstile gate to monitor the employee brake time integrated it with Oracle ERP. | Auto Attendance Data pulling. | Worked on human resource module implementing policies check in/ check out policies for roaster."
   }
  ],
  "missing": [
   "Wiring / network diagram",
   "Photos"
  ]
 },
 {
  "id": "digi-scale",
  "status": "verified",
  "verification": "verified",
  "title": "DIGI SM100 Scale Integration with Oracle",
  "start": "2021",
  "end": "",
  "period": "2021 – Present",
  "company": "The Big Buy Super Market",
  "location": "",
  "careerPosition": "IT Head",
  "projectRole": "",
  "type": "Device Integration",
  "cat": "Systems Integration",
  "category": "Automation and Integration",
  "disciplines": [
   "Automation",
   "Systems Integration"
  ],
  "industry": [
   "Retail"
  ],
  "oneLine": "Weighing scales connected to the Oracle database for automatic daily price changes.",
  "objective": [
   "Apply daily price changes to weighing scales automatically."
  ],
  "need": [],
  "challenge": [],
  "myRole": [
   "Connected DIGI SM100 scales to the Oracle database."
  ],
  "deliverables": [],
  "scope": {
   "Integration": [
    "Scale to Oracle database"
   ]
  },
  "details": {},
  "solution": [
   "Scale prices are driven from the ERP database."
  ],
  "pm": null,
  "outcome": [
   "Daily price changes applied automatically."
  ],
  "tech": [
   "DIGI SM100",
   "Oracle"
  ],
  "skills": [
   "Device integration",
   "Price automation"
  ],
  "experience": [
   "bigbuy"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "CV",
    "ref": "CV (Syed Bilal Ali DevOps, Aug 2024) — IT Head, The Big Buy Super Market",
    "original": "DIGI Scale Sm100 Connecting it with Oracle database for auto daily price change."
   }
  ],
  "missing": [
   "Interface details",
   "Photos"
  ]
 },
 {
  "id": "power-isp",
  "status": "verified",
  "verification": "verified",
  "title": "Power Resilience and ISP Cost Optimisation",
  "start": "2021",
  "end": "",
  "period": "2021 – Present",
  "company": "The Big Buy Super Market",
  "location": "",
  "careerPosition": "IT Head",
  "projectRole": "",
  "type": "Power and Connectivity Optimisation",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "IT Infrastructure",
   "Electrical"
  ],
  "industry": [
   "Retail"
  ],
  "oneLine": "Longer power backup for servers and endpoints, and lower connectivity cost.",
  "objective": [
   "Keep servers and devices running through power loss.",
   "Reduce unnecessary connectivity cost."
  ],
  "need": [],
  "challenge": [],
  "myRole": [
   "Installed line-interactive pure sine wave UPS for the 6 kVA server load.",
   "Replaced online APC SURT6KW units with long-backup line-interactive UPS for every computer and IoT device.",
   "Removed unnecessary ISP connections."
  ],
  "deliverables": [],
  "scope": {
   "Electrical": [
    "6 kVA line-interactive UPS",
    "Tubular batteries",
    "Endpoint UPS for computers and IoT devices"
   ],
   "IT": [
    "ISP rationalisation"
   ]
  },
  "details": {},
  "solution": [
   "Line-interactive UPS selected for long backup time.",
   "Consolidated ISP connections."
  ],
  "pm": null,
  "outcome": [
   "**7 hours** of backup on the server load.",
   "Over **70K PKR saved per month** on ISP costs."
  ],
  "tech": [
   "6 kVA UPS",
   "Tubular batteries",
   "APC SURT6KW"
  ],
  "skills": [
   "Power systems",
   "UPS design",
   "Cost optimisation"
  ],
  "experience": [
   "bigbuy"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "CV",
    "ref": "CV (Syed Bilal Ali DevOps, Aug 2024) — IT Head, The Big Buy Super Market",
    "original": "Installed Line interactive pure sign wave UPS on 6KVA servers load total for 7 hours backup Tabular Batteries. | Replaced online APC SURT6KW with line interactive systems having long backup for every computer and IoT device. | Removing unnecessary ISP connection to over 70K cost saving monthly."
   }
  ],
  "missing": [
   "Before / after comparison",
   "Photos"
  ]
 },
 {
  "id": "saudi-infrastructure",
  "featured": true,
  "status": "verified",
  "verification": "verified",
  "title": "Enterprise IT Infrastructure Across Saudi Arabia",
  "start": "2012",
  "end": "2018",
  "period": "2012 – 2018",
  "company": "Al Aqmar IT Solution and Services",
  "location": "Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "",
  "type": "Portfolio summary (CV)",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "IT Infrastructure",
   "Networking",
   "ERP",
   "Software",
   "Systems Integration"
  ],
  "industry": [
   "Hospitality",
   "Healthcare",
   "Manufacturing",
   "Education",
   "Energy",
   "Telecommunications"
  ],
  "oneLine": "45 IT infrastructure projects for hotels, hospitals, manufacturing, education, energy and telecom clients.",
  "objective": [
   "Deliver IT infrastructure and business systems for clients in six industries."
  ],
  "need": [],
  "challenge": [],
  "myRole": [
   "Initiated and managed 45 projects.",
   "Reported progress, resources and budget to stakeholders.",
   "Recorded lessons learned to speed up later projects."
  ],
  "deliverables": [],
  "scope": {
   "IT": [
    "Cabling, servers, routers, switches, firewalls",
    "Panasonic, Siemens, Alcatel-Lucent, Avaya and Cisco IP telephony",
    "IPTV middleware, infrastructure, Linux and Android applications"
   ],
   "Software": [
    "ERP: accounts, HR, manufacturing, inventory, warehousing",
    "Websites connected to ERP databases",
    "Native and cross-platform applications"
   ],
   "Integration": [
    "Hotel front desk to booking channel managers via APIs"
   ]
  },
  "details": {},
  "solution": [
   "Cabling, servers, network and security, ERP and application integration delivered per client."
  ],
  "pm": null,
  "outcome": [
   "**45 successful projects** across Saudi Arabia.",
   "Company sales increased by **30%**."
  ],
  "tech": [
   "ERP",
   "Cisco",
   "IP telephony",
   "IPTV",
   "Firewalls",
   "Android",
   "Linux"
  ],
  "skills": [
   "Project management",
   "IT infrastructure",
   "ERP deployment",
   "IP telephony",
   "IPTV",
   "System integration"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "CV",
    "ref": "CV (Syed Bilal Ali DevOps, Aug 2024) — IT Manager, Al Aqmar IT Solution and Services",
    "original": "Initiated and managed proven 45 successful IT infrastructure projects all over Saudi Arabia Including Hotels, Hospitals, Manufacturing, Education, Energy and Telecommunication industries. | Deploying IT Infrastructures cabling, servers, routers, switches and firewall. | Deployed IP Telephones Panasonic, Siemens, Alcatel Lucent, Avaya Oceano and Cisco. | Installed IPTV Middleware, IPTV infrastructure, IPTV Linux and android application. | APIs Integration for front desk with booking channels managers."
   }
  ],
  "missing": [
   "Individual project write-ups (client names only if safe to publish)",
   "Photos"
  ],
  "kind": "summary"
 },
 {
  "id": "pmi-buraidah-security-recruiter-new-16-line-analog-201303",
  "status": "delivered",
  "verification": "verified",
  "title": "Buraidah Security Recruiter: New 16-Line Analog Telephone System and PBX",
  "start": "2013",
  "end": "2013",
  "startYM": "2013-03",
  "endYM": "2013-04",
  "dateLabel": "Mar 2013 – Apr 2013",
  "period": "Mar 2013 – Apr 2013",
  "company": "Buraidah Security Recruiter",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Leader",
  "type": "PBX / Telephony Installation",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "PBX / telephony"
  ],
  "industry": [],
  "oneLine": "Install voice recording and extensions, connect all 16 telephones and return them to service.",
  "objective": [
   "Install voice recording and extensions, connect all 16 telephones and return them to service."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Telephony": [
    "PBX",
    "16 analog telephones",
    "Voice recording and extensions"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 8,
   "planning": 12,
   "executing": 48,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "PBX / telephony"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 1 of 49",
    "original": "Objective: to install voice recording/ Extensions and to connect al 16 telephone and run them again.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Buraidah Security Depart Recruiter installed new 16 analog telephone and PBX",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Management",
    "pmiOrganization": "Buraidah Security Recruiter"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-shagan-hotel-resorts-new-pbx-network-infrastru-201304",
  "status": "delivered",
  "verification": "verified",
  "title": "Shagan Hotel & Resorts: New PBX, Network Infrastructure and 32-Channel Satellite Cable TV",
  "start": "2013",
  "end": "2013",
  "startYM": "2013-04",
  "endYM": "2013-08",
  "dateLabel": "Apr 2013 – Aug 2013",
  "period": "Apr 2013 – Aug 2013",
  "company": "Shagan Hotel & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Leader",
  "type": "Multi-System Installation",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "Wireless networking",
   "CCTV",
   "Cable TV",
   "PBX / telephony",
   "Structured cabling",
   "Website / SEO"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Deploy 16 HD CCTV cameras, a 16-access-point Wi-Fi network and 32-channel cable TV (cabling design and installation), together with the application and website.",
  "objective": [
   "Deploy 16 HD CCTV cameras, a 16-access-point Wi-Fi network and 32-channel cable TV (cabling design and installation), together with the application and website."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Security": [
    "CCTV, 16 HD cameras"
   ],
   "Networking": [
    "Wi-Fi network, 16 access points"
   ],
   "Media": [
    "Cable TV, 32 channels",
    "Satellite distribution"
   ],
   "Infrastructure": [
    "Cabling design and installation"
   ],
   "Telephony": [
    "PBX"
   ],
   "Software": [
    "Application and website"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 64,
   "planning": 36,
   "executing": 180,
   "monitoring": 56,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "CCTV",
   "Cable TV",
   "PBX / telephony",
   "Structured cabling",
   "Website / SEO"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 2 of 49",
    "original": "Objective: To deploy 16 HD CCTV, Wifi Network 16AP, Cable TV 32CH (Install Design Cabling) along with the application and Website.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Shagan Hotel New PBX, Network Infrastructure, 32CH Satellite Cable TV",
    "pmiJobTitle": "Project Leader",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Shagan Hotel & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-radoof-hotel-new-network-infrastructure-with-3-201308",
  "status": "delivered",
  "verification": "verified",
  "title": "Radoof Hotel: New Network Infrastructure with 32-Channel Cable TV and CCTV",
  "start": "2013",
  "end": "2013",
  "startYM": "2013-08",
  "endYM": "2013-11",
  "dateLabel": "Aug 2013 – Nov 2013",
  "period": "Aug 2013 – Nov 2013",
  "company": "Radoor Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Leader",
  "type": "Multi-System Installation",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "Wireless networking",
   "CCTV",
   "Cable TV",
   "Structured cabling"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install 32-channel CCTV, an 18-access-point wireless network and 32-channel cable TV, including cabling, design and installation.",
  "objective": [
   "Install 32-channel CCTV, an 18-access-point wireless network and 32-channel cable TV, including cabling, design and installation."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Security": [
    "CCTV, 32 channels"
   ],
   "Networking": [
    "Wireless network, 18 access points"
   ],
   "Media": [
    "Cable TV, 32 channels"
   ],
   "Infrastructure": [
    "Cabling, design and installation"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 56,
   "planning": 64,
   "executing": 150,
   "monitoring": 24,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "CCTV",
   "Cable TV",
   "Structured cabling"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 3 of 49",
    "original": "Objective: 32Ch CCTV, Wireless Network 18 AP, 32Ch Cable TV ( Cabling, Designing, Installing)Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Radoof Hotel New network infrastructure with 32CH Cable TV And CCTV",
    "pmiJobTitle": "Project Leader/ Administrator",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Radoor Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-al-masa-hotel-network-pbx-and-32-channel-cable-201311",
  "status": "delivered",
  "verification": "verified",
  "title": "Al Masa Hotel: Network, PBX and 32-Channel Cable TV",
  "start": "2013",
  "end": "2014",
  "startYM": "2013-11",
  "endYM": "2014-03",
  "dateLabel": "Nov 2013 – Mar 2014",
  "period": "Nov 2013 – Mar 2014",
  "company": "Al Masa Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Leader",
  "type": "Multi-System Installation",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "Wireless networking",
   "CCTV",
   "Cable TV",
   "PBX / telephony",
   "Panasonic PBX"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install 32-channel TV, 16 Wi-Fi access points, a Panasonic telephone PBX system and 16 CCTV cameras.",
  "objective": [
   "Install 32-channel TV, 16 Wi-Fi access points, a Panasonic telephone PBX system and 16 CCTV cameras."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Media": [
    "Cable TV, 32 channels"
   ],
   "Networking": [
    "Wi-Fi, 16 access points"
   ],
   "Telephony": [
    "Panasonic PBX"
   ],
   "Security": [
    "CCTV, 16 cameras"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 48,
   "executing": 120,
   "monitoring": 24,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "CCTV",
   "Cable TV",
   "PBX / telephony",
   "Panasonic PBX"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 4 of 49",
    "original": "Objective: 32Channel TV, 16 Wifi AP, Panasonic Telephone PBX system, 16 CCTV Camera.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Al Masa Hotel ( Network, PBX, 32CH Cable TV )",
    "pmiJobTitle": "Project Leader",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Al Masa Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-talai-al-qassim-new-wireless-network-18-ap-and-201403",
  "status": "delivered",
  "verification": "verified",
  "title": "Talai Al Qassim: New Wireless Network (18 AP) and 16-Channel CCTV",
  "start": "2014",
  "end": "2014",
  "startYM": "2014-03",
  "endYM": "2014-05",
  "dateLabel": "Mar 2014 – May 2014",
  "period": "Mar 2014 – May 2014",
  "company": "Talai Al Qassim",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Administrator",
  "type": "Multi-System Installation",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "Wireless networking",
   "CCTV"
  ],
  "industry": [],
  "oneLine": "Remove the existing systems and install a new wireless network and CCTV camera system.",
  "objective": [
   "Remove the existing systems and install a new wireless network and CCTV camera system."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network, 18 access points"
   ],
   "Security": [
    "CCTV, 16 channels"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 48,
   "executing": 150,
   "monitoring": 48,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "CCTV"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 5 of 49",
    "original": "Objective: To remove and installed new wireless network & CCTV camera system.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Talai Al Qassim New Network 18 AP, New CCTV Camera 16CH",
    "pmiJobTitle": "Administrator/ Project Leader",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Talai Al Qassim"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-haden-hotel-resorts-new-wireless-network-18-ap-201405",
  "status": "delivered",
  "verification": "verified",
  "title": "Haden Hotel & Resorts: New Wireless Network (18 AP) and Cable TV",
  "start": "2014",
  "end": "2014",
  "startYM": "2014-05",
  "endYM": "2014-08",
  "dateLabel": "May 2014 – Aug 2014",
  "period": "May 2014 – Aug 2014",
  "company": "Haden Hotel & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Administrator",
  "type": "Multi-System Installation",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "Wireless networking",
   "CCTV",
   "Cable TV"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install a 16-channel analog cable TV system, a new wireless network and a 16-channel CCTV camera system.",
  "objective": [
   "Install a 16-channel analog cable TV system, a new wireless network and a 16-channel CCTV camera system."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Media": [
    "Analog cable TV, 16 channels"
   ],
   "Networking": [
    "Wireless network, 18 access points"
   ],
   "Security": [
    "CCTV, 16 channels"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 56,
   "planning": 48,
   "executing": 100,
   "monitoring": 24,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "CCTV",
   "Cable TV"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 6 of 49",
    "original": "Objective: 16 Channel analog cable tv, new wireless network, 16 channel CCTV camera system.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Haden New Wireless Network 18 AP, Cable TV",
    "pmiJobTitle": "Administrator/ Project Leader",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Haden Hotel & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-restaurant-tie-8-camera-hd-cctv-installation-c-201408",
  "status": "delivered",
  "verification": "verified",
  "title": "Restaurant TIE: 8-Camera HD CCTV Installation, Cabling, Network and Cabinet",
  "start": "2014",
  "end": "2014",
  "startYM": "2014-08",
  "endYM": "2014-09",
  "dateLabel": "Aug 2014 – Sep 2014",
  "period": "Aug 2014 – Sep 2014",
  "company": "Restaurant Tie",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "CCTV Installation",
  "cat": "Security",
  "category": "Security",
  "disciplines": [
   "CCTV",
   "Structured cabling"
  ],
  "industry": [
   "Services"
  ],
  "oneLine": "Install an HD CCTV camera system with a clear view, and provide high-speed internet access for guests.",
  "objective": [
   "Install an HD CCTV camera system with a clear view, and provide high-speed internet access for guests."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Security": [
    "CCTV, 8 HD (1080i) cameras"
   ],
   "Infrastructure": [
    "Cabling",
    "Network",
    "Cabinet"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 8,
   "planning": 48,
   "executing": 48,
   "monitoring": 8,
   "closing": 8
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "CCTV",
   "Structured cabling"
  ],
  "skills": [
   "Project management",
   "Security systems"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 7 of 49",
    "original": "Objective: installed HD CCTV Camera system with the clear view and high-speed internet access to the guest.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Restaurant TIE CCTV 8 HD 1080i Camera Installation + Cabling, Network, Cabinet",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Services",
    "pmiOrganization": "Restaurent Tie"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-sania-saleem-b1-wireless-network-re-serv-201409",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Sania Saleem B1: Wireless Network Re-servicing, Expansion and Cabling",
  "start": "2014",
  "end": "2014",
  "startYM": "2014-09",
  "endYM": "2014-10",
  "dateLabel": "Sep 2014 – Oct 2014",
  "period": "Sep 2014 – Oct 2014",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Servicing and Upgrade",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Structured cabling"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Deploy and run the existing wireless network through re-servicing, additions and configuration.",
  "objective": [
   "Deploy and run the existing wireless network through re-servicing, additions and configuration."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network configuration and expansion"
   ],
   "Infrastructure": [
    "Cabling"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 64,
   "planning": 64,
   "executing": 24,
   "monitoring": 24,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Structured cabling"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 8 of 49",
    "original": "Objective: To deploy and run old wireless network by reservicing, addition, and configuration.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Sania Saleem B1 Old Wireless Network Configuration, Addition, Cabling",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-rashdiyat-22-ap-configuration-network-lo-201410",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Rashdiyat: 22-AP Configuration, Network Load Balancing and 24-Port Gigabit Switch",
  "start": "2014",
  "end": "2014",
  "startYM": "2014-10",
  "endYM": "2014-11",
  "dateLabel": "Oct 2014 – Nov 2014",
  "period": "Oct 2014 – Nov 2014",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Servicing and Upgrade",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Load balancing",
   "Switches"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Deploy and run the existing wireless network through re-servicing, additions and configuration.",
  "objective": [
   "Deploy and run the existing wireless network through re-servicing, additions and configuration."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network, 22 access points",
    "Network load balancing",
    "24-port gigabit switch"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 24,
   "executing": 48,
   "monitoring": 24,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Load balancing",
   "Switches"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 9 of 49",
    "original": "Objective: To deploy and run old wireless network by reservicing, addition, and configuration.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Rashdiyat Configure 22AP, Add; Network load-balancing, 24P Giga Switch",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-muntaza-bachelors-configuration-of-the-e-201412",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Muntaza Bachelors: Configuration of the Existing 28-AP Wireless Network",
  "start": "2014",
  "end": "2015",
  "startYM": "2014-12",
  "endYM": "2015-02",
  "dateLabel": "Dec 2014 – Feb 2015",
  "period": "Dec 2014 – Feb 2015",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Servicing and Upgrade",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Load balancing",
   "Routers",
   "Switches"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Run the existing wireless network, routers, switches and load balancing.",
  "objective": [
   "Run the existing wireless network, routers, switches and load balancing."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network, access points",
    "Routers",
    "Switches",
    "Load balancing"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 24,
   "executing": 48,
   "monitoring": 24,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Load balancing",
   "Routers",
   "Switches"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 10 of 49",
    "original": "Objective: to run the old wireless network 22 access point, routers, switches, Load-balancing, Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Muntaza Bachlors Configuring old 28 Access point network",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-hotels-resorts-behind-tawon-stadium-new-201503",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Hotels & Resorts (Behind Tawon Stadium): New Wireless Network Installation",
  "start": "2015",
  "end": "2015",
  "startYM": "2015-03",
  "endYM": "2015-05",
  "dateLabel": "Mar 2015 – May 2015",
  "period": "Mar 2015 – May 2015",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Installation",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Load balancing",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Provide low-cost wireless internet access for guests by installing 22 Wi-Fi access points with load balancing, routers, a 24-port gigabit switch and cabling.",
  "objective": [
   "Provide low-cost wireless internet access for guests by installing 22 Wi-Fi access points with load balancing, routers, a 24-port gigabit switch and cabling."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wi-Fi, 22 access points",
    "Load balancing",
    "Routers",
    "24-port gigabit switch"
   ],
   "Infrastructure": [
    "Cabling"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 24,
   "executing": 48,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Load balancing",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 11 of 49",
    "original": "Objective: Deploy best low price wireless internet access to the guest by installing 22 Wi-FiAp with load balancing, Routers, SwitchGIGA 24 and Cabling.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Hotel & Resorts Behind Tawon Stadium New Network installation",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-tamer-group-logistic-32-channel-cctv-camera-se-201505",
  "status": "delivered",
  "verification": "verified",
  "title": "Tamer Group Logistic: 32-Channel CCTV Camera Servicing and HD Replacement",
  "start": "2015",
  "end": "2015",
  "startYM": "2015-05",
  "endYM": "2015-08",
  "dateLabel": "May 2015 – Aug 2015",
  "period": "May 2015 – Aug 2015",
  "company": "Tamer Group Logistic Buraidah",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "CCTV Upgrade and Servicing",
  "cat": "Security",
  "category": "Security",
  "disciplines": [
   "CCTV"
  ],
  "industry": [
   "Manufacturing"
  ],
  "oneLine": "Service and replace the CCTV camera system with an HD system for remote viewing from Jeddah.",
  "objective": [
   "Service and replace the CCTV camera system with an HD system for remote viewing from Jeddah."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Security": [
    "CCTV, 32 channels",
    "HD replacement",
    "Remote viewing"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 48,
   "executing": 56,
   "monitoring": 24,
   "closing": 56
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "CCTV"
  ],
  "skills": [
   "Project management",
   "Security systems"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 12 of 49",
    "original": "Objective: To service and replace CCTV camera system with HD one for Remote viewing from Jeddah.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Tamer Company 32CH CCTV Camera Servicing",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Manufacturing",
    "pmiOrganization": "Tamer Group Logistic Buraidah"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-khalidiyah-new-wireless-network-installa-201508",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Khalidiyah: New Wireless Network Installation",
  "start": "2015",
  "end": "2015",
  "startYM": "2015-08",
  "endYM": "2015-09",
  "dateLabel": "Aug 2015 – Sep 2015",
  "period": "Aug 2015 – Sep 2015",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Installation",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install wireless internet access within budget.",
  "objective": [
   "Install wireless internet access within budget."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 24,
   "executing": 48,
   "monitoring": 12,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 13 of 49",
    "original": "Objective: to install wireless internet access in the budget range.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Hotel & Resorts Khalidiyaa New wireless network installation",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-rashaf-for-spa-massage-biometric-access-contro-201509",
  "status": "delivered",
  "verification": "verified",
  "title": "Rashaf for SPA & Massage: Biometric Access Control, Subscriptions and Time Attendance",
  "start": "2015",
  "end": "2015",
  "startYM": "2015-09",
  "endYM": "2015-10",
  "dateLabel": "Sep 2015 – Oct 2015",
  "period": "Sep 2015 – Oct 2015",
  "company": "Rashaf for SPA & Massage",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Access Control Installation",
  "cat": "Security",
  "category": "Security",
  "disciplines": [
   "Access control"
  ],
  "industry": [],
  "oneLine": "Install a subscription-based customer access control system.",
  "objective": [
   "Install a subscription-based customer access control system."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Maximize team performance",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Archive project documents and materials"
  ],
  "scope": {
   "Security": [
    "Biometric access control",
    "Customer subscription management",
    "Time attendance"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 64,
   "planning": 64,
   "executing": 48,
   "monitoring": 64,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Access control"
  ],
  "skills": [
   "Project management",
   "Security systems"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 14 of 49",
    "original": "Objective: To install customer subscription access control system.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, maximize team performance, Performed quality assurance.C&M: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: archive project documents and materialsOutcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Rashaf For SPA/ Massage Biometric Access Control Subscription/ Time attendance",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Rashaf For SPA & Massage"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-saudi-electricity-company-16-hd-cctv-new-cabli-201510",
  "status": "delivered",
  "verification": "verified",
  "title": "Saudi Electricity Company: 16 HD CCTV, New Cabling, Time Attendance and Printers",
  "start": "2015",
  "end": "2015",
  "startYM": "2015-10",
  "endYM": "2015-12",
  "dateLabel": "Oct 2015 – Dec 2015",
  "period": "Oct 2015 – Dec 2015",
  "company": "Saudi Electricity Company",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "CCTV and Time Attendance Installation",
  "cat": "Security",
  "category": "Security",
  "disciplines": [
   "CCTV",
   "Access control",
   "Structured cabling"
  ],
  "industry": [],
  "oneLine": "Provide a clear view from 16 HD CCTV cameras for staff work areas and install time attendance and printers.",
  "objective": [
   "Provide a clear view from 16 HD CCTV cameras for staff work areas and install time attendance and printers."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Develop budget",
   "Human resource management",
   "Communication",
   "ProcurementEX: Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Ensure that project deliverables conform to the quality standardsCL: Finalizing all project activities"
  ],
  "scope": {
   "Security": [
    "CCTV, 16 HD cameras",
    "Time attendance"
   ],
   "Infrastructure": [
    "New cabling",
    "Printers"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 60,
   "executing": 80,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "CCTV",
   "Access control",
   "Structured cabling"
  ],
  "skills": [
   "Project management",
   "Security systems"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 15 of 49",
    "original": "Objective: Provide the clear view of 16 CCTV HD Camera for staff working & install time attendance & Printers.Deliverables:IN: Defined high-level scope of the project.PL: develop budget, human resource management, communication, procurementEX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance, ensure that project deliverables conform to the quality standardsCL: Finalizing all project activitiesOutcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "SEC Installing 16 HD CCTV & New Cabling, Time Attendance, Printers",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Saudi Electricity Company"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-roza-hotels-resorts-existing-wireless-network-201512",
  "status": "delivered",
  "verification": "verified",
  "title": "Roza Hotels & Resorts: Existing Wireless Network Configuration, Installation and Servicing",
  "start": "2015",
  "end": "2016",
  "startYM": "2015-12",
  "endYM": "2016-02",
  "dateLabel": "Dec 2015 – Feb 2016",
  "period": "Dec 2015 – Feb 2016",
  "company": "Roza Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Servicing and Upgrade",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Routers"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Keep the pre-installed wireless network running smoothly across the whole hotel through configuration, troubleshooting, servicing, firmware updates and routers.",
  "objective": [
   "Keep the pre-installed wireless network running smoothly across the whole hotel through configuration, troubleshooting, servicing, firmware updates and routers."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network, hotel-wide",
    "Routers",
    "Firmware updates"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 24,
   "executing": 48,
   "monitoring": 12,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Routers"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 16 of 49",
    "original": "Objective: To run smoothly preinstalled wireless network in the whole hotel. by configuring, troubleshooting, servicing, firmware and routers.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Roza Hotel & Resorts Old Wireless Network Configuring, Installation, Servicing",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Roza Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-malik-fahad-b3-b4-6-km-p2p-link-with-loa-201512",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Malik Fahad B3 & B4: 6 km P2P Link with Load Balancing",
  "start": "2015",
  "end": "2016",
  "startYM": "2015-12",
  "endYM": "2016-03",
  "dateLabel": "Dec 2015 – Mar 2016",
  "period": "Dec 2015 – Mar 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "P2P Wireless Link",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "P2P wireless link",
   "Load balancing"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Establish a 6 km P2P link from the Atlas head office (Technia) to Atlas building 2 (B3 and B4), with load balancing.",
  "objective": [
   "Establish a 6 km P2P link from the Atlas head office (Technia) to Atlas building 2 (B3 and B4), with load balancing."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned"
  ],
  "scope": {
   "Networking": [
    "P2P wireless link, 6 km",
    "Load balancing"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 48,
   "executing": 56,
   "monitoring": 24,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "P2P wireless link",
   "Load balancing"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 17 of 49",
    "original": "Objective: To combine and make the P2P link between 6KM from Atlas head office technia to atlas 2 building b3 & b4 street malik Fahad + load- balancing.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned,Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Hotel & Resorts Malik Fahad B3 & B4 P2P link with Load balancing",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-sania-saleem-b3-new-wireless-network-wit-201601",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Sania Saleem B3: New Wireless Network with Cabling, Wi-Fi AP and Load Balancing",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-01",
  "endYM": "2016-01",
  "dateLabel": "Jan 2016",
  "period": "Jan 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Installation",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Load balancing",
   "Structured cabling",
   "Routers"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install a new fiber wireless network and balance the speed across routers, providing QoS.",
  "objective": [
   "Install a new fiber wireless network and balance the speed across routers, providing QoS."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network (fiber)",
    "Routers",
    "Load balancing",
    "QoS"
   ],
   "Infrastructure": [
    "Cabling"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 48,
   "executing": 48,
   "monitoring": 48,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget",
   "High-Speed Network"
  ],
  "tech": [
   "Wireless networking",
   "Load balancing",
   "Structured cabling",
   "Routers"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 18 of 49",
    "original": "Objective: To install the new Fiber wireless network & balancing the speed by routers and to provide QoS.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget, High-Speed Network",
    "pmiTitle": "Atlas Sania Saleem B3 New Wireless Network; Cabling, Wi-FI AP, Load-balancing",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-sania-saleem-b2-new-wireless-network-wit-201601",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Sania Saleem B2: New Wireless Network with Cabling, Wi-Fi AP and Load Balancing",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-01",
  "endYM": "2016-01",
  "dateLabel": "Jan 2016",
  "period": "Jan 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Installation",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Load balancing",
   "Structured cabling",
   "Routers"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install a new wireless network and balance the speed across routers, providing QoS.",
  "objective": [
   "Install a new wireless network and balance the speed across routers, providing QoS."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network",
    "Routers",
    "Load balancing",
    "QoS"
   ],
   "Infrastructure": [
    "Cabling"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 48,
   "executing": 48,
   "monitoring": 24,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Load balancing",
   "Structured cabling",
   "Routers"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 19 of 49",
    "original": "Objective: To install the new wireless network & balancing the speed by routers and to provide QoS.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Sania Saleem B2 New Wireless Network; Cabling, Wi-FI AP, Load-balancing",
    "pmiJobTitle": "Network Professional",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-malik-fahad-b3-wireless-network-re-run-a-201601",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Malik Fahad B3: Wireless Network Re-run and Cabling",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-01",
  "endYM": "2016-03",
  "dateLabel": "Jan 2016 – Mar 2016",
  "period": "Jan 2016 – Mar 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Servicing and Upgrade",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Bring the existing wireless network back into service through configuration, cabling and the necessary additions (routers, switches, connectors), servicing and troubleshooting.",
  "objective": [
   "Bring the existing wireless network back into service through configuration, cabling and the necessary additions (routers, switches, connectors), servicing and troubleshooting."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network",
    "Routers",
    "Switches"
   ],
   "Infrastructure": [
    "Cabling",
    "Connectors"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 24,
   "executing": 48,
   "monitoring": 12,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 20 of 49",
    "original": "Objective: To rerun old wireless network by just configuring and cabling and adding the necessary item like routers, switch, connectors, servicing, troubleshooting.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. CL: measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Budget",
    "pmiTitle": "Atlas Hotels & Resorts Malik Fahad B3 installing new wireless network",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-manazil-al-masa-hotel-resorts-wireless-network-201602",
  "status": "delivered",
  "verification": "verified",
  "title": "Manazil Al Masa Hotel & Resorts: Wireless Network Reconfiguration",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-02",
  "endYM": "2016-02",
  "dateLabel": "Feb 2016",
  "period": "Feb 2016",
  "company": "Manazil Al Masa Hotel & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Servicing and Upgrade",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Return the hotel wireless network to service by reconfiguring access points and upgrading the main system.",
  "objective": [
   "Return the hotel wireless network to service by reconfiguring access points and upgrading the main system."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network, access point reconfiguration",
    "Main system upgrade"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 12,
   "executing": 24,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 21 of 49",
    "original": "Objective: To run again wireless network in the hotel by reconfiguration of an access point and upgrading the main system.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Al-Masa Hotel & Resorts",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Manazil Al Masa Hotel & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-benefsiji-hotel-resorts-new-wireless-network-i-201602",
  "status": "delivered",
  "verification": "verified",
  "title": "Benefsiji Hotel & Resorts: New Wireless Network Installation",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-02",
  "endYM": "2016-03",
  "dateLabel": "Feb 2016 – Mar 2016",
  "period": "Feb 2016 – Mar 2016",
  "company": "Benefsiji Hotel & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Installation",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install a high-quality wireless network in the hotel corridors for the guest experience.",
  "objective": [
   "Install a high-quality wireless network in the hotel corridors for the guest experience."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network, hotel corridors"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 48,
   "executing": 56,
   "monitoring": 24,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 22 of 49",
    "original": "Objective: To install best in class wireless network access in hotel corridors for best customer experience.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Benefsiji Hotel & Resorts New Wireless Network Installation",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Benefsiji Hotel & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-ritaj-hotel-resorts-16-camera-hd-cctv-installa-201602",
  "status": "delivered",
  "verification": "verified",
  "title": "Ritaj Hotel & Resorts: 16-Camera HD CCTV Installation",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-02",
  "endYM": "2016-03",
  "dateLabel": "Feb 2016 – Mar 2016",
  "period": "Feb 2016 – Mar 2016",
  "company": "Ritaj Hotel & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Manager",
  "type": "CCTV Installation",
  "cat": "Security",
  "category": "Security",
  "disciplines": [
   "CCTV"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install a 16-camera HD CCTV system covering the whole hotel, viewable over the network.",
  "objective": [
   "Install a 16-camera HD CCTV system covering the whole hotel, viewable over the network."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Security": [
    "CCTV, 16 HD cameras",
    "Network viewing"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 48,
   "executing": 48,
   "monitoring": 12,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "CCTV"
  ],
  "skills": [
   "Project management",
   "Security systems"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 23 of 49",
    "original": "Objective: To install 16 CCTV HD Camera system for whole Hotel View over the network.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Ritaj Hotel & Resorts HD CCTV Camera Installation 16",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Ritaj Hotel & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-ritaj-hotel-resorts-existing-wireless-network-201602",
  "status": "delivered",
  "verification": "verified",
  "title": "Ritaj Hotel & Resorts: Existing Wireless Network Configuration, Servicing and Troubleshooting",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-02",
  "endYM": "2016-04",
  "dateLabel": "Feb 2016 – Apr 2016",
  "period": "Feb 2016 – Apr 2016",
  "company": "Ritaj Hotel & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Supervisor",
  "type": "Wireless Network Servicing and Upgrade",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Cable, configure and troubleshoot the existing pre-installed wireless network, including upgrades to routers, switches, DSL modems and access points.",
  "objective": [
   "Cable, configure and troubleshoot the existing pre-installed wireless network, including upgrades to routers, switches, DSL modems and access points."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network",
    "Routers",
    "Switches",
    "DSL modems",
    "Access points"
   ],
   "Infrastructure": [
    "Cabling"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 24,
   "executing": 48,
   "monitoring": 12,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 24 of 49",
    "original": "Objective: Cabling, Configuring, Troubleshooting, Old preinstalled wireless network, upgrading, routers, switches, DSL modems, Access point.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Ritaj Hotel & Resorts Old Wireless Network Configuration, Servicing, Troubleshoo",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Ritaj Hotel & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-technia-new-wireless-network-installatio-201603",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Technia: New Wireless Network Installation",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-03",
  "endYM": "2016-05",
  "dateLabel": "Mar 2016 – May 2016",
  "period": "Mar 2016 – May 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Leader",
  "type": "Wireless Network Installation",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Maximise wireless internet speed and signal quality by reinstalling the system as a new network.",
  "objective": [
   "Maximise wireless internet speed and signal quality by reinstalling the system as a new network."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 24,
   "executing": 48,
   "monitoring": 12,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 25 of 49",
    "original": "Objective: to maximize wireless internet speed and signal quality by reinstalling them whole new system.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.CL: measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Hotel & Resorts Technia New Wireless Network Installation",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-toufeeq-new-wireless-network-and-p2p-lin-201603",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Toufeeq: New Wireless Network and P2P Link from Wahdat",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-03",
  "endYM": "2016-05",
  "dateLabel": "Mar 2016 – May 2016",
  "period": "Mar 2016 – May 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network and P2P Link",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "P2P wireless link",
   "Load balancing",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Combine two DSL modems and distribute the bandwidth over a P2P wireless link, and install a new wireless network with switches, access points, routers and load balancing.",
  "objective": [
   "Combine two DSL modems and distribute the bandwidth over a P2P wireless link, and install a new wireless network with switches, access points, routers and load balancing."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "P2P wireless link",
    "Wireless network",
    "Switches",
    "Access points",
    "Routers",
    "Load balancing",
    "DSL modems, 2"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 24,
   "executing": 48,
   "monitoring": 24,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "P2P wireless link",
   "Load balancing",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 26 of 49",
    "original": "Objective: To combine two DSL modem and deploy the speed through P2P Wireless link and install new wireless network including switches, access point, routers, load balancing.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. CL: measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Budget",
    "pmiTitle": "Atlas Hotel & Resorts Toufeeq new wireless network + P2P link from wahdat",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-khobab-to-atlas-wahdat-p2p-link-powerbea-201604",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Khobab to Atlas Wahdat: P2P Link (PowerBeam AC)",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-04",
  "endYM": "2016-04",
  "dateLabel": "Apr 2016",
  "period": "Apr 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "P2P Wireless Link",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "P2P wireless link",
   "Load balancing",
   "Structured cabling",
   "PowerBeam AC"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Provide high-speed internet access by combining three DSL modems with load balancing over a PowerBeam AC P2P link.",
  "objective": [
   "Provide high-speed internet access by combining three DSL modems with load balancing over a PowerBeam AC P2P link."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "P2P wireless link, PowerBeam AC",
    "Load balancing",
    "DSL modems, 3"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 48,
   "executing": 48,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "P2P wireless link",
   "Load balancing",
   "Structured cabling",
   "PowerBeam AC"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 27 of 49",
    "original": "Objective: To provide high-speed internet access by combining 3 DSL modem with load balancing over Powerbeam P2P link AC technology.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Hotel & Resorts Khobab to Atlas Hotel & Resorts Wahdat P2P Link",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-hotels-resorts-to-atlas-imtiaz-powerbeam-201605",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Hotels & Resorts to Atlas Imtiaz: PowerBeam AC P2P Link",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-05",
  "endYM": "2016-05",
  "dateLabel": "May 2016",
  "period": "May 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "P2P Wireless Link",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "P2P wireless link",
   "Load balancing",
   "Structured cabling",
   "PowerBeam AC"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Provide high-speed guest internet access by combining three DSL modems with load balancing.",
  "objective": [
   "Provide high-speed guest internet access by combining three DSL modems with load balancing."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "P2P wireless link, PowerBeam AC",
    "Load balancing",
    "DSL modems, 3"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 24,
   "executing": 48,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "P2P wireless link",
   "Load balancing",
   "Structured cabling",
   "PowerBeam AC"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 28 of 49",
    "original": "Objective: To provide high-speed internet access to the guest by combining 3 DSL modem with balancing.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Hotel & Resorts To Atlas Hotel & Resorts Imtiaz PowerBeam AC",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-technia-buildings-2-6-new-cat6-cabling-d-201607",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Technia Buildings 2–6: New Cat6 Cabling, DSL Cabling and Network",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-07",
  "endYM": "2016-10",
  "dateLabel": "Jul 2016 – Oct 2016",
  "period": "Jul 2016 – Oct 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Network Infrastructure Deployment",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install a new wireless network, DSL cabling (Cat7e), Cat6 cabling, routers, switches and modems, with cabinets, as the main system for the Technia buildings.",
  "objective": [
   "Install a new wireless network, DSL cabling (Cat7e), Cat6 cabling, routers, switches and modems, with cabinets, as the main system for the Technia buildings."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network",
    "Routers",
    "Switches",
    "Modems"
   ],
   "Infrastructure": [
    "Cat6 cabling",
    "DSL cabling (Cat7e)",
    "Cabinets"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 150,
   "executing": 200,
   "monitoring": 100,
   "closing": 80
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 29 of 49",
    "original": "Objective: New Wireless Network, New DSL Cabling CAt7e, New Cat6 Cabling, New Routers, New Switches, New Modems, Main system for all 6 building + Cabinets.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. CL: measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Technia Building 2,3,4,5,6 New Cabling Cat6, New Cabling DSL, New network",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ],
  "featured": true
 },
 {
  "id": "pmi-atlas-muntaza-family-to-atlas-muntaza-bachelor-201608",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Muntaza Family to Atlas Muntaza Bachelors: P2P Link and New Wireless Network",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-08",
  "endYM": "2016-08",
  "dateLabel": "Aug 2016",
  "period": "Aug 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network and P2P Link",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "P2P wireless link"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Deploy a high-quality wireless network with a P2P link.",
  "objective": [
   "Deploy a high-quality wireless network with a P2P link."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "P2P wireless link",
    "Wireless network"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 48,
   "executing": 56,
   "monitoring": 48,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "P2P wireless link"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 30 of 49",
    "original": "Objective: To Deploy best in the class wireless network with the P2P link.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Muntaza Family to Atlas Muntaza Bachlors P2P Link & New Wireless Network",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-technia-b1-head-office-new-wireless-netw-201608",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Technia B1 Head Office: New Wireless Network Installation",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-08",
  "endYM": "2016-08",
  "dateLabel": "Aug 2016",
  "period": "Aug 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Installation",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Load balancing",
   "Routers",
   "Switches"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install a high-quality wireless network for special family guests, with access points, routers, switches and load balancing.",
  "objective": [
   "Install a high-quality wireless network for special family guests, with access points, routers, switches and load balancing."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network, access points",
    "Routers",
    "Switches",
    "Load balancing"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 48,
   "executing": 56,
   "monitoring": 24,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Load balancing",
   "Routers",
   "Switches"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 31 of 49",
    "original": "Objective: To install best in the class wireless network for special family guest. which includes access points, Routers, Switches, load balancing.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Technia B1 Head Office New Wireless Network Installation",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-rashaf-for-spa-massage-website-seo-tagging-pic-201609",
  "status": "delivered",
  "verification": "verified",
  "title": "Rashaf for SPA & Massage: Website SEO, Tagging, Pictures and Videos",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-09",
  "endYM": "2016-09",
  "dateLabel": "Sep 2016",
  "period": "Sep 2016",
  "company": "Rashaf for SPA & Massage",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Administrator",
  "type": "Website SEO",
  "cat": "Other / Unclassified",
  "category": "Other / Unclassified",
  "disciplines": [
   "Website / SEO"
  ],
  "industry": [],
  "oneLine": "Make the website visible in search engines, Google Maps, Facebook, Twitter and Google+ through tagging and keywords.",
  "objective": [
   "Make the website visible in search engines, Google Maps, Facebook, Twitter and Google+ through tagging and keywords."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project planMC: Measured project performance",
   "Communicated project status to management",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Software": [
    "Website SEO",
    "Tagging and keywords",
    "Social and map listings",
    "Pictures and videos"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 24,
   "executing": 48,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Website / SEO"
  ],
  "skills": [
   "Project management"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 32 of 49",
    "original": "Objective: to make the website visible in search engine, Google Maps, Facebook, Twitter, tagging, Google+, keyword / massage buraidahDeliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project planMC: Measured project performance. Communicated project status to management.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Rashaf For SPA/ Massage Website/ SEO/ Tagging/ Pictures, Videos..etc",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Rashaf For SPA & Massage"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-zahid-wireless-internet-for-a-new-buildi-201610",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Zahid: Wireless Internet for a New Building (16 Points)",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-10",
  "endYM": "2016-10",
  "dateLabel": "Oct 2016",
  "period": "Oct 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network and P2P Link",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "P2P wireless link",
   "Load balancing"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Provide wireless internet access through a P2P wireless link with load balancing.",
  "objective": [
   "Provide wireless internet access through a P2P wireless link with load balancing."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Measured customer satisfaction.archive project documents and materials"
  ],
  "scope": {
   "Networking": [
    "P2P wireless link",
    "Wireless network, 16 points",
    "Load balancing"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 12,
   "executing": 48,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "P2P wireless link",
   "Load balancing"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 33 of 49",
    "original": "Objective: To Deploy and Provide Wireless internet access via P2P Wireless link & Load-balancing.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Measured customer satisfaction.archive project documents and materialsOutcome: SuccessRole: Manager Responsibilities: Budget",
    "pmiTitle": "Atlas Zahid Newly constructed building wireless internet installation 16 point",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-muntaza-to-atlas-zahid-10-km-p2p-link-po-201610",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Muntaza to Atlas Zahid: 10 km P2P Link (PowerBeam AC 620)",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-10",
  "endYM": "2016-10",
  "dateLabel": "Oct 2016",
  "period": "Oct 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "P2P Wireless Link",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "P2P wireless link",
   "Structured cabling",
   "PowerBeam AC"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Combine three xDSL modems (66 Mb/s) and deliver connectivity to Atlas Zahid over 10 km.",
  "objective": [
   "Combine three xDSL modems (66 Mb/s) and deliver connectivity to Atlas Zahid over 10 km."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "P2P wireless link, 10 km, PowerBeam AC 620",
    "xDSL modems, 3"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 24,
   "executing": 48,
   "monitoring": 24,
   "closing": 24
  },
  "outcome": [
   "Success",
   "Speed 100% Signal Quality"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "P2P wireless link",
   "Structured cabling",
   "PowerBeam AC"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 34 of 49",
    "original": "Objective: To Combine three XDSL modem speed 66Mb/s and send connectivity to 10KM Atlas Zahid.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: Success Speed 100% Signal Quality Role: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Muntaza to Atlas Zahid P2P Link Over 10KM Using PowerBeam AC 620",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-salmia-wireless-network-servicing-201611",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Salmia: Wireless Network Servicing",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-11",
  "endYM": "2016-11",
  "dateLabel": "Nov 2016",
  "period": "Nov 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Servicing and Upgrade",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Fix and run the existing wireless network within budget, including cabling, cabinets, troubleshooting, servicing, routers and switches.",
  "objective": [
   "Fix and run the existing wireless network within budget, including cabling, cabinets, troubleshooting, servicing, routers and switches."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network",
    "Routers",
    "Switches"
   ],
   "Infrastructure": [
    "Cabling",
    "Cabinets"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 24,
   "executing": 48,
   "monitoring": 12,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 35 of 49",
    "original": "Objective: To fix and run the old wireless network in budget rate. Including, cabling, cabinets, troubleshooting, services, routers, switchesDeliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.CL: measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Hotel & Resorts Salmia New Wireless Network Expect Access Point",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-technia-to-atlas-ferdouws-p2p-link-66-mb-201612",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Technia to Atlas Ferdouws: P2P Link, 66 Mb/s (PowerBeam AC 620)",
  "start": "2016",
  "end": "2016",
  "startYM": "2016-12",
  "endYM": "2016-12",
  "dateLabel": "Dec 2016",
  "period": "Dec 2016",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "P2P Wireless Link",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "P2P wireless link",
   "PowerBeam AC",
   "Routers"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Remove all 4G routers and install a PowerBeam AC620 P2P link at up to 66 Mb/s.",
  "objective": [
   "Remove all 4G routers and install a PowerBeam AC620 P2P link at up to 66 Mb/s."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "P2P wireless link, PowerBeam AC 620",
    "4G routers removed"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 48,
   "executing": 12,
   "monitoring": 12,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "P2P wireless link",
   "PowerBeam AC",
   "Routers"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 36 of 49",
    "original": "Objective: To Remove All 4G Routers and installed P2P PowerBeam Ac620 High speed up to 66mb/s Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Atlas Hotels & Resorts Technia to Atlas Hotels & Resorts Ferdouws P2P Link 66mbs",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-zammam-company-48-camera-cctv-upgrade-and-32-c-201701",
  "status": "delivered",
  "verification": "verified",
  "title": "Zammam Company: 48-Camera CCTV Upgrade and 32-Channel HD DVR",
  "start": "2017",
  "end": "2017",
  "startYM": "2017-01",
  "endYM": "2017-02",
  "dateLabel": "Jan 2017 – Feb 2017",
  "period": "Jan 2017 – Feb 2017",
  "company": "Zammam Company Car Scrap",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "CCTV Upgrade and Servicing",
  "cat": "Security",
  "category": "Security",
  "disciplines": [
   "CCTV",
   "Structured cabling",
   "DVR"
  ],
  "industry": [],
  "oneLine": "Upgrade 16 cameras to 2 MP and the DVR to 32 channels, and re-cable all 48 CCTV cameras, connectors and the DVR, with remote internet viewing and multi-screen display.",
  "objective": [
   "Upgrade 16 cameras to 2 MP and the DVR to 32 channels, and re-cable all 48 CCTV cameras, connectors and the DVR, with remote internet viewing and multi-screen display."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Security": [
    "CCTV, 48 cameras",
    "16 cameras upgraded to 2 MP",
    "DVR, 32 channels",
    "Internet viewing, multi-screen"
   ],
   "Infrastructure": [
    "Re-cabling, connectors"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 48,
   "executing": 120,
   "monitoring": 48,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "To run Complete system again"
  ],
  "tech": [
   "CCTV",
   "Structured cabling",
   "DVR"
  ],
  "skills": [
   "Project management",
   "Security systems"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 37 of 49",
    "original": "Objective: To upgrade 2MP 16 Camera & 32CH DVR and re-cabling all 48 CCTV camera, connectors, DVR, finalize over the internet & multi Screen view.IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: Success Role: Manager Responsibilities: To run Complete system again.",
    "pmiTitle": "Zammam Company Car Scraps 48 CCTV Camera Upgrading, Changing, Replacing, HDDVR32",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Zammam Company Car scarps"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-atlas-malik-fahad-b4-wireless-access-point-ins-201702",
  "status": "delivered",
  "verification": "verified",
  "title": "Atlas Malik Fahad B4: Wireless Access Point Installation and Cabling",
  "start": "2017",
  "end": "2017",
  "startYM": "2017-02",
  "endYM": "2017-02",
  "dateLabel": "Feb 2017",
  "period": "Feb 2017",
  "company": "Atlas Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Installation",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Load balancing",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install new wireless network infrastructure: DSL modem, Wi-Fi access points, 24-port switch, router and load balancing.",
  "objective": [
   "Install new wireless network infrastructure: DSL modem, Wi-Fi access points, 24-port switch, router and load balancing."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network, access points",
    "DSL modem",
    "24-port switch",
    "Router",
    "Load balancing"
   ],
   "Infrastructure": [
    "Cabling"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 24,
   "executing": 48,
   "monitoring": 24,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Maximum Connectivity"
  ],
  "tech": [
   "Wireless networking",
   "Load balancing",
   "Structured cabling",
   "Routers",
   "Switches"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 38 of 49",
    "original": "Objective: To install new wireless network infrastructure including new DSL modem, 16 WI-FI AP, Switcher 24PG, Router, Load-balancing Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Maximum Connectivity",
    "pmiTitle": "Atlas Malik Fahad B4 22 wireless access point installing, cabling",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Atlas Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-shagan-hotel-resorts-new-wireless-network-inst-201703",
  "status": "delivered",
  "verification": "verified",
  "title": "Shagan Hotel & Resorts: New Wireless Network Installation (Linksys AC)",
  "start": "2017",
  "end": "2017",
  "startYM": "2017-03",
  "endYM": "2017-04",
  "dateLabel": "Mar 2017 – Apr 2017",
  "period": "Mar 2017 – Apr 2017",
  "company": "Shagan Hotel & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Leader",
  "type": "Wireless Network Installation",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Linksys AC"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install high-quality wireless internet access in the hotel for guests.",
  "objective": [
   "Install high-quality wireless internet access in the hotel for guests."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network (Linksys AC)"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 24,
   "executing": 48,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success",
   "Wi-Fi 200mb/s"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Linksys AC"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 39 of 49",
    "original": "Objective: install best class wireless internet access in the hotel for guest and ratting.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: Success WI-FI 200mb/sRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Shagan Hotel & Resorts New Wireless Network Installation Linksys AC",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Shagan Hotel & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-tamer-group-logistic-biometric-access-control-201704",
  "status": "delivered",
  "verification": "verified",
  "title": "Tamer Group Logistic: Biometric Access Control and Time Attendance Installation",
  "start": "2017",
  "end": "2017",
  "startYM": "2017-04",
  "endYM": "2017-05",
  "dateLabel": "Apr 2017 – May 2017",
  "period": "Apr 2017 – May 2017",
  "company": "Tamer Group Logistic Buraidah",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Access Control Installation",
  "cat": "Security",
  "category": "Security",
  "disciplines": [
   "Access control"
  ],
  "industry": [
   "Manufacturing"
  ],
  "oneLine": "Install biometric access control and time attendance for staff.",
  "objective": [
   "Install biometric access control and time attendance for staff."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Security": [
    "Biometric access control",
    "Time attendance"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 48,
   "executing": 24,
   "monitoring": 12,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Access control"
  ],
  "skills": [
   "Project management",
   "Security systems"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 40 of 49",
    "original": "Objective: To install biometric access control and time attendance for staff.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Tamar logistic buraidah biometric access control/ time attendance installation",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Manufacturing",
    "pmiOrganization": "Tamer Group Logistic Buraidah"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-wassam-hotels-resorts-dual-16-channel-analog-c-201706",
  "status": "delivered",
  "verification": "verified",
  "title": "Wassam Hotels & Resorts: Dual 16-Channel Analog Cable TV (Nilesat / Arabsat)",
  "start": "2017",
  "end": "2017",
  "startYM": "2017-06",
  "endYM": "2017-08",
  "dateLabel": "Jun 2017 – Aug 2017",
  "period": "Jun 2017 – Aug 2017",
  "company": "Wassam Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Cable TV System",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "Cable TV",
   "Satellite (Nilesat / Arabsat)"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Install a dual 16-channel cable TV system with a clear picture and direct satellite-dish access over the same cable connected to the TV.",
  "objective": [
   "Install a dual 16-channel cable TV system with a clear picture and direct satellite-dish access over the same cable connected to the TV."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Media": [
    "Cable TV, dual 16 channels",
    "Satellite (Nilesat / Arabsat)"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 48,
   "executing": 120,
   "monitoring": 48,
   "closing": 48
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Cable TV",
   "Satellite (Nilesat / Arabsat)"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 41 of 49",
    "original": "Objective: To installed dual 16 channel cable tv system with crystal clear picture and access to direct satellite dish from the same cable connected to the tv. Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Measured customer satisfaction.Outcome: Success.Role: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Wassam Hotels & Resorts Dual Analog Cable TV System 16Ch Nile-sat/Arab-sat",
    "pmiJobTitle": "Network Professional",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Wassam Hotels and Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-al-hamra-tower-60-channel-iptv-software-restau-201709",
  "status": "delivered",
  "verification": "verified",
  "title": "Al Hamra Tower: 60-Channel IPTV, Software, Restaurant Website and VOD",
  "start": "2017",
  "end": "2017",
  "startYM": "2017-09",
  "endYM": "2017-11",
  "dateLabel": "Sep 2017 – Nov 2017",
  "period": "Sep 2017 – Nov 2017",
  "company": "Al Hamra Tower Hotel & Resorts",
  "location": "Unaizah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "IPTV Deployment",
  "cat": "Systems Integration",
  "category": "Systems Integration",
  "disciplines": [
   "IPTV",
   "Website / SEO"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Run 60-channel IPTV over ethernet through wall sockets to smart LED TVs, including a smart app, restaurant booking software, a VOD app, a browser and YouTube.",
  "objective": [
   "Run 60-channel IPTV over ethernet through wall sockets to smart LED TVs, including a smart app, restaurant booking software, a VOD app, a browser and YouTube."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Media": [
    "IPTV, 60 channels",
    "Smart TV app, VOD app, browser, YouTube"
   ],
   "Software": [
    "Restaurant booking software",
    "Restaurant website"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 48,
   "executing": 352,
   "monitoring": 160,
   "closing": 100
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "IPTV",
   "Website / SEO"
  ],
  "skills": [
   "Project management",
   "System integration"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 42 of 49",
    "original": "Objective: To run IPTV 60ch over the ethernet cable Via Wall Socket with smart LED TV including, Smart app, booking restaurant software, VOD APP, Browser, YoutubeDeliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Al-HamraTower IPTV 60CH + Software + Restaurent Website + VOD",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Al Hamra Tower Hotel & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ],
  "featured": true
 },
 {
  "id": "pmi-radoof-hotel-resorts-32-channel-analog-cable-t-201711",
  "status": "delivered",
  "verification": "verified",
  "title": "Radoof Hotel & Resorts: 32-Channel Analog Cable TV Service and Replacement",
  "start": "2017",
  "end": "2017",
  "startYM": "2017-11",
  "endYM": "2017-11",
  "dateLabel": "Nov 2017",
  "period": "Nov 2017",
  "company": "Radoor Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Cable TV System",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "Cable TV"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Return the analog cable TV system to service by servicing and replacing set-top boxes and servicing all room wall sockets.",
  "objective": [
   "Return the analog cable TV system to service by servicing and replacing set-top boxes and servicing all room wall sockets."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Media": [
    "Cable TV, 32 channels",
    "Set-top boxes (replaced)",
    "Room wall sockets (serviced)"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 12,
   "executing": 48,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Budget"
  ],
  "tech": [
   "Cable TV"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 43 of 49",
    "original": "Objective: to run analog cable tv system again by servicing and replacing STB, servicing all wall socket installed in the rooms.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Budget",
    "pmiTitle": "Radoof Hotel & Resorts Service, Replace, All 32 Ch Analog Cable TV",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Radoor Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-strength-star-gym-analog-cable-tv-installation-201711",
  "status": "delivered",
  "verification": "verified",
  "title": "Strength Star Gym: Analog Cable TV Installation (Cabling, Amplifier, Switcher, Cabinet)",
  "start": "2017",
  "end": "2017",
  "startYM": "2017-11",
  "endYM": "2017-12",
  "dateLabel": "Nov 2017 – Dec 2017",
  "period": "Nov 2017 – Dec 2017",
  "company": "Strength Star Gym",
  "location": "Unaizah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Manager",
  "type": "Cable TV System",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "Cable TV",
   "Structured cabling",
   "Switches"
  ],
  "industry": [],
  "oneLine": "Install a new budget analog cable TV system with a clear picture.",
  "objective": [
   "Install a new budget analog cable TV system with a clear picture."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Media": [
    "Analog cable TV"
   ],
   "Infrastructure": [
    "Cabling",
    "Amplifier",
    "Switcher",
    "Cabinet"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 48,
   "executing": 40,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Cable TV",
   "Structured cabling",
   "Switches"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 44 of 49",
    "original": "Objective: install new budget analog cable tv system with clear picture quality.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Strenght Start Gym Analog Cable TV installation, cabling, amp, switcher, cabinet",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Strength Star Gym"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-al-hamra-tower-new-cisco-wireless-network-inst-201801",
  "status": "delivered",
  "verification": "verified",
  "title": "Al-Hamra Tower: New Cisco Wireless Network Installation",
  "start": "2018",
  "end": "2018",
  "startYM": "2018-01",
  "endYM": "2018-01",
  "dateLabel": "Jan 2018",
  "period": "Jan 2018",
  "company": "Al-Hamra Tower",
  "location": "Unaizah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Administrator",
  "type": "Wireless Network Installation",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Cisco"
  ],
  "industry": [],
  "oneLine": "Install a high-quality wireless network using new AC wireless technology with roaming.",
  "objective": [
   "Install a high-quality wireless network using new AC wireless technology with roaming."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network (Cisco), AC technology",
    "Roaming"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 24,
   "planning": 48,
   "executing": 48,
   "monitoring": 24,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Cisco"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 45 of 49",
    "original": "Objective: To install best quality wireless network access with high new wireless technology AC with roaming inside.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Al-HamraTower New Fresh Cisco Wireless Network Installation",
    "pmiJobTitle": "Administrator/ Project Leader",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Al-Hamra Tower"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-elaf-hotels-resorts-wireless-network-service-u-201801",
  "status": "delivered",
  "verification": "verified",
  "title": "Elaf Hotels & Resorts: Wireless Network Service, Upgrade, Software and Configuration",
  "start": "2018",
  "end": "2018",
  "startYM": "2018-01",
  "endYM": "2018-02",
  "dateLabel": "Jan 2018 – Feb 2018",
  "period": "Jan 2018 – Feb 2018",
  "company": "Elaf Hotels & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Administrator",
  "type": "Wireless Network Servicing and Upgrade",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking",
   "Routers"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Configure all pre-installed wireless access points and install a new network router with firmware updates.",
  "objective": [
   "Configure all pre-installed wireless access points and install a new network router with firmware updates."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless access points (configuration)",
    "Router",
    "Firmware updates"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 24,
   "executing": 16,
   "monitoring": 24,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking",
   "Routers"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 46 of 49",
    "original": "Objective: To configure all preinstalled old wireless access point & install new network router + firmware updates.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Elef Hotel & Resorts Wireless network service, upgrading, software, configuratio",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Elaf Hotels & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-darafa-hotel-resorts-wireless-configuration-se-201801",
  "status": "delivered",
  "verification": "verified",
  "title": "Darafa Hotel & Resorts: Wireless Configuration, Servicing and Upgrade",
  "start": "2018",
  "end": "2018",
  "startYM": "2018-01",
  "endYM": "2018-03",
  "dateLabel": "Jan 2018 – Mar 2018",
  "period": "Jan 2018 – Mar 2018",
  "company": "Darafa Hotel & Resorts",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Wireless Network Servicing and Upgrade",
  "cat": "Networking",
  "category": "Networking",
  "disciplines": [
   "Wireless networking"
  ],
  "industry": [
   "Hospitality"
  ],
  "oneLine": "Keep the existing 18-access-point wireless network running through upgrades and troubleshooting.",
  "objective": [
   "Keep the existing 18-access-point wireless network running through upgrades and troubleshooting."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Networking": [
    "Wireless network, 18 access points"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 12,
   "executing": 24,
   "monitoring": 12,
   "closing": 24
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Wireless networking"
  ],
  "skills": [
   "Project management",
   "Network installation"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 47 of 49",
    "original": "Objective: To run old wireless network by upgrading, troubleshooting.18 access point.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management. Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Darafa Hotel & Resorts Wireless Configuring, Servicing, upgrading old wireless",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Darafa Hotel & Resorts"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-qassim-cement-qcc-residential-area-22-channel-201801",
  "status": "delivered",
  "verification": "verified",
  "title": "Qassim Cement (QCC): Residential Area 22-Channel Analog Cable TV Servicing",
  "start": "2018",
  "end": "2018",
  "startYM": "2018-01",
  "endYM": "2018-03",
  "dateLabel": "Jan 2018 – Mar 2018",
  "period": "Jan 2018 – Mar 2018",
  "company": "Qassim Cement QCC",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Manager",
  "type": "Cable TV System",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "Cable TV"
  ],
  "industry": [],
  "oneLine": "Bring the five-year-old, outdated 22-channel cable TV system for the residential area back into service within budget.",
  "objective": [
   "Bring the five-year-old, outdated 22-channel cable TV system for the residential area back into service within budget."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance",
   "Communicated project status to management",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Media": [
    "Analog cable TV, 22 channels"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 48,
   "planning": 70,
   "executing": 240,
   "monitoring": 70,
   "closing": 70
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Cable TV"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 48 of 49",
    "original": "Objective: To run all 22ch 5 years old outdated cable tv system again for the residential & for the budget.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance. Communicated project status to management.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Qassim Cement QCC Servicing Residential Area 22CH Analog Cable TV",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Other",
    "pmiOrganization": "Qassim Cement QCC"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 },
 {
  "id": "pmi-qassim-university-32-channel-digital-cable-tv-201802",
  "status": "delivered",
  "verification": "verified",
  "title": "Qassim University: 32-Channel Digital Cable TV System (Nilesat, Arabsat)",
  "start": "2018",
  "end": "2018",
  "startYM": "2018-02",
  "endYM": "2018-03",
  "dateLabel": "Feb 2018 – Mar 2018",
  "period": "Feb 2018 – Mar 2018",
  "company": "Qassim University",
  "location": "Buraidah, Saudi Arabia",
  "careerPosition": "IT Manager",
  "projectRole": "Project Leader",
  "type": "Cable TV System",
  "cat": "IT Infrastructure",
  "category": "IT Infrastructure",
  "disciplines": [
   "Cable TV",
   "Satellite (Nilesat / Arabsat)",
   "Switches"
  ],
  "industry": [
   "Education"
  ],
  "oneLine": "Install a 32-channel set-top-box (STB) switch with simultaneous Nilesat and Arabsat satellite reception.",
  "objective": [
   "Install a 32-channel set-top-box (STB) switch with simultaneous Nilesat and Arabsat satellite reception."
  ],
  "need": [],
  "challenge": [],
  "myRole": [],
  "deliverables": [
   "Defined high-level scope of the project",
   "Created scope statement",
   "Estimated budget",
   "Managed project resources",
   "Executed tasks from project plan",
   "Performed quality assurance",
   "Measured project performance.Updated risk register with new risks",
   "Collected lessons learned",
   "Measured customer satisfaction"
  ],
  "scope": {
   "Media": [
    "Cable TV, 32 channels",
    "STB switch",
    "Satellite (Nilesat / Arabsat)"
   ]
  },
  "details": {},
  "architecture": [],
  "solution": [],
  "pm": {
   "initiating": 12,
   "planning": 48,
   "executing": 48,
   "monitoring": 12,
   "closing": 12
  },
  "outcome": [
   "Success"
  ],
  "responsibilities": [
   "Customer Satisfaction",
   "Budget"
  ],
  "tech": [
   "Cable TV",
   "Satellite (Nilesat / Arabsat)",
   "Switches"
  ],
  "skills": [
   "Project management",
   "IT infrastructure"
  ],
  "experience": [
   "aqmar"
  ],
  "certifications": [],
  "evidence": {},
  "sources": [
   {
    "type": "PMI project record",
    "ref": "PMI application 2605370 (generated 2 Mar 2021), project record 49 of 49",
    "original": "Objective: To install something 32CH STB switch with same time satellite Nilesat and Arabsat.Deliverables:IN: Defined high-level scope of the project.PL: Created scope statement, Estimated Budget.EX: Managed project resources, Executed tasks from project plan, Performed quality assurance.MC: Measured project performance.Updated risk register with new risks.CL: Collected lessons learned, measured customer satisfaction.Outcome: SuccessRole: Manager Responsibilities: Customer Satisfaction, Budget",
    "pmiTitle": "Qassim University Digital Cable TV System 32CH, Switch Nilesat, Arabsat",
    "pmiJobTitle": "Project Manager",
    "pmiPrimaryIndustry": "Education",
    "pmiOrganization": "Qassim University"
   }
  ],
  "missing": [
   "Photos / documents (none supplied)"
  ]
 }
];
