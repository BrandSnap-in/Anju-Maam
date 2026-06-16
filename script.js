// Anju Ma'am's CBSE Tuition Classes - Client Side Interactions
// Simple, high-performance vanilla JS script supporting complete layout fidelity.

const testimonials = [
  {
    studentName: "Aarav Sharma",
    parentName: "Rajesh Sharma",
    className: "Class 10 CBSE",
    subjectInfo: "SST & Hindi",
    scoreOrResult: "98% in Social Science",
    feedback: "Anju Ma'am converted Social Science, which used to be my most boring subject, into my absolute favorite. Her interactive storytelling format for history made me remember dates and sequences naturally. The point-wise answer writing tips she shared were exactly why I managed to score 98% in my board exams!"
  },
  {
    studentName: "Ananya Iyer",
    parentName: "Meenakshi Iyer",
    className: "Class 12 CBSE (Humanities)",
    subjectInfo: "Political Science & Geography",
    scoreOrResult: "99% in Political Science",
    feedback: "I am extremely grateful to Anju Ma'am for her rigorous map-pointing drills and detailed 8-mark feedback sheets. Drawing timelines and keeping structured subheadings became second nature to me under her vigilant eye. She's not just a teacher; she is an inspiring mentor."
  },
  {
    studentName: "Kabir Malhotra",
    parentName: "Sanjay Malhotra",
    className: "Class 10 CBSE",
    subjectInfo: "Complete Social Science (SST)",
    scoreOrResult: "Marks Jumped from 62% to 94%",
    feedback: "Before joining Anju Ma'am's tuition center, Kabir was extremely anxious about SST and would struggle to write detailed answers. Ma'am identified his hesitation and personally worked on his speed, answer framing, and structure. His scores vaulted beyond belief!"
  },
  {
    studentName: "Priyanjali Sen",
    parentName: "Dr. Arundhati Sen",
    className: "Class 12 CBSE (Humanities)",
    subjectInfo: "History, Geo & Pol Science",
    scoreOrResult: "Class 12 Humanities School Topper",
    feedback: "The level of depth in Anju Ma'am's notes is matchless. She references real CBSE evaluation keys to point out exactly what examiners are looking for. Her small batches allowed her to check each of my answers and mock-exams with personal care. High recommendation to all parents!"
  },
  {
    studentName: "Rohan Varma",
    parentName: "Siddharth Varma",
    className: "Class 9 CBSE",
    subjectInfo: "Hindi, Social Science",
    scoreOrResult: "Consistently Top of Section",
    feedback: "Anju Ma'am's emphasis on neatness, structured points, and vocabulary in Hindi has elevated Rohan's writing confidence. The constant assessments and updates she sends keeps us in close loop with his day-to-day progress. Extremely satisfying experience!"
  },
  {
    studentName: "Drishti Kapoor",
    parentName: "Namrata Kapoor",
    className: "Class 10 CBSE",
    subjectInfo: "Hindi & SST",
    scoreOrResult: "96% in Hindi, 97% in SST",
    feedback: "My daughter was quite weak in grammar and struggled to write long-form questions, but Ma'am designed short, memorable guidelines and flowcharts. The weekly mocks helped her overcome exam-hall stage fright completely. Truly an exceptional teacher!"
  }
];

