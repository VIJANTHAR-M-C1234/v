
import React from 'react';
import { Link } from 'react-router-dom';
import { SUBJECTS, ICONS } from '../constants';
import { ChevronRight, Target, FileText, Layout as LayoutIcon, Clock, Award } from 'lucide-react';

const SubjectsList: React.FC = () => {
  const categories = [
    {
      title: "Programming",
      subtitle: "Syntax, logic building, and exam-oriented programming fundamentals",
      ids: ['c-programming', 'cpp-programming']
    },
    {
      title: "Core CSE Subjects",
      subtitle: "Core computer science subjects explained with keyword-rich exam notes",
      ids: ['data-structures', 'dbms', 'os', 'cn']
    },
    {
      title: "Theory & Math",
      subtitle: "High-scoring theory and mathematical foundations for CSE exams",
      ids: ['software-engineering', 'daa', 'discrete-math']
    }
  ];

  const examSkills = [
    { title: "Writing 5-mark answers", desc: "How to maximize points in short technical explanations." },
    { title: "Writing 10-mark answers", desc: "Structuring long-form answers with required sections and diagrams." },
    { title: "Keyword strategies", desc: "Identifying and placing technical terms where examiners expect them." },
    { title: "Common exam mistakes", desc: "Common pitfalls that cost marks and how to avoid them." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Subjects & Exam Kits</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-2">Click on a subject to access exam-oriented syllabus outlines, keywords, and FAQ guides.</p>
        <p className="text-sm text-blue-600 font-medium">All subjects follow a keyword-based, university exam answer-writing format.</p>
      </div>

      <div className="space-y-20">
        {categories.map((cat, idx) => (
          <section key={idx}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">{cat.title}</h2>
              <p className="text-slate-500 text-sm">{cat.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SUBJECTS.filter(s => cat.ids.includes(s.id)).map((sub) => (
                <Link
                  key={sub.id}
                  to={`/subjects/${sub.id}`}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500 transition-all shadow-sm hover:shadow-xl flex flex-col"
                >
                  <div className="p-8 flex-grow">
                    <div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {ICONS[sub.id as keyof typeof ICONS] || <ChevronRight />}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{sub.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {sub.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {sub.keywords.slice(0, 3).map((kw, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-blue-600 font-bold text-sm">
                    <span>View Exam Kit</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Special Exam Skills Section */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Exam Skills</h2>
            <p className="text-slate-400">Learn how to write university exam answers effectively using keywords, diagrams, structure, and time management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examSkills.map((skill, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group cursor-default">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 text-blue-400 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{skill.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/resources" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors">
              Explore resources for these skills <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubjectsList;
