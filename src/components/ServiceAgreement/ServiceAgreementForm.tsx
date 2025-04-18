import React, { useEffect, useState } from "react";
import { fetchPharmacies } from "../../services";
import axios from "axios";

export const initialVals = {
    prescriber_name: "",
    practice_name: "",
    doctor_name: "",
    prescriber_phone: "",
    pharmacy_name: ""
};

const ServiceAgreementForm: React.FC = () => {
    const [serviceAgreementForm, setServiceAgreementForm] = useState<any>(initialVals);
    const [showPharmacyDropdown, setShowPharmacyDropdown] = useState<boolean>(false);
    const [pharmacies, setPharmacies] = useState<any | null>(null);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        fetchPharmacies().then((res: any) => {
            setPharmacies(res.data);
        });
    }, []);

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let formData = new FormData();
        Object.keys(serviceAgreementForm).forEach((item: any) => {
            formData.append(item, serviceAgreementForm[item]);
        });

        const interval = setInterval(() => {
            setProgress((prev) => (prev < 90 ? prev + 6 : prev));
        }, 500);

        try {
            setLoading(true);
            axios.post("https://backend.bluehealthhere.com/service-agreement", formData, {
                responseType: 'blob',
            })
                .then((response) => {
                    const file = new Blob([response.data], { type: 'application/pdf' });
                    const fileURL = URL.createObjectURL(file);
                    const a = document.createElement('a');
                    a.href = fileURL;
                    a.download = serviceAgreementForm.pharmacy_name + '.pdf';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();

                    setServiceAgreementForm(initialVals);
                    setLoading(false);

                    clearInterval(interval);
                })
                .catch((error) => console.error(error));
        } catch (error) {
            console.error("Error:", error);
            setError("An error occurred while searching for criteria.");
        }
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
                                    {filterPharmacies(serviceAgreementForm.pharmacy_name, Object.keys(pharmacies)).map((pharmacy, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                            onClick={() => {
                                                setServiceAgreementForm({
                                                    ...serviceAgreementForm,
                                                    pharmacy_name: pharmacy
                                                })
                                                setShowPharmacyDropdown(false)
                                            }}
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
                            disabled={loading}
                            className="bg-black text-white text-sm md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            {loading ? "Submitting..." : "Submit"}
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

                {error && <p>{error}</p>}

            </div>
        </section>
    );
};

export default ServiceAgreementForm;
