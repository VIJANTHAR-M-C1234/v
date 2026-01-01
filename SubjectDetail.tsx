
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
// Added 'Award' to the lucide-react imports to fix the 'Cannot find name' error on line 186
import { Download, ExternalLink, HelpCircle, Key, List, FileText, ChevronRight, Award } from 'lucide-react';
import { SUBJECTS, COURSES, ICONS } from '../constants';

const SubjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const subject = SUBJECTS.find((s) => s.id === id);

  if (!subject) {
    return <Navigate to="/subjects" />;
  }

  const relatedCourse = COURSES.find((c) => c.id === subject.courseId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to="/subjects" className="hover:text-blue-600">Subjects</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-slate-900 font-medium">{subject.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-xl text-white">
                {ICONS[subject.id as keyof typeof ICONS] || <FileText />}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{subject.name}</h1>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" /> Subject Overview
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {subject.description} This module is designed to help you master fundamental concepts 
                while keeping the <strong>university answer-writing style</strong> in mind.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="text-blue-700 text-xs font-bold uppercase tracking-wider block mb-1">Target Score</span>
                  <span className="text-slate-900 font-semibold">Maximum Marks focus</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Approach</span>
                  <span className="text-slate-900 font-semibold">Keyword-rich answers</span>
                </div>
              </div>
            </div>
          </section>

          {/* Syllabus */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900">
              <List className="w-6 h-6 mr-3 text-blue-600" /> Syllabus Outline
            </h2>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              {subject.syllabus.map((item, idx) => (
                <div key={idx} className={`p-5 flex items-start space-x-4 ${idx !== subject.syllabus.length - 1 ? 'border-b border-slate-100' : ''}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-slate-100 text-slate-500 text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Definitions & Keywords */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-600" /> Key Definitions
              </h2>
              <div className="space-y-4">
                {subject.definitions.map((def, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-blue-600 mb-1">{def.term}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{def.definition}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <Key className="w-5 h-5 mr-2 text-blue-600" /> Exam Keywords
              </h2>
              <div className="bg-slate-900 p-6 rounded-xl text-white">
                <p className="text-xs text-slate-400 mb-4 uppercase font-bold tracking-widest">Crucial for 5 & 10 markers</p>
                <div className="flex flex-wrap gap-2">
                  {subject.keywords.map((kw, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/10">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900">
              <HelpCircle className="w-6 h-6 mr-3 text-blue-600" /> Frequent Exam Questions
            </h2>
            <div className="space-y-6">
              {subject.faq.map((q, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-slate-900 pr-4">{q.question}</h3>
                    <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold ${q.marks === 10 ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                      {q.marks} Marks
                    </span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-slate-600 italic leading-relaxed">
                      <strong>Exam Writing Tip:</strong> {q.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Mini Course Link */}
          {relatedCourse && (
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl shadow-blue-500/20">
              <h3 className="text-xl font-bold mb-2">Ace {subject.name}</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Join our 1-2 hour mini course focused specifically on answer-writing techniques for this subject.
              </p>
              <div className="text-2xl font-bold mb-6">₹{relatedCourse.price}</div>
              <Link
                to={`/courses`}
                className="block text-center bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors mb-4 shadow-md"
              >
                Enroll in Mini Course
              </Link>
              <ul className="text-xs space-y-2 opacity-80">
                <li className="flex items-center"><CheckCircle2 className="w-3 h-3 mr-2" /> Exam survival strategies</li>
                <li className="flex items-center"><CheckCircle2 className="w-3 h-3 mr-2" /> Diagram practice sessions</li>
              </ul>
            </div>
          )}

          {/* Download Resources */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center">
              <Download className="w-5 h-5 mr-2 text-blue-600" /> Study Resources
            </h3>
            <div className="space-y-4">
              {subject.resources.map((res, idx) => (
                <div key={idx} className="group flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 text-slate-400 mr-3 group-hover:text-blue-500" />
                    <div className="text-sm">
                      <div className="font-semibold text-slate-800">{res.title}</div>
                      <div className={`text-[10px] font-bold uppercase ${res.type === 'Free' ? 'text-green-600' : 'text-blue-600'}`}>
                        {res.type} {res.price ? `· ₹${res.price}` : ''}
                      </div>
                    </div>
                  </div>
                  {/* Security: rel="noopener noreferrer" for any downloads/links if they were external */}
                  <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 p-1">
                    <Download size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 mb-3">Student Alert</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We focus on <strong>maximum marks</strong> by teaching you how to utilize the space on your answer sheet effectively with point-wise content.
            </p>
            <div className="flex items-center text-xs text-blue-600 font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 mr-2" /> Reliability Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple helper component inside the same file for brevity
const CheckCircle2: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
);

export default SubjectDetail;
