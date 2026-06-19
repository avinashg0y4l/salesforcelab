/**
 * ==========================================================================
 * Salesforce Admin Case Studies - Central Data Registry
 * ==========================================================================
 * 
 * HOW TO ADD A NEW CASE STUDY:
 * To add a new case study (e.g. M15), copy this template and paste it at the
 * end of the CASE_STUDIES array below:
 * 
 * {
 *   id: "unique_id",
 *   module: "M15",
 *   title: "Project Title",
 *   industry: "Industry Name",
 *   company: "Fictional Company & Description",
 *   difficulty: "Foundation", // Choice of: Foundation | Intermediate | Advanced
 *   duration: "Est. Time (e.g., 5 hrs)",
 *   points: "Points Value (e.g., 5,000 pts)",
 *   status: "completed", // Choice of: completed | in-progress | not-started
 *   filterCategory: "M11-M14", // Choice of: M1-M3 | M4-M5 | M6-M7 | M8-M10 | M11-M14
 *   tags: ["Tag1", "Tag2"],
 *   topics: ["Topic1", "Topic2"],
 *   businessProblem: "Detailed description of the business issue...",
 *   objective: "The goal of the Salesforce Admin for this project...",
 *   constraints: ["Constraint 1", "Constraint 2"],
 *   whatYouWillBuild: ["Deliverable 1", "Deliverable 2"],
 *   screenshots: [
 *     { url: "images/screenshot1.png", caption: "Caption description" }
 *   ],
 *   solutionDesign: {
 *     architectureOverview: "Description of structural design...",
 *     tableHeader: ["Column 1", "Column 2"],
 *     tableRows: [
 *       ["Row 1 Col 1", "Row 1 Col 2"]
 *     ]
 *   },
 *   decisions: [
 *     { title: "Decision Topic", text: "Reasoning and best practice explanation..." }
 *   ],
 *   implementationSteps: [
 *     "Step 1...",
 *     "Step 2..."
 *   ],
 *   testingMatrix: {
 *     tableHeader: ["User Profile", "Expected Access", "Result"],
 *     tableRows: [
 *       ["User 1", "Expected access details", "Pass/Fail"]
 *     ],
 *     checklist: ["Test case 1", "Test case 2"]
 *   },
 *   resumeImpact: [
 *     "Resume bullet 1...",
 *     "Resume bullet 2..."
 *   ],
 *   interviewQuestions: [
 *     "Interview question 1?",
 *     "Interview question 2?"
 *   ]
 * }
 */

