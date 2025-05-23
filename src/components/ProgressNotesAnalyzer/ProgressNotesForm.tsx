import React, { useState } from "react";
import { medications, insurances } from "../suggestions"; // Import the suggestions directly
import axios from "axios";

const ProgressNotesForm: React.FC = () => {
  const [medication, setMedication] = useState<string>("");
  const [insurance, setInsurance] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [eligible, setEligible] = useState<boolean | null>(null);
  const [showMedicationDropdown, setShowMedicationDropdown] = useState<boolean>(false);
  const [showInsuranceDropdown, setShowInsuranceDropdown] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setResponse([]);
      setEligible(false);
      return;
    }

    setLoading(true);
    setProgress(0);

    // Simulate progress bar (3x slower to 90%)
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 3 : prev));
    }, 500);

    const formData = new FormData();
    formData.append("mode", "analyze");
    formData.append("medication_name", medication);
    formData.append("insurance_name", insurance);
    formData.append("chart_notes", file);

    try {
      const res = await axios.post("https://backend.bluehealthhere.com/process", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.message) {
        const results = res.data.message;
        setResponse(results);

        const allMet = results.every((item: any) => item.status === "met");
        setEligible(allMet);
      } else {
        setResponse([]);
        setEligible(false);
      }
      setProgress(100); // Mark progress as complete
    } catch (error) {
      console.error("Error:", error);
      setResponse([]);
      setEligible(false);
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleMedicationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setMedication(input);
    setShowMedicationDropdown(!!input);
  };

  const handleInsuranceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setInsurance(input);
    setShowInsuranceDropdown(!!input);
  };

  const selectMedication = (suggestion: string) => {
    setMedication(suggestion);
    setShowMedicationDropdown(false); // Close dropdown
  };

  const selectInsurance = (suggestion: string) => {
    setInsurance(suggestion);
    setShowInsuranceDropdown(false); // Close dropdown
  };

  const filterSuggestions = (input: string, suggestions: string[]) => {
    return suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
          Analyze Your Progress Notes
        </h2>
        <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Medication Name"
                value={medication}
                onChange={handleMedicationChange}
                className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
                required
              />
              {showMedicationDropdown && medication && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto w-full">
                  {filterSuggestions(medication, medications).map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() => selectMedication(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Insurance Name"
                value={insurance}
                onChange={handleInsuranceChange}
                className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
                required
              />
              {showInsuranceDropdown && insurance && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto w-full">
                  {filterSuggestions(insurance, insurances).map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() => selectInsurance(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <label className="block text-base md:text-lg text-gray-600 mb-4" htmlFor="file-upload">
              Upload Progress Notes (PDF):
            </label>
            <input
              type="file"
              id="file-upload"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-3 md:px-6 md:py-4 text-sm md:text-base rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white text-sm md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full hover:bg-gray-800 transition-colors"
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Submit"}
            </button>
          </div>
        </form>

        {loading && (
          <div className="mt-8">
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
        {response.length === 0 && !loading && eligible === false && (
          <div className="text-center mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
              No Data Found
            </h3>
            <div className="p-4 md:p-6 rounded-lg bg-red-100 text-red-600">
              <p>
                No relevant information was found for the provided medication and
                insurance. Please double-check your input or try uploading a different
                progress note file.
              </p>
            </div>
          </div>
        )}

        {response.length > 0 && (
          <div className="text-center mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">Analysis Result:</h3>
            <div className="space-y-4 md:space-y-6">
              {response.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 md:p-6 rounded-lg ${
                    item.status === "met" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <h4 className="text-lg md:text-xl font-bold">{item.criterion}</h4>
                  <p className="text-sm md:text-base mt-2">{item.description}</p>
                  <span
                    className={`inline-block mt-4 px-4 py-2 text-sm md:text-base rounded-full text-white ${
                      item.status === "met" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12">
              {eligible !== null && (
                <div
                  className={`p-4 md:p-6 rounded-lg text-sm md:text-base font-bold ${
                    eligible ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {eligible ? (
                    <>
                      These progress notes are <span className="text-green-700">eligible</span> for the prior authorization of this medication.
                    </>
                  ) : (
                    <>
                      These progress notes are <span className="text-red-700">not eligible</span> for the prior authorization of this medication.
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgressNotesForm;
