import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, CheckCircle2, AlertCircle, Loader2, ListTodo } from "lucide-react";
import { WHATSAPP_CONTACT_LINK, DIRECT_DIAL_PHONE } from "../data";
import { InquiryFormData } from "../types";

export default function ContactForm() {
  // Form State parameters
  const [formData, setFormData] = useState<InquiryFormData>({
    studentName: "",
    parentName: "",
    className: "Class 10 CBSE",
    subject: "Complete Social Science (SST)",
    phoneNumber: "",
    email: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Partial<InquiryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedInquiries, setSavedInquiries] = useState<InquiryFormData[]>([]);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  // Load past inquiries from localStorage for transparency of local storage persistence!
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cbse_tuition_inquiries");
      if (saved) {
        setSavedInquiries(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Local storage lookup failed", e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when editing field
    if (formErrors[name as keyof InquiryFormData]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<InquiryFormData> = {};
    let isValid = true;

    if (!formData.studentName.trim() || formData.studentName.trim().length < 2) {
      errors.studentName = "Please enter student's full name (min 2 characters).";
      isValid = false;
    }

    if (!formData.parentName.trim() || formData.parentName.trim().length < 2) {
      errors.parentName = "Please enter parent's full name (min 2 characters).";
      isValid = false;
    }

    // Indian Phone format validation: 10 Digits starting with 6, 7, 8, or 9
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required for follow-up callbacks.";
      isValid = false;
    } else if (!phoneRegex.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = "Please enter a valid 10-digit Indian phone number (e.g. 98114XXXXX).";
      isValid = false;
    }

    // Optional email check, only validate format if provided
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = "Please specify a valid email address structure.";
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Format WhatsApp message with filled details
    const phone = "919811446304";
    const formattedMessage = `Hello Anju Ma'am,

I would like to submit an admission inquiry from your website:
- *Student Name*: ${formData.studentName.trim()}
- *Parent/Guardian Name*: ${formData.parentName.trim()}
- *Class/Grade*: ${formData.className}
- *Target Subject*: ${formData.subject}
- *Contact Phone*: ${formData.phoneNumber.trim()}
${formData.email.trim() ? `- *Email*: ${formData.email.trim()}\n` : ""}${formData.message.trim() ? `- *Requirements/Message*: ${formData.message.trim()}\n` : ""}
Please contact me regarding batch availability and schedule detailed counsel.`;

    const encodedText = encodeURIComponent(formattedMessage);
    const targetUrl = `https://wa.me/${phone}?text=${encodedText}`;
    setWhatsappUrl(targetUrl);

    // Save to local storage for local tracking
    try {
      const updatedInquiries = [formData, ...savedInquiries];
      localStorage.setItem("cbse_tuition_inquiries", JSON.stringify(updatedInquiries));
      setSavedInquiries(updatedInquiries);
    } catch (err) {
      console.error("Local persistence error", err);
    }

    // Redirect to WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(targetUrl, "_blank");
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      studentName: "",
      parentName: "",
      className: "Class 10 CBSE",
      subject: "Complete Social Science (SST)",
      phoneNumber: "",
      email: "",
      message: ""
    });
    setFormErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-edu-lightgold/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-edu-indigo/5 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-edu-accent font-mono text-xs uppercase tracking-widest font-extrabold block">
            SECURE ADMISSION SPACE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-edu-indigo tracking-tight">
            Book Your Free Demo & Counsel Session
          </h2>
          <p className="text-slate-500 font-light text-sm leading-relaxed">
            Fill the secure form beneath to reserve a demo seat. Anju Ma’am will schedule a counseling assessment to map your child's scoring graph.
          </p>
          <div className="w-16 h-1.5 bg-edu-accent mx-auto rounded-full" />
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Inquiry Value highlights, phone and whatsapp buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-[#0F2942] text-2xl tracking-normal">
                Direct Contact Actions
              </h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Skip the email forms entirely if you need an immediate callback. Speak with Anju Ma'am or send an official batch availability request on WhatsApp in seconds.
              </p>

              {/* Grid bullet highlights */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3.5">
                  <div className="bg-emerald-500/10 text-emerald-600 p-2 rounded-xl mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm">Response Time Limit</h4>
                    <p className="text-slate-500 text-xs mt-0.5 font-light">WhatsApp messages are reviewed and answered typically under 2 hours, 7 days a week.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="bg-edu-indigo/5 text-edu-indigo p-2 rounded-xl mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm">Phone Consultation Policy</h4>
                    <p className="text-slate-500 text-xs mt-0.5 font-light">Calls are answered directly by Anju Ma'am post 3:00 PM once evening batches commence.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Dial / Chat Action Box */}
            <div className="space-y-4 pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-100">
              <a
                href={WHATSAPP_CONTACT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                <span>Text Ma'am on WhatsApp</span>
              </a>

              <a
                href={`tel:${DIRECT_DIAL_PHONE}`}
                className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-sm transition-all text-center"
              >
                <Phone className="w-4 h-4 text-edu-indigo" />
                <span>Direct Dial Call: +91 98114 46304</span>
              </a>
            </div>

            {/* Micro display of local inquiries if any exist to show persistence */}
            {savedInquiries.length > 0 && (
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <ListTodo className="w-4 h-4 text-edu-accent" />
                  <span>Inquiries Saved on This Device ({savedInquiries.length})</span>
                </div>
                <div className="max-h-24 overflow-y-auto space-y-1.5 pr-1">
                  {savedInquiries.map((inq, i) => (
                    <div key={i} className="bg-white border border-slate-100 p-2 rounded-lg text-[10px] flex justify-between text-slate-500">
                      <span>👤 {inq.studentName} ({inq.className})</span>
                      <span className="font-medium text-emerald-600">Saved Successfully</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Block: Secure Form submission frame */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-lg relative">
              
              {isSuccess ? (
                /* Success Animation card and notification with WhatsApp redirect options */
                <div className="text-center py-12 px-4 space-y-6 animate-fade-in text-slate-800">
                  <div className="bg-emerald-500/15 text-emerald-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-[#0F2942] text-xl sm:text-2xl">
                      Inquiry Created!
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto">
                      All details have been formatted and saved. WhatsApp should have automatically opened to submit your text to Anju Ma’am.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                      <span>Launch WhatsApp Chat</span>
                    </a>
                    
                    <button
                      onClick={resetForm}
                      className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Inquiry Form markup */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Form section details */}
                  <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                    <h4 className="font-display font-bold text-slate-800 text-sm">
                      Secure Admission Portal
                    </h4>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      All fields required
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Student Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-student-name" className="block text-xs font-bold text-slate-700">
                        Student Full Name
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        id="form-student-name"
                        value={formData.studentName}
                        onChange={handleChange}
                        className={`w-full bg-white border rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 placeholder:text-slate-400 font-light ${
                          formErrors.studentName
                            ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                            : "border-slate-200 focus:ring-edu-accent/30 focus:border-edu-accent"
                        }`}
                        placeholder="e.g. Kabir Malhotra"
                      />
                      {formErrors.studentName && (
                        <p className="text-[10px] font-medium text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.studentName}</span>
                        </p>
                      )}
                    </div>

                    {/* Parent Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-parent-name" className="block text-xs font-bold text-slate-700">
                        Parent Full Name
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        id="form-parent-name"
                        value={formData.parentName}
                        onChange={handleChange}
                        className={`w-full bg-white border rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 placeholder:text-slate-400 font-light ${
                          formErrors.parentName
                            ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                            : "border-slate-200 focus:ring-edu-accent/30 focus:border-edu-accent"
                        }`}
                        placeholder="e.g. Rajesh Malhotra"
                      />
                      {formErrors.parentName && (
                        <p className="text-[10px] font-medium text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.parentName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Class Selector */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-class" className="block text-xs font-bold text-slate-700">
                        Student Grade/Class
                      </label>
                      <select
                        name="className"
                        id="form-class"
                        value={formData.className}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-edu-accent/30 focus:border-edu-accent font-light"
                      >
                        <option value="Class 8 CBSE">CBSE Class 8</option>
                        <option value="Class 9 CBSE">CBSE Class 9</option>
                        <option value="Class 10 CBSE">CBSE Class 10 (Board Exam)</option>
                        <option value="Class 11 CBSE (Humanities)">CBSE Class 11 (Humanities)</option>
                        <option value="Class 12 CBSE (Humanities)">CBSE Class 12 (Board Exam)</option>
                      </select>
                    </div>

                    {/* Subject Selector */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-subject" className="block text-xs font-bold text-slate-700">
                        Target Learning Subject
                      </label>
                      <select
                        name="subject"
                        id="form-subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-edu-accent/30 focus:border-edu-accent font-light"
                      >
                        <option value="Complete Social Science (SST)">Complete Social Science (SST)</option>
                        <option value="Hindi">Hindi literature</option>
                        <option value="History">Humanities: History</option>
                        <option value="Geography">Humanities: Geography</option>
                        <option value="Political Science">Humanities: Political Science</option>
                        <option value="General Enquiry / Admission Consultation">Other General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-phone" className="block text-xs font-bold text-slate-700">
                        Mobile Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="form-phone"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`w-full bg-white border rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 placeholder:text-slate-400 font-light ${
                          formErrors.phoneNumber
                            ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                            : "border-slate-200 focus:ring-edu-accent/30 focus:border-edu-accent"
                        }`}
                        placeholder="10-digit number e.g. 9811446304"
                      />
                      {formErrors.phoneNumber && (
                        <p className="text-[10px] font-medium text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* Email address */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="block text-xs font-bold text-slate-700">
                        Email Address <span className="font-light text-slate-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="form-email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-white border rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 placeholder:text-slate-400 font-light ${
                          formErrors.email
                            ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                            : "border-slate-200 focus:ring-edu-accent/30 focus:border-edu-accent"
                        }`}
                        placeholder="e.g. parent@example.com"
                      />
                      {formErrors.email && (
                        <p className="text-[10px] font-medium text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="block text-xs font-bold text-slate-700">
                      Message / Special Requirements
                    </label>
                    <textarea
                      name="message"
                      id="form-message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-edu-accent/30 focus:border-edu-accent placeholder:text-slate-400 font-light resize-none"
                      placeholder="e.g. Share child's past academic issues or coordinate available times"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0F2942] hover:bg-edu-royal text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-sky-950/10 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
                      id="form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-edu-accent" />
                          <span>Registering Credentials...</span>
                        </>
                      ) : (
                        <span>Enquire for Admission Now</span>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
