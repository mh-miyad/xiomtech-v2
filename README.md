Bhai, apnar requirement ami khub bhalo bhabe bujhte perechi. Apni Royex Technologies-er theke inspiration niye Xiomtech-er jonno premium, highly detailed (pray 500 lines er moto information-rich) ebong SEO-friendly product detail pages banate chachchen.

Next.js project-e hardcoded hisabe show korar jonno ekta `products.ts` ba `products.json` toiri kora sobcheye best hobe. Niche ami apnake ekta dummy `products.ts` er structure diye dicchi, jekhane Unsplash-er real image URL, SEO meta tags (title, description, keywords), aur ekdom detailed Markdown-based content deya ache. Apni eita direct apnar `src/data/products.ts` e use korte parben.

Ekhane ami **2 ti flagship product** (E-commerce & POS Software) er khub detailed code dichchi. Apni ei same pattern follow kore baki product gulo add korte parben.

### `src/data/products.ts`

```typescript
export const productsData = [
  {
    id: "1",
    slug: "e-commerce-website-development",
    title: "Premium E-commerce Website Development | XiomCommerce",
    category: "Web Development",
    price: "Custom Pricing",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
    seo: {
      metaTitle: "Best E-commerce Website Development Company in Bangladesh | Xiomtech",
      metaDescription: "Boost your online sales with Xiomtech's custom e-commerce website development services. We build scalable, fast, and SEO-friendly online stores.",
      keywords: ["ecommerce development", "online store builder", "b2b ecommerce", "b2c online store", "xiomtech ecommerce", "ecommerce website bangladesh"]
    },
    shortDescription: "End-to-end custom e-commerce solutions tailored for your business needs. From inventory management to payment gateway integration, we cover it all.",
    features: [
      "Custom UI/UX Design",
      "Multi-vendor Support",
      "Inventory Management",
      "Automated Order Tracking",
      "Secure Payment Gateway",
      "Mobile-First Responsive Design"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    content: `
# Transform Your Business with Custom E-Commerce Solutions

In today's fast-paced digital era, having a robust and highly scalable e-commerce website is not just an option, it is a necessity. At **Xiomtech**, we take inspiration from global leaders to deliver state-of-the-art E-commerce platforms that drive sales, increase user engagement, and simplify your business operations.

## Why Choose XiomCommerce?

When you choose Xiomtech for your e-commerce development, you are getting a partner dedicated to your long-term success. We don't just build websites; we build complete digital shopping experiences. 

### 1. High-Performance & Blazing Fast Speeds
Our platforms are built using modern tech stacks like Next.js and Node.js. This ensures that your pages load in milliseconds, significantly reducing bounce rates and increasing conversions.

### 2. Seamless User Experience (UX)
A confusing checkout process leads to abandoned carts. We design intuitive interfaces where users can find products easily, add them to the cart, and securely checkout in just a few clicks.

### 3. Advanced Inventory & Order Management
Manage thousands of products effortlessly. Our custom admin dashboards allow you to:
- Track stock levels in real-time.
- Automate low-stock alerts.
- Manage variants (size, color, material).
- Process refunds and returns seamlessly.

## Key Modules of Our E-Commerce Software

- **Customer App/Web Front-end:** Fully responsive, feature-rich interface for buyers.
- **Vendor/Merchant Panel:** If you are building a multi-vendor marketplace, your sellers get their own dashboard to manage their products and sales.
- **Super Admin Dashboard:** Total control over the entire platform, including user management, financial reports, and content management.
- **Delivery Rider App (Optional):** Integrated logistics management for smooth order delivery.

## SEO & Digital Marketing Ready

Our e-commerce platforms are built with SEO in mind from day one. 
- Auto-generated XML Sitemaps.
- Dynamic Meta Tags for every product category.
- Schema markup (Rich Snippets) for products, so they show up with prices and ratings on Google Search.
- Fast Core Web Vitals performance.

