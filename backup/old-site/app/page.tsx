import ReviewTicker from "@/components/ReviewTicker";
import { Scale, Shield, Users, FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#111111] to-[#1a1a1a] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F3F4F6] mb-6">
              Legal Trouble Doesn't Take a Holiday
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD700] font-bold mb-4">
              SWING FOR THE FENCES WITH GRIFFITHS LAW
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              20+ years in the trenches of PA and NJ courts. You hire me, you get me—no junior associates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#FFD700] text-[#111111] px-8 py-4 rounded-md font-bold text-lg hover:bg-[#FFC700] transition-colors duration-200"
              >
                GET YOUR FREE CONSULTATION
              </Link>
              <Link
                href="/war-room"
                className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-md font-bold text-lg hover:bg-[#FFD700] hover:text-[#111111] transition-colors duration-200"
              >
                ACCESS THE WAR ROOM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Review Ticker */}
      <ReviewTicker />

      {/* Practice Areas */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#FFD700] mb-12">
            AREAS OF PRACTICE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Criminal Defense",
                description: "DUI, Drug Offenses, Assault, Theft - Aggressive defense when your freedom is on the line."
              },
              {
                icon: Users,
                title: "Family Law",
                description: "Divorce, Custody, Alimony, Support - Fighting for your family's future."
              },
              {
                icon: Scale,
                title: "Civil Litigation",
                description: "Contract disputes, Personal injury, Property matters - Taking your case to trial when necessary."
              },
              {
                icon: FileText,
                title: "Pro Se Support",
                description: "Court document prep, Legal coaching - Empowering you to represent yourself effectively."
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#FFD700] transition-colors duration-200"
              >
                <area.icon className="text-[#FFD700] mb-4" size={48} />
                <h3 className="text-xl font-bold text-[#F3F4F6] mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#FFD700] mb-8">
            THE ATTORNEY
          </h2>
          <div className="bg-[#111111] border border-gray-800 rounded-lg p-8">
            <p className="text-lg text-[#F3F4F6] leading-relaxed mb-6">
              <strong className="text-[#FFD700]">Steve Griffiths</strong> has spent <strong>20+ years in the trenches</strong> of Pennsylvania and New Jersey courts. After cutting his teeth at boutique litigation firms like Sidkoff, Frey & Associates, he founded The Griffiths Law Office to provide direct, personal legal representation.
            </p>
            <p className="text-lg text-[#F3F4F6] leading-relaxed mb-6">
              Unlike large firms that shuffle your case to inexperienced associates, when you hire Steve, <strong className="text-[#FFD700]">you get Steve</strong>. Every consultation, every court appearance, every strategy session—it's handled personally.
            </p>
            <p className="text-lg text-[#F3F4F6] leading-relaxed mb-6">
              From his office at <strong>1457 Riverwood Ln in Phoenixville</strong>, Steve serves clients throughout <strong>Chester County and Montgomery County</strong>, bringing aggressive, prepared defense to those facing criminal charges, divorce, custody battles, and civil disputes.
            </p>
            <p className="text-xl text-[#FFD700] font-bold text-center">
              "I don't hand your case to a junior associate. You hire me, you get me."
            </p>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/attorney"
              className="inline-block bg-[#FFD700] text-[#111111] px-8 py-3 rounded-md font-bold hover:bg-[#FFC700] transition-colors duration-200"
            >
              LEARN MORE ABOUT STEVE
            </Link>
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFD700] mb-6">
            SERVING PHOENIXVILLE & SURROUNDING AREAS
          </h2>
          <p className="text-xl text-[#F3F4F6] mb-8">
            Conveniently located at 1457 Riverwood Ln, Phoenixville, PA 19460
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FFD700] text-[#111111] px-8 py-3 rounded-md font-bold hover:bg-[#FFC700] transition-colors duration-200"
          >
            GET DIRECTIONS & CONTACT INFO
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#FFD700] mb-4">
                THE GRIFFITHS LAW OFFICE
              </h3>
              <p className="text-gray-400">
                20+ years of aggressive legal defense in Pennsylvania and New Jersey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#FFD700] mb-4">
                QUICK LINKS
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-[#FFD700]">Home</Link>
                </li>
                <li>
                  <Link href="/attorney" className="text-gray-400 hover:text-[#FFD700]">The Attorney</Link>
                </li>
                <li>
                  <Link href="/war-room" className="text-gray-400 hover:text-[#FFD700]">The War Room</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-[#FFD700]">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#FFD700] mb-4">
                LOCATION
              </h3>
              <p className="text-gray-400">
                1457 Riverwood Ln<br />
                Phoenixville, PA 19460
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} The Griffiths Law Office. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
