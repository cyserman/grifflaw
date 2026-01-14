import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#111111] to-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-xl md:text-2xl text-[#F3F4F6] mb-4">
            Schedule Your Free Consultation
          </p>
          <p className="text-lg text-gray-300">
            Legal trouble doesn't wait. Neither do we.
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#FFD700] mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
                  <MapPin className="text-[#FFD700] flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-[#F3F4F6] mb-2">
                      Office Location
                    </h3>
                    <p className="text-gray-300">
                      1457 Riverwood Ln<br />
                      Phoenixville, PA 19460
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=1457+Riverwood+Ln+Phoenixville+PA+19460"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-[#FFD700] text-[#111111] px-6 py-2 rounded-md font-bold hover:bg-[#FFC700] transition-colors duration-200"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
                  <Phone className="text-[#FFD700] flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-[#F3F4F6] mb-2">
                      Phone
                    </h3>
                    <a href="tel:+15555551234" className="text-gray-300 hover:text-[#FFD700] text-lg">
                      (555) 555-1234
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      Direct line - Steve answers personally
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
                  <Mail className="text-[#FFD700] flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-[#F3F4F6] mb-2">
                      Email
                    </h3>
                    <a href="mailto:steve@griflaw.com" className="text-gray-300 hover:text-[#FFD700] text-lg">
                      steve@griflaw.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
                  <Clock className="text-[#FFD700] flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-[#F3F4F6] mb-2">
                      Availability
                    </h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Emergency Calls Only
                    </p>
                    <p className="text-sm text-[#FFD700] mt-2">
                      Running my practice from my iPhone - reach me when you need me.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-3xl font-bold text-[#FFD700] mb-8">
                Find Us
              </h2>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.7471969875473!2d-75.51573268462234!3d40.13427797939429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c693e9a3e3e3e3%3A0x1234567890abcdef!2s1457%20Riverwood%20Ln%2C%20Phoenixville%2C%20PA%2019460!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <div className="mt-6 bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#F3F4F6] mb-3">
                  Serving:
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFD700]">•</span>
                    Chester County, PA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFD700]">•</span>
                    Montgomery County, PA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFD700]">•</span>
                    Phoenixville & Surrounding Areas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFD700]">•</span>
                    Select New Jersey Cases
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111111] border border-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#FFD700] mb-6 text-center">
              Send Us a Message
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Fill out the form below or{" "}
              <Link href="#scheduler" className="text-[#FFD700] hover:underline font-bold">
                schedule a consultation directly
              </Link>
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[#F3F4F6] font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-[#F3F4F6] focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[#F3F4F6] font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-[#F3F4F6] focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[#F3F4F6] font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-[#F3F4F6] focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#F3F4F6] font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-[#F3F4F6] focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="caseType" className="block text-[#F3F4F6] font-medium mb-2">
                  Type of Case *
                </label>
                <select
                  id="caseType"
                  name="caseType"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-[#F3F4F6] focus:outline-none focus:border-[#FFD700] transition-colors"
                >
                  <option value="">Select a case type</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="family">Family Law / Divorce</option>
                  <option value="custody">Child Custody</option>
                  <option value="civil">Civil Litigation</option>
                  <option value="prose">Pro Se Assistance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#F3F4F6] font-medium mb-2">
                  Tell Us About Your Case *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Brief description of your legal situation..."
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-[#F3F4F6] focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#FFD700] text-[#111111] px-8 py-4 rounded-md font-bold text-lg hover:bg-[#FFC700] transition-colors duration-200"
                >
                  SEND MESSAGE
                </button>
                <p className="text-sm text-gray-400 mt-4">
                  We'll respond within 24 hours. For urgent matters, call directly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-[#FFD700] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
            LEGAL EMERGENCY?
          </h2>
          <p className="text-[#111111] text-lg mb-4">
            Don't wait for business hours. Call now.
          </p>
          <a
            href="tel:+15555551234"
            className="inline-block bg-[#111111] text-[#FFD700] px-8 py-3 rounded-md font-bold text-lg hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            CALL (555) 555-1234
          </a>
        </div>
      </section>
    </div>
  );
}