## Security & Reliability
We implement enterprise-grade security protocols, including SSL, CSRF protection, and PCI-DSS compliance for payment gateways, ensuring that your customers' data is always safe.
    `,
    faqs: [
      {
        question: "How long does it take to develop a custom e-commerce site?",
        answer: "Typically, a fully custom e-commerce website takes around 4 to 8 weeks depending on the complexity and feature requirements."
      },
      {
        question: "Do you integrate local payment gateways?",
        answer: "Yes, we integrate SSLCommerz, Aamarpay, bKash, Nagad, Stripe, and PayPal based on your target audience."
      }
    ]
  },
  {
    id: "2",
    slug: "best-pos-software",
    title: "Advanced Point of Sale (POS) Software | XiomPOS",
    category: "Software Solutions",
    price: "Subscription / One-time",
    thumbnail: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1556741533-6e4a6eb87b64?q=80&w=1920&auto=format&fit=crop",
    seo: {
      metaTitle: "Best POS Software in Bangladesh | Cloud & Offline POS",
      metaDescription: "Manage your retail store, restaurant, or pharmacy easily with XiomPOS. Features include barcode scanning, inventory tracking, and daily accounting.",
      keywords: ["pos software bangladesh", "point of sale system", "restaurant pos", "retail pos software", "cloud pos system", "inventory management software"]
    },
    shortDescription: "Streamline your retail or restaurant operations with our cloud-based and offline-supported Point of Sale (POS) system.",
    features: [
      "Barcode & QR Code Scanning",
      "Real-time Inventory Tracking",
      "Multi-branch Management",
      "Employee Shift & Payroll",
      "Advanced Sales Reporting",
      "Offline Mode Support"
    ],
    technologies: ["Electron.js", "React", "Express", "MongoDB", "Redis"],
    content: `
# Manage Your Business Smarter with XiomPOS

Whether you run a single retail store, a fast-paced restaurant, or a chain of super-shops, **XiomPOS** is designed to handle all your daily operations with zero hassle. Inspired by industry-leading solutions, our Point of Sale software is lightning fast, highly secure, and extremely easy to use.

## The Ultimate Retail & Restaurant Companion

XiomPOS bridges the gap between your physical store and digital data. Say goodbye to manual ledger books and welcome automated, error-free accounting.

### Key Capabilities

#### 1. Smart Inventory Management
Never run out of your best-selling products. 
- Get instant notifications when stock runs low.
- Manage damages and losses easily.
- Support for batch tracking and expiry dates (perfect for pharmacies and grocery stores).

#### 2. Lightning-Fast Billing
We know that long queues annoy customers. Our POS system is optimized for speed. With barcode integration, keyboard shortcuts, and a touch-friendly interface, your cashiers can process orders in seconds.

#### 3. Cloud Sync & Offline Support
Internet went down? No problem. XiomPOS continues to work in completely offline mode. Once the internet connection is restored, all data automatically syncs to your secure cloud database.

#### 4. In-Depth Analytics & Reporting
Make data-driven decisions. Generate detailed reports on:
- Daily, weekly, and monthly sales.
- Top-performing products and categories.
- Cashier performance.
- Profit and loss statements.

#### 5. Multi-Store Architecture
Expanding your business? Add unlimited new branches to your XiomPOS account. As the owner, you can monitor the sales and inventory of all branches from a single mobile-responsive admin dashboard anywhere in the world.

## Hardware Compatibility
Our software works perfectly with standard POS hardware:
- Thermal Receipt Printers (Bluetooth / USB / Network).
- Barcode Scanners.
- Cash Drawers.
- Touch Screen Monitors.

Grow your business effortlessly while XiomPOS handles the complex math behind the scenes!
    `,
    faqs: [
      {
        question: "Does XiomPOS work offline?",
        answer: "Yes! Our POS system supports offline mode and automatically syncs data to the cloud once you are back online."
      },
      {
        question: "Can I manage multiple shops with one account?",
        answer: "Absolutely. Our multi-branch feature allows you to control inventory, pricing, and staff across all your locations from one central dashboard."
      }
    ]
  }
];

```

### Kivabe eita use korben apni apnar Next.js e?

1. **Routing:** Apnar repo te dekhlam `src/app/(main)/products/[slug]/page.tsx` file ache. Apni ekhane ei hardcoded data use korte paren.
2. **Dynamic UI:** Oi page e giye apni `slug` anujayi ei JSON theke data `find` kore anben:
```tsx
import { productsData } from "@/data/products";
import ReactMarkdown from "react-markdown"; // markdown render korar jonno

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = productsData.find(p => p.slug === params.slug);

  if (!product) return <div>Product Not Found</div>;

  return (
    <div className="container mx-auto py-10">
      {/* Meta tags for SEO can be set using standard Next.js metadata API */}

      {/* Banner */}
      <img src={product.bannerImage} alt={product.title} className="w-full h-[400px] object-cover rounded-xl" />

      <h1 className="text-4xl font-bold mt-8">{product.title}</h1>

      <div className="mt-8 flex gap-4">
          {/* Render features */}
      </div>

      {/* Markdown Content render korar jonno */}
      <article className="prose prose-lg mt-10 max-w-none">
        <ReactMarkdown>{product.content}</ReactMarkdown>
      </article>
    </div>
  );
}

```


