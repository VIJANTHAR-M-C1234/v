
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Zap, BookOpen, ArrowRight } from 'lucide-react';
import { SUBJECTS, ICONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Score Maximum Marks in <br />
            <span className="text-blue-400">University Exams</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            High-quality, exam-oriented notes and mini-courses for engineering students. Master the 
            <span className="text-white font-semibold"> university answer-writing style</span> with keyword-rich content.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/subjects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center group"
            >
              Browse Subjects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/resources"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/10"
            >
              Free Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Why Choose EngiNotes?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We don't just teach concepts; we prepare you to excel in the specific format demanded by university exams.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Award className="text-blue-600" />,
                title: "Exam-Oriented Language",
                desc: "Simplified English focused on the technical terms examiners search for when grading papers."
              },
              {
                icon: <Zap className="text-yellow-500" />,
                title: "Keyword-Rich Content",
                desc: "Every topic includes a curated list of keywords to boost your scores using answer-writing techniques."
              },
              {
                icon: <CheckCircle2 className="text-green-500" />,
                title: "Point-Wise Format",
                desc: "Clean, structured notes that are easy to remember and mirror the ideal university paper presentation."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-hover duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Preview */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Core CSE Subjects</h2>
              <p className="text-slate-600">Access comprehensive notes for all major engineering modules.</p>
            </div>
            <Link to="/subjects" className="text-blue-600 font-semibold hover:underline hidden sm:block">View All Subjects</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBJECTS.slice(0, 6).map((sub) => (
              <Link
                key={sub.id}
                to={`/subjects/${sub.id}`}
                className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-all flex items-start space-x-4 shadow-sm hover:shadow-md"
              >
                <div className="bg-slate-100 p-3 rounded-lg text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {ICONS[sub.id as keyof typeof ICONS] || <BookOpen />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{sub.name}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{sub.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 sm:hidden">
            <Link to="/subjects" className="block text-center bg-white text-blue-600 border border-blue-600 font-semibold py-3 rounded-lg">View All Subjects</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ace Your Semester?</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">Join thousands of students using our keyword-rich guides to transform their university performance.</p>
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg inline-block"
            >
              Explore Mini Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
