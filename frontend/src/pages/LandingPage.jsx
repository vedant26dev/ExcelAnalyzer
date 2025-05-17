import Navbar from './Navbar';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="pt-28 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Excel Analytics Platform</h1>
        <p className="text-gray-400 text-lg mb-10">
          Empower your data decisions with our smart Excel analytics platform. Upload, analyze, and visualize your Excel files with ease. 
          Whether you’re a student, data analyst, or business professional — our platform provides the tools you need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">📊 Interactive Charts</h3>
            <p className="text-gray-400">Generate beautiful 2D/3D graphs with dynamic axis selection.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">🤖 Smart Insights</h3>
            <p className="text-gray-400">Get AI-powered summaries and key trends from your uploaded files.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">🧾 Upload History</h3>
            <p className="text-gray-400">Track and revisit all your previously uploaded Excel files anytime.</p>
          </div>
        </div>

        <div className="space-x-6">
          <a href="/register" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Get Started</a>
          <a href="/login" className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition">Login</a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