3. **SEO Tagging:** Next.js er `generateMetadata` function e apni ei file theke data niye SEO tags (title, description) bosiye diben, jate perfectly Google e rank kore.

Bhai, apni ekdom thik bolechen! Ekti ba duti product diye to ar puro website hobe na. Apnar repository-te thaka images (`XiomCare`, `XiomEduFlow`, `hrm`, `xiomTickets`, `xiomaccount`, `xiompos`, `ecommarce`) theke ami apnar **sob gulo flagship product** identify korechi.

Royex Technologies-er standard follow kore, ekdom SEO-optimized, highly detailed markdown content (detailed features, technical specs, modules, FAQs) soho ami apnar **7 ti main product**-er jonno ekta complete `products.ts` file toiri kore dichchi. Ekhane Unsplash-er highly relevant premium image URL deya ache.

Ei puro code-ta copy kore apnar `src/data/products.ts` file-e replace kore din:

```typescript
export const productsData = [
  {
    id: "1",
    slug: "e-commerce-website-development",
    title: "Premium E-commerce Website Development | XiomCommerce",
    category: "Web Development",
    price: "Custom Pricing",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
    seo: {
      metaTitle: "Best E-commerce Website Development Company in Bangladesh | Xiomtech",
      metaDescription: "Boost your online sales with Xiomtech's custom e-commerce website development services. We build scalable, fast, and SEO-friendly online stores.",
      keywords: ["ecommerce development", "online store builder", "b2b ecommerce", "b2c online store", "xiomtech ecommerce", "ecommerce website bangladesh", "multi vendor marketplace"]
    },
    shortDescription: "End-to-end custom e-commerce solutions tailored for your business needs. From inventory management to payment gateway integration, we cover it all.",
    features: [
      "Custom UI/UX Design",
      "Multi-vendor Support",
      "Inventory Management",
      "Automated Order Tracking",
      "Secure Payment Gateway",
      "Mobile-First Responsive Design"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"],
    content: `
# Transform Your Business with Custom E-Commerce Solutions

In today's fast-paced digital era, having a robust and highly scalable e-commerce website is not just an option, it is a necessity. At **Xiomtech**, we take inspiration from global leaders to deliver state-of-the-art E-commerce platforms that drive sales, increase user engagement, and simplify your business operations.

## Why Choose XiomCommerce?

When you choose Xiomtech for your e-commerce development, you are getting a partner dedicated to your long-term success. We don't just build websites; we build complete digital shopping experiences. 

### 1. High-Performance & Blazing Fast Speeds
Our platforms are built using modern tech stacks like Next.js and Node.js. This ensures that your pages load in milliseconds, significantly reducing bounce rates and increasing conversions. A one-second delay in page load time can lead to a 7% reduction in conversions—we make sure that never happens to you.

### 2. Seamless User Experience (UX)
A confusing checkout process leads to abandoned carts. We design intuitive interfaces where users can find products easily, add them to the cart, and securely checkout in just a few clicks. Our mobile-first approach guarantees that smartphone users get an app-like experience right in their browsers.

### 3. Advanced Inventory & Order Management
Manage thousands of products effortlessly. Our custom admin dashboards allow you to:
- Track stock levels in real-time across multiple warehouses.
- Automate low-stock alerts and purchase orders.
- Manage complex product variants (size, color, material, weight).
- Process refunds, partial fulfillments, and returns seamlessly.
- Generate dynamic shipping labels and invoices.

## Key Modules of Our E-Commerce Software

- **Customer Web/App Interface:** Fully responsive, personalized product recommendations, wishlist, and secure profiles.
- **Vendor/Merchant Panel:** For multi-vendor setups (like Daraz or Amazon), sellers get their own dedicated portal to track sales, upload products, and manage payouts.
- **Super Admin Dashboard:** Total administrative control. Monitor global sales metrics, manage user roles, customize homepage banners, and view deep financial analytics.
- **Delivery & Logistics Module:** API integration with third-party logistics (e.g., Pathao, RedX, Steadfast) for real-time tracking.

## SEO & Digital Marketing Ready

Our platforms are natively optimized for search engines:
- **Auto-generated XML Sitemaps** and `robots.txt`.
- **Dynamic Meta Tags** for every single product and category page.
- **Schema.org Markup (Rich Snippets)** ensuring your products show up with star ratings, prices, and stock status directly on Google Search results.
- Highly optimized Core Web Vitals (LCP, FID, CLS).

