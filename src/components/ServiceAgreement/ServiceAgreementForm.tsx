import React, { useState } from "react";

const ServiceAgreementForm: React.FC = () => {
    const [serviceAgreementForm, setServiceAgreementForm] = useState({
        prescriber_name: "", 
        practice_name: "", 
        doctor_name: "", 
        prescriber_phone: "",
        pharmacy_name: ""
    });
    const [showPharmacyDropdown, setShowPharmacyDropdown] = useState<boolean>(false);
    // const [response, setResponse] = useState<string | null>(null);
    // const [loading, setLoading] = useState<boolean>(false);
    // const [progress, setProgress] = useState<number>(0);
    // const [showInsuranceDropdown, setShowInsuranceDropdown] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(serviceAgreementForm, "service agreement form");
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setServiceAgreementForm({
            ...serviceAgreementForm,
            [event.target.name]: event.target.value
        });
        if (event.target.name === "pharmacy_name") {
            setShowPharmacyDropdown(!!event.target.value);
        };
    };

    const filterPharmacies = (input: string, pharmacies: string[]) => {
        return pharmacies.filter((pharmacy) =>
            pharmacy.toLowerCase().includes(input.toLowerCase())
        );
    };

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[1000px] mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
                    Service Agreement Criteria
                </h2>
                <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Prescriber Name"
                                name="prescriber_name"
                                value={serviceAgreementForm.prescriber_name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
                                required
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Practice Name"
                                name="practice_name"
                                value={serviceAgreementForm.practice_name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
                                required
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Doctor Name"
                                name="doctor_name"
                                value={serviceAgreementForm.doctor_name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
                                required
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="number"
                                placeholder="Prescriber Phone"
                                name="prescriber_phone"
                                value={serviceAgreementForm.prescriber_phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
                                required
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Pharmacy Name"
                                name="pharmacy_name"
                                value={serviceAgreementForm.pharmacy_name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
                                required
                            />
                            {showPharmacyDropdown && serviceAgreementForm.pharmacy_name && (
                                <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto w-full">
                                    {filterPharmacies(serviceAgreementForm.pharmacy_name, ["Pharmacy 1", "Pharmacy 2"]).map((pharmacy, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                            onClick={() => setServiceAgreementForm({
                                                ...serviceAgreementForm,
                                                pharmacy_name: pharmacy
                                            })}
                                        >
                                            {pharmacy}
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
                        >
                            {"Submit"}
                        </button>
                    </div>
                </form>

                {/* {loading && (
                    <div className="mt-8">
                        <div className="w-full bg-gray-300 rounded-full h-4">
                            <div
                                className="bg-blue-500 h-4 rounded-full transition-all"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                )} */}
            </div>
        </section>
    );
};

export default ServiceAgreementForm;
