export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#111111]">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
          NEW SITE COMING SOON
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          This site is currently being replaced. The previous version has been backed up.
        </p>
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 text-left">
          <h2 className="text-2xl font-bold mb-4 text-[#FFD700]">📦 Backup Location</h2>
          <p className="text-gray-400 mb-4">
            The original Griffiths Law Office website has been preserved in:
          </p>
          <code className="block bg-black p-4 rounded text-green-400 mb-4 font-mono">
            /backup/old-site/
          </code>
          <p className="text-gray-400 mb-4">
            See <code className="text-[#FFD700] bg-black px-2 py-1 rounded">/backup/README.md</code> for restoration instructions.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-bold mb-2 text-white">Backup Contents Include:</h3>
            <ul className="text-gray-400 space-y-1 list-disc list-inside">
              <li>All pages (Home, Attorney, War Room, Contact)</li>
              <li>All components (Navigation, Scheduler, Reviews)</li>
              <li>Complete configuration and documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