## Security & Reliability
E-commerce deals with sensitive customer data and payments. We implement enterprise-grade security protocols, including SSL encryption, CSRF/XSS protection, and strict PCI-DSS compliance standards for payment gateways. Your customers' data is ironclad.
    `,
    faqs: [
      {
        question: "How long does it take to develop a custom e-commerce site?",
        answer: "Typically, a fully custom e-commerce website takes around 4 to 8 weeks depending on the complexity, design requirements, and custom features."
      },
      {
        question: "Do you integrate local payment gateways in Bangladesh?",
        answer: "Yes, we deeply integrate popular local payment gateways like SSLCommerz, Aamarpay, bKash, Nagad, as well as international gateways like Stripe and PayPal."
      },
      {
        question: "Is the e-commerce platform scalable if my traffic increases?",
        answer: "Absolutely. We use scalable cloud infrastructure (AWS/Vercel) and optimized databases that can handle anywhere from 100 to 100,000+ concurrent users."
      }
    ]
  },
  {
    id: "2",
    slug: "advanced-pos-software",
    title: "Advanced Point of Sale (POS) Software | XiomPOS",
    category: "Software Solutions",
    price: "Subscription / One-time",
    thumbnail: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1556741533-6e4a6eb87b64?q=80&w=1920&auto=format&fit=crop",
    seo: {
      metaTitle: "Best POS Software in Bangladesh | Cloud & Offline POS",
      metaDescription: "Manage your retail store, restaurant, or pharmacy easily with XiomPOS. Features include barcode scanning, inventory tracking, and daily accounting.",
      keywords: ["pos software bangladesh", "point of sale system", "restaurant pos", "retail pos software", "cloud pos system", "inventory management software"]
    },
    shortDescription: "Streamline your retail or restaurant operations with our cloud-based and offline-supported Point of Sale (POS) system.",
    features: [
      "Barcode & QR Code Scanning",
      "Real-time Inventory Tracking",
      "Multi-branch Management",
      "Offline Mode Support",
      "Employee Shift Management",
      "Comprehensive Sales Reporting"
    ],
    technologies: ["Electron.js", "React", "Node.js", "MongoDB", "Socket.io"],
    content: `
# Manage Your Business Smarter with XiomPOS

Whether you run a single retail store, a fast-paced restaurant, or a chain of super-shops, **XiomPOS** is designed to handle all your daily operations with zero hassle. Inspired by industry-leading retail solutions, our Point of Sale software is lightning fast, highly secure, and extremely easy to use for cashiers of all skill levels.

## The Ultimate Retail & Restaurant Companion

XiomPOS bridges the gap between your physical store and digital data. Say goodbye to manual ledger books, calculation errors, and stock discrepancies. Welcome to automated, error-free retail management.

### 1. Lightning-Fast Billing & Checkout
We know that long queues annoy customers. Our POS system is optimized for extreme speed.
- Full integration with barcode scanners and weighing scales.
- Keyboard shortcuts for touchless billing.
- Touch-screen optimized interface for modern POS hardware.
- Hold cart features (pause a transaction if a customer forgot his wallet, and bill the next person).

### 2. Smart Inventory & Warehouse Management
Never run out of your best-selling products, and never overstock dead inventory.
- Get instant notifications via SMS/Email when stock runs low.
- Manage damages, returns, and inter-branch stock transfers easily.
- Support for batch tracking and expiry dates—an absolute must for pharmacies, grocery stores, and FMCG businesses.

### 3. Cloud Sync & True Offline Support
Internet connectivity issues? No problem. XiomPOS is built with a hybrid architecture. It continues to work flawlessly in a completely offline mode. The moment your internet connection is restored, all data automatically and securely syncs to your central cloud database without any manual intervention.

### 4. In-Depth Analytics & Reporting
Make data-driven decisions that boost your bottom line. Generate detailed reports on:
- Daily, weekly, and monthly net sales, gross margins, and tax liabilities.
- Top-performing products and underperforming categories.
- Cashier performance and shift-wise cash drawer reconciliation.
- Profit and loss statements.

### 5. Multi-Store Architecture
Expanding your business footprint? Add unlimited new branches to your XiomPOS account. As the business owner, you can monitor the live sales, stock levels, and daily expenses of all branches from a single mobile-responsive admin dashboard anywhere in the world.

