import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelUpload = ({ onDataParsed }) => {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = evt.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);
      onDataParsed(json); // send parsed data back to parent
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-lg font-bold text-gray-700 mb-2">Upload Excel File</h2>
      <label className="block w-full p-4 text-center border-2 border-dashed border-gray-400 cursor-pointer rounded-lg hover:border-blue-500 transition">
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileUpload}
          hidden
        />
        <p className="text-gray-500">{fileName || "Click to upload .xls or .xlsx file"}</p>
      </label>
    </div>
  );
};

export default ExcelUpload;
