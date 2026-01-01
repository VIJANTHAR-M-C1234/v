
import React from 'react';
import { Clock, ShieldCheck, Zap, ArrowRight, Star } from 'lucide-react';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Exam-Oriented Mini Courses</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Short, practical courses (1–2 hours) designed to give you an edge in university finals. Pricing starting as low as ₹99.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {COURSES.map((course) => (
          <div key={course.id} className="flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div className="p-8 pb-0">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> {course.duration}
                </span>
                <div className="flex items-center text-yellow-500 text-xs font-bold">
                  <Star className="w-3 h-3 fill-current mr-1" /> 4.9 Rating
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{course.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">{course.description}</p>
            </div>

            <div className="px-8 flex-grow">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Course Outcomes</h4>
              <ul className="space-y-3 mb-8">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-0 mt-auto">
              <div className="flex items-end justify-between mb-6 border-t border-slate-100 pt-6">
                <div>
                  <span className="text-slate-400 text-xs block mb-1">One-time payment</span>
                  <span className="text-3xl font-extrabold text-slate-900">₹{course.price}</span>
                </div>
                <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                  <ArrowRight size={20} />
                </button>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-slate-800 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-20 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest border border-blue-600/20">
            <Zap className="w-3 h-3" />
            <span>Fast Track Learning</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Master Answer-Writing in One Afternoon</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Our mini-courses are laser-focused on the specific technical keywords and diagram formats 
            that university evaluators reward. No fluff, just results.
          </p>
          <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-bold text-xl italic tracking-tighter">C Syntax</span>
            <span className="font-bold text-xl italic tracking-tighter">OOPs Patterns</span>
            <span className="font-bold text-xl italic tracking-tighter">DS Algorithms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