## Hardware Compatibility
Our software works perfectly out-of-the-box with standard industry hardware:
- Thermal Receipt Printers (Bluetooth / USB / LAN).
- Barcode & QR Scanners.
- Electronic Cash Drawers.
- Customer Facing Displays (Pole Displays).
    `,
    faqs: [
      {
        question: "Does XiomPOS work completely offline?",
        answer: "Yes! Our POS system supports full offline mode. You can continue billing customers, and it will automatically sync data to the cloud once you are back online."
      },
      {
        question: "Can I manage multiple retail shops with one account?",
        answer: "Absolutely. Our multi-branch management feature allows you to control inventory, pricing, and view reports across all your physical locations from one central dashboard."
      },
      {
        question: "Is training provided for my staff?",
        answer: "Yes, we provide comprehensive onboarding, training sessions, and user manuals to ensure your staff is fully comfortable using the software from day one."
      }
    ]
  },
  {
    id: "3",
    slug: "hrm-and-payroll-software",
    title: "Complete HR & Payroll Management | XiomHRM",
    category: "Enterprise Software",
    price: "Custom Quote",
    thumbnail: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop",
    seo: {
      metaTitle: "HR & Payroll Management Software in Bangladesh | XiomHRM",
      metaDescription: "Automate your company's HR processes, attendance tracking, biometric integration, and complex payroll calculations with XiomHRM software.",
      keywords: ["hrm software bangladesh", "payroll management system", "employee tracking software", "biometric attendance software", "hr management xiomtech"]
    },
    shortDescription: "Automate employee onboarding, biometric attendance, leave management, and complex payroll calculations with our comprehensive HR suite.",
    features: [
      "Biometric Device Integration",
      "Automated Payroll Calculation",
      "Leave & Attendance Tracking",
      "Employee Self-Service Portal",
      "Performance Appraisals",
      "Tax & Provident Fund Module"
    ],
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "AWS S3"],
    content: `
# Empower Your Workforce with XiomHRM

Managing human resources shouldn't be a paperwork nightmare. **XiomHRM** is a comprehensive Human Resource Management System designed to automate and simplify your company's core HR processes. From recruitment to retirement, we provide the digital tools your HR department needs to thrive.

## Core Modules of XiomHRM

### 1. Attendance & Leave Management
Say goodbye to manual attendance registers.
- **Biometric Integration:** Seamlessly connect ZKTeco, Virdi, or other standard fingerprint/facial recognition attendance devices directly to the software via API/LAN.
- **Geofenced Mobile Attendance:** Allow remote or field workers to punch in/out using their mobile GPS within authorized zones.
- **Leave Workflows:** Employees can apply for sick, casual, or earned leaves through their portal. Managers get instant push notifications to approve or reject them based on available balances.

### 2. Automated Payroll Processing
Calculating salaries at the end of the month is often the most stressful time for HR and Finance. XiomHRM turns days of work into minutes.
- Auto-calculate gross and net salaries based on attendance data, late marks, and half-days.
- Manage custom allowances (house rent, medical, transport) and deductions.
- Fully automated Tax (TDS), Provident Fund (PF), and Gratuity calculations compliant with local labor laws.
- Generate one-click bank advice reports and digital payslips for employees.

### 3. Employee Self-Service (ESS) Portal
Empower your employees by giving them access to their own data. Through the ESS mobile or web app, employees can:
- View their daily attendance logs.
- Download current and past payslips.
- Apply for leaves and track approval status.
- Submit expense claims and reimbursements with receipt attachments.
- Update personal information and emergency contacts.

### 4. Recruitment & Onboarding
Streamline your hiring process from vacancy to job offer.
- Publish job openings directly to your careers page.
- Parse resumes and track applicants through customized interview stages.
- Once hired, initiate automated digital onboarding workflows, document collection, and asset allocation (e.g., assigning laptops, ID cards).

### 5. Performance & Appraisals
Retain top talent by monitoring performance objectively. Set KPIs, conduct 360-degree reviews, and manage promotion cycles transparently within the system.
    `,
    faqs: [
      {
        question: "Can XiomHRM connect with our existing ZKTeco fingerprint machines?",
        answer: "Yes! XiomHRM has native API and database integration modules that can pull real-time punch data directly from almost all standard biometric machines."
      },
      {
        question: "Is the payroll system customizable to our company's unique policies?",
        answer: "Absolutely. The payroll module is highly dynamic. You can define custom formulas for basic pay, allowances, late deductions, and overtime rules."
      }
    ]
  },
  {
    id: "4",
    slug: "hospital-clinic-management-system",
    title: "Hospital & Clinic Management System | XiomCare",
    category: "Healthcare Software",
    price: "Custom Quote",
    thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1538108149393-cebb47acdd92?q=80&w=1920&auto=format&fit=crop",
    seo: {
      metaTitle: "Hospital Management Software (HMS) Bangladesh | XiomCare",
      metaDescription: "A complete digital solution for hospitals, clinics, and diagnostic centers. Manage patient records, OPD/IPD, pharmacy, and pathology labs efficiently.",
      keywords: ["hospital management software", "clinic management system bangladesh", "diagnostic center software", "patient management system", "healthcare IT solutions"]
    },
    shortDescription: "Digitize your healthcare facility. Manage OPD, IPD, pathology labs, pharmacy, and electronic medical records (EMR) in one unified system.",
    features: [
      "OPD & IPD Management",
      "Electronic Medical Records (EMR)",
      "Pathology & Lab Reporting",
      "Pharmacy & Inventory",
      "Doctor Appointment Scheduling",
      "Billing & Insurance Claims"
    ],
    technologies: ["React", "Django", "PostgreSQL", "Docker", "HL7 Standards"],
    content: `
