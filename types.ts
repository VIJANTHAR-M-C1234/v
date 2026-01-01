
export interface Subject {
  id: string;
  name: string;
  description: string;
  syllabus: string[];
  definitions: { term: string; definition: string }[];
  keywords: string[];
  faq: { question: string; marks: 5 | 10; answer: string }[];
  resources: { title: string; type: 'Free' | 'Paid'; price?: number; link: string }[];
  courseId?: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  price: number;
  description: string;
  features: string[];
  subjectId: string;
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
}
