/**
 * Generates the clean standalone single-file HTML with Tailwind CSS CDN
 * matching the user prompt requirement so it can be copied or saved as index.html
 */
export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Peddolla Karthik | Sales Executive & Sales Representative</title>
  <meta name="description" content="Portfolio of Peddolla Karthik - Sales Executive & Sales Representative based in Nizamabad. Experienced in Go Express and Big C Mobiles.">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white">

  <!-- Top Navigation (Sticky) -->
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
      <!-- Brand Zone -->
      <a href="#home" class="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">PK</span>
        <span>Peddolla Karthik</span>
      </a>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
        <a href="#about" class="hover:text-blue-600 transition-colors whitespace-nowrap">About</a>
        <a href="#experience" class="hover:text-blue-600 transition-colors whitespace-nowrap">Experience</a>
        <a href="#skills" class="hover:text-blue-600 transition-colors whitespace-nowrap">Skills</a>
        <a href="#education" class="hover:text-blue-600 transition-colors whitespace-nowrap">Education</a>
        <a href="#contact" class="hover:text-blue-600 transition-colors whitespace-nowrap">Contact</a>
      </nav>

      <!-- Primary Action -->
      <div class="flex items-center gap-3 shrink-0">
        <a href="tel:7673930347" class="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors whitespace-nowrap">
          Call Now
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <span>Sales Professional</span>
            <span aria-hidden="true">&bull;</span>
            <span>Nizamabad, Telangana</span>
          </div>

          <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Peddolla Karthik
          </h1>
          <p class="text-xl sm:text-2xl font-semibold text-slate-700">
            Sales Executive &amp; Sales Representative
          </p>

          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Proactive, target-driven sales professional with proven experience in retail consumer electronics and express logistics client management. Passionate about customer relationship building, persuasive demonstrations, and exceeding targets.
          </p>

          <!-- Contact Details Strip -->
          <div class="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-600 pt-2">
            <a href="tel:7673930347" class="hover:text-blue-600 flex items-center gap-1.5 font-medium">
              <span>&#9742;</span> 7673930347
            </a>
            <span class="text-slate-300">&bull;</span>
            <a href="mailto:peddollakarthik1@gmail.com" class="hover:text-blue-600 flex items-center gap-1.5 font-medium">
              <span>&#9993;</span> peddollakarthik1@gmail.com
            </a>
            <span class="text-slate-300">&bull;</span>
            <span class="flex items-center gap-1.5">
              <span>&#128205;</span> Amrad, Nizamabad
            </span>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3 pt-4">
            <a href="tel:7673930347" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-sm transition-colors text-sm">
              Call 7673930347
            </a>
            <a href="mailto:peddollakarthik1@gmail.com" class="px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold rounded-xl transition-colors text-sm">
              Email Me
            </a>
            <a href="https://wa.me/917673930347" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-sm transition-colors text-sm">
              WhatsApp Message
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 flex justify-center">
          <div class="w-full max-w-sm bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-2xl shrink-0">
                PK
              </div>
              <div>
                <h3 class="font-bold text-slate-900 text-lg">Peddolla Karthik</h3>
                <p class="text-xs text-slate-500">Sales Executive</p>
                <p class="text-xs text-slate-400">Amrad, Nizamabad</p>
              </div>
            </div>
            <div class="border-t border-slate-100 pt-3 space-y-2 text-xs">
              <div class="flex justify-between py-1 border-b border-slate-50">
                <span class="text-slate-500">Experience</span>
                <span class="font-semibold text-slate-800">Go Express &amp; Big C Mobiles</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-50">
                <span class="text-slate-500">Languages</span>
                <span class="font-semibold text-slate-800">Telugu, Hindi, English</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-50">
                <span class="text-slate-500">Education</span>
                <span class="font-semibold text-slate-800">Intermediate &amp; SSC</span>
              </div>
              <div class="flex justify-between py-1">
                <span class="text-slate-500">Availability</span>
                <span class="font-semibold text-emerald-600">Immediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Career Objective & Overview -->
  <section id="about" class="py-16 bg-white border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-wider text-blue-600">Career Objective</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
          Dedicated to Expanding Skills &amp; Driving Organizational Growth
        </h2>
        <div class="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
          <p class="text-base sm:text-lg text-slate-700 font-medium leading-relaxed italic">
            &ldquo;To obtain a challenging position in a reputable organization where I can utilize my skills, expand my knowledge, and contribute to organizational growth while developing my career.&rdquo;
          </p>
        </div>
      </div>

      <!-- Languages Spoken -->
      <div class="mt-12">
        <h3 class="text-lg font-bold text-slate-900 mb-4">Languages Known</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 class="font-semibold text-slate-900">Telugu</h4>
            <p class="text-xs text-slate-500 mt-1">Native / Primary Language</p>
            <p class="text-xs text-slate-600 mt-2">Fluent regional communication across Telangana &amp; Andhra Pradesh.</p>
          </div>
          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 class="font-semibold text-slate-900">Hindi</h4>
            <p class="text-xs text-slate-500 mt-1">Fluent Professional</p>
            <p class="text-xs text-slate-600 mt-2">Smooth communication with diverse customers and vendors.</p>
          </div>
          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 class="font-semibold text-slate-900">English</h4>
            <p class="text-xs text-slate-500 mt-1">Working Professional</p>
            <p class="text-xs text-slate-600 mt-2">Technical specifications, documentation, and formal inquiries.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Work Experience Section -->
  <section id="experience" class="py-16 bg-slate-50 border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-blue-600">Work Experience</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
          Proven Track Record in Sales &amp; Customer Support
        </h2>
        <p class="text-sm text-slate-500 mt-1">Demonstrated success across express logistics and mobile electronics retail.</p>
      </div>

      <div class="space-y-8">
        <!-- Experience 1: Go Express -->
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
            <div>
              <h3 class="text-xl font-bold text-slate-900">Sales Representative</h3>
              <p class="text-sm font-semibold text-blue-600">Go Express Nizamabad</p>
            </div>
            <span class="text-xs text-slate-500 font-medium">Nizamabad, Telangana</span>
          </div>
          <ul class="space-y-3 text-sm text-slate-600">
            <li class="flex items-start gap-2">
              <span class="text-blue-600 font-bold">&check;</span>
              <span><strong>Handled customer inquiries:</strong> Provided prompt and courteous assistance with service details, pricing estimates, and status updates.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-600 font-bold">&check;</span>
              <span><strong>Lead Generation &amp; Follow-ups:</strong> Actively generated new business leads and consistently followed up with potential customers to achieve sales targets.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-600 font-bold">&check;</span>
              <span><strong>Customer Relationship Management:</strong> Maintained long-term positive client relationships and provided timely post-sales support.</span>
            </li>
          </ul>
        </div>

        <!-- Experience 2: Big C Mobiles -->
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
            <div>
              <h3 class="text-xl font-bold text-slate-900">Sales Executive</h3>
              <p class="text-sm font-semibold text-blue-600">Big C Mobiles</p>
            </div>
            <span class="text-xs text-slate-500 font-medium">Nizamabad, Telangana</span>
          </div>
          <ul class="space-y-3 text-sm text-slate-600">
            <li class="flex items-start gap-2">
              <span class="text-blue-600 font-bold">&check;</span>
              <span><strong>Customer Consultation:</strong> Assisted retail walk-in customers in selecting mobile phones and accessories matched to their specific budget and usage requirements.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-600 font-bold">&check;</span>
              <span><strong>Product Demonstrations:</strong> Clearly explained product specifications, camera capabilities, operating features, warranty offers, and promotional pricing.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-600 font-bold">&check;</span>
              <span><strong>Target Achievement &amp; Upselling:</strong> Consistently met daily and monthly store sales targets through persuasive promotion, cross-selling cases/protectors, and upselling premium models.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Skills Section -->
  <section id="skills" class="py-16 bg-white border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-blue-600">Key Competencies</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
          Core Sales &amp; Customer Support Skills
        </h2>
        <p class="text-sm text-slate-500 mt-1">Specialized capabilities developed through direct retail and client-facing roles.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
          <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">&#128200;</div>
          <h3 class="font-bold text-slate-900 text-base">Sales &amp; Lead Generation</h3>
          <p class="text-xs text-slate-600 mt-2">Identifying customer requirements, prospecting leads, and converting opportunities into closed sales.</p>
        </div>

        <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
          <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">&#127919;</div>
          <h3 class="font-bold text-slate-900 text-base">Achieving Sales Targets</h3>
          <p class="text-xs text-slate-600 mt-2">Consistently meeting and exceeding daily, weekly, and monthly organizational sales quotas.</p>
        </div>

        <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
          <div class="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">&#128241;</div>
          <h3 class="font-bold text-slate-900 text-base">Product Demonstration</h3>
          <p class="text-xs text-slate-600 mt-2">Delivering clear, hands-on presentations of smartphone features, technical specs, and benefits.</p>
        </div>

        <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
          <div class="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg mb-4">&#11088;</div>
          <h3 class="font-bold text-slate-900 text-base">Upselling &amp; Cross-Selling</h3>
          <p class="text-xs text-slate-600 mt-2">Maximizing revenue per customer by recommending compatible accessories, warranties, and upgrades.</p>
        </div>

        <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
          <div class="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-lg mb-4">&#128101;</div>
          <h3 class="font-bold text-slate-900 text-base">Customer Service</h3>
          <p class="text-xs text-slate-600 mt-2">Building positive, trustworthy relationships through attentive listening and prompt assistance.</p>
        </div>

        <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
          <div class="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg mb-4">&#128196;</div>
          <h3 class="font-bold text-slate-900 text-base">Billing &amp; Documentation</h3>
          <p class="text-xs text-slate-600 mt-2">Handling counter invoicing, warranty registration, payment processing, and paperwork accuracy.</p>
        </div>

        <div class="p-6 bg-slate-50 rounded-xl border border-slate-200 sm:col-span-2 lg:col-span-3">
          <div class="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-lg mb-4">&#128222;</div>
          <h3 class="font-bold text-slate-900 text-base">Follow-ups &amp; Pipeline Maintenance</h3>
          <p class="text-xs text-slate-600 mt-2">Systematic communication with prospective clients to ensure continuous customer satisfaction and repeated orders.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Education Section -->
  <section id="education" class="py-16 bg-slate-50 border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-blue-600">Academic Background</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
          Education
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <span class="text-xs font-semibold text-blue-600 uppercase">Higher Secondary</span>
          <h3 class="text-lg font-bold text-slate-900 mt-1">Board of Intermediate Education</h3>
          <p class="text-xs text-slate-500 mt-1">Telangana State Board of Intermediate Education</p>
          <p class="text-xs text-slate-600 mt-3">Completed Intermediate coursework with foundational academics, disciplined study habits, and communication skills.</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <span class="text-xs font-semibold text-blue-600 uppercase">Secondary Education</span>
          <h3 class="text-lg font-bold text-slate-900 mt-1">Secondary School Certificate (SSC)</h3>
          <p class="text-xs text-slate-500 mt-1">State Board of Secondary Education</p>
          <p class="text-xs text-slate-600 mt-3">Successfully completed 10th standard board examinations with strong foundational knowledge.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact & Call to Action Section -->
  <section id="contact" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
      <span class="text-xs font-bold uppercase tracking-wider text-blue-600">Get In Touch</span>
      <h2 class="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
        Available for Sales Executive &amp; Representative Roles
      </h2>
      <p class="text-base text-slate-600 max-w-xl mx-auto mt-3">
        Feel free to reach out directly via call, email, or WhatsApp to discuss job openings, interviews, or collaborations.
      </p>

      <div class="flex flex-wrap justify-center gap-4 mt-8">
        <a href="tel:7673930347" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-sm transition-colors text-sm">
          Call +91 7673930347
        </a>
        <a href="mailto:peddollakarthik1@gmail.com" class="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-sm transition-colors text-sm">
          Email peddollakarthik1@gmail.com
        </a>
        <a href="https://wa.me/917673930347" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-sm transition-colors text-sm">
          Chat on WhatsApp
        </a>
      </div>

      <div class="mt-8 text-xs text-slate-500">
        <p>Location: Amrad, Nizamabad, Telangana, India</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-8 bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p class="text-white font-semibold">Peddolla Karthik</p>
        <p class="text-slate-400 mt-0.5">Sales Executive &amp; Sales Representative</p>
      </div>
      <div>
        <p>&copy; 2026 Peddolla Karthik. All rights reserved.</p>
      </div>
    </div>
  </footer>

</body>
</html>`;
}