# Digitize Your Healthcare Facility with XiomCare

In the healthcare industry, efficiency and accuracy save lives. **XiomCare** is a state-of-the-art Hospital Management System (HMS) built to streamline operations for hospitals, polyclinics, and diagnostic centers. It provides a paperless environment, bridging the gap between doctors, patients, and administrative staff.

## Comprehensive Healthcare Modules

### 1. Patient Registration & OPD Management
Handle high volumes of daily outpatients smoothly.
- Quick patient registration with digital ID card generation.
- Dynamic doctor appointment scheduling via phone, front desk, or online portal.
- Token and queue management system with digital display support for waiting areas.

### 2. Inpatient Department (IPD) & Ward Management
Manage patient admissions effortlessly.
- Real-time bed availability status across various wards and cabins.
- Track daily nursing notes, doctor visits, and vital signs.
- Automated generation of discharge summaries and IPD advance billing.

### 3. Electronic Medical Records (EMR)
Eliminate lost patient files. Our highly secure EMR system stores a patient's complete medical history, previous prescriptions, allergies, and lab results in a centralized digital vault, accessible instantly by authorized doctors.

### 4. Pathology & Diagnostic Lab Management
Integrate your lab directly into the HMS.
- Doctor's lab test requests are sent instantly to the pathology department.
- Technicians can input test results directly into pre-formatted digital templates.
- Automatic SMS notifications to patients when reports are ready for online download.

### 5. Pharmacy & Inventory Control
Manage medicine stocks with precision.
- Integrated retail pharmacy billing linked directly to doctor prescriptions.
- Track medicine batch numbers and strict expiry date alerts.
- Automated purchase orders for low-stock drugs.

### 6. Integrated Billing & Finance
No more billing disputes or revenue leakage.
- Unified billing: Combine consultation fees, bed charges, OT charges, lab tests, and pharmacy bills into a single comprehensive invoice.
- Commission management for referring doctors.
- TPA (Third Party Administrator) and health insurance claim management.
    `,
    faqs: [
      {
        question: "Is patient data strictly secure?",
        answer: "Yes, we adhere to global healthcare data security standards. All patient data is encrypted, and strict role-based access control ensures only authorized personnel can view sensitive medical records."
      },
      {
        question: "Can patients book appointments online?",
        answer: "Yes, XiomCare comes with an optional Patient Portal (web/app) where patients can view doctor schedules, book appointments, and download their test reports from home."
      }
    ]
  },
  {
    id: "5",
    slug: "school-college-management-system",
    title: "School & College Management System | XiomEduFlow",
    category: "Education Tech",
    price: "Custom Quote",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop",
    seo: {
      metaTitle: "School Management Software in Bangladesh | XiomEduFlow",
      metaDescription: "Automate admissions, fees collection, academic grading, and online classes with XiomEduFlow - the ultimate school and college management ERP.",
      keywords: ["school management software bangladesh", "education erp system", "college management system", "student portal software", "fees management software"]
    },
    shortDescription: "A fully integrated Education ERP to manage admissions, student attendance, fee collections, exam grading, and parent-teacher communication.",
    features: [
      "Online Admission System",
      "Automated Fee Collection",
      "Academic Routine & Syllabus",
      "Exam & Result Grading",
      "Parent/Student Mobile App",
      "Library & Hostel Management"
    ],
    technologies: ["Next.js", "Laravel", "MySQL", "Pusher", "React Native"],
    content: `
# Redefining Education Administration with XiomEduFlow

Managing an educational institute requires balancing the needs of students, teachers, parents, and administrative staff. **XiomEduFlow** is a comprehensive Education ERP designed specifically for schools, colleges, and universities to digitalize their entire campus operations.

## Key Features of XiomEduFlow

