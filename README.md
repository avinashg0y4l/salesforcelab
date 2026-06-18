# Salesforce Lab — Case Studies Portal

A decoupled, data-driven portfolio portal documenting a complete hands-on learning journey across **14 real-world Salesforce Admin Case Studies** (from greenfield Org setups to advanced Security, Flow Automations, Change Set deployments, and Einstein AI integration).

Designed with a premium Salesforce-inspired layout, clean vertical Setup navigation, Opportunity-style chevron progress paths, and dynamic screen rendering.

---

## 📂 Project Structure

- `index.html` - Clean, lightweight markup layout containing containers for dynamic UI rendering.
- `style.css` - Custom styling system inspired by standard Salesforce Lightning Experience.
- `app.js` - Routing controller, dynamic card generator, multi-tab layout renderer, search filter, and dynamic TOC sidebar script.
- `projects-data.js` - Central JavaScript database holding configurations, Solutions, Decisions, and step-by-step documentation for all 14 modules.
- `images/` - Directory to store your custom implementation screenshots.
- `Salesforce_Admin_Case_Studies.docx` - Reference curriculum document containing case details.

---

## 🛠️ The 14 Integrated Case Studies

1. **M1: ClearPath Learning** (Org Setup & Config)
2. **M2: PropNest Realty** (Security Access & Role Hierarchy)
3. **M3: MedConnect Clinics** (Relational Data Modeling)
4. **M4: FreshKart** (Bulk Data Migration & Dedup Rules)
5. **M5: TrustWealth Advisors** (Compliance Data Lockdown)
6. **M6: SteelPro Industries** (Approval Process Automation)
7. **M7: GreenRoots NGO** (Scheduled & Record-Triggered Flows)
8. **M8: CloudPilot SaaS** (Dynamic Executive Reporting & Analytics)
9. **M9: ShieldCover Insurance** (Sales Pipeline & Lead Conversion)
10. **M10: UrbanFix** (Service Cloud Omni-Channel Routing & SLA Escalation)
11. **M11: TalentBridge** (Data Cleanliness & Profile-Level security Audit)
12. **M12: SwiftMove Logistics** (Change Set Production Release Management)
13. **M13: StyleLoop Fashion** (Einstein AI, EAC & Prompt Builder Templates)
14. **M14: NovaCure Pharma** (End-to-End Pharma Rollout - Capstone)

---

## 🚀 How to View Locally
Open the `index.html` file in any modern web browser.

---

## 📈 System Design: Adding Future Case Studies
To add a new project in the future, simply open `projects-data.js`, navigate to the bottom of the `CASE_STUDIES` array, and paste a new JSON configuration object matching the schema guide provided at the top of the file. Save the file and refresh your browser. The portal will automatically render the card, add it to filters, and construct the dynamic tab pages!
