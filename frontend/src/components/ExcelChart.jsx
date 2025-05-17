import React, { useState, useRef } from "react";
import {
  Bar,
  Line,
  Pie,
  Scatter,
  Radar,
  Doughnut,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Register chart types
ChartJS.register(
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const ExcelChart = ({ data }) => {
  const [xKey, setXKey] = useState("");
  const [yKey, setYKey] = useState("");
  const [chartType, setChartType] = useState("bar");
  const [showChart, setShowChart] = useState(false);
  const chartRef = useRef(null); // Ref to capture chart for download

  const keys = data.length ? Object.keys(data[0]) : [];

  const chartData = {
    labels: data.map((row) => row[xKey]),
    datasets: [
      {
        label: `${yKey} vs ${xKey}`,
        data:
          chartType === "scatter"
            ? data.map((row) => ({ x: row[xKey], y: row[yKey] }))
            : data.map((row) => row[yKey]),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: "rgba(0,0,0,0.3)",
        borderWidth: 1,
      },
    ],
  };

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return <Bar data={chartData} width={400} height={250} />;
      case "line":
        return <Line data={chartData} width={400} height={250} />;
      case "pie":
        return <Pie data={chartData} width={400} height={250} />;
      case "scatter":
        return <Scatter data={chartData} width={400} height={250} />;
      case "radar":
        return <Radar data={chartData} width={400} height={250} />;
      case "doughnut":
        return <Doughnut data={chartData} width={400} height={250} />;
      default:
        return null;
    }
  };

  // Function to download chart as PNG
  const downloadPNG = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "chart.png";
        link.click();
      });
    }
  };

  // Function to download chart as PDF
  const downloadPDF = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const pdf = new jsPDF();
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 10, 10, 180, 160);
        pdf.save("chart.pdf");
      });
    }
  };

  return (
    <div className="mt-10 w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          value={xKey}
          onChange={(e) => setXKey(e.target.value)}
          className="p-2 border rounded w-1/3"
        >
          <option value="">Select X-axis</option>
          {keys.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
        <select
          value={yKey}
          onChange={(e) => setYKey(e.target.value)}
          className="p-2 border rounded w-1/3"
        >
          <option value="">Select Y-axis</option>
          {keys.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          className="p-2 border rounded w-1/4"
        >
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="pie">Pie</option>
          <option value="scatter">Scatter</option>
          <option value="radar">Radar</option>
          <option value="doughnut">Doughnut</option>
        </select>
      </div>

      <button
        onClick={() => setShowChart(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
      >
        Generate Graph
      </button>

      <div className="bg-white mt-6 p-4 rounded-lg shadow">
        {showChart && xKey && yKey ? (
          <div className="w-full h-80 flex justify-center items-center" ref={chartRef}>
            {renderChart()}
          </div>
        ) : (
          <p className="text-gray-400">Chart will appear here after generation</p>
        )}
      </div>

      {/* Download buttons */}
      {showChart && xKey && yKey && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={downloadPNG}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded transition"
          >
            Download as PNG
          </button>
          <button
            onClick={downloadPDF}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded transition"
          >
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default ExcelChart;