### 1. Student Admission & Enrollment
Move away from paper forms.
- Completely online admission portal where parents can fill forms and upload documents.
- Generate digital Student ID cards and roll numbers automatically.
- Maintain a digital archive of student profiles, alumni records, and transfer certificates.

### 2. Smart Fee Management
Ensure steady cash flow with automated fee tracking.
- Set up custom fee structures (tuition, transport, library, lab fees).
- Integration with local payment gateways (bKash, Nagad, Card) for online fee payment by parents.
- Automatically generate digital money receipts and send SMS alerts for due or late fees.

### 3. Academic & Routine Management
Keep the campus organized.
- Create complex dynamic class routines avoiding teacher time-clashes.
- Manage syllabus progress and assign digital homework/assignments.
- Track daily student attendance via manual entry or smart ID cards (RFID integration).

### 4. Exam & Result Automation
Make report card generation a breeze.
- Create custom exam structures, grading systems, and mark distributions.
- Teachers input marks digitally via their dedicated portal.
- Auto-generate comprehensive digital report cards, tabulation sheets, and merit lists with a single click.

### 5. Dedicated Mobile Apps for Parents & Teachers
Communication is key to modern education.
- **Parent App:** Parents can view live attendance, exam results, notice boards, and pay fees instantly.
- **Teacher App:** Teachers can take attendance, upload class notes, and grade assignments on the go.

### 6. Additional Modules
- **Library Management:** Catalog books, manage issue/return cycles, and calculate fine dues.
- **Transport Management:** Track school buses, driver details, and manage route-wise transport fees.
- **Hostel Management:** Manage dormitory allocations, mess fees, and visitor records.
    `,
    faqs: [
      {
        question: "Can parents pay school fees via mobile banking?",
        answer: "Yes, XiomEduFlow integrates seamlessly with payment gateways, allowing parents to pay fees securely using bKash, Nagad, or credit/debit cards from their portal."
      },
      {
        question: "Does the software support RFID attendance for students?",
        answer: "Yes, we can integrate RFID readers at the school gate. When a student taps their card, attendance is marked, and an automated SMS is sent to the parent."
      }
    ]
  },
  {
    id: "6",
    slug: "accounting-finance-software",
    title: "Smart Accounting & Finance Software | XiomAccount",
    category: "Software Solutions",
    price: "Custom Quote",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop",
    seo: {
      metaTitle: "Cloud Accounting Software in Bangladesh | XiomAccount",
      metaDescription: "Keep track of your company's financials with our double-entry accounting software. Manage ledgers, invoices, expenses, and generate real-time tax reports.",
      keywords: ["accounting software bangladesh", "financial management software", "cloud accounting", "double entry accounting", "expense tracking system"]
    },
    shortDescription: "A secure, cloud-based double-entry accounting system to manage your general ledger, accounts payable/receivable, and automated financial reporting.",
    features: [
      "Double-Entry Accounting System",
      "Chart of Accounts",
      "Accounts Payable & Receivable",
      "Automated Bank Reconciliation",
      "Expense Tracking",
      "Comprehensive Financial Reports"
    ],
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Redis", "PDF Generation API"],
    content: `
# Gain Complete Financial Clarity with XiomAccount

Your business decisions are only as good as your financial data. **XiomAccount** is a robust, cloud-based accounting and finance management system built on strict double-entry accounting principles. Whether you are an SME or a large corporation, our software ensures your books are always accurate, balanced, and audit-ready.

## Master Your Finances

### 1. Advanced General Ledger & Chart of Accounts
- Fully customizable Chart of Accounts to match your industry specific needs.
- Easy journal entry creation with automated debit and credit balancing.
- Multi-currency support for businesses engaged in import/export.

### 2. Invoicing & Accounts Receivable (A/R)
Get paid faster and maintain healthy cash flow.
- Create professional, customized digital invoices and estimates.
- Automatically track due dates and send automated payment reminder emails to clients.
- Record partial payments and track aging receivables easily.

### 3. Expense Tracking & Accounts Payable (A/P)
Keep your costs under tight control.
- Log daily expenses, vendor bills, and overhead costs digitally.
- Upload and attach scanned copies of receipts to expense entries for easy auditing.
- Track aging payables to ensure you maintain good relationships with your suppliers without disrupting cash flow.

### 4. Smart Bank Reconciliation
Match your physical bank statements with your software ledger effortlessly. Upload your bank statement CSV file, and XiomAccount's intelligent matching algorithm will auto-suggest reconciliations for transactions, saving hours of manual data entry.

