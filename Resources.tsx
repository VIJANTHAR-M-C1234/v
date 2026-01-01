
import React from 'react';
import { Download, FileText, CheckCircle, Info } from 'lucide-react';
import { RESOURCES } from '../constants';

const Resources: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Free Study Resources</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Boost your preparation with our curated list of free PDFs, cheat sheets, and exam tips.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Exam Writing Tips</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">Learn the exact structure and keyword placement needed for high-scoring answers.</p>
            <button className="text-blue-600 font-semibold text-sm flex items-center hover:underline">
              Download Guide <Download className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Keyword Cheat Sheets</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">Quick-reference sheets for all core CSE subjects to help you recall technical terms.</p>
            <button className="text-green-600 font-semibold text-sm flex items-center hover:underline">
              Browse Sheets <Download className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Info size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Important Definitions</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">Compact collection of frequently asked definitions formatted for direct exam usage.</p>
            <button className="text-orange-600 font-semibold text-sm flex items-center hover:underline">
              Get PDF <Download className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-8 bg-slate-50 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">All Downloads</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {RESOURCES.map((resource) => (
              <div key={resource.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-slate-50 transition-colors group">
                <div className="mb-4 sm:mb-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2 inline-block">
                    {resource.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{resource.title}</h3>
                  <p className="text-sm text-slate-500">{resource.description}</p>
                </div>
                <button className="flex items-center space-x-2 bg-slate-100 group-hover:bg-blue-600 group-hover:text-white px-6 py-2 rounded-lg text-sm font-bold transition-all">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Need a structured plan?</h3>
            <p className="text-blue-800/80 text-sm">Our mini-courses provide a step-by-step roadmap for specific exam hurdles.</p>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition">
            View Mini Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
