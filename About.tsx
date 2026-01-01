
import React from 'react';
import { Target, Shield, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Reliable Academic Companion for Engineering Students.</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            EngiNotes was founded with a singular mission: to bridge the gap between complex engineering concepts and the structured requirements of university examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Engineering is difficult, but exams shouldn't be. We noticed that many brilliant students struggle during finals not because they lack understanding, but because they don't know how to present that knowledge in a "examiner-friendly" way.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We focus on <strong>keyword-rich</strong> answers and <strong>university answer-writing styles</strong> to help average students and beginners score the maximum possible marks without feeling overwhelmed.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why We Exist</h2>
            <ul className="space-y-6">
              {[
                {
                  icon: <Target className="text-blue-600" />,
                  title: "Exam Orientation",
                  desc: "Everything we build is filtered through the lens of a 3-hour university paper."
                },
                {
                  icon: <Shield className="text-green-600" />,
                  title: "Student-First Tone",
                  desc: "Clear, simple, and authoritative without being arrogant. We are your peer-educators."
                }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-slate-100 p-2 rounded-lg mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-10 md:p-16 border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Principles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "No False Promises", desc: "We don't promise 100% marks; we promise a framework for maximum improvement." },
              { title: "Clarity Over Complexity", desc: "Using simple English to explain tough CSE concepts." },
              { title: "Academic Authority", desc: "Content backed by university syllabus research and past paper trends." },
              { title: "Affordability", desc: "Premium mini-courses accessible to every student (₹99–₹299)." }
            ].map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 text-center shadow-sm">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm">
                  {i+1}
                </div>
                <h3 className="font-bold mb-2 text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
