
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Subjects', path: '/subjects' },
    { name: 'Free Resources', path: '/resources' },
    { name: 'Mini Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <BookOpen size={24} />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">EngiNotes</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 text-white mb-6">
                <BookOpen size={24} />
                <span className="text-xl font-bold tracking-tight">EngiNotes</span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Empowering engineering students with exam-oriented notes, keyword-rich answers, and survival strategies for university success.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                <Github className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/subjects" className="hover:text-blue-400">All Subjects</Link></li>
                <li><Link to="/resources" className="hover:text-blue-400">Free Resources</Link></li>
                <li><Link to="/courses" className="hover:text-blue-400">Mini Courses</Link></li>
                <li><Link to="/about" className="hover:text-blue-400">Our Mission</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Popular Subjects</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/subjects/c-programming" className="hover:text-blue-400">C Programming</Link></li>
                <li><Link to="/subjects/cpp-programming" className="hover:text-blue-400">C++ Programming</Link></li>
                <li><Link to="/subjects/data-structures" className="hover:text-blue-400">Data Structures</Link></li>
                <li><Link to="/subjects/dbms" className="hover:text-blue-400">DBMS</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Get Updates</h3>
              <p className="text-sm mb-4">Subscribe to our newsletter for the latest exam tips.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-slate-800 border-none rounded-l-md px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white rounded-r-md px-4 py-2 text-sm font-medium hover:bg-blue-700 transition">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} EngiNotes. No false promises, just pure exam-oriented excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
