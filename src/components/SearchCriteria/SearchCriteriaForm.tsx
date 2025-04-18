import React, { useState } from "react";
import { medications, insurances } from "../suggestions"; // Import the suggestions directly
import axios from "axios";
import { formatPACriteria } from "../../utils/helper";

const CriteriaForm: React.FC = () => {
  const [medication, setMedication] = useState<string>("");
  const [insurance, setInsurance] = useState<string>("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [showMedicationDropdown, setShowMedicationDropdown] = useState<boolean>(false);
  const [showInsuranceDropdown, setShowInsuranceDropdown] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setResponse(null);

    // Simulate progress bar (3x slower to 90%)
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 6 : prev));
    }, 500);

    const formData = new FormData();
    formData.append("mode", "criteria");
    formData.append("medication_name", medication);
    formData.append("insurance_name", insurance);

    try {
      const res = await axios.post("https://backend.bluehealthhere.com/process", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.message) {
        setResponse(res.data.message);
      } else {
        setResponse("No matching criteria found.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while searching for criteria.");
    } finally {
      clearInterval(interval); // Ensure the interval is cleared
      setLoading(false);
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
    setShowMedicationDropdown(false);
  };

  const selectInsurance = (suggestion: string) => {
    setInsurance(suggestion);
    setShowInsuranceDropdown(false);
  };

  const filterSuggestions = (input: string, suggestions: string[]) => {
    return suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[600px] mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
          Prior Authorization Approval Criteria
        </h2>
        <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:gap-8">
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

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white text-sm md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full hover:bg-gray-800 transition-colors"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
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

        {response && (
          <div className="text-center mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
              PA Criteria:
            </h3>
            <div className="p-4 md:p-6 rounded-lg bg-gray-100 shadow-lg text-left">
              {Array.isArray(response) && response[0]?.fields?.["PA Criteria"] ? (
                <pre
                  className="text-sm md:text-base whitespace-pre-wrap"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    lineHeight: "1.6",
                  }}
                >
                  {formatPACriteria(response[0].fields["PA Criteria"]).map((section: any, index: number) => (
                    <div key={index}>
                      <h3 className="py-2 text-lg"><strong>{section.title}</strong></h3>
                      <ul>
                        {section.items.map((item: any, idx: number) => (
                          <li className="py-1" key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </pre>
              ) : (
                <p className="text-gray-600">PA Criteria not found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CriteriaForm;
