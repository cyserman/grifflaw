import { Briefcase, GraduationCap, Award, Scale } from "lucide-react";
import Link from "next/link";

export default function AttorneyPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#111111] to-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] mb-6">
            STEVE GRIFFITHS, ESQ.
          </h1>
          <p className="text-2xl text-[#F3F4F6] mb-4">
            20+ Years in the Trenches
          </p>
          <p className="text-xl text-gray-300">
            Pennsylvania & New Jersey Courts
          </p>
        </div>
      </section>

      {/* Main Bio */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#FFD700] mb-6">
              The Gritty, Authoritative Truth
            </h2>
            <div className="space-y-6 text-lg text-[#F3F4F6] leading-relaxed">
              <p>
                I've spent <strong className="text-[#FFD700]">20 years in the trenches</strong> of Pennsylvania and New Jersey courts. This isn't about polished marketing or empty promises—it's about results when everything's on the line.
              </p>
              <p>
                I cut my teeth at boutique litigation firms like <strong>Sidkoff, Frey & Associates</strong>, learning from some of the sharpest legal minds in the business. I've handled everything from high-stakes criminal defense to complex family law disputes, and I've seen what works and what doesn't.
              </p>
              <p>
                Here's what you need to know: <strong className="text-[#FFD700]">I don't hand your case to a junior associate</strong>. When you hire me, you get me. Every consultation, every court appearance, every late-night strategy session—it's all handled personally.
              </p>
              <p>
                I founded <strong>The Griffiths Law Office</strong> because too many clients were getting lost in the shuffle at large firms. Your case deserves focused attention from someone who's been doing this long enough to know every angle, every pitfall, and every opportunity.
              </p>
              <p>
                From my office at <strong>1457 Riverwood Ln in Phoenixville</strong>, I serve clients throughout Chester County and Montgomery County. Whether you're facing criminal charges, going through a divorce, fighting for custody, or dealing with a civil dispute—I bring aggressive, prepared defense to your corner.
              </p>
              <p className="text-xl font-bold text-[#FFD700] text-center mt-8">
                "You hire me, you get me. Period."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FFD700] mb-12">
            EXPERIENCE & EXPERTISE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Briefcase,
                title: "20+ Years Practice",
                description: "Two decades of courtroom experience in Pennsylvania and New Jersey"
              },
              {
                icon: GraduationCap,
                title: "Boutique Firm Background",
                description: "Trained at top litigation firms including Sidkoff, Frey & Associates"
              },
              {
                icon: Scale,
                title: "Trial-Ready Attorney",
                description: "Aggressive defense with proven results in criminal and civil cases"
              },
              {
                icon: Award,
                title: "Personal Attention",
                description: "Every client works directly with Steve—no hand-offs to junior lawyers"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-lg p-6 hover:border-[#FFD700] transition-colors duration-200"
              >
                <item.icon className="text-[#FFD700] mb-4" size={40} />
                <h3 className="text-xl font-bold text-[#F3F4F6] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Philosophy */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FFD700] mb-8">
            MY APPROACH
          </h2>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8">
            <ul className="space-y-4 text-lg text-[#F3F4F6]">
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-3">•</span>
                <span><strong>Direct Communication:</strong> You'll have my cell. No gatekeepers, no runaround.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-3">•</span>
                <span><strong>Aggressive Defense:</strong> I prepare for trial like it's happening tomorrow. Prosecutors notice.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-3">•</span>
                <span><strong>Strategic Thinking:</strong> Every case gets a customized strategy based on 20 years of courtroom intel.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-3">•</span>
                <span><strong>Client Education:</strong> You'll understand every option, every risk, and every decision point.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFD700] font-bold mr-3">•</span>
                <span><strong>Old School Hustle:</strong> I run my practice from my iPhone because legal trouble doesn't wait for office hours.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-6">
            READY TO SWING FOR THE FENCES?
          </h2>
          <p className="text-xl text-[#F3F4F6] mb-8">
            Get a free consultation and see if we're the right fit for your case.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FFD700] text-[#111111] px-8 py-4 rounded-md font-bold text-lg hover:bg-[#FFC700] transition-colors duration-200"
          >
            SCHEDULE FREE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
