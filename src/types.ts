export interface Subject {
  id: string;
  name: string;
  description: string;
  topics: string[];
}

export interface SubjectGroup {
  title: string;
  classes: string;
  subjects: Subject[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface MethodologyStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  subtext: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  parentName: string;
  className: string;
  subjectInfo: string;
  scoreOrResult?: string;
  feedback: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InquiryFormData {
  studentName: string;
  parentName: string;
  className: string;
  subject: string;
  phoneNumber: string;
  email: string;
  message: string;
}
