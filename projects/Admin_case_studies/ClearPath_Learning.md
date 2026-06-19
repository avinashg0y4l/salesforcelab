# ClearPath Learning – First Salesforce Org Setup

## Step 1: Understand the Business Requirement

### Problem

ClearPath Learning is using Excel sheets to manage colleges, student contacts, and sales opportunities. The company has no CRM system and wants a centralized platform.

### Requirement

Implement a Salesforce CRM system that can:

* Manage colleges
* Manage contacts
* Track course sales
* Track follow-up activities
* Provide reports and dashboards

No screenshot required.

---

## Step 2: Create Salesforce Developer Org

### Action Performed

Created a Salesforce Developer Edition Org and logged into Lightning Experience.

### Purpose

Provides a dedicated Salesforce environment for implementation and testing.

📸 Screenshot 1:
Salesforce Home Page

---

## Step 3: Configure Company Information

### Navigation

Setup → Company Information

### Action Performed

Reviewed organization settings including:

* Organization Name
* Time Zone
* Currency
* Edition Information

### Purpose

Ensures Salesforce is configured according to business location and operational requirements.

📸 Screenshot 2:
Company Information Page

---

## Step 4: Analyze Standard Salesforce Objects

### Navigation

Setup → Object Manager

### Objects Reviewed

* Account
* Contact
* Opportunity
* Task
* Lead

### Purpose

Understand how Salesforce standard objects map to business requirements.

| Business Requirement | Salesforce Object |
| -------------------- | ----------------- |
| College              | Account           |
| Student              | Contact           |
| Course Sale          | Opportunity       |
| Follow-Up            | Task              |
| Potential Customer   | Lead              |

📸 Screenshot 3:
Object Manager

---

## Step 5: Customize Sales Application

### Navigation

App Manager → Sales App

### Action Performed

Customized navigation to include:

* Home
* Accounts
* Contacts
* Opportunities
* Tasks
* Reports
* Dashboards

### Purpose

Simplifies user experience for non-technical users.

📸 Screenshot 4:
Sales App Navigation

---

## Step 6: Create Sample Business Data

### Account Created

ABC Engineering College

Purpose:
Represents a customer institution.

📸 Screenshot 5:
Account Record

---

### Contact Created

Rahul Sharma

Purpose:
Represents an individual associated with a college.

📸 Screenshot 6:
Contact Record

---

### Opportunity Created

AI Certification Program

Purpose:
Represents a potential sales deal.

📸 Screenshot 7:
Opportunity Record

---

### Task Created

Follow Up with ABC Engineering College

Purpose:
Tracks sales activities and follow-up actions.

📸 Screenshot 8:
Task Record

---

## Step 7: Import Existing Data

### Navigation

Setup → Data Import Wizard

### Action Performed

Imported sample Account and Contact records using CSV files.

### Purpose

Demonstrates migration of Excel-based data into Salesforce.

📸 Screenshot 9:
Data Import Wizard

📸 Screenshot 10:
Imported Records

---

## Step 8: Create Custom Object – Course

### Business Requirement

ClearPath sells multiple courses such as:

* Data Science
* AI Certification
* Cyber Security
* Cloud Computing

Standard Salesforce objects do not store course information separately.

### Solution

Created Custom Object:

Course

### Purpose

Provides centralized course management and avoids duplicate course information.

📸 Screenshot 11:
Course Object Configuration

---

## Step 9: Create Course Records

### Records Created

* Data Science
* AI Certification
* Cyber Security
* Cloud Computing

### Purpose

Allows a single course to be reused across multiple sales opportunities.

📸 Screenshot 12:
Course Records

---

## Step 10: Reporting and Dashboard

### Report Created

All Colleges

Purpose:
Provides visibility into customer institutions.

📸 Screenshot 13:
Accounts Report

---

### Dashboard Created

ClearPath Overview

Purpose:
Provides management-level visibility into CRM data.

📸 Screenshot 14:
Dashboard

---

## Step 11: Business Outcome

### Before Salesforce

* Multiple Excel sheets
* Manual follow-up tracking
* No centralized customer database

### After Salesforce

* Centralized CRM
* Structured customer management
* Opportunity tracking
* Task management
* Reporting and dashboards

### Recommended Edition

Salesforce Essentials

Reason:
Suitable for a 25-person startup with basic CRM requirements and budget constraints.
