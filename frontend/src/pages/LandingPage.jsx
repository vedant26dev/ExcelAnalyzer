import Navbar from './Navbar';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      {/* Hero Section */}
      <div className="pt-28 px-6 max-w-7xl mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-gray-300 pb-20">
        <div>
          <h1 className="text-5xl font-bold mb-6 text-blue-800">Excel Analytics Platform</h1>
          <p className="text-gray-600 text-lg mb-10">
            Empower your data decisions with our smart Excel analytics platform. Upload, analyze, and visualize your Excel files with ease.
            Whether you’re a student, data analyst, or business professional — our platform provides the tools you need.
          </p>
          <div className="space-x-6">
            <a href="/register" className="px-8 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 ease-in-out shadow-lg">Get Started Free</a>
            <a href="/login" className="px-8 py-3 border border-gray-400 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition duration-300 ease-in-out">Login</a>
          </div>
        </div>
        
      </div>

      {/* How it Works Section */}
      <div className="px-6 max-w-7xl mx-auto py-20 border-b border-gray-300">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl text-green-700">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Upload Your File</h3>
            <p className="text-gray-600">Easily drag and drop or select your Excel file from your device.</p>
            {/* Placeholder for visual */}
           
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl text-blue-700">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Analyze Your Data</h3>
            <p className="text-gray-600">Our platform processes your data and provides smart insights and tools for analysis.</p>
            {/* Placeholder for visual */}
           
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl text-yellow-700">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Visualize & Report</h3>
            <p className="text-gray-600">Generate interactive charts and reports to understand your data better.</p>
            {/* Placeholder for visual */}
           
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="px-6 max-w-7xl mx-auto py-20 border-b border-gray-300">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">📊 Interactive Charts</h3>
            <p className="text-gray-600">Generate beautiful and customizable 2D/3D graphs. Easily select your data ranges and axis to visualize trends and patterns in your Excel files.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">🤖 Smart Insights</h3>
            <p className="text-gray-600">Leverage the power of AI to get automated summaries, identify key trends, outliers, and important insights hidden within your spreadsheet data.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">🧾 Upload History</h3>
            <p className="text-gray-600">Never lose track of your work. All your uploaded Excel files and their analysis history are securely stored and easily accessible for future reference.</p>
          </div>
           <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">🔒 Secure Data Handling</h3>
            <p className="text-gray-600">Your data security is our top priority. We ensure your uploaded files are handled with the utmost care and privacy.</p>
          </div>
           <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">⚡ Fast Processing</h3>
            <p className="text-gray-600">Our platform is optimized for speed, allowing you to analyze even large Excel files quickly and efficiently.</p>
          </div>
           <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">📈 Easy Reporting</h3>
            <p className="text-gray-600">Generate comprehensive reports from your analysis, making it easy to share your findings with others.</p>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
       <div className="px-6 max-w-7xl mx-auto py-20 border-b border-gray-300">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Who Can Benefit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Students</h3>
            <p className="text-gray-600">Analyze research data, visualize project results, and create presentations with ease.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Data Analysts</h3>
            <p className="text-gray-600">Streamline your workflow, generate quick insights, and create compelling reports for stakeholders.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Business Professionals</h3>
            <p className="text-gray-600">Track sales, analyze market trends, and make data-driven decisions to grow your business.</p>
          </div>
        </div>
      </div>


      {/* Footer (Optional, could be added later) */}
      {/* <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2023 Excel Analytics Platform. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default LandingPage;