let currentTestimonialIndex = 0;
let testimonialAutoPlayInterval = null;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // --- Scroll Header Navigation State ---
  const header = document.getElementById("header-nav");
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("shadow-lg", "py-3", "border-[#C5A059]/20");
        header.classList.remove("py-5", "border-transparent");
      } else {
        header.classList.remove("shadow-lg", "py-3", "border-[#C5A059]/20");
        header.classList.add("py-5", "border-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger instantly
  }

  // --- Mobile Drawer Toggle ---
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const openIcon = document.getElementById("menu-open-icon");
  const closeIcon = document.getElementById("menu-close-icon");

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isVisible = mobileDrawer.classList.contains("top-[64px]");
      if (isVisible) {
        mobileDrawer.classList.remove("top-[64px]", "opacity-100", "max-h-[85vh]", "overflow-y-auto", "py-6");
        mobileDrawer.classList.add("top-[-500px]", "opacity-0", "max-h-0", "pointer-events-none");
        openIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      } else {
        mobileDrawer.classList.add("top-[64px]", "opacity-100", "max-h-[85vh]", "overflow-y-auto", "py-6");
        mobileDrawer.classList.remove("top-[-500px]", "opacity-0", "max-h-0", "pointer-events-none");
        openIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      }
    });
  }

  // --- Smooth Anchor Navigation Link Clicking ---
  document.querySelectorAll(".nav-link-anchor").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Close mobile drawer if open
      if (mobileDrawer && mobileDrawer.classList.contains("top-[64px]")) {
        mobileDrawer.classList.remove("top-[64px]", "opacity-100", "max-h-[85vh]", "overflow-y-auto", "py-6");
        mobileDrawer.classList.add("top-[-500px]", "opacity-0", "max-h-0", "pointer-events-none");
        openIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 80; // height of fixed header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // --- Curriculums / Subjects Tab Switching ---
  window.setActiveSubjectTab = (tabIdx) => {
    const tab0 = document.getElementById("tab-btn-0");
    const tab1 = document.getElementById("tab-btn-1");
    const group0 = document.getElementById("subject-group-0");
    const group1 = document.getElementById("subject-group-1");

    if (tabIdx === 0) {
      tab0.classList.add("bg-[#0F2942]", "text-white", "shadow-md", "shadow-[#0F2942]/20");
      tab0.classList.remove("text-slate-500", "hover:text-[#0F2942]", "hover:bg-slate-50");
      
      tab1.classList.remove("bg-[#0F2942]", "text-white", "shadow-md", "shadow-[#0F2942]/20");
      tab1.classList.add("text-slate-500", "hover:text-[#0F2942]", "hover:bg-slate-50");

      group0.classList.remove("hidden");
      group0.classList.add("grid");
      group1.classList.add("hidden");
      group1.classList.remove("grid");
    } else {
      tab1.classList.add("bg-[#0F2942]", "text-white", "shadow-md", "shadow-[#0F2942]/20");
      tab1.classList.remove("text-slate-500", "hover:text-[#0F2942]", "hover:bg-slate-50");

      tab0.classList.remove("bg-[#0F2942]", "text-white", "shadow-md", "shadow-[#0F2942]/20");
      tab0.classList.add("text-slate-500", "hover:text-[#0F2942]", "hover:bg-slate-50");

      group1.classList.remove("hidden");
      group1.classList.add("grid");
      group0.classList.add("hidden");
      group0.classList.remove("grid");
    }
  };

  // Enquire specific subject and set details on dropdown selector
  window.enquireSubject = (subjectName) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      const selectElem = document.getElementById("form-subject");
      if (selectElem) {
        selectElem.value = subjectName;
      }
    }
  };

  // --- Statistics Animated Auto-Counters ---
  const startCounter = (el) => {
    const end = parseFloat(el.getAttribute("data-target"));
    const suffix = el.getAttribute("data-suffix") || "";
    const isSpecial = el.getAttribute("data-special") === "true"; // 98.4% case
    const duration = 1500;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const count = Math.floor(progress * end);

      if (isSpecial) {
        el.textContent = Math.floor(progress * 98) + ".4%";
      } else {
        el.textContent = count + suffix;
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        if (isSpecial) {
          el.textContent = "98.4%";
        } else {
          el.textContent = end + suffix;
        }
      }
    };
    window.requestAnimationFrame(step);
  };

  const counterElements = document.querySelectorAll(".counter-el");
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        startCounter(entry.target);
      }
    });
  }, { threshold: 0.1 });

  counterElements.forEach(el => countObserver.observe(el));

  // --- Testimonials Slider Carousel Logic ---
  const renderTestimonial = (index) => {
    const item = testimonials[index];
    const container = document.getElementById("testimonial-card-container");
    if (!container) return;

    container.style.opacity = "0";
    setTimeout(() => {
      const badgeContainer = document.getElementById("testi-score-badge");
      if (item.scoreOrResult) {
        badgeContainer.innerHTML = `
          <div class="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 py-1 px-3.5 rounded-full text-emerald-700 text-xs font-bold shadow-sm">
            <i data-lucide="award" class="w-4 h-4 text-emerald-600"></i>
            <span>${item.scoreOrResult}</span>
          </div>
        `;
      } else {
        badgeContainer.innerHTML = "";
      }

      document.getElementById("testi-feedback").textContent = `"${item.feedback}"`;
      document.getElementById("testi-author").textContent = item.studentName;
      document.getElementById("testi-parent").innerHTML = `Son/Daughter of <span class="font-semibold text-slate-700">${item.parentName}</span>`;
      document.getElementById("testi-meta").textContent = `${item.className} • ${item.subjectInfo}`;

      // Update avatar initials
      const avatarEl = document.getElementById("testi-avatar");
      if (avatarEl && item.studentName) {
        const initials = item.studentName.split(" ").map(n => n[0]).join("");
        avatarEl.textContent = initials;
      }

      // Update dot states
      document.querySelectorAll(".testi-dot").forEach((dot, dotIdx) => {
        if (dotIdx === index) {
          dot.classList.add("w-8", "bg-[#C5A059]");
          dot.classList.remove("w-2", "bg-slate-200");
        } else {
          dot.classList.remove("w-8", "bg-[#C5A059]");
          dot.classList.add("w-2", "bg-slate-200");
        }
      });

      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
      container.style.opacity = "1";
    }, 250);
  };

  window.prevTestimonial = () => {
    resetAutoplay();
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(currentTestimonialIndex);
  };

  window.nextTestimonial = () => {
    resetAutoplay();
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    renderTestimonial(currentTestimonialIndex);
  };

  window.setTestimonialIndex = (idx) => {
    resetAutoplay();
    currentTestimonialIndex = idx;
    renderTestimonial(currentTestimonialIndex);
  };

  const startAutoplay = () => {
    testimonialAutoPlayInterval = setInterval(() => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      renderTestimonial(currentTestimonialIndex);
    }, 6000);
  };

  const resetAutoplay = () => {
    if (testimonialAutoPlayInterval) {
      clearInterval(testimonialAutoPlayInterval);
    }
    startAutoplay();
  };

  renderTestimonial(0);
  startAutoplay();

  // --- Collapsible FAQ Accordion Elements ---
  window.toggleFaq = (idx) => {
    const accordionItem = document.getElementById(`faq-item-${idx}`);
    const iconWrapper = document.getElementById(`faq-icon-${idx}`);
    const panel = document.getElementById(`faq-panel-${idx}`);
    if (!accordionItem || !panel || !iconWrapper) return;

    const isOpen = accordionItem.classList.contains("border-[#C5A059]");

    // Close all FAQs for uniform accordian view
    document.querySelectorAll(".faq-item-container").forEach((item, itemIdx) => {
      item.classList.remove("border-[#C5A059]", "bg-slate-50/60", "shadow-md");
      item.classList.add("border-slate-100", "bg-white");

      const tempPanel = document.getElementById(`faq-panel-${itemIdx}`);
      tempPanel.classList.add("max-h-0", "pointer-events-none");
      tempPanel.classList.remove("max-h-[500px]", "border-t", "border-slate-100");

      const tempIcon = document.getElementById(`faq-icon-${itemIdx}`);
      tempIcon.classList.remove("rotate-180", "bg-[#0F2942]", "text-[#C5A059]");
    });

    if (!isOpen) {
      accordionItem.classList.remove("border-slate-100", "bg-white");
      accordionItem.classList.add("border-[#C5A059]", "bg-slate-50/60", "shadow-md");

      panel.classList.remove("max-h-0", "pointer-events-none");
      panel.classList.add("max-h-[500px]", "border-t", "border-slate-100");

      iconWrapper.classList.add("rotate-180", "bg-[#0F2942]", "text-[#C5A059]");
    }
  };

  // --- Lead Form & Field Validation Setup ---
  const contactForm = document.getElementById("admission-form");
  const formInquiryContainer = document.getElementById("form-inquiry-box");
  const formSuccessContainer = document.getElementById("form-success-box");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Retrieve form element inputs
      const studentNameEl = document.getElementById("form-student-name");
      const parentNameEl = document.getElementById("form-parent-name");
      const classNameEl = document.getElementById("form-class");
      const subjectEl = document.getElementById("form-subject");
      const phoneEl = document.getElementById("form-phone");
      const emailEl = document.getElementById("form-email");
      const messageEl = document.getElementById("form-message");

      const studentName = studentNameEl.value.trim();
      const parentName = parentNameEl.value.trim();
      const className = classNameEl.value;
      const subject = subjectEl.value;
      const phone = phoneEl.value.trim();
      const email = emailEl.value.trim();
      const message = messageEl.value.trim();

      // Clear previous error labels
      document.querySelectorAll(".form-error-label").forEach(lbl => {
        lbl.classList.add("hidden");
        lbl.innerText = "";
      });
      studentNameEl.classList.remove("border-red-300", "focus:ring-red-200");
      parentNameEl.classList.remove("border-red-300", "focus:ring-red-200");
      phoneEl.classList.remove("border-red-300", "focus:ring-red-200");
      emailEl.classList.remove("border-red-300", "focus:ring-red-200");

      let isValid = true;

      // Validation logic
      if (!studentName || studentName.length < 2) {
        isValid = false;
        const err = document.getElementById("err-student-name");
        err.innerText = "Please enter student's full name (min 2 characters).";
        err.classList.remove("hidden");
        studentNameEl.classList.add("border-red-300", "focus:ring-red-200");
      }

      if (!parentName || parentName.length < 2) {
        isValid = false;
        const err = document.getElementById("err-parent-name");
        err.innerText = "Please enter parent's full name (min 2 characters).";
        err.classList.remove("hidden");
        parentNameEl.classList.add("border-red-300", "focus:ring-red-200");
      }

      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phone) {
        isValid = false;
        const err = document.getElementById("err-phone");
        err.innerText = "Phone number is required for follow-up callbacks.";
        err.classList.remove("hidden");
        phoneEl.classList.add("border-red-300", "focus:ring-red-200");
      } else if (!phoneRegex.test(phone)) {
        isValid = false;
        const err = document.getElementById("err-phone");
        err.innerText = "Please enter a valid 10-digit Indian phone number (starting with 6-9).";
        err.classList.remove("hidden");
        phoneEl.classList.add("border-red-300", "focus:ring-red-200");
      }

      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          isValid = false;
          const err = document.getElementById("err-email");
          err.innerText = "Please specify a valid email address structure.";
          err.classList.remove("hidden");
          emailEl.classList.add("border-red-300", "focus:ring-red-200");
        }
      }

      if (!isValid) return;

      // Submission status animation
      const submitBtn = document.getElementById("form-submit-btn");
      const originalHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin h-4 w-4 text-[#C5A03C] inline mr-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Registering Credentials...</span>
      `;

      // Construct and encode WhatsApp formatted draft
      const completeMessageStr = `Hello Anju Ma'am,

I would like to submit an admission inquiry from your website:
- *Student Name*: ${studentName}
- *Parent/Guardian Name*: ${parentName}
- *Class/Grade*: ${className}
- *Target Subject*: ${subject}
- *Contact Phone*: ${phone}
${email ? `- *Email*: ${email}\n` : ""}${message ? `- *Requirements/Message*: ${message}\n` : ""}
Please contact me regarding batch availability and schedule detailed counsel.`;

      const encodedMsgText = encodeURIComponent(completeMessageStr);
      const targetWhatsappUrl = `https://wa.me/919811446304?text=${encodedMsgText}`;

      // Save locally to localStorage
      try {
        const localInquiriesKey = "cbse_tuition_inquiries";
        const savedRaw = localStorage.getItem(localInquiriesKey);
        const savedList = savedRaw ? JSON.parse(savedRaw) : [];
        const newInquiry = { studentName, parentName, className, subject, phone, email, message, date: new Date().toISOString() };
        savedList.unshift(newInquiry);
        localStorage.setItem(localInquiriesKey, JSON.stringify(savedList));
      } catch (err) {
        console.error("Local Storage write blocked", err);
      }

      // Finish Submit animation
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;
        
        // Hide normal form and show success banner
        formInquiryContainer.classList.add("hidden");
        formSuccessContainer.classList.remove("hidden");

        const waActionBtn = document.getElementById("success-wa-redirect");
        if (waActionBtn) {
          waActionBtn.setAttribute("href", targetWhatsappUrl);
        }

        // Open WhatsApp directly in new window tab as requested
        window.open(targetWhatsappUrl, "_blank");
      }, 800);
    });
  }

  // --- Success Banner Reset Button ---
  window.resetAdmissionForm = () => {
    if (contactForm) {
      contactForm.reset();
    }
    formSuccessContainer.classList.add("hidden");
    formInquiryContainer.classList.remove("hidden");
  };
});
