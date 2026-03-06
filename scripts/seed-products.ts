/**
 * Product Seed Script
 * Run: bun scripts/seed-products.ts
 *
 * Upserts all XiomTech products into the database.
 * Safe to re-run — uses onConflictDoUpdate on slug.
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { products } from "../src/database/schema";

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client);

// ─────────────────────────────────────────────────────────────
// HELPER — keeps JSON fields typed
// ─────────────────────────────────────────────────────────────
type Feature = { icon: string; title: string; description: string };
type Highlight = { title: string; description: string; image?: string };
type Faq = { question: string; answer: string };

const f = (icon: string, title: string, description: string): Feature => ({ icon, title, description });
const h = (title: string, description: string, image?: string): Highlight => ({ title, description, ...(image ? { image } : {}) });
const q = (question: string, answer: string): Faq => ({ question, answer });

// ─────────────────────────────────────────────────────────────
// PRODUCT DATA
// ─────────────────────────────────────────────────────────────
const SEED_PRODUCTS = [
  // ══════════════════════════════════════════════════════════
  // 1. XiomPOS
  // ══════════════════════════════════════════════════════════
  {
    title: "XiomPOS",
    slug: "xiompos",
    tagline: "The fastest POS system built for Bangladeshi retail & restaurants",
    excerpt:
      "XiomPOS is a cloud-based, offline-ready Point of Sale system designed for retail stores, restaurants, pharmacies, and super-shops across Bangladesh and the Middle East. Manage inventory, billing, and multiple branches from a single dashboard.",
    category: "Software Products",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1920&auto=format&fit=crop",
    logoImage: "/xiom/xiompos.png",
    videoUrl: null,
    ctaText: "Book a Free Demo",
    ctaLink: "/contact",
    sortOrder: 1,
    status: "published",
    metaTitle:
      "XiomPOS — Best POS Software in Bangladesh | Cloud & Offline Point of Sale",
    metaDescription:
      "XiomPOS is the #1 cloud and offline Point of Sale software for retail stores, restaurants, pharmacies, and super-shops in Bangladesh. Features include barcode scanning, multi-branch management, real-time inventory, and automated reporting.",
    metaKeywords:
      "pos software bangladesh, point of sale system bangladesh, restaurant pos software, retail pos system, cloud pos bangladesh, offline pos software, barcode pos system, multi branch pos, inventory management pos, xiompos",
    features: JSON.stringify([
      f(
        "⚡",
        "Lightning-Fast Billing",
        "Process sales in seconds with barcode scanner support, keyboard shortcuts, and a touch-optimised UI built for speed even during peak hours."
      ),
      f(
        "📦",
        "Smart Inventory Management",
        "Track stock in real time, get low-stock SMS alerts, manage batch numbers and expiry dates — essential for pharmacies, grocery stores, and FMCG businesses."
      ),
      f(
        "🏪",
        "Multi-Branch Control",
        "Manage unlimited branches from a single admin panel. Monitor live sales, transfer stock between locations, and compare branch performance side-by-side."
      ),
      f(
        "☁️",
        "Cloud Sync + True Offline Mode",
        "Internet down? XiomPOS keeps working. All offline transactions auto-sync to the cloud the moment connectivity is restored — zero data loss."
      ),
      f(
        "📊",
        "In-Depth Sales Analytics",
        "Generate daily P&L statements, top-product reports, cashier performance sheets, and shift-wise cash drawer reconciliation in one click."
      ),
      f(
        "🖨️",
        "Hardware Compatible",
        "Works out of the box with thermal receipt printers (USB / LAN / Bluetooth), barcode scanners, cash drawers, and customer-facing pole displays."
      ),
      f(
        "👥",
        "Employee & Shift Management",
        "Create staff accounts with role-based access. Track shifts, manage opening/closing cash balances, and prevent unauthorised discounts."
      ),
      f(
        "💳",
        "Flexible Payment Modes",
        "Accept cash, card, bKash, Nagad, and split payments. Automatically generate digital receipts and daily settlement reports."
      ),
    ]),
    highlights: JSON.stringify([
      h(
        "Built for Bangladesh's Retail Reality",
        "XiomPOS was engineered with local businesses in mind — from the corner pharmacy in Dhaka to the multi-branch super-shop in Chittagong. It supports Bangla product names, local payment methods like bKash and Nagad, and complies with Bangladesh VAT rules, so your accounts are always audit-ready.",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Never Lose a Sale — Even Without Internet",
        "Unlike web-only POS systems that break when connectivity drops, XiomPOS uses a hybrid local + cloud architecture. Your cashiers bill customers normally offline, and every transaction syncs automatically to your central dashboard once the connection returns.",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "One Dashboard. All Your Branches.",
        "Whether you have two shops or twenty, the XiomPOS owner dashboard gives you a real-time bird's-eye view — total revenue, stock alerts, top-selling products, and cashier activity across every location, from any device anywhere in the world.",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
      ),
    ]),
    faqs: JSON.stringify([
      q("Does XiomPOS work without internet?", "Yes. XiomPOS uses a hybrid local + cloud architecture. Your cashiers can continue billing, processing returns, and updating inventory completely offline. All data syncs automatically to the central cloud database the moment connectivity is restored — no manual uploads needed."),
      q("Which payment methods does XiomPOS support?", "XiomPOS supports cash, card (POS terminal integration), bKash, Nagad, and split payments. Digital receipts are sent via SMS or printed instantly. Daily settlement reports are automatically generated for each payment method."),
      q("Can I manage multiple branches from one account?", "Absolutely. You can add unlimited branches to your XiomPOS account and monitor live sales, inventory levels, cashier activity, and daily P&L for every location from a single mobile-responsive owner dashboard — from anywhere in the world."),
      q("Does XiomPOS support barcode scanners and receipt printers?", "Yes, XiomPOS is compatible with all standard POS hardware — USB, LAN, and Bluetooth thermal printers, barcode scanners, cash drawers, and customer-facing pole displays. No proprietary hardware is required."),
      q("How long does onboarding take?", "Most businesses are fully live within 1–3 days. We handle initial setup, product data import, staff training, and hardware configuration. Our support team is available throughout the go-live process."),
      q("Is XiomPOS suitable for restaurants?", "Yes. XiomPOS has a dedicated restaurant mode with table management, kitchen order tickets (KOT), waiter-facing mobile app, and menu modifier support (e.g., no onion, extra sauce). It's used by restaurants ranging from fast-food counters to full-service dining."),
    ]),
    description: `
<h2>Why Bangladesh's Top Retailers Choose XiomPOS</h2>
<p>Running a retail business in Bangladesh means dealing with power cuts, unreliable internet, high customer volumes, and growing competition — all at once. <strong>XiomPOS</strong> was built specifically to handle these realities. It's fast, resilient, and packed with the features that actually matter for local businesses: offline billing, bKash/Nagad support, Bangla product names, and VAT-compliant invoices.</p>
<p>From a single pharmacy in Sylhet to a 15-branch super-shop chain in Dhaka, XiomPOS scales with your business without adding complexity.</p>

<h2>Core Modules</h2>

<h3>Lightning-Fast Billing & Checkout</h3>
<p>Long queues lose you customers. XiomPOS is optimised for extreme checkout speed. Cashiers can scan barcodes, apply discounts, split payments, and print or SMS receipts — all in under 30 seconds per transaction.</p>
<ul>
  <li>Full barcode and QR code scanner integration</li>
  <li>Keyboard shortcut billing for even faster processing</li>
  <li>Hold cart feature — pause a transaction and serve the next customer</li>
  <li>One-click return and exchange processing</li>
</ul>

<h3>Smart Inventory Management</h3>
<p>Manually counting stock is a thing of the past. XiomPOS tracks every unit in real time across all your warehouses and branches. When stock dips below your threshold, you get an automatic SMS or email alert before you ever run out.</p>
<ul>
  <li>Batch tracking and expiry date management (critical for pharmacies and grocery)</li>
  <li>Damage and loss recording with approval workflows</li>
  <li>Inter-branch stock transfer with audit trail</li>
  <li>Automated low-stock purchase order suggestions</li>
</ul>

<h3>Multi-Branch Dashboard</h3>
<p>Add unlimited branches to your XiomPOS account. As the owner, you see live sales figures, inventory alerts, and cashier activity for every location on a single mobile-responsive dashboard — accessible from your phone, tablet, or laptop, wherever you are in the world.</p>

<h3>Cloud Sync + True Offline Mode</h3>
<p>XiomPOS uses a hybrid architecture that keeps your business running even when the internet goes down. All billing, inventory updates, and payment records continue locally and sync automatically to the secure cloud database the moment connectivity returns. No data loss, no manual uploads.</p>

<h3>In-Depth Analytics & Reporting</h3>
<p>Make decisions with data, not guesswork. XiomPOS generates actionable reports on demand:</p>
<ul>
  <li>Daily, weekly, and monthly profit & loss statements</li>
  <li>Top-selling products and underperforming SKUs</li>
  <li>Cashier-wise sales performance and shift reconciliation</li>
  <li>Category-wise margin analysis</li>
  <li>Customer purchase history (loyalty tracking)</li>
</ul>

<h2>Industries XiomPOS Serves</h2>
<p>XiomPOS is trusted by businesses across several industries throughout Bangladesh and the Middle East:</p>
<ul>
  <li><strong>Retail & Super-Shops</strong> — clothing, electronics, department stores</li>
  <li><strong>Restaurants & Food Chains</strong> — table management, kitchen order tickets, waiter apps</li>
  <li><strong>Pharmacies & Diagnostics</strong> — medicine expiry tracking, batch management</li>
  <li><strong>Wholesale & Distribution</strong> — large inventory, multi-warehouse support</li>
  <li><strong>Salons & Service Businesses</strong> — appointment booking, service billing</li>
</ul>

<h2>Hardware Compatibility</h2>
<p>XiomPOS works with all standard POS hardware out of the box — no proprietary equipment required:</p>
<ul>
  <li>Thermal receipt printers (USB, LAN, and Bluetooth)</li>
  <li>Barcode and QR code scanners</li>
  <li>Electronic cash drawers</li>
  <li>Customer-facing pole displays</li>
  <li>Touch-screen monitors and Android tablets</li>
</ul>
`,
  },

  // ══════════════════════════════════════════════════════════
  // 2. XiomHRM
  // ══════════════════════════════════════════════════════════
  {
    title: "XiomHRM",
    slug: "xiomhrm",
    tagline:
      "Automate payroll, attendance, and HR operations for your entire workforce",
    excerpt:
      "XiomHRM is a full-suite Human Resource Management System that automates attendance tracking (including biometric integration), payroll processing, leave management, and employee self-service — so your HR team can focus on people, not paperwork.",
    category: "Software Products",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop",
    logoImage: "/xiom/hrm.png",
    videoUrl: null,
    ctaText: "Request a Demo",
    ctaLink: "/contact",
    sortOrder: 2,
    status: "published",
    metaTitle:
      "XiomHRM — HR & Payroll Management Software Bangladesh | Biometric Attendance",
    metaDescription:
      "XiomHRM automates payroll, biometric attendance, leave management, and employee self-service for companies in Bangladesh. Reduce HR workload by 80% and eliminate salary calculation errors.",
    metaKeywords:
      "hrm software bangladesh, payroll management system, biometric attendance software, employee management system, leave management software, hr software dhaka, payroll automation bangladesh, zkteco integration, xiomhrm",
    features: JSON.stringify([
      f(
        "👆",
        "Biometric Device Integration",
        "Connect ZKTeco, Virdi, or any standard fingerprint/face recognition device via LAN or API. Attendance data flows into XiomHRM automatically — no manual imports."
      ),
      f(
        "💰",
        "Automated Payroll Processing",
        "Calculate net salaries in minutes, not days. Auto-applies attendance deductions, overtime, allowances, and generates digital payslips with one click."
      ),
      f(
        "🗓️",
        "Leave & Absence Management",
        "Employees apply for leave through their portal; managers approve via app or web. Leave balances update automatically, with carry-forward rules built in."
      ),
      f(
        "📱",
        "Employee Self-Service Portal",
        "Let employees view payslips, apply for reimbursements, update personal data, and check their own attendance history — without emailing HR."
      ),
      f(
        "📋",
        "Recruitment & Onboarding",
        "Post vacancies, track applicants through interview stages, and trigger digital onboarding workflows — asset allocation, document collection, and IT access requests — automatically."
      ),
      f(
        "⭐",
        "Performance Appraisals",
        "Set KPIs, run 360-degree reviews, and manage promotion cycles transparently. Managers and employees both have visibility into performance history."
      ),
      f(
        "🏛️",
        "Tax & Provident Fund Module",
        "Auto-calculate TDS, Provident Fund, EOBI, and Gratuity contributions compliant with local labor laws. Generate bank advice files and tax certificates."
      ),
      f(
        "📍",
        "Geo-fenced Mobile Attendance",
        "Field sales reps and remote workers punch in/out via GPS-verified mobile attendance — within approved zones only, preventing false check-ins."
      ),
    ]),
    highlights: JSON.stringify([
      h(
        "End the Month-End Payroll Nightmare",
        "For most HR teams, the last 5 days of each month are a sprint of manual calculations, Excel corrections, and salary disputes. XiomHRM eliminates this entirely. The moment attendance data syncs from your biometric devices, XiomHRM calculates gross pay, allowances, late deductions, and taxes automatically — and queues payslips for one-click distribution.",
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Biometric Integration That Actually Works",
        "XiomHRM has native database and API integration modules for ZKTeco, Virdi, and most standard biometric hardware. Real-time punch data is pulled directly — no CSV exports, no manual reconciliation, no missing records. Setup typically takes less than one day.",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Give Employees Visibility, Reduce HR Queries",
        "The XiomHRM Employee Self-Service portal handles the repetitive requests that clog up HR inboxes: 'Where's my payslip?', 'How many leaves do I have left?', 'Can I update my bank account?' Employees resolve these themselves — on mobile — freeing HR to focus on strategic work.",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
      ),
    ]),
    faqs: JSON.stringify([
      q("Can XiomHRM connect with our existing ZKTeco fingerprint machines?", "Yes. XiomHRM has native database and API integration modules for ZKTeco, Virdi, and most standard biometric hardware. Real-time punch data is pulled automatically — no CSV exports or manual reconciliation. Setup typically takes less than one business day."),
      q("Is the payroll module customisable for our company's specific policies?", "Absolutely. The payroll engine is highly dynamic. You define custom formulas for basic pay, allowances (house rent, medical, transport), late deductions, overtime multipliers, and any unique company-specific rules. No two companies are forced to use the same configuration."),
      q("Does XiomHRM support geo-fenced mobile attendance for field teams?", "Yes. Field sales representatives and remote workers can punch in/out via GPS-verified mobile attendance within defined geographic zones. The system logs location at the time of punch, preventing false check-ins."),
      q("How does the leave approval workflow work?", "Employees apply for leave through the self-service portal or mobile app. Their direct manager receives an instant push notification and can approve or reject with a comment from any device. Leave balances update automatically across the system — no spreadsheets, no email chains."),
      q("Can XiomHRM generate bank advice files for salary disbursement?", "Yes. After payroll is finalised, XiomHRM generates bank advice files in the format required by your bank (standard for Dutch-Bangla, BRAC, Islami Bank, etc.) for bulk salary upload, as well as digital payslips distributed to each employee's self-service portal."),
      q("Is employee data secure?", "All data is encrypted at rest and in transit. Role-based access control ensures HR staff, managers, and employees each see only the data relevant to their role. Full audit logs track every access and modification."),
    ]),
    description: `
<h2>The Complete HR Solution for Bangladesh's Growing Companies</h2>
<p>As companies in Bangladesh scale — from 20 employees to 200, or 200 to 2,000 — manual HR processes break down. Attendance registers get manipulated. Payroll spreadsheets develop errors. Leave tracking becomes a nightmare. HR teams spend 80% of their time on administrative tasks and have no bandwidth for talent development.</p>
<p><strong>XiomHRM</strong> solves this. It is a fully integrated Human Resource Management System that automates the entire employee lifecycle — from hiring to retirement — while giving leadership real-time visibility into workforce data.</p>

<h2>Core Modules</h2>

<h3>Attendance & Biometric Integration</h3>
<p>XiomHRM connects directly to your existing fingerprint or face recognition devices (ZKTeco, Virdi, and most standard hardware) via LAN or API. Punch data streams in automatically — no manual exports, no reconciliation headaches.</p>
<ul>
  <li>Real-time attendance sync from biometric hardware</li>
  <li>Geo-fenced mobile punch-in for remote and field teams</li>
  <li>Auto-calculation of late arrivals, early departures, and overtime</li>
  <li>Shift management with multiple shift templates</li>
</ul>

<h3>Automated Payroll Processing</h3>
<p>Turn a week of payroll calculation into minutes. Once attendance data is confirmed, XiomHRM's payroll engine calculates:</p>
<ul>
  <li>Gross salaries with all allowances (house rent, medical, transport, performance bonus)</li>
  <li>Attendance-based deductions (late marks, absent days, half-days)</li>
  <li>Statutory deductions — TDS income tax, Provident Fund (PF), EOBI, and Gratuity</li>
  <li>Overtime pay at configured multiplier rates</li>
</ul>
<p>The result: digital payslips distributed to employees via the self-service portal and bank advice files ready for upload to your bank — all generated with a single click.</p>

<h3>Leave & Absence Management</h3>
<p>Create custom leave policies (casual, sick, earned, maternity, annual) with carry-forward and encashment rules. Employees apply digitally; managers approve or reject with a comment from their mobile app. Leave balances update automatically across the system — no manual tracking required.</p>

<h3>Employee Self-Service Portal</h3>
<p>Reduce the HR team's inbox noise by 60%. Through the ESS portal (web and mobile), employees can independently:</p>
<ul>
  <li>View and download current and historical payslips</li>
  <li>Apply for leave and track approval status in real time</li>
  <li>Submit expense claims with receipt photo uploads</li>
  <li>Update contact information, emergency contacts, and bank account details</li>
  <li>Access the company policy handbook</li>
</ul>

<h3>Recruitment & Digital Onboarding</h3>
<p>From job posting to day-one ready — XiomHRM manages the complete hiring funnel. Post vacancies directly to your careers page, track candidates through customised interview stages, and once an offer is accepted, trigger automated onboarding workflows: document collection, asset allocation, system access requests, and orientation scheduling.</p>

<h3>Performance Management</h3>
<p>Retain top talent with objective performance tracking. Set measurable KPIs per role, run mid-year and annual appraisal cycles, collect 360-degree feedback, and manage salary revision and promotion decisions — all documented and auditable within XiomHRM.</p>

<h2>Why Companies in Bangladesh Trust XiomHRM</h2>
<p>XiomHRM is configured for Bangladesh's labour law environment — from Income Tax Ordinance compliance for TDS calculations to Provident Fund rules. It supports Bangla language in documents and interfaces, and integrates with local banking systems for bulk salary disbursement.</p>
`,
  },

  // ══════════════════════════════════════════════════════════
  // 3. XiomCare
  // ══════════════════════════════════════════════════════════
  {
    title: "XiomCare",
    slug: "xiomcare",
    tagline:
      "A paperless hospital management system built for modern healthcare",
    excerpt:
      "XiomCare is a comprehensive Hospital & Clinic Management System (HMS) that digitises OPD/IPD operations, electronic medical records, pathology labs, pharmacy inventory, and integrated billing — giving healthcare administrators total control and doctors more time with patients.",
    category: "Software Products",
    heroImage:
      "https://images.unsplash.com/photo-1538108149393-cebb47acdd92?q=80&w=1920&auto=format&fit=crop",
    logoImage: "/xiom/xiomCare.png",
    videoUrl: null,
    ctaText: "Get a Free Consultation",
    ctaLink: "/contact",
    sortOrder: 3,
    status: "published",
    metaTitle:
      "XiomCare — Hospital Management Software Bangladesh | HMS for Clinics & Hospitals",
    metaDescription:
      "XiomCare is a complete Hospital Management System (HMS) for hospitals, polyclinics, and diagnostic centers in Bangladesh. Manage OPD, IPD, EMR, pathology, pharmacy, and billing in one unified platform.",
    metaKeywords:
      "hospital management software bangladesh, clinic management system, diagnostic center software, patient management system, electronic medical records bangladesh, hms software, opd ipd management, healthcare it solutions, xiomcare",
    features: JSON.stringify([
      f(
        "🏥",
        "OPD & IPD Management",
        "Handle daily outpatient queues and inpatient admissions seamlessly. Token systems, bed availability tracking, and ward management — all in real time."
      ),
      f(
        "📋",
        "Electronic Medical Records (EMR)",
        "A secure, centralized digital vault for every patient's history — previous prescriptions, lab results, allergies, and doctor notes — accessible instantly by authorized staff."
      ),
      f(
        "🔬",
        "Pathology & Lab Management",
        "Lab test requests flow directly from doctors to the pathology department. Technicians input results digitally and patients receive SMS alerts when reports are ready."
      ),
      f(
        "💊",
        "Integrated Pharmacy Module",
        "Retail pharmacy billing linked directly to doctor prescriptions. Track medicine batches, expiry dates, and automate reorder alerts for critical drugs."
      ),
      f(
        "💳",
        "Unified Billing & Insurance",
        "Combine consultation fees, lab charges, bed charges, OT fees, and pharmacy costs into one invoice. Manage TPA and health insurance claims efficiently."
      ),
      f(
        "📅",
        "Doctor Appointment Scheduling",
        "Patients book appointments online, by phone, or at the front desk. Smart scheduling avoids conflicts and sends automated SMS reminders to reduce no-shows."
      ),
      f(
        "🔐",
        "Role-Based Access Control",
        "Doctors, nurses, lab technicians, billing staff, and administrators each see only what they need — with complete audit logs of who accessed or modified any record."
      ),
      f(
        "📱",
        "Patient Portal",
        "Patients view their appointment history, download lab reports, access prescriptions, and make payments — from any device, without visiting the front desk."
      ),
    ]),
    highlights: JSON.stringify([
      h(
        "Go Paperless — Without Disrupting Operations",
        "XiomCare's implementation team works alongside your existing workflow to digitise operations incrementally. Most hospitals are fully live within 4–6 weeks. We handle data migration, staff training, and support during the transition — so patient care is never interrupted.",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Eliminate Revenue Leakage with Unified Billing",
        "In manual systems, revenue leakage happens constantly — an unbilled lab test here, an unrecorded pharmacy sale there. XiomCare's unified billing system captures every chargeable item automatically. Every consultation, every test, every medicine dispensed flows into the invoice — nothing gets missed.",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Secure EMR That Follows the Patient",
        "A patient who visited your hospital two years ago and returns today shouldn't have to repeat their history from scratch. XiomCare's centralized EMR gives the treating doctor instant access to every previous visit, test result, prescription, and allergy note — making clinical decisions faster and safer.",
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=800&auto=format&fit=crop"
      ),
    ]),
    faqs: JSON.stringify([
      q("Is patient data strictly secure?", "Yes. XiomCare implements role-based access control — doctors, nurses, lab technicians, and billing staff each see only what is relevant to their role. All data is encrypted at rest and in transit, with complete audit logs tracking every access and modification to patient records."),
      q("Can patients book appointments online?", "Yes. XiomCare includes an optional Patient Portal (web and mobile app) where patients can view doctor availability, book appointments, receive automated SMS reminders, and download their lab reports and prescriptions — without visiting the front desk."),
      q("How long does implementation take?", "Most hospitals and clinics are fully live within 4–6 weeks. Our implementation team works alongside your existing workflow to digitise operations incrementally, handling data migration, hardware setup, and staff training — so patient care is never interrupted during the transition."),
      q("Does XiomCare integrate with lab analysers and diagnostic equipment?", "Yes. XiomCare supports equipment interface integration for automated result import from standard lab analysers, reducing manual data entry errors in the pathology department."),
      q("Can XiomCare manage insurance and TPA claims?", "Yes. The billing module includes TPA (Third Party Administrator) and health insurance claim management, allowing your billing team to submit and track insurance claims digitally from within the system."),
      q("Is it suitable for multi-branch hospital chains?", "Absolutely. XiomCare is built for both single-facility clinics and multi-branch hospital networks. The central admin panel gives management visibility across all branches, while each branch operates its own OPD, IPD, and billing independently."),
    ]),
    description: `
<h2>Digitise Your Healthcare Facility with XiomCare</h2>
<p>In healthcare, inefficiency costs more than money — it costs time that should be spent on patients. Paper-based systems, disconnected departments, manual billing, and misplaced records create delays, errors, and revenue loss that compound every day.</p>
<p><strong>XiomCare</strong> is a state-of-the-art Hospital Management System (HMS) that brings every department — reception, OPD, IPD, lab, pharmacy, and finance — into a single, unified digital platform. The result: faster care, fewer errors, and a hospital administration team that actually has time to breathe.</p>

<h2>Core Modules</h2>

<h3>Patient Registration & OPD Management</h3>
<p>Handle high daily outpatient volumes without the front-desk chaos. XiomCare's OPD module features:</p>
<ul>
  <li>Quick patient registration with digital ID card generation</li>
  <li>Smart doctor scheduling — book by doctor, specialty, or time slot</li>
  <li>Token and queue management with digital display support for waiting areas</li>
  <li>Automated appointment reminder SMS to reduce no-shows by up to 35%</li>
</ul>

<h3>Inpatient Department (IPD) & Ward Management</h3>
<p>From admission to discharge, XiomCare tracks every detail of a patient's inpatient stay:</p>
<ul>
  <li>Real-time bed availability dashboard across all wards, cabins, and ICUs</li>
  <li>Daily nursing notes, doctor visit logs, and vital signs tracking</li>
  <li>Automated discharge summaries and advance billing</li>
  <li>OT scheduling with pre/post-operative care tracking</li>
</ul>

<h3>Electronic Medical Records (EMR)</h3>
<p>Eliminate lost patient files permanently. XiomCare stores each patient's complete medical history in a secure, encrypted digital vault — previous prescriptions, diagnoses, lab results, imaging reports, allergies, and vaccination records. Authorised doctors access the full history instantly, whether the patient was seen last week or five years ago.</p>

<h3>Pathology & Diagnostic Lab Management</h3>
<p>Connect your lab directly to the clinical workflow:</p>
<ul>
  <li>Doctor's test orders route instantly to the lab department — no paper request slips</li>
  <li>Lab technicians enter results into pre-formatted digital templates with normal range indicators</li>
  <li>Automated SMS notifications when reports are ready for patient download</li>
  <li>Equipment interface integration for automated result import from lab analysers</li>
</ul>

<h3>Pharmacy & Inventory Control</h3>
<p>XiomCare's integrated pharmacy module prevents revenue leakage and stockouts simultaneously. Doctor prescriptions flow directly to the pharmacy counter — no manual transcription errors. The system tracks every medicine batch number, expiry date, and stock level, with automated reorder alerts for critical drugs.</p>

<h3>Unified Billing & Insurance Management</h3>
<p>No more end-of-visit billing disputes. XiomCare consolidates all charges — consultation fees, lab tests, bed charges, OT fees, medicines — into a single, itemised patient invoice. The system also manages TPA (Third Party Administrator) and health insurance claims, reducing manual claim processing time significantly.</p>

<h2>Data Security & Compliance</h2>
<p>Patient data security is non-negotiable. XiomCare implements role-based access control, ensuring doctors, nurses, lab staff, and billing teams each see only the information relevant to their role. All data is encrypted at rest and in transit, with complete audit logs tracking every access and modification.</p>
`,
  },

  // ══════════════════════════════════════════════════════════
  // 4. XiomEdu
  // ══════════════════════════════════════════════════════════
  {
    title: "XiomEdu",
    slug: "xiomedu",
    tagline: "The complete ERP for schools, colleges, and universities",
    excerpt:
      "XiomEdu is a comprehensive Education ERP that digitises every aspect of school and college administration — from online admissions and fee collection to academic scheduling, exam grading, and real-time parent communication — all in one platform.",
    category: "Software Products",
    heroImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop",
    logoImage: "/xiom/XiomEduFlow.png",
    videoUrl: null,
    ctaText: "Request a Demo",
    ctaLink: "/contact",
    sortOrder: 4,
    status: "published",
    metaTitle:
      "XiomEdu — School Management Software Bangladesh | Education ERP System",
    metaDescription:
      "XiomEdu is a complete school and college management ERP for Bangladesh. Automate admissions, fee collection, attendance, exam results, and parent communication. Mobile apps for parents and teachers included.",
    metaKeywords:
      "school management software bangladesh, education erp system, college management system, student information system, fees management software, online admission system, student portal, parent teacher app, xiomedu",
    features: JSON.stringify([
      f(
        "📝",
        "Online Admission System",
        "Fully digital admission portal where parents submit applications, upload documents, and pay admission fees online. No paper forms, no queue at the admin office."
      ),
      f(
        "💳",
        "Smart Fee Collection",
        "Set multi-tier fee structures (tuition, transport, library, lab). Accept payments via bKash, Nagad, or card. Auto-generate digital receipts and SMS reminders for due fees."
      ),
      f(
        "📅",
        "Academic Routine & Scheduling",
        "Create clash-free class timetables automatically. Manage teacher assignments, classroom allocations, and subject scheduling across sections and shifts."
      ),
      f(
        "✅",
        "Digital Attendance Tracking",
        "Teachers mark attendance digitally per class period. RFID integration available for auto-attendance at the school gate with instant SMS to parents."
      ),
      f(
        "📊",
        "Exam & Result Management",
        "Configure custom exam structures and grading systems. Teachers enter marks online; the system auto-generates report cards, tabulation sheets, and merit lists."
      ),
      f(
        "📱",
        "Parent & Teacher Mobile App",
        "Parents get instant push notifications for attendance, exam results, fee dues, and school notices. Teachers manage classes, marks, and communication on mobile."
      ),
      f(
        "📚",
        "Library Management",
        "Catalogue books, manage issue/return workflows, track overdue items, and calculate fines — all digitally."
      ),
      f(
        "🚌",
        "Transport & Hostel Management",
        "Manage bus routes, driver details, and route-wise transport fees. Track hostel room allocations, mess fees, and visitor records."
      ),
    ]),
    highlights: JSON.stringify([
      h(
        "Admissions That Don't Require Parents to Stand in Line",
        "XiomEdu's online admission portal lets parents complete the entire application process from home — form submission, document upload, and payment. The admin team reviews and approves applications digitally, with automated email/SMS confirmations at each step. Result: shorter queues, fewer errors, and a better first impression for new families.",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Parents Stay Informed — Without Calling the School",
        "The XiomEdu Parent App gives families real-time visibility into their child's school life — daily attendance (with SMS alerts the moment a child is marked absent), exam results as soon as they're published, fee payment history, and school notices. This level of transparency builds trust and reduces the volume of parent phone calls and front-desk visits.",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Report Cards in Minutes, Not Days",
        "Teachers enter marks into their portal. XiomEdu calculates totals, grades, ranks, and GPA automatically — applying your school's grading formula. Report cards, tabulation sheets, and merit lists are generated with one click and can be distributed digitally or printed. What used to take the exam committee three days now takes thirty minutes.",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
      ),
    ]),
    faqs: JSON.stringify([
      q("Can parents pay school fees via mobile banking?", "Yes. XiomEdu integrates with bKash, Nagad, and major card payment gateways, allowing parents to pay fees from anywhere using their preferred method. Digital money receipts and SMS confirmations are generated automatically after every payment."),
      q("Does the software support RFID attendance for students?", "Yes. We integrate RFID card readers at the school gate. When a student taps their card, attendance is marked instantly and an automated SMS notification is sent to the registered parent's phone — no manual intervention required."),
      q("How are exam results distributed to parents?", "Once teachers enter marks and the results are verified, XiomEdu auto-generates digital report cards which are published to the Parent App instantly. Parents receive a push notification the moment results are available — no waiting for physical report card day."),
      q("Can we customise the fee structure for different student categories?", "Absolutely. XiomEdu supports multi-tier fee structures — you can define different fees for different classes, sections, or student categories (general, scholarship, staff ward, etc.), with waiver and discount management built in."),
      q("Does XiomEdu support multiple branches or campuses?", "Yes. Educational institutions with multiple campuses can manage all branches from a unified admin panel while keeping each campus's data, fee structures, and academic routines separate."),
      q("What kind of training is provided for teachers and admin staff?", "We provide comprehensive onboarding sessions, video tutorials, and user manuals. A dedicated support team is available during the go-live period to assist staff. Most teachers are comfortable using the system within a single day of training."),
    ]),
    description: `
<h2>Modern Education Administration Starts Here</h2>
<p>Most schools and colleges in Bangladesh are still managing their operations with a combination of paper registers, Excel sheets, and WhatsApp messages. Admissions are chaotic. Fee tracking is error-prone. Exam result preparation takes days. Parents are always calling to ask questions that the system should answer automatically.</p>
<p><strong>XiomEdu</strong> is designed to fix all of this — bringing school and college administration into the digital era with a single, integrated platform that every stakeholder (management, teachers, parents, and students) can use daily.</p>

<h2>Key Modules</h2>

<h3>Online Admissions & Student Enrollment</h3>
<p>Replace paper-based admissions with a completely digital process:</p>
<ul>
  <li>Online admission portal accessible from any device — parents fill forms, upload documents, and pay fees without visiting the campus</li>
  <li>Configurable admission stages (application → shortlist → interview → offer → enrollment)</li>
  <li>Automatic generation of student ID numbers, roll numbers, and digital ID cards</li>
  <li>Secure digital archive of all student records, documents, and certificates</li>
</ul>

<h3>Smart Fee Management & Online Payments</h3>
<p>Ensure steady cash flow and eliminate fee collection disputes:</p>
<ul>
  <li>Create custom, multi-tier fee structures for different classes, sections, and categories</li>
  <li>Accept payments online via bKash, Nagad, credit/debit cards, or at the front desk</li>
  <li>Auto-generate digital money receipts and trigger SMS/email acknowledgments</li>
  <li>Automated reminders for upcoming and overdue fee payments</li>
  <li>Scholarship and waiver management with approval workflows</li>
</ul>

<h3>Academic Routine & Attendance Management</h3>
<p>Eliminate scheduling conflicts and manual attendance registers:</p>
<ul>
  <li>Smart routine builder that automatically detects and prevents teacher time-clashes</li>
  <li>Period-wise digital attendance by teachers from their mobile app or desktop</li>
  <li>Optional RFID integration — student cards scanned at the gate trigger automatic attendance and parent SMS</li>
  <li>Syllabus progress tracking and digital homework assignment</li>
</ul>

<h3>Exam Management & Automated Result Generation</h3>
<p>Transform the exam season from a crisis into a routine process:</p>
<ul>
  <li>Configure custom exam structures with subject-wise mark distributions</li>
  <li>Teachers enter marks digitally via their secure portal</li>
  <li>Auto-generate comprehensive report cards applying your school's grading formula</li>
  <li>One-click production of tabulation sheets, merit lists, and division/grade summaries</li>
  <li>Digital result distribution to parents via the parent app</li>
</ul>

<h3>Parent & Teacher Communication</h3>
<p>Keep every stakeholder connected through the XiomEdu mobile apps. The <strong>Parent App</strong> shows live attendance, exam results, fee history, and official notices. The <strong>Teacher App</strong> allows class attendance, mark entry, digital homework assignment, and direct messaging with parents — all from a smartphone.</p>

<h2>Additional Modules</h2>
<ul>
  <li><strong>Library Management</strong> — book cataloguing, issue/return tracking, fine calculation</li>
  <li><strong>Transport Management</strong> — route management, driver records, transport fee billing</li>
  <li><strong>Hostel Management</strong> — dormitory allocation, mess management, visitor logs</li>
  <li><strong>Staff HR Module</strong> — teacher and staff attendance, leave management, and payroll (integrated with XiomHRM)</li>
</ul>
`,
  },

  // ══════════════════════════════════════════════════════════
  // 5. XiomAccount
  // ══════════════════════════════════════════════════════════
  {
    title: "XiomAccount",
    slug: "xiomaccount",
    tagline: "Cloud accounting software that keeps your books always audit-ready",
    excerpt:
      "XiomAccount is a cloud-based double-entry accounting system for SMEs and enterprises. Manage your general ledger, invoicing, accounts payable/receivable, expense tracking, bank reconciliation, and generate real-time financial statements — from anywhere.",
    category: "Software Products",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop",
    logoImage: "/xiom/xiomaccount.png",
    videoUrl: null,
    ctaText: "Start Free Trial",
    ctaLink: "/contact",
    sortOrder: 5,
    status: "published",
    metaTitle:
      "XiomAccount — Cloud Accounting Software Bangladesh | Double-Entry Bookkeeping",
    metaDescription:
      "XiomAccount is a secure cloud accounting system for businesses in Bangladesh. Features double-entry bookkeeping, invoicing, expense tracking, bank reconciliation, and real-time financial reports including Balance Sheet and P&L.",
    metaKeywords:
      "accounting software bangladesh, cloud accounting system, double entry bookkeeping software, financial management software, invoice management software, bank reconciliation software, expense tracking software, balance sheet software, xiomaccount",
    features: JSON.stringify([
      f(
        "📒",
        "Double-Entry Accounting",
        "Built on strict double-entry principles — every transaction automatically creates balanced debit and credit entries, keeping your books error-free and audit-ready."
      ),
      f(
        "🧾",
        "Professional Invoicing",
        "Create branded digital invoices with automatic due-date tracking, partial payment recording, and automated reminder emails to improve your collection rate."
      ),
      f(
        "💸",
        "Accounts Payable & Receivable",
        "Track what you owe and what you're owed. Aging reports show overdue balances at a glance so you can act before cash flow becomes a problem."
      ),
      f(
        "🏦",
        "Smart Bank Reconciliation",
        "Upload your bank statement and XiomAccount's matching algorithm auto-suggests reconciliations — turning hours of manual matching into minutes."
      ),
      f(
        "📈",
        "Real-Time Financial Reports",
        "Generate Balance Sheet, Profit & Loss, Cash Flow Statement, and Trial Balance on demand — not just at month-end. Export to PDF or Excel instantly."
      ),
      f(
        "🌍",
        "Multi-Currency Support",
        "Record transactions in multiple currencies with automatic exchange rate application. Essential for import/export businesses and companies with international clients."
      ),
      f(
        "📊",
        "Chart of Accounts",
        "Fully customisable account structure to match your industry — retail, manufacturing, services, or NGO. Import your existing chart of accounts in minutes."
      ),
      f(
        "🔒",
        "Encrypted Cloud Storage",
        "All financial data is encrypted at rest and in transit, with daily automated backups. Your data is protected even if your local device is lost or damaged."
      ),
    ]),
    highlights: JSON.stringify([
      h(
        "Financial Clarity at Your Fingertips — Not Just Month-End",
        "Most businesses only see their true financial position when the accountant produces a report at month-end. By then, it's too late to course-correct. XiomAccount gives business owners a live dashboard showing current cash position, outstanding receivables, upcoming payables, and profit margin — updated in real time as transactions are recorded.",
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Bank Reconciliation That Takes Minutes, Not Hours",
        "The end-of-month bank reconciliation is one of the most tedious tasks in any finance team. XiomAccount makes it near-instant: upload your bank statement CSV, and the intelligent matching engine auto-suggests transaction matches. Your accountant reviews, confirms, and the reconciliation is done. What used to take a full day now takes 20 minutes.",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Audit-Ready Books, Every Single Day",
        "With XiomAccount, your business is always audit-ready — not just during audit season. Every transaction has a proper journal entry, every invoice has a corresponding receivable, every payment has proof attached. When auditors arrive, you generate the reports they need in seconds.",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop"
      ),
    ]),
    faqs: JSON.stringify([
      q("Is XiomAccount suitable for non-accountants?", "Yes. While the engine runs on strict double-entry principles, the interface is designed for business owners and finance managers — not just CAs. Routine tasks like creating invoices, logging expenses, and running reports require no accounting knowledge. The software handles the journal entries automatically in the background."),
      q("Is my financial data secure in the cloud?", "All data is encrypted at rest and in transit using industry-standard AES-256 encryption. Daily automated backups ensure your data is never lost. Access is controlled by role-based permissions — your accountant and CEO can have different levels of visibility."),
      q("Can XiomAccount handle multi-currency transactions?", "Yes. XiomAccount supports multi-currency bookkeeping with configurable exchange rates. All foreign currency transactions are automatically recorded at the applicable rate, and you can generate reports in your home currency at any time."),
      q("Does it integrate with Bangladesh banking systems?", "Yes. XiomAccount can import bank statement files from major Bangladeshi banks (Dutch-Bangla, BRAC, Islami Bank, etc.) in CSV format for automated bank reconciliation. We also support integration with online banking APIs where available."),
      q("Can multiple users access the system simultaneously?", "Yes. XiomAccount supports multi-user access with role-based permissions — you can have separate access levels for your bookkeeper, accountant, financial manager, and business owner, each seeing only what they need."),
      q("What financial reports does XiomAccount generate?", "XiomAccount generates Balance Sheet, Profit & Loss (Income Statement), Cash Flow Statement, Trial Balance, General Ledger detail, AR/AP aging reports, and custom date-range reports — all exportable to PDF or Excel instantly."),
    ]),
    description: `
<h2>Take Complete Control of Your Business Finances</h2>
<p>Running a business without clear financial data is like driving with your eyes closed. Yet thousands of businesses in Bangladesh still rely on Excel spreadsheets, manual ledgers, or disconnected accounting software that produces reports days after decisions needed to be made.</p>
<p><strong>XiomAccount</strong> changes this. It is a secure, cloud-based accounting platform built on strict double-entry accounting principles — the same standard used by CA firms and listed companies — but designed to be practical and accessible for SMEs and growing businesses.</p>

<h2>Core Accounting Features</h2>

<h3>Advanced General Ledger & Chart of Accounts</h3>
<p>XiomAccount's general ledger is the foundation of accurate bookkeeping:</p>
<ul>
  <li>Fully customisable Chart of Accounts tailored to your industry (retail, manufacturing, services, NGO)</li>
  <li>Easy journal entry creation with automatic debit/credit balancing</li>
  <li>Multi-currency support with configurable exchange rates for international transactions</li>
  <li>Subsidiary ledgers for customers, suppliers, and fixed assets</li>
</ul>

<h3>Invoicing & Accounts Receivable (A/R)</h3>
<p>Get paid faster with professional, automated invoicing:</p>
<ul>
  <li>Create branded digital invoices and estimates with your company logo and custom terms</li>
  <li>Automatic tracking of due dates with configurable reminder email sequences</li>
  <li>Record partial payments, credit notes, and advance deposits accurately</li>
  <li>Accounts Receivable aging reports — see exactly which clients are overdue and by how much</li>
</ul>

<h3>Expense Tracking & Accounts Payable (A/P)</h3>
<p>Keep your costs under tight control:</p>
<ul>
  <li>Log daily expenses, vendor bills, and overhead costs with receipt photo attachments</li>
  <li>Multi-level approval workflows for expense claims above defined thresholds</li>
  <li>Accounts Payable aging reports to manage supplier relationships and cash flow timing</li>
  <li>Purchase order integration — match vendor invoices against approved POs</li>
</ul>

<h3>Intelligent Bank Reconciliation</h3>
<p>Upload your bank statement file and XiomAccount's algorithm auto-matches transactions to your ledger entries — suggesting reconciliations that you simply review and confirm. What used to take your accountant a full day now takes less than 30 minutes.</p>

<h3>Real-Time Financial Reporting</h3>
<p>Generate any financial report on demand — not just at month-end:</p>
<ul>
  <li><strong>Balance Sheet</strong> — assets, liabilities, and equity at any point in time</li>
  <li><strong>Profit & Loss Statement</strong> — revenue, costs, and net profit by period</li>
  <li><strong>Cash Flow Statement</strong> — operating, investing, and financing activities</li>
  <li><strong>Trial Balance</strong> — instant verification that books are balanced</li>
  <li>All reports exportable to formatted PDF or Excel for auditors and investors</li>
</ul>

<h2>Who Uses XiomAccount?</h2>
<p>XiomAccount is used by trading companies, manufacturing firms, service businesses, NGOs, and startups across Bangladesh. Whether you process 50 invoices a month or 5,000, XiomAccount scales with your transaction volume without slowing down.</p>
`,
  },

  // ══════════════════════════════════════════════════════════
  // 6. XiomTickets
  // ══════════════════════════════════════════════════════════
  {
    title: "XiomTickets",
    slug: "xiomtickets",
    tagline:
      "Omnichannel helpdesk software to deliver exceptional customer support",
    excerpt:
      "XiomTickets is an omnichannel helpdesk and ticketing system that centralises customer support queries from email, web, live chat, and social media into a single inbox — with SLA tracking, automation, and a self-service knowledge base to help your team resolve issues faster.",
    category: "Software Products",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1920&auto=format&fit=crop",
    logoImage: "/xiom/xiomTickets.png",
    videoUrl: null,
    ctaText: "Book a Free Demo",
    ctaLink: "/contact",
    sortOrder: 6,
    status: "published",
    metaTitle:
      "XiomTickets — Helpdesk & Customer Support Ticketing System | XiomTech",
    metaDescription:
      "XiomTickets is an omnichannel helpdesk ticketing system for businesses in Bangladesh. Manage support tickets from email, web, and social media in one inbox. Includes SLA tracking, automation, knowledge base, and live chat.",
    metaKeywords:
      "helpdesk software bangladesh, customer support ticketing system, it service desk software, omnichannel support system, sla management software, knowledge base software, live chat helpdesk, customer service software bangladesh, xiomtickets",
    features: JSON.stringify([
      f(
        "📥",
        "Unified Omnichannel Inbox",
        "Consolidate support queries from email, web contact forms, live chat, and social media into a single team inbox — no more jumping between platforms."
      ),
      f(
        "⚙️",
        "Smart Automation & Routing",
        "Auto-assign tickets to the right agent based on category, keywords, language, or customer tier. Canned responses answer repetitive questions in seconds."
      ),
      f(
        "⏱️",
        "SLA Policy Management",
        "Set first-response and resolution time targets by priority level. Automatic escalation alerts management before an SLA breach occurs."
      ),
      f(
        "📖",
        "Self-Service Knowledge Base",
        "Build a searchable FAQ portal where customers find answers independently — reducing incoming ticket volume by up to 40%."
      ),
      f(
        "💬",
        "Live Chat Integration",
        "Embed a live chat widget on your website. Conversations convert to tickets automatically, maintaining a full history of every customer interaction."
      ),
      f(
        "📊",
        "Agent Performance Analytics",
        "Track first response time, resolution time, and CSAT scores per agent. Identify peak ticket hours to optimize staffing and scheduling."
      ),
      f(
        "🎫",
        "Customer Ticket Portal",
        "Customers log in to view the status of their active tickets, reply to agents, and access their full support history — reducing 'any update?' follow-up messages."
      ),
      f(
        "🏢",
        "Internal IT Service Desk Mode",
        "Deploy XiomTickets internally as a company IT Service Desk — employees raise tickets for hardware issues, software access, and maintenance requests."
      ),
    ]),
    highlights: JSON.stringify([
      h(
        "Stop Losing Tickets in Email Threads",
        "When customer support runs on email, tickets get missed, duplicated, or replied to by the wrong person. XiomTickets consolidates every incoming request — whether it arrives by email, web form, live chat, or social media — into a single, organised team inbox. Every ticket is numbered, assigned, and tracked. Nothing falls through the cracks.",
        "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "SLA Breaches Are Now Someone Else's Problem",
        "XiomTickets' SLA management engine monitors every open ticket in real time. When a ticket is at risk of breaching its response or resolution target, the system automatically escalates it to a senior agent or manager — with a clear alert showing how much time remains. Your customers get the response they were promised, every time.",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Reduce Ticket Volume with a Self-Service Knowledge Base",
        "The best support ticket is one that never gets created. XiomTickets includes a fully searchable knowledge base where you publish FAQs, how-to guides, and troubleshooting articles. When customers search for help, they find answers before reaching your team — reducing ticket volume significantly and freeing agents to handle genuinely complex issues.",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
      ),
    ]),
    faqs: JSON.stringify([
      q("Can customers track the status of their complaints?", "Yes. Customers get access to a dedicated self-service portal where they can view the live status of all their active tickets, reply to support agents, rate resolved tickets, and access their full support history — without needing to call or email for updates."),
      q("Does XiomTickets support internal IT ticketing for employees?", "Yes. XiomTickets can be deployed as an internal IT Service Desk, allowing employees to raise tickets for hardware issues, software installation, system access requests, and maintenance. The IT team manages, prioritises, and resolves these requests within the same platform."),
      q("How does SLA management work?", "You define first-response and resolution time targets by ticket priority level (Critical, High, Normal, Low). XiomTickets monitors every open ticket against these targets in real time. When a ticket is approaching its SLA deadline, automated escalation alerts are sent to the agent and their manager — so breaches are caught before they happen."),
      q("Can we set up automated replies for common questions?", "Yes. You can build a library of canned responses for your most frequent support queries. When an agent selects a canned response, it's inserted into the reply instantly — saving significant time on repetitive tickets. Trigger-based automations can also send canned responses automatically based on ticket keywords."),
      q("How long does it take to set up XiomTickets?", "Most teams are up and running within 1–2 days. The setup involves configuring your email routing, creating agent accounts, defining ticket categories and SLA policies, and importing your existing customer data. Our team assists with the entire onboarding process."),
      q("Can XiomTickets integrate with our existing CRM or e-commerce platform?", "Yes. XiomTickets offers API integrations with popular CRM platforms and e-commerce systems, allowing agents to view customer purchase history and account details directly within the ticket interface for more personalised support."),
    ]),
    description: `
<h2>Customer Support That Scales with Your Business</h2>
<p>As your business grows, so does your support volume. Teams that manage support through shared email inboxes and WhatsApp groups inevitably hit a wall — missed tickets, duplicated responses, no visibility into response times, and no data on what issues are most common.</p>
<p><strong>XiomTickets</strong> is a professional helpdesk and ticketing system that gives your support team the structure, tools, and automation they need to deliver fast, consistent, high-quality service — even as ticket volumes increase.</p>

<h2>Core Features</h2>

<h3>Omnichannel Ticket Management</h3>
<p>Bring all your support channels into one organised inbox:</p>
<ul>
  <li><strong>Email</strong> — support@yourcompany.com automatically converts incoming emails into numbered tickets</li>
  <li><strong>Web Portal</strong> — embedded contact forms on your website route directly to the helpdesk</li>
  <li><strong>Live Chat</strong> — real-time chat with automatic conversation-to-ticket conversion</li>
  <li><strong>Social Media</strong> — Facebook and Instagram message integrations (optional)</li>
</ul>

<h3>Smart Automation & Ticket Routing</h3>
<p>Eliminate manual ticket assignment with intelligent automation:</p>
<ul>
  <li><strong>Skill-based routing</strong> — tickets auto-assign to the most qualified available agent based on category, language, or product type</li>
  <li><strong>Canned responses</strong> — build a library of pre-approved reply templates for your 20 most common questions</li>
  <li><strong>Scenario automation</strong> — perform multiple actions (prioritise, assign, notify, tag) from a single workflow trigger</li>
  <li><strong>Auto-acknowledgment</strong> — customers receive an instant confirmation with their ticket number the moment they submit</li>
</ul>

<h3>SLA Management</h3>
<p>Define service level agreements by ticket priority (Critical, High, Normal, Low) with specific first-response and resolution time targets. XiomTickets monitors every open ticket against these targets. When a ticket approaches its SLA deadline, automated escalation alerts are sent to the assigned agent and their manager — so no ticket breaches without someone noticing in advance.</p>

<h3>Self-Service Knowledge Base</h3>
<p>Build a comprehensive FAQ and help centre that customers can search independently. Well-organised knowledge bases can reduce incoming ticket volume significantly. Categories, tags, and search analytics show you which articles are most viewed and which searches return no results — so you know exactly what documentation to add next.</p>

<h3>Agent Performance & Reporting</h3>
<p>Measure what matters in your support operation:</p>
<ul>
  <li>Average First Response Time (FRT) by team and individual agent</li>
  <li>Ticket resolution time and backlog trends</li>
  <li>Customer Satisfaction (CSAT) scores after ticket resolution</li>
  <li>Ticket volume by channel, category, and time period</li>
  <li>Peak hour analysis for workforce scheduling optimisation</li>
</ul>

<h2>Deploy as an Internal IT Service Desk</h2>
<p>XiomTickets can also be configured as an internal IT helpdesk — allowing employees to submit requests for hardware support, software installation, system access, and maintenance. The IT team triages requests efficiently, tracks resolution times, and maintains a documented history of all internal support activity.</p>
`,
  },

  // ══════════════════════════════════════════════════════════
  // 7. XiomCommerce
  // ══════════════════════════════════════════════════════════
  {
    title: "XiomCommerce",
    slug: "xiomcommerce",
    tagline:
      "Custom e-commerce platforms engineered to convert visitors into customers",
    excerpt:
      "XiomCommerce delivers end-to-end custom e-commerce development — from single-vendor online stores to complex multi-vendor marketplaces. Built with Next.js and Node.js for maximum performance, SEO, and scalability, with full local payment gateway integration.",
    category: "Software Products",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
    logoImage: "/img/ecommarce.png",
    videoUrl: null,
    ctaText: "Get a Free Quote",
    ctaLink: "/contact",
    sortOrder: 7,
    status: "published",
    metaTitle:
      "XiomCommerce — Custom E-commerce Website Development Bangladesh | Online Store Builder",
    metaDescription:
      "XiomCommerce delivers custom e-commerce website development for businesses in Bangladesh and the Middle East. Build fast, SEO-friendly online stores with multi-vendor support, bKash/Nagad integration, and advanced inventory management.",
    metaKeywords:
      "ecommerce development bangladesh, custom online store development, multi vendor marketplace development, b2b ecommerce platform, ecommerce website dhaka, bkash payment integration, nagad payment gateway, next.js ecommerce, xiomcommerce",
    features: JSON.stringify([
      f(
        "🎨",
        "Custom UI/UX Design",
        "Bespoke storefront design aligned with your brand identity — not a template. Mobile-first, conversion-optimised layouts designed to reduce bounce rate and increase add-to-cart actions."
      ),
      f(
        "🏪",
        "Multi-Vendor Marketplace",
        "Build a Daraz-style marketplace where multiple sellers manage their own product listings, orders, and payouts — while you control the platform and earn commission."
      ),
      f(
        "📦",
        "Advanced Inventory Management",
        "Track stock across multiple warehouses. Manage complex product variants (size, colour, material). Automate low-stock alerts and purchase order suggestions."
      ),
      f(
        "💳",
        "Local & International Payments",
        "Deep integration with SSLCommerz, Aamarpay, bKash, Nagad, Stripe, and PayPal. Customers pay the way they prefer; you settle securely."
      ),
      f(
        "🚚",
        "Logistics Integration",
        "API integration with Pathao, RedX, Steadfast, and other Bangladeshi courier services — with real-time tracking visible to customers on the order page."
      ),
      f(
        "🔍",
        "SEO Architecture Built In",
        "Auto-generated XML sitemaps, dynamic meta tags for every product, and Schema.org product markup — so your items appear with price and rating directly in Google search results."
      ),
      f(
        "📊",
        "Admin Dashboard & Analytics",
        "Complete control over your platform — sales analytics, customer management, order processing, discount management, and content control from one responsive admin panel."
      ),
      f(
        "⚡",
        "Performance-First Architecture",
        "Built with Next.js for server-side rendering and edge caching. Sub-2-second page loads, 90+ Google Lighthouse scores, and Core Web Vitals optimisation built in."
      ),
    ]),
    highlights: JSON.stringify([
      h(
        "E-commerce Built to Rank on Google — From Day One",
        "A beautiful store means nothing if customers can't find it. XiomCommerce is architected for search engine visibility from the ground up: dynamic meta tags for every product and category, Schema.org product markup so items appear with price and ratings in search results, auto-generated XML sitemaps, and Core Web Vitals scores that Google rewards with higher rankings.",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Scale from 100 to 100,000 Products Without Rebuilding",
        "Generic e-commerce templates break at scale. XiomCommerce is built on a production-grade tech stack — Next.js frontend, Node.js backend, PostgreSQL database, and Redis caching — designed to handle tens of thousands of SKUs, concurrent users, and high-traffic sale events without performance degradation.",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
      ),
      h(
        "Local Payments, Global Reach",
        "Bangladeshi customers want to pay with bKash and Nagad. International buyers want Stripe or PayPal. XiomCommerce supports all of them natively — not through unreliable plugins, but through direct API integrations built and tested by our team. Every payment method is secure, PCI-compliant, and settles directly to your bank account.",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
      ),
    ]),
    faqs: JSON.stringify([
      q("How long does it take to build a custom e-commerce store?", "Timeline depends on complexity. A standard single-vendor store typically takes 4–6 weeks from design approval to launch. A multi-vendor marketplace with advanced features takes 8–14 weeks. We provide a detailed project timeline after the initial requirements discussion."),
      q("Do you integrate bKash, Nagad, and local payment gateways?", "Yes. We build direct API integrations with SSLCommerz, Aamarpay, bKash, Nagad, Stripe, and PayPal — not plugin-based integrations that break with updates. Every payment method is production-tested and PCI-DSS compliant, settling directly to your bank account."),
      q("Can the platform scale as my traffic and product catalogue grows?", "Yes. XiomCommerce is built on a scalable cloud architecture (Next.js + Node.js + PostgreSQL + Redis) deployed on AWS or Vercel. It handles tens of thousands of SKUs and can scale to support 100,000+ concurrent users during peak sale events without performance degradation."),
      q("Do you provide post-launch maintenance and support?", "Yes. We offer monthly retainer packages for ongoing maintenance, security updates, feature additions, and technical support. Most clients stay on a monthly support plan after launch to ensure the platform evolves with their business needs."),
      q("Is the e-commerce platform SEO-friendly?", "SEO is built into the architecture from day one — not bolted on later. Every product and category page has dynamic meta tags, Schema.org product markup (which triggers Google Shopping-style rich results), auto-generated XML sitemaps, and Core Web Vitals scores optimised for Google's ranking algorithm."),
      q("Can we have a mobile app alongside the web store?", "Yes. We build React Native mobile apps (iOS and Android) that connect to the same backend as your web store — sharing inventory, orders, and customer accounts. This is ideal for brands that want to offer a native mobile shopping experience."),
    ]),
    description: `
<h2>Enterprise E-Commerce Built for Growth</h2>
<p>There is a critical difference between a website that sells products and an e-commerce platform that drives business growth. The first is a digital brochure with a checkout button. The second is a revenue engine — fast enough to keep impatient mobile users, optimised for Google to bring in organic traffic, and scalable enough to handle your business five years from now.</p>
<p><strong>XiomCommerce</strong> is built to be the second. It is a custom e-commerce development service for businesses in Bangladesh and the Middle East that need a platform that performs at a professional level — not a template that looks professional until it doesn't.</p>

<h2>What We Build</h2>

<h3>Single-Vendor Online Stores</h3>
<p>For brands and retailers who want to sell their own products directly to consumers online. From a boutique clothing store to a large electronics retailer — we build stores that load fast, rank on Google, and make buying easy on every device.</p>

<h3>Multi-Vendor Marketplaces</h3>
<p>For entrepreneurs building the next Daraz, Chaldal, or Shajgoj — platforms where multiple independent sellers list their products and you earn commission on every sale. Sellers get their own dashboard; you control the platform rules, categories, promotions, and payouts.</p>

<h3>B2B E-Commerce Portals</h3>
<p>For manufacturers and distributors who sell in bulk to other businesses. Features include tiered pricing by customer group, MOQ (minimum order quantity) controls, credit term management, and purchase approval workflows.</p>

<h2>Core Platform Features</h2>

<h3>Customer Experience</h3>
<ul>
  <li>Mobile-first, conversion-optimised product pages with zoom, video, and variant selection</li>
  <li>Smart search with filters, sorting, and recommendation engine</li>
  <li>One-page checkout to minimise cart abandonment</li>
  <li>Wishlist, product comparison, and guest checkout options</li>
  <li>Order tracking page with real-time courier API integration</li>
</ul>

<h3>Inventory & Order Management</h3>
<ul>
  <li>Complex product variants (size, colour, material, weight) with per-variant pricing and stock</li>
  <li>Multi-warehouse inventory tracking with stock transfer workflows</li>
  <li>Automated low-stock alerts and suggested reorder quantities</li>
  <li>Order management pipeline — pending, confirmed, packed, shipped, delivered, returned</li>
  <li>One-click return and refund processing</li>
</ul>

<h3>Marketing & SEO Tools</h3>
<ul>
  <li>Coupon and discount engine — percentage, fixed amount, free shipping, buy-X-get-Y</li>
  <li>Flash sale scheduling with countdown timers</li>
  <li>Email marketing integration (Mailchimp, SendGrid)</li>
  <li>Product review and rating system with moderation</li>
  <li>Schema.org Product markup for Google Shopping-style search results</li>
</ul>

<h2>Technology Stack</h2>
<p>XiomCommerce is built on a modern, proven tech stack that balances performance, developer productivity, and long-term maintainability:</p>
<ul>
  <li><strong>Frontend</strong> — Next.js with server-side rendering for SEO and speed</li>
  <li><strong>Backend</strong> — Node.js with a RESTful or GraphQL API</li>
  <li><strong>Database</strong> — PostgreSQL for transactions, Redis for caching and sessions</li>
  <li><strong>Hosting</strong> — AWS, Vercel, or your preferred cloud provider</li>
  <li><strong>Security</strong> — SSL, CSRF protection, input validation, PCI-DSS compliant payment processing</li>
</ul>

<h2>Local Payment Gateways — Fully Integrated</h2>
<p>Your customers should pay the way they are comfortable. XiomCommerce comes with production-ready integrations for SSLCommerz, Aamarpay, bKash API, Nagad API, Stripe, and PayPal — not plugin dependencies that break with updates, but direct API implementations built and maintained by our engineering team.</p>
`,
  },
];

// ─────────────────────────────────────────────────────────────
// SEED RUNNER
// ─────────────────────────────────────────────────────────────
async function seed() {
  console.log(`\n🌱 Seeding ${SEED_PRODUCTS.length} products...\n`);

  for (const product of SEED_PRODUCTS) {
    try {
      await db
        .insert(products)
        .values(product)
        .onConflictDoUpdate({
          target: products.slug,
          set: {
            title: product.title,
            tagline: product.tagline,
            excerpt: product.excerpt,
            heroImage: product.heroImage,
            logoImage: product.logoImage,
            description: product.description,
            features: product.features,
            highlights: product.highlights,
            faqs: (product as any).faqs,
            category: product.category,
            ctaText: product.ctaText,
            ctaLink: product.ctaLink,
            metaTitle: product.metaTitle,
            metaDescription: product.metaDescription,
            metaKeywords: product.metaKeywords,
            sortOrder: product.sortOrder,
            status: product.status,
          },
        });

      console.log(`  ✅ ${product.title} (/${product.slug})`);
    } catch (err) {
      console.error(`  ❌ Failed: ${product.title}`, err);
    }
  }

  console.log("\n✨ Done. All products seeded.\n");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
