
import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honey, setHoney] = useState(""); // Honeypot state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Security Check: If honeypot is filled, it's likely a bot/malware
    if (honey) {
      console.warn("Automated submission detected.");
      return;
    }

    setIsSubmitting(true);
    // Simulate safe processing
    setTimeout(() => {
      alert("Message sent securely. We will get back to you soon!");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  // Lightweight sanitization helper
  const sanitize = (val: string) => val.replace(/[<>]/g, "");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Have questions about our notes? Or need help with a mini-course? We are here to help you succeed.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 mr-5">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email Us</h3>
                <p className="text-slate-500">support@enginotes.edu</p>
                <p className="text-xs text-slate-400 mt-1">Response within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-50 p-3 rounded-xl text-green-600 mr-5">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Student Support</h3>
                <p className="text-slate-500">+91 (800) 123-4567</p>
                <p className="text-xs text-slate-400 mt-1">WhatsApp only for faster resolution</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-xl text-slate-600 mr-5">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Our Hub</h3>
                <p className="text-slate-500">Tech Park, Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot Field - Hidden from humans */}
            <div className="hidden" aria-hidden="true">
              <input 
                type="text" 
                name="user_verification_token" 
                autoComplete="off" 
                value={honey} 
                onChange={(e) => setHoney(e.target.value)} 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
              <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500">
                <option>General Inquiry</option>
                <option>Course Access Issue</option>
                <option>Note Request</option>
                <option>Refund Policy</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
              <textarea
                required
                rows={4}
                placeholder="How can we help you today?"
                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition flex items-center justify-center group disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : (
                <>
                  Send Message <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