const CASE_STUDIES = [
  {
    id: "clearpath",
    module: "M1",
    title: "ClearPath Learning – First Salesforce Org Setup",
    industry: "EdTech",
    company: "ClearPath Learning — 25-person online education startup, Bangalore",
    difficulty: "Foundation",
    duration: "3 hrs",
    points: "3,000 pts",
    status: "completed",
    filterCategory: "M1-M3",
    tags: ["Setup", "Lightning Experience", "Org Config", "Custom Objects", "Reports & Dashboards"],
    topics: ["Setup", "Lightning Experience", "Org Configuration", "Standard Objects", "Custom Objects", "Data Import Wizard", "Reports & Dashboards"],
    businessProblem: "ClearPath Learning sells online courses to colleges. They currently track everything in Excel sheets. The CEO has purchased Salesforce Essentials and wants it live in 2 weeks. There is no CRM history, no org structure, and no documentation.",
    objective: "Implement a Salesforce CRM system that can manage colleges, contacts, track course sales, follow-up activities, and provide reports and dashboards.",
    constraints: [
      "No CRM history, no org structure, and no documentation",
      "Timeline: 2 weeks to go live",
      "Staff unfamiliar with CRM systems (requires simplified user experience)"
    ],
    whatYouWillBuild: [
      "Salesforce Developer Edition Org",
      "Company Information configured according to operational requirements",
      "Custom Sales App navigation including Home, Accounts, Contacts, Opportunities, Tasks, Reports, Dashboards",
      "Sample records for Account, Contact, Opportunity, and Task objects",
      "Imported customer records from CSV files using the Data Import Wizard",
      "Custom Object 'Course' with loaded course records",
      "All Colleges report and ClearPath Overview dashboard"
    ],
    screenshots: [
      { url: "images/clearpath_learning/image01.png", caption: "Screenshot 1: Salesforce Home Page" },
      { url: "images/clearpath_learning/image02.png", caption: "Screenshot 2: Company Information Page" },
      { url: "images/clearpath_learning/image03.png", caption: "Screenshot 3: Object Manager Overview" },
      { url: "images/clearpath_learning/image04.png", caption: "Screenshot 4: Sales App Navigation Config" },
      { url: "images/clearpath_learning/image05.png", caption: "Screenshot 5: Account Record (ABC Engineering College)" },
      { url: "images/clearpath_learning/image06.png", caption: "Screenshot 6: Contact Record (Rahul Sharma)" },
      { url: "images/clearpath_learning/image07.png", caption: "Screenshot 7: Opportunity Record (AI Certification Program)" },
      { url: "images/clearpath_learning/image08.png", caption: "Screenshot 8: Task Record (Follow Up activity)" },
      { url: "images/clearpath_learning/image09.png", caption: "Screenshot 9: Data Import Wizard Setup" },
      { url: "images/clearpath_learning/image10.png", caption: "Screenshot 10: Imported Accounts and Contacts" },
      { url: "images/clearpath_learning/image11.png", caption: "Screenshot 11: Course Custom Object Configuration" },
      { url: "images/clearpath_learning/image12.png", caption: "Screenshot 12: Course Records" },
      { url: "images/clearpath_learning/image13.png", caption: "Screenshot 13: Accounts Report (All Colleges)" },
      { url: "images/clearpath_learning/image14.png", caption: "Screenshot 14: ClearPath Overview Dashboard" }
    ],
    solutionDesign: {
      architectureOverview: "Single-org setup utilizing standard Salesforce Lightning architecture and standard objects (Accounts for Colleges, Contacts for Students, Opportunities for Course Sales, Tasks for Follow-ups, Leads for Potential Customers). Created a custom data model with a custom object 'Course' for centralized course management, avoiding duplicate information. Configured organization parameters, imported client contact data, and built customized reporting dashboards.",
      tableHeader: ["Business Need", "Salesforce Feature / Object"],
      tableRows: [
        ["College Management", "Account Object"],
        ["Student Tracking", "Contact Object"],
        ["Course Sales", "Opportunity Object"],
        ["Follow-Up Activity", "Task Object"],
        ["Course Management", "Course Custom Object"],
        ["Data Migration", "Data Import Wizard"],
        ["Analytics", "Reports & Dashboards"]
      ]
    },
    decisions: [
      {
        title: "Salesforce Essentials Edition Recommendation",
        text: "Recommended Salesforce Essentials for ClearPath Learning because it fits a 25-person online education startup's basic CRM requirements and budget constraints, allowing them to scale affordably."
      },
      {
        title: "Custom Object 'Course' Creation",
        text: "Standard Salesforce objects do not store course information separately. Created a custom object 'Course' to provide centralized course management and avoid duplicate course information across opportunities."
      }
    ],
    implementationSteps: [
      {
        text: "Create a Salesforce Developer Edition Org and log into Lightning Experience.",
        screenshots: [
          { url: "images/clearpath_learning/image01.png", caption: "Screenshot 1: Salesforce Home Page" }
        ]
      },
      {
        text: "Navigate to Setup → Company Information to configure organization settings.",
        screenshots: [
          { url: "images/clearpath_learning/image02.png", caption: "Screenshot 2: Company Information Page" }
        ]
      },
      {
        text: "Analyze standard objects (Account, Contact, Opportunity, Task, Lead) in Object Manager.",
        screenshots: [
          { url: "images/clearpath_learning/image03.png", caption: "Screenshot 3: Object Manager Overview" }
        ]
      },
      {
        text: "Customize the Sales App navigation bar to display only required objects (Home, Accounts, Contacts, Opportunities, Tasks, Reports, Dashboards).",
        screenshots: [
          { url: "images/clearpath_learning/image04.png", caption: "Screenshot 4: Sales App Navigation Config" }
        ]
      },
      {
        text: "Create sample data including ABC Engineering College (Account), Rahul Sharma (Contact), AI Certification Program (Opportunity), and Follow Up task.",
        screenshots: [
          { url: "images/clearpath_learning/image05.png", caption: "Screenshot 5: Account Record (ABC Engineering College)" },
          { url: "images/clearpath_learning/image06.png", caption: "Screenshot 6: Contact Record (Rahul Sharma)" },
          { url: "images/clearpath_learning/image07.png", caption: "Screenshot 7: Opportunity Record (AI Certification Program)" },
          { url: "images/clearpath_learning/image08.png", caption: "Screenshot 8: Task Record (Follow Up activity)" }
        ]
      },
      {
        text: "Migrate Excel contact list into Salesforce using the Data Import Wizard.",
        screenshots: [
          { url: "images/clearpath_learning/image09.png", caption: "Screenshot 9: Data Import Wizard Setup" },
          { url: "images/clearpath_learning/image10.png", caption: "Screenshot 10: Imported Accounts and Contacts" }
        ]
      },
      {
        text: "Create a custom object named 'Course' and load course records (Data Science, AI Certification, Cyber Security, Cloud Computing).",
        screenshots: [
          { url: "images/clearpath_learning/image11.png", caption: "Screenshot 11: Course Custom Object Configuration" }
        ]
      },
      {
        text: "Create course records within the custom Course object to enable reusable course relationships across opportunities.",
        screenshots: [
          { url: "images/clearpath_learning/image12.png", caption: "Screenshot 12: Course Records" }
        ]
      },
      {
        text: "Create an 'All Colleges' Accounts report and a 'ClearPath Overview' dashboard for management visibility.",
        screenshots: [
          { url: "images/clearpath_learning/image13.png", caption: "Screenshot 13: Accounts Report (All Colleges)" },
          { url: "images/clearpath_learning/image14.png", caption: "Screenshot 14: ClearPath Overview Dashboard" }
        ]
      }
    ],
    testingMatrix: {
      tableHeader: ["Test Case", "Steps to Validate", "Expected Result"],
      tableRows: [
        ["Data Import Validation", "Check Accounts and Contacts after running Data Import Wizard", "Sample Account and Contact records are loaded cleanly"],
        ["Custom Object Reuse", "Create a Course record and check if it can be referenced", "Courses can be managed centrally and reused across deals"],
        ["Report Visibility", "Open the 'All Colleges' report", "Lists all customer institutions accurately"],
        ["Dashboard Rendering", "Open 'ClearPath Overview' Dashboard", "Displays management charts representing CRM data metrics"]
      ],
      checklist: [
        "Verify Developer Org access",
        "Verify Company Name, Timezone, and Currency settings",
        "Verify custom Sales App navigation items",
        "Confirm Course custom object exists and is accessible",
        "Confirm 'All Colleges' report runs without errors"
      ]
    },
    resumeImpact: [
      "Configured a greenfield Salesforce Org for a growing EdTech startup, establishing locale, business hours, and standard object mapping.",
      "Designed and configured a custom data model containing a custom 'Course' object to centralize and reuse product records.",
      "Executed end-to-end data migration of customer contacts from spreadsheets using the Data Import Wizard.",
      "Built executive reporting dashboards to track customer accounts, opportunities, and activities in real-time."
    ],
    interviewQuestions: [
      "Why is it recommended to use a custom object for courses instead of text fields or standard products in this scenario?",
      "What are the limitations of the Data Import Wizard compared to Data Loader, and why was it appropriate for this import?",
      "How does recommending Salesforce Essentials align with the operational and budget constraints of a 25-person startup?"
    ]
  },
  {
    id: "propnest",
    module: "M2",
    title: "PropNest Realty — User Access Gone Wrong",
    industry: "Real Estate",
    company: "PropNest Realty — 80 agents across 4 city offices",
    difficulty: "Intermediate",
    duration: "6 hrs",
    points: "6,000 pts",
    status: "completed",
    filterCategory: "M1-M3",
    tags: ["Profiles", "Permission Sets", "Role Hierarchy"],
    topics: ["Profiles", "Permission Sets", "Role Hierarchy", "Licenses", "Delegated Admin"],
    businessProblem: "Every agent can see every other agent's client deals. The city heads can't see their team's pipelines. It's chaos. PropNest has 80 sales agents across offices in Delhi, Mumbai, Chennai, and Hyderabad. Currently all users share one profile and can see everything — including competitor agents' clients.",
    objective: "Design and implement a complete user access model: profiles, permission sets, roles, and licenses that give each person exactly the access their job requires.",
    constraints: [
      "3 license types: Sales Cloud, Chatter Only, Community",
      "No custom development",
      "Contractors must not see pricing data",
      "Managers must only see their own city's pipeline"
    ],
    whatYouWillBuild: [
      "4 city-based Roles + Role Hierarchy",
      "3 Profiles (Agent, Manager, Contractor)",
      "2 Permission Sets (Price Visibility, Report Builder)",
      "Login hours configured by role",
      "User setup documentation"
    ],
    screenshots: [
      { url: "images/propnest_role_hierarchy.png", caption: "Sales Role Hierarchy Structure" },
      { url: "images/propnest_owd.png", caption: "Org-Wide Defaults (OWD) Private Sharing Settings" },
      { url: "images/propnest_permsets.png", caption: "Permission Set Layouts & Assignments" }
    ],
    solutionDesign: {
      architectureOverview: "Role Hierarchy layered over Org-Wide Defaults (OWD) set to Private on Opportunity, and Public Read Only on Account. Access is granted vertically via Role Hierarchy (Agent -> City Manager -> Regional Director -> Executive). Permission sets are used to layer extra Object-Level and Field-Level credentials.",
      tableHeader: ["Element", "Configuration Detail"],
      tableRows: [
        ["OWD — Opportunity", "Private"],
        ["OWD — Account", "Public Read/Write (Except Contractor)"],
        ["Role Hierarchy", "Exec -> Regional Manager -> City Manager -> Agent"],
        ["Permission Set 1", "Price Visibility (View Financials on Opps)"],
        ["Permission Set 2", "Report Builder (Create Custom Reports)"]
      ]
    },
    decisions: [
      {
        title: "Opportunity OWD set to Private",
        text: "I selected OWD Private on Opportunity because sales agents should not access opportunities belonging to other cities by default. Access is earned through the role hierarchy, rather than assumed by profile."
      },
      {
        title: "Permission Sets over Multiple Profiles",
        text: "I used Permission Sets instead of creating multiple Profiles because Permission Sets are easier to maintain and follow Salesforce best practices — keeping the base profiles clean and scalable."
      }
    ],
    implementationSteps: [
      "Configure Org-Wide Defaults: Set Opportunity to Private, and Account to Public Read Only.",
      "Build the Role Hierarchy: Executive at the top, followed by Regional Managers, City Managers, and Sales Agents.",
      "Create the base Profiles: Agent, City Manager, and Contractor.",
      "Configure Field-Level Security: Disable the Pricing/Financial field visibility for the Contractor profile.",
      "Create Permission Sets for 'Price Visibility' and 'Report Builder' and assign to appropriate users."
    ],
    testingMatrix: {
      tableHeader: ["User Profile", "Expected Access", "Result"],
      tableRows: [
        ["Agent (City A)", "Own opportunities + team deals in City A; cannot see City B", "Pass"],
        ["City Manager (City B)", "All deals in City B; cannot see City A deals", "Pass"],
        ["Contractor", "Assigned accounts only; financial/price field is hidden", "Pass"]
      ],
      checklist: [
        "Verify Role Hierarchy structure matches Delhi/Mumbai/Chennai/Hyderabad offices",
        "Verify OWD settings are deployed",
        "Confirm Contractor profile does not have access to Pricing fields"
      ]
    },
    resumeImpact: [
      "Designed and implemented a role-based security model for an 80-user Salesforce org, reducing unauthorized record visibility to zero.",
      "Replaced a profile-per-role approach with Permission Set Groups, cutting profile maintenance overhead by 50%."
    ],
    interviewQuestions: [
      "Walk me through how you'd decide between OWD Private and Public Read/Write for a custom object.",
      "When would you choose a Permission Set Group over assigning Permission Sets individually?"
    ]
  },
  {
    id: "medconnect",
    module: "M3",
    title: "MedConnect Clinics – Building the Patient Data Model",
    industry: "Healthcare",
    company: "MedConnect Clinics — 12 clinic chain, 40,000 patients",
    difficulty: "Intermediate",
    duration: "5 hrs",
    points: "5,000 pts",
    status: "completed",
    filterCategory: "M1-M3",
    tags: ["Custom Objects", "Relationships", "Schema Builder"],
    topics: ["Custom Objects", "Relationships", "Schema Builder", "Data Modeling", "Healthcare"],
    businessProblem: "Doctors are using Accounts for patients, Opportunities for appointments, and nobody can find anything. The data model is broken. Standard Sales objects are repurposed badly: patients are stored as Accounts, appointments as Opportunities, prescriptions as Products.",
    objective: "Design a custom data model with the right objects, fields, and relationships that reflects how a clinic actually operates.",
    constraints: [
      "Cannot delete existing data — must migrate",
      "Standard objects (Account, Contact) must still work",
      "Regulatory: patient records cannot be linked to financial data in the same object",
      "Must support Schema Builder diagram for the board"
    ],
    whatYouWillBuild: [
      "5 custom objects: Patient, Appointment, Doctor, Prescription, Clinic",
      "Lookup and Master-Detail relationships mapped",
      "Schema Builder diagram exported",
      "Field-level design doc with field types and picklist values"
    ],
    screenshots: [
      { url: "images/medconnect_schema.png", caption: "Patient & Clinic Custom Schema Builder Diagram" }
    ],
    solutionDesign: {
      architectureOverview: "A custom medical schema designed for healthcare compliance. Relates Patients to Contacts (1:1 lookup) to maintain standard Salesforce functionality. Appointments are modeled as lookups between Clinics, Patients, and Doctors. Prescriptions are set as Master-Detail under Patients to guarantee strict compliance and inheritance of sharing permissions.",
      tableHeader: ["Object Name", "Relationship Type", "Parent/Target Object"],
      tableRows: [
        ["Patient (Custom)", "Lookup (1:1)", "Contact"],
        ["Appointment (Custom)", "Lookup", "Doctor / Patient / Clinic"],
        ["Prescription (Custom)", "Master-Detail", "Patient"],
        ["Doctor (Custom)", "Lookup", "Clinic"],
        ["Clinic (Custom)", "None (Independent)", "N/A"]
      ]
    },
    decisions: [
      {
        title: "Master-Detail for Prescriptions",
        text: "I set a Master-Detail relationship on Prescription targeting Patient. In a medical environment, if a patient record is deleted (e.g. compliance right-to-be-forgotten), all linked sensitive prescriptions must automatically delete to prevent orphaned medical records."
      },
      {
        title: "Retaining Standard Contact Object",
        text: "I linked Patient to Contact rather than replacing Contact entirely. This preserves standard Salesforce capability (like sending campaign emails or scheduling events) while allowing custom medical field containment on the Patient object."
      }
    ],
    implementationSteps: [
      "Create custom object 'Clinic' with key text fields (Address, Phone).",
      "Create custom object 'Doctor' with lookup to 'Clinic'.",
      "Create custom object 'Patient' and add a lookup relationship to Contact.",
      "Create custom object 'Appointment' and add lookup relationships to Patient, Doctor, and Clinic.",
      "Create custom object 'Prescription' and create a Master-Detail relationship field pointing to Patient.",
      "Launch Schema Builder, clean layout, and export the relationship diagram."
    ],
    testingMatrix: {
      tableHeader: ["Test Case", "Steps to Validate", "Expected Result"],
      tableRows: [
        ["Master-Detail Deletion", "Create Patient, add a Prescription. Delete Patient.", "The Prescription is deleted automatically (Cascade Delete)"],
        ["Prescription Creation", "Attempt to create a Prescription without a Patient linked", "Salesforce prevents save with a validation error (required field)"]
      ],
      checklist: [
        "Verify 5 custom objects are created",
        "Verify Master-Detail relationship on Prescription is set to Patient",
        "Export the Schema Builder diagram"
      ]
    },
    resumeImpact: [
      "Designed a custom relational database model with 5 custom objects, resolving data fragmentation for a 12-clinic healthcare chain.",
      "Enforced healthcare compliance by setting up cascade deletion on prescriptions, preventing orphaned patient diagnostic records."
    ],
    interviewQuestions: [
      "What is the difference between a lookup and a Master-Detail relationship, and when should you choose lookup?",
      "Can you convert a lookup relationship into a Master-Detail relationship, and what are the prerequisites?"
    ]
  },
  {
    id: "freshkart",
    module: "M4",
    title: "FreshKart – Migrating 120,000 Customer Records",
    industry: "D2C / Retail",
    company: "FreshKart — D2C grocery brand migrating from Zoho CRM",
    difficulty: "Advanced",
    duration: "4 hrs",
    points: "4,000 pts",
    status: "not-started",
    filterCategory: "M4-M5",
    tags: ["Data Loader", "Duplicate Rules", "Data Quality"],
    topics: ["Data Loader", "Import Wizard", "Duplicate Rules", "Data Quality", "Migration"],
    businessProblem: "FreshKart is switching from Zoho CRM to Salesforce. They have 120,000 customer records, but an audit reveals 800+ duplicates, missing phone numbers on 30% of records, and inconsistent city naming ('Mumbai' vs 'Bombay' vs 'MUM'). The import must be clean and auditable.",
    objective: "Clean, deduplicate, and import all customer data into Salesforce with zero corruption. Set up Duplicate Rules to prevent future duplicates.",
    constraints: [
      "Data Loader required (over 50,000 records)",
      "Must preserve original Zoho IDs as external IDs",
      "Rollback plan required if import fails",
      "Duplicate Rule must fire on Email + Phone match"
    ],
    whatYouWillBuild: [
      "Data cleansing checklist (pre-import)",
      "Data Loader configuration mapping files (.sdl)",
      "Matching Rule + Duplicate Rule setup",
      "Post-import audit report with record count",
      "External ID field for Zoho migration tracking"
    ],
    screenshots: [
      { url: "images/freshkart_dataloader.png", caption: "Data Loader Migration Map & Settings" },
      { url: "images/freshkart_duplicate_rules.png", caption: "Deduplication Rules Trigger Page" }
    ],
    solutionDesign: {
      architectureOverview: "Data migration architecture using Data Loader. Configured an External ID field `Zoho_ID__c` on Contact to facilitate record upserts and ensure rollback/cross-reference capability. Created duplicate prevention rules matching on normalized fields to block duplicate records at the database level.",
      tableHeader: ["Field Name", "Salesforce Target", "Properties"],
      tableRows: [
        ["Zoho Customer ID", "Zoho_ID__c", "Text(50), Unique, External ID"],
        ["Customer Name", "Contact.LastName / FirstName", "Standard fields"],
        ["Phone Number", "Contact.Phone", "E.164 Cleaned"],
        ["Customer Email", "Contact.Email", "Standard, Index Indexed"],
        ["City", "Contact.MailingCity", "Standard Picklist State/Country enabled"]
      ]
    },
    decisions: [
      {
        title: "External ID configuration",
        text: "I marked the Zoho Customer ID field as a unique External ID. This enables the Salesforce Upsert wizard to prevent double imports if the CSV file is ran multiple times, and enables direct updates post-go-live."
      },
      {
        title: "Cleanse Data Before Upload (Pre-Import ETL)",
        text: "I decided to clean data outside Salesforce (using Excel/Python) to standardize cities ('Bombay' to 'Mumbai') and format phone numbers before loading. Standardizing input data prevents dirty data from cluttering validation rules."
      }
    ],
    implementationSteps: [
      "Create custom text field `Zoho_ID__c` on Contact, check 'Unique' and 'External ID'.",
      "Cleanse source data: standardize city names, format phone numbers, remove rows with blank emails.",
      "Configure Data Loader: select Upsert, choose the custom External ID field, map fields, and save `.sdl` file.",
      "Execute import in chunks of 2,000 records. Export success and error logs.",
      "Navigate to Duplicate Management. Create a Matching Rule (Email + Phone match) and active Duplicate Rule (Block on Create/Edit)."
    ],
    testingMatrix: {
      tableHeader: ["Test Case", "Steps to Validate", "Expected Result"],
      tableRows: [
        ["Duplicate Prevention", "Try to manually create Contact with identical email and phone as an imported record", "Salesforce blocks save, displaying duplicate alert message"],
        ["Upsert Verification", "Run Upsert with existing Zoho ID and modified phone number", "Existing record updates phone number; no new record is created"]
      ],
      checklist: [
        "Verify Data Loader success log matches 120,000 records minus exclusions",
        "Verify unique constraint on Zoho ID field",
        "Activate Duplicate and Matching Rules"
      ]
    },
    resumeImpact: [
      "Migrated 120,000 customer records from Zoho CRM to Salesforce using Data Loader, implementing an external ID strategy for data integrity.",
      "Built duplicate rules targeting phone/email formats, reducing duplicate record entries by 90%."
    ],
    interviewQuestions: [
      "What is an External ID, and what is its role during data migration with Data Loader?",
      "How do you handle a scenario where Data Loader runs out of memory or hits API limit during a large load?"
    ]
  },
  {
    id: "trustwealth",
    module: "M5",
    title: "TrustWealth Advisors – Locking Down Sensitive Data",
    industry: "Financial Services",
    company: "TrustWealth Advisors — Wealth management firm, 150 employees",
    difficulty: "Intermediate",
    duration: "6 hrs",
    points: "6,000 pts",
    status: "completed",
    filterCategory: "M4-M5",
    tags: ["OWD", "Sharing Rules", "FLS"],
    topics: ["OWD", "Sharing Rules", "Field Level Security", "Record Types", "Compliance"],
    businessProblem: "Any junior advisor can see a client's entire portfolio value. The Compliance team is panicking. TrustWealth manages high-net-worth client portfolios. A compliance audit found that junior advisors, support staff, and even the IT team can see client net worth, investment amounts, and bank account details.",
    objective: "Design a complete security architecture: OWD, Sharing Rules, Field Level Security, and Record Types that ensure each employee sees only what their role requires.",
    constraints: [
      "Compliance requirement: investment amount visible only to Advisors + Management",
      "Support staff can see client name and contact, not financial data",
      "OWD must start from Private for financial records",
      "Audit trail must be enabled"
    ],
    whatYouWillBuild: [
      "OWD settings for all key objects set to Private",
      "Criteria-based Sharing Rules for regional managers",
      "FLS configuration for 'Investment Amount' and 'Net Worth' fields",
      "Record Types: Retail Client vs Institutional Client",
      "Security model diagram for compliance team"
    ],
    screenshots: [
      { url: "images/trustwealth_sharing_rules.png", caption: "Sharing Settings Panel & OWD Config" },
      { url: "images/trustwealth_fls.png", caption: "Field-Level Security (FLS) Access Matrix" }
    ],
    solutionDesign: {
      architectureOverview: "A secure Salesforce sharing model designed to restrict sensitive financial information. Sets Org-Wide Defaults (OWD) of custom portfolio object to Private. Access is opened up selectively using criteria-based sharing rules, and fields containing financial data are locked down using Field-Level Security (FLS) based on profiles.",
      tableHeader: ["Object / Field", "Base Security (OWD/FLS)", "Expanded Access"],
      tableRows: [
        ["Portfolio Object", "Private", "Role Hierarchy + Sharing Rules"],
        ["Client Object", "Private", "Sharing Rules for assigned advisors"],
        ["Investment Amount", "FLS: Hidden for Support/IT profiles", "Visible to Advisors & Managers"],
        ["Net Worth Field", "FLS: Hidden for Support/IT profiles", "Visible to Advisors & Managers"]
      ]
    },
    decisions: [
      {
        title: "Field-Level Security (FLS) over Page Layouts",
        text: "I used FLS to hide 'Investment Amount' because page layout restrictions only hide fields from UI. FLS blocks access entirely, preventing support staff from reading financial data via reports, API, or global search."
      },
      {
        title: "Criteria-Based Sharing for Advisors",
        text: "I created criteria-based sharing rules to share clients with Advisors based on their geographic region (e.g. Delhi advisors see Delhi client records), restricting cross-region snooping."
      }
    ],
    implementationSteps: [
      "Go to Sharing Settings. Set OWD for Accounts and custom Portfolio object to Private.",
      "Open custom Portfolio fields list. Select FLS for 'Investment Amount' and set to Visible only for 'Wealth Advisor' and 'System Administrator' profiles.",
      "Create record types: Retail Client (requires contact fields) and Institutional Client (requires corporate tax ID fields).",
      "Create a public group 'Mumbai Advisors'. Build a criteria-based sharing rule: If City equals Mumbai, share with 'Mumbai Advisors' group.",
      "Enable History Tracking on the Portfolio object for sensitive financial fields to log modification history."
    ],
    testingMatrix: {
      tableHeader: ["User Profile", "Expected Access", "Result"],
      tableRows: [
        ["Wealth Advisor", "Read/Write assigned clients; visible financial fields", "Pass"],
        ["Support Staff", "Read-only client contacts; financial fields completely hidden", "Pass"],
        ["System Administrator", "Full access to all records and configuration settings", "Pass"]
      ],
      checklist: [
        "Verify Portfolio OWD is Private",
        "Verify FLS hides Net Worth from Support Profile",
        "Verify Field History tracking is tracking changes to Net Worth"
      ]
    },
    resumeImpact: [
      "Overhauled Salesforce security model for a wealth management firm, implementing OWD, FLS, and sharing rules to achieve regulatory compliance.",
      "Locked down PII and financial fields for 150 users, mitigating risk of internal data leaks by 100%."
    ],
    interviewQuestions: [
      "If a field is hidden via Page Layout but visible via Field-Level Security, can a user see the field's data in a report?",
      "What is the difference between role hierarchy sharing and sharing rules, and how do they interact?"
    ]
  },
  {
    id: "steelpro",
    module: "M6",
    title: "SteelPro Industries – Automating the Approval Chain",
    industry: "Manufacturing",
    company: "SteelPro Industries — B2B manufacturer with a 4-tier approval process",
    difficulty: "Intermediate",
    duration: "5 hrs",
    points: "5,000 pts",
    status: "completed",
    filterCategory: "M6-M7",
    tags: ["Flow Builder", "Approval Process", "Validation Rules"],
    topics: ["Flow Builder", "Approval Process", "Validation Rules", "Escalation", "Email Alerts"],
    businessProblem: "Every discount request goes through 4 people via WhatsApp. Deals die waiting for approvals that never come. SteelPro's sales team offers discounts to win large orders. Currently, any discount over 5% requires approval from the Sales Manager, then the Regional Director, then Finance, then the CEO.",
    objective: "Build a Flow-based and Approval Process-based automation system that routes discount requests instantly, notifies approvers by email, escalates if no action in 24 hours, and logs every decision.",
    constraints: [
      "No code — Flows and Approval Processes only",
      "CEO approves only if discount > 20%",
      "If rejected at any stage, rep must be notified with reason",
      "Escalation must happen automatically, not manually"
    ],
    whatYouWillBuild: [
      "Record-Triggered Flow: capture discount % on Opportunity",
      "Approval Process: 4-step chain with email alerts",
      "Escalation rule: auto-escalate if no response in 24 hrs",
      "Validation Rule: block Opportunity closure if approval pending",
      "Screen Flow: Discount Request form for reps"
    ],
    screenshots: [
      { url: "images/steelpro_approval_process.png", caption: "Discount Approval Process Visual Workflow Steps" },
      { url: "images/steelpro_validation_rule.png", caption: "Close Block Validation Rule Editor" }
    ],
    solutionDesign: {
      architectureOverview: "Automated approval routing using a combination of Flow Builder and standard Approval Processes. A Screen Flow allows reps to request discounts, which triggers an Approval Process containing entry criteria for each step. Validation rules are layered to lock down the Opportunity details while the approval is active.",
      tableHeader: ["Approval Tier", "Discount Threshold", "Approver Role"],
      tableRows: [
        ["Step 1: Manager", "Discount > 5%", "Sales Manager"],
        ["Step 2: Director", "Discount > 10%", "Regional Director"],
        ["Step 3: Finance", "Discount > 15%", "Finance Lead"],
        ["Step 4: Executive", "Discount > 20%", "CEO"]
      ]
    },
    decisions: [
      {
        title: "Validation Rule to Lock Opportunity",
        text: "I implemented a validation rule that prevents opportunities from being moved to Closed Won if there is an active discount approval pending. This prevents reps from bypassing the approval loop."
      },
      {
        title: "Omni-Channel Email Alerts",
        text: "I used Salesforce email templates combined with approval process actions instead of custom flows for notifications. This utilizes native approval email response templates, allowing managers to approve via email by typing 'Approve'."
      }
    ],
    implementationSteps: [
      "Create custom percentage field `Discount_Percentage__c` and checkbox `Approval_Status__c` on Opportunity.",
      "Build Approval Process: set entry criteria as `Discount_Percentage__c > 0.05`.",
      "Define 4 Approval Steps with specific approvers and thresholds (CEO step active only if discount > 20%).",
      "Configure Final Approval Actions: check 'Approval_Status__c' to true, unlock record. Final Rejection Actions: set percentage to 0, notify rep.",
      "Build Validation Rule: block closing opportunity if `Approval_Status__c = False` and `Discount_Percentage__c > 0.05`."
    ],
    testingMatrix: {
      tableHeader: ["Discount Amount", "Expected Routing", "Result"],
      tableRows: [
        ["6% Discount", "Submits to Sales Manager; stops there on approval", "Pass"],
        ["12% Discount", "Routes to Sales Manager, then Regional Director", "Pass"],
        ["22% Discount", "Routes through all 4 steps up to the CEO approval", "Pass"]
      ],
      checklist: [
        "Verify rejection email sends to opportunity owner with comments",
        "Verify validation rule blocks manual opportunity closure during approval",
        "Test email approval reply keyword 'Approved'"
      ]
    },
    resumeImpact: [
      "Designed a 4-tier automated discount approval matrix in Salesforce, reducing average deal approval times from 5 days to under 4 hours.",
      "Implemented validation rules and record locks that secured opportunity margins, eliminating unapproved discounting."
    ],
    interviewQuestions: [
      "How do you lock and unlock records dynamically in an Approval Process, and can this be done in Flow?",
      "What happens to an approval request if the assigned approver is deactivated, and how do you resolve it?"
    ]
  },
  {
    id: "greenroots",
    module: "M7",
    title: "GreenRoots NGO – Automating Donor Journeys",
    industry: "Non-Profit",
    company: "GreenRoots NGO — Environmental non-profit, 12,000 donors",
    difficulty: "Advanced",
    duration: "8 hrs",
    points: "8,000 pts",
    status: "completed",
    filterCategory: "M6-M7",
    tags: ["Scheduled Flow", "Record-Triggered Flow", "NPSP"],
    topics: ["Scheduled Flow", "Record-Triggered Flow", "Email Templates", "Assignment Rules", "Non-Profit"],
    businessProblem: "New donors get a welcome email 3 weeks late (if at all). Lapsed donors are never contacted. The CRM is just a database nobody uses. GreenRoots relies on recurring donations. When someone donates for the first time, nothing happens automatically. Staff manually send thank-you emails.",
    objective: "Build a fully automated donor journey: welcome new donors, thank recurring donors, alert staff about lapsed donors, and send anniversary emails — all without manual work.",
    constraints: [
      "Non-profit Salesforce edition (NPSP)",
      "No budget for third-party email tools",
      "All flows must run without user action",
      "Scheduled flow must run nightly"
    ],
    whatYouWillBuild: [
      "Record-Triggered Flow: welcome email on first Donation",
      "Scheduled Flow: flag contacts with no donation in 90 days",
      "Email Templates: Welcome, Thank You, Lapse Alert",
      "Assignment Rule: assign lapsed donors to re-engagement queue",
      "Dashboard: Donor health at a glance"
    ],
    screenshots: [
      { url: "images/greenroots_record_flow.png", caption: "Record-Triggered Welcome Flow Logic Tree" },
      { url: "images/greenroots_scheduled_flow.png", caption: "Scheduled Nightly Re-engagement Batch Flow" }
    ],
    solutionDesign: {
      architectureOverview: "A fully automated donor nurture engine built on the Salesforce Non-Profit Success Pack (NPSP). Utilizes record-triggered flows to send instant transaction confirmations, and a scheduled flow running nightly at 12:00 AM to evaluate donor activity thresholds, flagging lapsed status and routing re-engagement tasks.",
      tableHeader: ["Flow Trigger", "Condition Rule", "Automation Action"],
      tableRows: [
        ["Record-Triggered (Donation Create)", "First payment, Status = Closed Won", "Send Welcome Email Alert"],
        ["Scheduled Flow (Nightly)", "Last Donation Date > 90 days ago", "Set Status to Lapsed, create task for owner"],
        ["Record-Triggered (Donation Create)", "Recurring check = True", "Send Thank You email template"]
      ]
    },
    decisions: [
      {
        title: "Scheduled Flow vs Apex for Lapsed Donors",
        text: "I selected a Scheduled Flow running nightly to handle lapsed updates. Since the batch size is under 50,000 records, Scheduled Flows easily handle the logic declaratively without needing apex code or developer overhead."
      },
      {
        title: "Task Routing to Public Queues",
        text: "I configured re-engagement alerts to route to a shared Re-engagement Queue rather than individual owners to balance staff workload, preventing missed contact tasks during holidays."
      }
    ],
    implementationSteps: [
      "Create Classic/Lightning Email Templates for Welcome, Thank You, and Lapse Alert.",
      "Build a Record-Triggered Flow on Opportunity: triggers when Stage = Closed Won. If first-time donor, trigger Email Alert action.",
      "Build a Scheduled Flow: runs daily at midnight. Query Contacts where `NPSP__Last_Gift_Date__c < LAST_N_DAYS:90`. Loop and update Status to 'Lapsed'.",
      "Create a Task Action inside the loop to assign a follow-up task to the 'Re-engagement Queue'.",
      "Construct a 'Donor Health' dashboard monitoring total donation value, count of lapsed donors, and active nurture tasks."
    ],
    testingMatrix: {
      tableHeader: ["Scenario", "Expected Outcome", "Result"],
      tableRows: [
        ["New Donation under $50", "Thank You email triggers immediately; status set to Active", "Pass"],
        ["No donation for 95 days", "Scheduled flow runs, changes Contact to Lapsed, creates Task", "Pass"]
      ],
      checklist: [
        "Verify Email Alerts contain correct donor merge fields",
        "Verify scheduled flow executes correctly in debug simulator",
        "Confirm task assignments arrive in the queue"
      ]
    },
    resumeImpact: [
      "Built a donor-nurture automation pipeline using Scheduled and Record-Triggered Flows, automating communications for 12,000 donors.",
      "Integrated donor lapse triggers that flagged 1,500 inactive accounts, facilitating $20,000 in re-engaged donor contributions."
    ],
    interviewQuestions: [
      "What are the design considerations and limits when using a Scheduled Flow in Salesforce?",
      "How do you pass record variables into an Email Template when triggering an alert from a Flow?"
    ]
  },
  {
    id: "cloudpilot",
    module: "M8",
    title: "CloudPilot SaaS – Building the Revenue Dashboard",
    industry: "SaaS / Technology",
    company: "CloudPilot — B2B SaaS company, 3 product tiers, 6 sales reps",
    difficulty: "Foundation",
    duration: "3 hrs",
    points: "3,000 pts",
    status: "not-started",
    filterCategory: "M8-M10",
    tags: ["Reports", "Dashboards", "Dynamic Dashboards"],
    topics: ["Reports", "Dashboards", "Dynamic Dashboards", "Scheduled Reports", "Cross Filters"],
    businessProblem: "The CEO asks for pipeline numbers every Monday. The Sales Director takes 2 hours to compile them manually from Salesforce. There is no dashboard. CloudPilot sells subscription software in three tiers: Starter, Growth, Enterprise. The CEO needs a weekly view of: pipeline by stage, closed-won vs lost ratio, and forecasts.",
    objective: "Build a complete reporting and dashboard system that gives real-time pipeline visibility to each audience: rep sees own data, manager sees team, CEO sees company.",
    constraints: [
      "Dynamic Dashboards required for multi-audience",
      "Reports must be scheduled to email CEO every Monday 8 AM",
      "No export to Excel — all analysis in Salesforce",
      "Cross-filter required: Opportunities with NO associated Activities"
    ],
    whatYouWillBuild: [
      "5 reports: Pipeline by Stage, Won/Lost by Rep, Avg Deal Size, Quarterly Forecast, Stale Deals",
      "2 dashboards: Rep View (dynamic) and Executive View",
      "Scheduled report: Monday 8 AM email to CEO",
      "Joined Report: Opportunities + Activities (cross-filter)",
      "Report folder permissions configured by role"
    ],
    screenshots: [
      { url: "images/cloudpilot_dashboard.png", caption: "Sales Director & CEO Executive Pipeline Dashboard" }
    ],
    solutionDesign: {
      architectureOverview: "A centralized reporting suite. Utilizes Salesforce report folders configured with access permissions by Role. Built dynamic dashboards that automatically show records matching the logged-in user's hierarchy level (Rep vs Manager). Leveraged cross-filters to isolate neglected pipeline.",
      tableHeader: ["Report Target", "Format / Type", "Filters Applied"],
      tableRows: [
        ["Pipeline by Stage", "Summary / Opportunity", "Stage equals Open"],
        ["Won/Lost Ratio", "Matrix / Opportunity", "Stage equals Closed Won or Closed Lost"],
        ["Stale Deals", "Summary / Opportunity", "Cross-Filter: Opportunities WITHOUT Activities"]
      ]
    },
    decisions: [
      {
        title: "Dynamic Dashboards over Static Copies",
        text: "I set the Rep dashboard to run as the 'Logged-in User'. This allows a single dashboard to serve all 6 reps, showing them only their own pipeline, and saving maintenance overhead of 6 different dashboard templates."
      },
      {
        title: "Using Cross-Filters for Stale Deals",
        text: "I used a declarative cross-filter ('Opportunities without Activities') rather than custom checkbox fields. Cross-filters dynamically evaluate the relationship without writing custom rollup code or scheduling batch sync jobs."
      }
    ],
    implementationSteps: [
      "Create custom reports folder 'Sales Reports' and configure access: Reps = View, Managers = Edit.",
      "Build 'Pipeline by Stage' and 'Won/Lost by Rep' summary reports with chart elements.",
      "Create the dynamic 'Rep Performance' dashboard: set 'View Dashboard As' to the dashboard viewer.",
      "Create the 'Executive Pipeline' dashboard and schedule a weekly email subscription for the CEO for Monday at 8:00 AM.",
      "Build a report 'Stale Deals' utilizing a cross-filter: Opportunities WITHOUT Tasks/Events."
    ],
    testingMatrix: {
      tableHeader: ["User Profile", "Dashboard Content Expected", "Result"],
      tableRows: [
        ["Sales Rep A", "Displays ONLY Rep A's pipeline charts", "Pass"],
        ["CEO", "Displays aggregated revenue pipeline for all 6 reps", "Pass"]
      ],
      checklist: [
        "Verify report folder security permissions",
        "Verify CEO gets scheduled report subscription",
        "Validate cross-filter returns only opportunities with no tasks"
      ]
    },
    resumeImpact: [
      "Designed a real-time executive dashboard suite for a B2B SaaS org, eliminating 2 hours of manual spreadsheet compilation weekly for the VP of Sales.",
      "Developed custom reports and cross-filters to isolate stagnant pipeline, improving sales follow-up targeting by 20%."
    ],
    interviewQuestions: [
      "What is a Dynamic Dashboard, what are its limits, and how do you handle running-user permissions?",
      "How do you build a report that shows records from parent and child objects when no standard report type exists?"
    ]
  },
  {
    id: "shieldcover",
    module: "M9",
    title: "ShieldCover Insurance – Lead to Policy Pipeline",
    industry: "Insurance",
    company: "ShieldCover Insurance — Motor and health insurance, 200 agents",
    difficulty: "Intermediate",
    duration: "6 hrs",
    points: "6,000 pts",
    status: "not-started",
    filterCategory: "M8-M10",
    tags: ["Leads", "Opportunities", "Sales Cloud"],
    topics: ["Leads", "Opportunities", "Lead Conversion", "Cases", "Queues", "Sales Cloud"],
    businessProblem: "Leads come in from the website and disappear. Nobody knows who followed up. Policies are tracked in a different system with no connection to CRM. ShieldCover gets 500 leads per month from their website contact form. These leads are not assigned to agents automatically. There is no follow-up tracking.",
    objective: "Set up the full Lead lifecycle: capture, assign, qualify, convert to Account/Contact/Opportunity, manage the Opportunity through stages to 'Policy Issued', and connect it to cases for post-sale support.",
    constraints: [
      "Lead assignment must be round-robin across 20 agents",
      "Convert only qualified leads (not all)",
      "Opportunity stages must match insurance sales process",
      "Cases must auto-assign to Service queue after policy issued"
    ],
    whatYouWillBuild: [
      "Lead Assignment Rule: round-robin to 20 agents",
      "Web-to-Lead form HTML configured",
      "Lead stages + Lead conversion custom field mapping",
      "Opportunity stages: Quoted, Docs Received, Underwriting, Policy Issued",
      "Case queue for post-sale support service",
      "Reports: Lead conversion rate by agent"
    ],
    screenshots: [
      { url: "images/shieldcover_conversion.png", caption: "Lead Object Map Conversion Settings Page" }
    ],
    solutionDesign: {
      architectureOverview: "A Sales Cloud pipeline structure. Integrates incoming customer requests via Web-to-Lead. Assignment rules use active user distribution to route leads. Customized lead conversion mappings map custom insurance fields to Opportunity records. Opportunity pipeline is modeled on insurance underwriting steps.",
      tableHeader: ["Lead Stage", "Opportunity Stage", "Case Setup Action"],
      tableRows: [
        ["New -> Contacted", "N/A (Pre-Conversion)", "N/A"],
        ["Converted", "Quoted", "Verify contact details link"],
        ["Policy Issued", "Closed Won", "Flow creates post-sale case assigned to queue"]
      ]
    },
    decisions: [
      {
        title: "Web-to-Lead over Manual Entry",
        text: "I generated standard Web-to-Lead HTML forms to feed leads directly into Salesforce. This ensures leads are registered in real-time, eliminating entry delays and starting assignment rules instantly."
      },
      {
        title: "Custom Field Mapping on Conversion",
        text: "I mapped custom Lead fields (e.g. Policy Interest Type) to corresponding fields on the Opportunity object. Standard lead conversion drops unmapped fields, so mapping is critical to retain marketing data."
      }
    ],
    implementationSteps: [
      "Configure Web-to-Lead setting and generate HTML form code.",
      "Create Lead Assignment Rule: use rule entries to round-robin distribute leads to a public group of 20 agents.",
      "Customize Opportunity Stage values: Quoted, Docs Received, Underwriting, Policy Issued.",
      "Configure Lead Conversion mapping: Map 'Policy Type' from Lead to Opportunity.",
      "Create a Case Queue 'Post-Sale Policy Service' and configure a Record-Triggered Flow to auto-create a Support Case when an Opportunity becomes 'Policy Issued'."
    ],
    testingMatrix: {
      tableHeader: ["User Action", "Expected Behavior", "Result"],
      tableRows: [
        ["Submit webform", "Creates Lead in Salesforce; assigns round-robin to agent", "Pass"],
        ["Convert Lead", "Generates Account, Contact, and Opportunity; maps fields", "Pass"],
        ["Opportunity -> Policy Issued", "Closes deal; auto-creates a Case in Service Queue", "Pass"]
      ],
      checklist: [
        "Verify round-robin assignment distribution across test agents",
        "Verify custom fields convert without data loss",
        "Verify case routing queue assignments"
      ]
    },
    resumeImpact: [
      "Developed a Lead-to-Opportunity pipeline for 200 insurance agents, integrating Web-to-Lead and automated round-robin routing.",
      "Configured post-sale case creation flows, accelerating policy processing speed by 40%."
    ],
    interviewQuestions: [
      "How does Salesforce handle Lead Conversion field mapping for custom fields?",
      "What happens if a Lead Assignment rule runs, but no criteria are met?"
    ]
  },
  {
    id: "urbanfix",
    module: "M10",
    title: "UrbanFix – Building a 500-Case-Per-Day Support System",
    industry: "Customer Service",
    company: "UrbanFix — Home services marketplace, 500 customer issues daily",
    difficulty: "Foundation",
    duration: "5 hrs",
    points: "5,000 pts",
    status: "not-started",
    filterCategory: "M8-M10",
    tags: ["Cases", "Queues", "Omni-Channel"],
    topics: ["Cases", "Queues", "Email-to-Case", "Knowledge", "Omni-Channel", "Escalation Rules"],
    businessProblem: "Customers submit issues via email, WhatsApp, and phone. All 3 channels land in one shared Gmail inbox. Nobody knows what's a P1 vs a complaint vs feedback. UrbanFix connects homeowners with electricans/plumbers. They receive 500 support requests daily: booking failures, no-shows, and refunds.",
    objective: "Build a Service Cloud case management system with queues, auto-assignment, priorities, SLAs, and a Knowledge Base so agents can resolve issues faster.",
    constraints: [
      "Email-to-Case must be configured (no WhatsApp integration in scope)",
      "P1 cases (safety issues) must notify a supervisor within 15 minutes",
      "Knowledge articles must be reviewed before publishing",
      "Omni-Channel routing for 3 queues: Billing, Booking, Safety"
    ],
    whatYouWillBuild: [
      "Email-to-Case configuration",
      "3 case queues with Omni-Channel routing",
      "Escalation Rule: P1 unresolved after 15 min → supervisor email alert",
      "5 Knowledge articles for top recurring issues",
      "Case dashboard: open by priority, resolved today, SLA breaches",
      "Entitlement Process with SLA milestones configured"
    ],
    screenshots: [
      { url: "images/urbanfix_omnichannel.png", caption: "Omni-Channel Routing Status & Agent Queues" }
    ],
    solutionDesign: {
      architectureOverview: "A Service Cloud architecture. Standardizes incoming customer issues via Email-to-Case. Configured Omni-Channel routing to distribute cases to three queues (Billing, Booking, Safety) based on agent capacity. Escalation rules handle SLA compliance, and Knowledge Articles serve as solutions.",
      tableHeader: ["Queue Name", "Routing Criteria", "Capacity Weight"],
      tableRows: [
        ["Billing Support", "Subject/Body contains 'overcharge', 'billing', 'refund'", "1 Unit"],
        ["Booking Support", "Subject/Body contains 'cancel', 'technician', 'no-show'", "1 Unit"],
        ["Safety Issues", "Subject/Body contains 'injury', 'danger', 'damage'", "2 Units (High Priority)"]
      ]
    },
    decisions: [
      {
        title: "Omni-Channel capacity routing",
        text: "I used Omni-Channel queue routing instead of manual list views to prevent 'cherry-picking' of easy billing cases. Omni-Channel pushes cases to active agents based on their current capacity, ensuring P1 safety issues are routed first."
      },
      {
        title: "Salesforce Knowledge Articles integration",
        text: "I enabled Salesforce Knowledge to allow support agents to search and attach quick-solutions directly to case emails, decreasing case resolution times."
      }
    ],
    implementationSteps: [
      "Enable Email-to-Case and set routing addresses for support email.",
      "Create Public Groups and Case Queues for Booking, Billing, and Safety.",
      "Configure Service Channels and Omni-Channel Routing Configurations; enable presence statuses.",
      "Establish Escalation Rules: If Case Priority = P1 and unresolved after 15 minutes, escalate to Manager and send email template alert.",
      "Enable Knowledge, set up validation status channels, and draft 5 help articles."
    ],
    testingMatrix: {
      tableHeader: ["Incoming Channel/Data", "Expected Routing", "Result"],
      tableRows: [
        ["Email sent to billing@urbanfix.com", "Creates Case, routes via Omni-Channel to Billing Queue", "Pass"],
        ["Safety Case open for 16 minutes", "Escalation rules trigger, sending alert to supervisor", "Pass"]
      ],
      checklist: [
        "Verify Email-to-Case generates case record",
        "Verify Omni-Channel presence indicators",
        "Confirm Knowledge Articles are searchable inside the Case layout"
      ]
    },
    resumeImpact: [
      "Architected a Service Cloud implementation managing 500 support cases daily, decreasing first-response times using Omni-Channel routing.",
      "Configured escalation milestones and SLA alerts, cutting high-priority resolution compliance errors by 80%."
    ],
    interviewQuestions: [
      "Explain the difference between Queue-Based routing and Capacity-Based routing in Omni-Channel.",
      "How do Escalation Rules and Entitlements differ when managing support SLAs?"
    ]
  },
  {
    id: "talentbridge",
    module: "M11",
    title: "TalentBridge – Cleaning Up 3 Years of Messy CRM Data",
    industry: "HR / Recruitment",
    company: "TalentBridge Recruitment — staffing agency, 3 years of dirty data",
    difficulty: "Advanced",
    duration: "5 hrs",
    points: "5,000 pts",
    status: "completed",
    filterCategory: "M11-M14",
    tags: ["Data Loader", "Duplicate Rules", "Data Cleanup"],
    topics: ["Data Loader", "Duplicate Rules", "FLS", "Data Quality", "Mass Update"],
    businessProblem: "The database has 45,000 candidate records. 12,000 are duplicates. Phone numbers are in 6 different formats. Emails include rows like 'unknown@unknown.com'. TalentBridge used Salesforce without any admin for 3 years. Recruiters created duplicate candidate records. Salary data is visible to contractors.",
    objective: "Conduct a full data audit and cleanup, implement duplicate prevention, standardise field formats, and lock down sensitive data.",
    constraints: [
      "45,000 records — must use Data Loader",
      "Cannot delete any record without manager approval",
      "Salary field must be hidden from contractors and junior staff",
      "Deduplication must happen before security changes"
    ],
    whatYouWillBuild: [
      "Data audit report: duplicates, blanks, invalid formats",
      "Data Loader mapping file: mass update phone format to E.164 standard",
      "Matching Rule + Duplicate Rule setup: email + last name match",
      "FLS: Salary field visible only to Senior Consultant profile",
      "Mass transfer: reassign orphaned records to active recruiters"
    ],
    screenshots: [
      { url: "images/talentbridge_audit.png", caption: "Salesforce Data Cleanliness and Formatting Audit Report" }
    ],
    solutionDesign: {
      architectureOverview: "Data quality recovery and system lockdown design. Leveraged ETL practices (Extract, Transform, Load) using Data Loader to extract 45,000 candidate records, cleanse duplicate entities, and update record formatting. Field history tracking and profile-level security rules are used to secure candidate financial fields.",
      tableHeader: ["Cleanup Target", "Method / Tool", "Validation Rule Applied"],
      tableRows: [
        ["12,000 Duplicate Records", "Deduplication via merge in Excel/Data Loader", "Matching Rule: Email + LastName"],
        ["Messy Phone Formats", "Data Loader Export -> Python Script -> Update", "Standardize to E.164 format (+91 XXXXX XXXXX)"],
        ["Candidate Salary", "Field-Level Security (FLS) override", "Read-Only for Advisor; Hidden for Contractor"]
      ]
    },
    decisions: [
      {
        title: "Merging Duplicates over Deletion",
        text: "I decided to merge duplicate candidates rather than deleting records outright. This preserves historical communication logs and linked application files, keeping valuable candidate history intact."
      },
      {
        title: "FLS Restrictions on Candidate Salary",
        text: "I locked down candidate salary fields using Field-Level Security on the profiles, ensuring contractors cannot access candidate compensation data via API or reports."
      }
    ],
    implementationSteps: [
      "Export 45,000 records using Data Loader. Cleanse formatting in Excel: standardize phones, flag duplicate candidate emails.",
      "Perform a merge script in Python/Excel to combine duplicates. Insert clean candidate file with unique emails.",
      "Create Matching Rule matching on Email and Last Name. Create Duplicate Rule set to Block on create/edit.",
      "Navigate to candidate Custom Fields, select 'Expected Salary' field, configure FLS: Hide from Contractor and Recruiter Agent profiles.",
      "Execute Mass Transfer tool to reassign records owned by departed agents to active recruiters."
    ],
    testingMatrix: {
      tableHeader: ["Security / Data Check", "Steps to Validate", "Expected Result"],
      tableRows: [
        ["Salary Visibility", "Log in as Contractor and view candidate profile", "Salary field is not displayed on layout or searchable"],
        ["Duplicate Prevention", "Attempt to insert candidate record with existing email", "Data Loader/UI throws error, blocking record creation"]
      ],
      checklist: [
        "Verify candidate record count matches clean database numbers",
        "Confirm E.164 phone validation rules are active",
        "Verify FLS blocks salary field on reports for contractors"
      ]
    },
    resumeImpact: [
      "Led the data audit and cleansing of 45,000 recruitment CRM records, identifying and resolving 12,000 duplicates using Data Loader.",
      "Secured candidate financial files and salary records using profile FLS rules, preventing unauthorized visibility for contractor profiles."
    ],
    interviewQuestions: [
      "What is the E.164 standard, and how would you build a validation rule to enforce it for phone fields?",
      "How do you merge records in bulk in Salesforce, and what are the limitations of standard duplicate merge tools?"
    ]
  },
  {
    id: "swiftmove",
    module: "M12",
    title: "SwiftMove Logistics – Deploying to Production Safely",
    industry: "Logistics",
    company: "SwiftMove Logistics — 500-truck logistics company going live",
    difficulty: "Advanced",
    duration: "4 hrs",
    points: "4,000 pts",
    status: "not-started",
    filterCategory: "M11-M14",
    tags: ["Change Sets", "Deployment", "Sandboxes"],
    topics: ["Sandboxes", "Change Sets", "Deployment", "Metadata", "Go-Live"],
    businessProblem: "The team has built everything in Sandbox. Now the CTO says: 'Move it all to Production. Don't break anything. You have the weekend.' SwiftMove has spent 8 weeks configuring their Salesforce Sandbox: custom objects, flows, approval processes, profiles, reports. Nobody has deployed before.",
    objective: "Plan and execute a safe, ordered Change Set deployment from Sandbox to Production — covering all metadata types in the right sequence with a rollback plan.",
    constraints: [
      "Zero downtime — Production users cannot be locked out",
      "Must deploy in correct order: Profiles before Permission Sets, Objects before Flows",
      "Post-deployment smoke test required",
      "Rollback plan documented before touching Production"
    ],
    whatYouWillBuild: [
      "Deployment runbook: order of operations sequence of components",
      "Change Set: containing all custom metadata built",
      "Post-deployment checklist: 20 diagnostic smoke tests",
      "Rollback plan: step-by-step what to do if deployment fails",
      "User communication email: instructions for launch day"
    ],
    screenshots: [
      { url: "images/swiftmove_changeset.png", caption: "Inbound Change Set Verification Dashboard in Production" }
    ],
    solutionDesign: {
      architectureOverview: "A production release management plan using Salesforce Change Sets. Organizes deployment components by dependencies to prevent validation errors. Deploys custom fields and profiles first, custom formulas and objects second, flows and validation rules third, and triggers/permission sets last.",
      tableHeader: ["Deployment Phase", "Component Type", "Deployment Tool"],
      tableRows: [
        ["Phase 1: Pre-Deploy", "Profiles, Custom Fields, Picklists", "Outbound Change Set"],
        ["Phase 2: Core Build", "Custom Objects, Page Layouts, Relationships", "Outbound Change Set"],
        ["Phase 3: Logic/Automation", "Record-Triggered Flows, Validation Rules", "Outbound Change Set (Inactive)"],
        ["Phase 4: Post-Deploy", "Activate Flows, assign Permission Sets, load data", "Manual Setup / Data Loader"]
      ]
    },
    decisions: [
      {
        title: "Deploy Flows as Inactive",
        text: "I deployed all flows as inactive in the Change Set. Activating them after confirming objects and fields are functional prevents validation errors if incoming integration runs during the deployment window."
      },
      {
        title: "Dry-Run Validation on Friday",
        text: "I executed a validate-only deployment 24 hours before the release window. This flags dependency conflicts early, giving the team time to modify the Change Set without affecting the weekend launch window."
      }
    ],
    implementationSteps: [
      "Authorize Deployment Connections between Sandbox and Production.",
      "Create Outbound Change Set in Sandbox; add profiles, custom objects, relationships, validation rules, page layouts, and flows.",
      "Upload Change Set to Production; run validate-only deployment to check for errors.",
      "Execute Deployment: Select 'Deploy' in Production, running local apex test validations.",
      "Post-Deployment Actions: Activate Flows, assign Permission Sets to users, and execute 20 smoke tests."
    ],
    testingMatrix: {
      tableHeader: ["Smoke Test", "Validation Action", "Expected Result"],
      tableRows: [
        ["Security Check", "Log in as Test Rep, verify object access", "Rep can access Custom Objects and fields as expected"],
        ["Flow Trigger", "Create test opportunity triggering custom flow", "Flow runs, creating linked actions without errors"]
      ],
      checklist: [
        "Validate-only test passed in target Production environment",
        "Deploy change set and verify success code",
        "Complete 20 smoke test checklists post-deployment"
      ]
    },
    resumeImpact: [
      "Managed the deployment of an 8-week configuration sprint from Sandbox to Production for a 500-truck logistics company using Salesforce Change Sets.",
      "Developed a deployment runbook and rollback plan, achieving a zero-downtime go-live with 100% smoke test success."
    ],
    interviewQuestions: [
      "What is the difference between validating a Change Set and deploying it, and why is validation useful?",
      "How do you handle a missing metadata dependency error during a Change Set deployment?"
    ]
  },
  {
    id: "styleloop",
    module: "M13",
    title: "StyleLoop Fashion – Enabling Einstein and AI Features",
    industry: "E-commerce",
    company: "StyleLoop Fashion — D2C fashion brand, 80,000 customers",
    difficulty: "Advanced",
    duration: "4 hrs",
    points: "4,000 pts",
    status: "not-started",
    filterCategory: "M11-M14",
    tags: ["Einstein AI", "Prompt Builder", "Agentforce"],
    topics: ["Einstein AI", "Prompt Builder", "Agentforce", "Data Cloud", "AI Readiness"],
    businessProblem: "StyleLoop's CEO read about AI in Salesforce and wants 'Einstein turned on everywhere by next week.' You need to explain what's possible, what needs data, and what will actually help. They expect Einstein to automatically score leads and answer questions without training.",
    objective: "Audit the org for AI readiness, enable appropriate Einstein features, configure Prompt Builder for one use case, and educate the leadership team on what AI can and cannot do without a data scientist.",
    constraints: [
      "Must not enable features that require data not yet in the org",
      "Prompt Builder available on their edition — must be used for one real use case",
      "Education deliverable required for non-technical leadership",
      "AI features must not replace human agents — only assist them"
    ],
    whatYouWillBuild: [
      "AI readiness audit: data quality score, record volume check",
      "Einstein Activity Capture enabled and configured",
      "1 Prompt Builder template: Case Summary Generator",
      "1-page leadership brief: What Salesforce AI does and does not do",
      "Roadmap: what AI features to enable in 3 / 6 / 12 months"
    ],
    screenshots: [
      { url: "images/styleloop_prompt_builder.png", caption: "Prompt Builder Console Summarizing Case Data" }
    ],
    solutionDesign: {
      architectureOverview: "AI feature enablement design based on Salesforce Einstein Trust Layer. Assessed contact and account data volumes to ensure eligibility for predictive models. Configured Einstein Activity Capture (EAC) to sync support emails, and used Prompt Builder to construct secure LLM prompts feeding summaries to agents.",
      tableHeader: ["AI Feature", "Prerequisite / Volume Check", "Action / Deliverable"],
      tableRows: [
        ["Einstein Activity Capture", "Oauth Outlook/Gmail Integration", "Enable and assign permissions to agents"],
        ["Prompt Builder Template", "Case field contents active", "Case Summary template using custom merge fields"],
        ["Einstein Lead Scoring", "Minimum 1,000 converted leads needed", "Waitlist - audit shows only 400 records (Roadmap)"]
      ]
    },
    decisions: [
      {
        title: "Waitlist Einstein Lead Scoring",
        text: "I deferred enabling Einstein Lead Scoring because an audit showed only 400 converted leads (Salesforce requires at least 1,000 converted leads to train the model). Forcing activation would cause skewed scoring."
      },
      {
        title: "Prompt Builder for Case Summaries",
        text: "I built a Case Summary Generator template using Prompt Builder. Since the support team has full case data, this utilizes the Einstein Trust Layer to summarize cases for incoming agents, cutting ticket handoff times."
      }
    ],
    implementationSteps: [
      "Run Salesforce Optimizer and AI Readiness Assessor to evaluate record volumes.",
      "Enable Einstein Activity Capture: set configurations, define excluded domains, and assign permission sets to agents.",
      "Navigate to Prompt Builder. Create a new template: 'Case Summary Generator'. Define prompts using merge fields: `$Record.Description`, `$Record.Subject`.",
      "Test template output inside Prompt Builder simulator using active case records.",
      "Draft a 1-page executive brief clarifying data requirements for predictive scoring vs generative assistants."
    ],
    testingMatrix: {
      tableHeader: ["Prompt Template", "Input Case Data", "Expected Einstein Response"],
      tableRows: [
        ["Case Summary Generator", "Detailed support ticket regarding refund delay", "Returns a bulleted summary of customer problem and timeline"]
      ],
      checklist: [
        "Verify Einstein Trust Layer filters sensitive customer credit numbers",
        "Confirm EAC is syncing test email trails on Contact records",
        "Conduct prompt output review for hallucinations"
      ]
    },
    resumeImpact: [
      "Conducted an AI readiness audit for a D2C e-commerce CRM, evaluating record volume eligibility for Salesforce Einstein integrations.",
      "Configured Prompt Builder templates for support case summary generation, cutting agent ticket handoff times by 30%."
    ],
    interviewQuestions: [
      "What is the Salesforce Einstein Trust Layer, and how does it protect sensitive data when calling external LLMs?",
      "What are the data volume prerequisites for enabling Einstein Opportunity Scoring?"
    ]
  },
  {
    id: "novacure",
    module: "M14",
    title: "NovaCure Pharma – End-to-End Salesforce Implementation",
    industry: "Real-World Capstone",
    company: "NovaCure Pharmaceuticals — 300-person pharma company, full CRM rollout",
    difficulty: "Advanced",
    duration: "12 hrs",
    points: "12,000 pts",
    status: "completed",
    filterCategory: "M11-M14",
    tags: ["End-to-End", "Capstone", "Data Model"],
    topics: ["End-to-End", "Capstone", "All Modules", "Pharma", "Implementation"],
    businessProblem: "NovaCure sells prescription medicines to hospitals. They use spreadsheets to track doctors (KOLs), rep visits, sample distributions, and complaints. The VP of Sales approved Salesforce. You are the sole Administrator. You must build a Sales + Service Cloud implementation from requirements to go-live.",
    objective: "Execute a full end-to-end Salesforce implementation: gather requirements, design the data model, configure security, build automation, create reports, deploy to Production, and train users.",
    constraints: [
      "300 users across 6 regions",
      "Regulatory: adverse event cases must be P0 with 24-hour SLA",
      "Sales reps use mobile — must be mobile-optimised",
      "Budget: no paid AppExchange packages",
      "Timeline: 6 weeks"
    ],
    whatYouWillBuild: [
      "Requirements document (all modules mapping)",
      "Data model: 8 custom objects (Doctor, Hospital, Visit, Sample, Territory...)",
      "Security model: 3 profiles, 5 permission sets, OWD settings",
      "5 Flows: Visit logging, Sample tracking, AE case escalation, Lead assignment, Weekly summary",
      "Reports & Dashboards: 8 reports, 2 dashboards",
      "Deployment change sets runbook from Sandbox to Production",
      "Training materials: Admin guide + User quick-start guide"
    ],
    screenshots: [
      { url: "images/novacure_capstone_flow.png", caption: "Capstone Regulatory Escalation Flow Schema" },
      { url: "images/novacure_capstone_dashboard.png", caption: "Pharma Sales & Safety Performance Dashboard" }
    ],
    solutionDesign: {
      architectureOverview: "A full Enterprise Sales + Service Cloud CRM rollout. Custom relational data model with 8 custom objects, integrating accounts, contacts, sales visit tracking, and pharmaceutical sampling compliance. Controlled using a regional territory hierarchy, custom profiles, and automated Flows to handle regulatory adverse event escalations.",
      tableHeader: ["Pharma Object", "Relationship", "Linked Object / OWD"],
      tableRows: [
        ["Doctor (KOL)", "Lookup", "Contact / Public Read Only"],
        ["Hospital Account", "Standard Account", "Private"],
        ["Sales Visit Log", "Master-Detail", "Doctor / Private"],
        ["Sample Inventory", "Lookup", "Sales Visit Log / Private"]
      ]
    },
    decisions: [
      {
        title: "Mobile-First Design for Page Layouts",
        text: "I customized Page Layouts and Lightning Pages to be mobile-optimized. Since sales reps log visits directly from hospitals using the Salesforce Mobile App, complex grids were replaced with simple quick-actions and card summary layouts."
      },
      {
        title: "Regulatory Flow for Adverse Events",
        text: "I built a record-triggered flow that flags any case with description containing 'adverse event' or 'side effect' as P0, auto-assigns it to the Safety Queue, and sends email alerts to compliance officers to meet the regulatory 24-hour SLA."
      }
    ],
    implementationSteps: [
      "Requirements gathering: define objects (Doctor, Hospital, Visit, Sample) and document data dictionary.",
      "Build custom schema in Sandbox; configure security permissions (3 Profiles, 5 Permission Sets) and set OWD.",
      "Construct flows: round-robin Lead assignment, Visit Logging, and Adverse Event P0 escalation.",
      "Build reports for territory performance, monthly visit counts, and compliance sample distribution.",
      "Execute Change Set deployment to Production, execute 30-step smoke test, and conduct virtual user training."
    ],
    testingMatrix: {
      tableHeader: ["Test Case Scenario", "Expected Outcome", "Result"],
      tableRows: [
        ["Rep logs visit from mobile", "Creates Visit record; updates Doctor's 'Last Visit Date'", "Pass"],
        ["Adverse Event Case created", "Priority sets to P0; safety queue assigned; email fires", "Pass"],
        ["Manager queries dashboard", "Displays regional pipeline, visit frequencies, and SLAs", "Pass"]
      ],
      checklist: [
        "Confirm territory sharing permissions match regional boundaries",
        "Confirm mobile screen layouts are active and streamlined",
        "Verify adverse event safety flow sends alerts within 60 seconds"
      ]
    },
    resumeImpact: [
      "Led the end-to-end Salesforce Sales and Service Cloud implementation for a 300-user pharmaceutical company, completing configuration and launch in 6 weeks.",
      "Designed and deployed custom schemas and automated safety flows, guaranteeing compliance for regulatory adverse event SLAs."
    ],
    interviewQuestions: [
      "Walk me through the design process of a full CRM implementation from requirements gathering to deployment.",
      "How do you design and test page layouts specifically for mobile users in Salesforce?"
    ]
  }
];

// If executing in a browser environment, bind to window object
if (typeof window !== 'undefined') {
  window.CASE_STUDIES = CASE_STUDIES;
}
