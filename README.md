# 🧩 ServiceNow Simple Incident Auto-Assignment System

## 📘 Project Overview
This ServiceNow mini project automatically assigns incidents to the correct IT support group based on the **category** selected by the user.  
It’s implemented using **Flow Designer** and a small **Glide Script**, ideal for beginners.

---

## 🎯 Objectives
- Automate the assignment of incidents.  
- Demonstrate ServiceNow Flow Designer and server-side scripting.  
- Improve IT response time by reducing manual routing.  

---

## ⚙️ Technologies Used
- ServiceNow Platform  
- Flow Designer  
- Glide Script (JavaScript)  
- Notification System  

---

## 🧠 Workflow
1. A user creates a new Incident.  
2. The Flow triggers when the record is created.  
3. Script checks the **Category** field.  
4. System automatically assigns the **Assignment Group**.  
5. (Optional) An email notification is sent to the assigned team.  

---

## 🔧 Implementation Steps
### 1️⃣ Create Flow in Flow Designer
- Name: `Auto Assign Incident`  
- Trigger: When record is created on **Incident [incident]**  
- Condition: Category is not empty.  

### 2️⃣ Add Script Action  
Use the following code (in `auto_assign_incident.js`) to update the assignment group.  

### 3️⃣ Add Notification (optional)  
Use the `notification_email.js` script for sending group notifications.  

---