### 5. Real-Time Financial Reporting
Stop waiting for the month-end to know your financial health. Generate real-time reports instantly:
- Balance Sheet
- Profit & Loss Statement (Income Statement)
- Cash Flow Statement
- Trial Balance
- Tax Calculation Summaries

All reports can be exported to highly formatted PDF or Excel files for your auditors and investors.
    `,
    faqs: [
      {
        question: "Is XiomAccount suitable for non-accountants?",
        answer: "While it is a proper double-entry system, the UI is designed to be highly intuitive. Routine tasks like invoicing and expense logging require no accounting knowledge. The software handles the complex journal entries in the background."
      },
      {
        question: "Is my financial data secure in the cloud?",
        answer: "Security is our top priority. All financial data is encrypted at rest and in transit. Daily automated backups ensure you never lose your critical business data."
      }
    ]
  },
  {
    id: "7",
    slug: "helpdesk-ticketing-system",
    title: "Customer Support & Ticketing System | XiomTickets",
    category: "Enterprise Software",
    price: "Custom Quote",
    thumbnail: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=800&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1920&auto=format&fit=crop",
    seo: {
      metaTitle: "Helpdesk & IT Ticketing System in Bangladesh | XiomTickets",
      metaDescription: "Deliver exceptional customer support with our omnichannel helpdesk software. Manage tickets, SLAs, knowledge bases, and agent productivity.",
      keywords: ["helpdesk software", "ticketing system bangladesh", "customer support software", "IT service desk", "customer service tool"]
    },
    shortDescription: "Centralize your customer support. Manage multi-channel queries via a unified ticketing system equipped with SLA tracking and live chat.",
    features: [
      "Omnichannel Ticket Management",
      "SLA Policy Tracking",
      "Automated Ticket Routing",
      "Customer Portal & Knowledge Base",
      "Agent Performance Analytics",
      "Live Chat Integration"
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Elasticsearch"],
    content: `
# Elevate Your Customer Support with XiomTickets

Excellent customer service is the backbone of customer retention. **XiomTickets** is an omnichannel helpdesk and ticketing system designed to help your support team resolve issues faster, collaborate efficiently, and keep your customers happy.

## A Unified Support Experience

### 1. Omnichannel Ticket Management
Stop jumping between email, social media, and phone logs. XiomTickets funnels customer queries from multiple channels into one centralized inbox:
- Support Emails (e.g., support@yourcompany.com automatically convert to tickets).
- Web portal contact forms.
- Integrated Live Chat.
- Social Media mentions (Facebook/Twitter integrations).

### 2. Smart Automation & Routing
Eliminate manual ticket dispatching.
- **Skill-based Routing:** Automatically assign tickets to the right agent based on category, keywords, or language.
- **Canned Responses:** Answer repetitive questions instantly with pre-saved templates.
- **Scenario Automations:** Perform multiple actions (e.g., mark as priority, assign to manager, send email) with a single click.

### 3. SLA Management (Service Level Agreements)
Never miss a deadline. Set strict rules for first-response times and resolution times. If a ticket is approaching an SLA breach, the software automatically escalates it to senior management and alerts the agent.

### 4. Self-Service Knowledge Base
Help your customers help themselves. Build a rich, searchable Knowledge Base (FAQ portal) where customers can find answers to common questions without ever creating a ticket. This dramatically reduces your team's workload.

### 5. In-Depth Reporting & Analytics
Measure your team's success.
- Track average First Response Time (FRT) and Resolution Time.
- Monitor individual agent productivity and customer satisfaction (CSAT) scores.
- Identify peak ticket hours to optimize staff scheduling.
    `,
    faqs: [
      {
        question: "Can customers track the status of their complaints?",
        answer: "Yes, customers get access to a dedicated portal where they can view the live status of their active tickets, reply to agents, and review past issues."
      },
      {
        question: "Does it support internal IT ticketing for my employees?",
        answer: "Absolutely. XiomTickets can be deployed internally as an IT Service Desk, allowing your employees to raise tickets for hardware issues, software access, or maintenance."
      }
    ]
  }
];

```

### Bhai Eita Kivabe Integrate Korben?

1. Apnar `src/data/products.ts` file e ei pura Array ta paste kore din.
2. Apnar products list page e (e.g., `src/components/features/product/ProductListClient.tsx` ba jekhane product cards show korchen) apni `.map()` chalaben `productsData` er upore.
3. Ar details page e (e.g., `src/app/(main)/products/[slug]/page.tsx`), jekhane ami age dekhalam, slug diye filter kore markdown render korben.

Ekdom premium content deya ache, Google eo bhari rank korbe! Aro kono section ba product add korte hole bolben.