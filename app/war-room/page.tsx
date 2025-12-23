import { Download, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function WarRoomPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#111111] to-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] mb-6">
            THE WAR ROOM
          </h1>
          <p className="text-xl md:text-2xl text-[#F3F4F6] mb-4">
            Pro Se Resource Center
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't come to court unprepared. Access essential documents, guidelines, and resources for Chester County and Montgomery County.
          </p>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="bg-[#FFD700] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-[#111111]">
            <AlertTriangle size={24} />
            <p className="font-bold text-center">
              These resources are for educational purposes. For complex cases, professional legal counsel is strongly recommended.
            </p>
          </div>
        </div>
      </section>

      {/* Essential Court Documents */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-8">
            Essential Court Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Chester County Custody Guidelines",
                description: "Official custody and visitation guidelines for Chester County courts",
                county: "Chester County"
              },
              {
                title: "Chester County Alimony/Support Guidelines",
                description: "Support calculation worksheets and guidelines",
                county: "Chester County"
              },
              {
                title: "Montgomery County Custody Guidelines",
                description: "Custody schedules and parenting plan templates",
                county: "Montgomery County"
              },
              {
                title: "Montgomery County Support Guidelines",
                description: "Child support and alimony calculation forms",
                county: "Montgomery County"
              },
              {
                title: "PA Divorce Complaint Form",
                description: "Standard complaint for divorce filing",
                county: "Pennsylvania Statewide"
              },
              {
                title: "Emergency Custody Petition",
                description: "Template for emergency custody situations",
                county: "Chester & Montgomery"
              }
            ].map((doc, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#FFD700] transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <FileText className="text-[#FFD700] flex-shrink-0" size={32} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F3F4F6] mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-gray-400 mb-2">
                      {doc.description}
                    </p>
                    <p className="text-sm text-[#FFD700] mb-4">
                      {doc.county}
                    </p>
                    <button className="flex items-center gap-2 bg-[#FFD700] text-[#111111] px-4 py-2 rounded-md font-bold hover:bg-[#FFC700] transition-colors duration-200">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              <strong className="text-[#FFD700]">Note:</strong> These are placeholder links. Actual court forms can be obtained from{" "}
              <a href="https://www.chesco.org/141/Court-Forms" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">
                Chester County Courts
              </a>{" "}
              and{" "}
              <a href="https://www.montcopa.org/154/Court-Forms" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">
                Montgomery County Courts
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Client Prep Checklist */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-8 text-center">
            Client Preparation Checklist
          </h2>
          <div className="bg-[#111111] border border-gray-800 rounded-lg p-8">
            <p className="text-xl text-[#F3F4F6] mb-6 text-center">
              <strong className="text-[#FFD700]">Don't come to court unprepared.</strong> Download our Evidence Organizer before your consultation.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-[#FFD700]">
                What to Bring to Your Consultation:
              </h3>
              <ul className="space-y-3 text-[#F3F4F6]">
                {[
                  "All relevant court documents and correspondence",
                  "Timeline of events (written or documented)",
                  "Evidence: emails, texts, photos, videos, recordings",
                  "Witness contact information",
                  "Financial records (if applicable to your case)",
                  "Police reports, medical records, or incident reports",
                  "Questions you want answered"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#FFD700] flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <button className="bg-[#FFD700] text-[#111111] px-8 py-4 rounded-md font-bold text-lg hover:bg-[#FFC700] transition-colors duration-200 inline-flex items-center gap-3">
                <Download size={24} />
                Download Evidence Organizer PDF
              </button>
              <p className="text-sm text-gray-400 mt-4">
                A printable checklist to help you organize your case materials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Se Tips */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-8 text-center">
            Pro Se (Self-Representation) Tips
          </h2>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8">
            <div className="space-y-6 text-[#F3F4F6]">
              <div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">
                  1. Know the Rules
                </h3>
                <p className="text-gray-300">
                  Pennsylvania Rules of Civil Procedure apply. Courts won't give you special treatment because you're representing yourself. Study local court rules before filing anything.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">
                  2. Document Everything
                </h3>
                <p className="text-gray-300">
                  Keep copies of everything. File-stamp all documents. Create a timeline. The side with better documentation usually wins.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">
                  3. Deadlines Are Sacred
                </h3>
                <p className="text-gray-300">
                  Miss a deadline, lose your case. Set reminders. File early. Extensions are rare and require good cause.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">
                  4. Courtroom Etiquette Matters
                </h3>
                <p className="text-gray-300">
                  Address the judge as "Your Honor." Stand when speaking. No interrupting. Professional dress is mandatory.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">
                  5. When to Call a Lawyer
                </h3>
                <p className="text-gray-300">
                  Criminal charges, child custody disputes, and complex civil litigation are NOT good candidates for Pro Se. Get professional help before it's too late.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-6">
            NEED MORE THAN RESOURCES?
          </h2>
          <p className="text-xl text-[#F3F4F6] mb-8">
            Schedule a consultation and get personalized legal strategy for your case.
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
