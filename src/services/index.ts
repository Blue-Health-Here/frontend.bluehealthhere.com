import axios from "axios"

export const fetchPharmacies = async () => {
    try {
        const response = await axios.get("https://backend.bluehealthhere.com/pharmacies");
        return response;
    } catch (error: any) {
        throw new Error(error?.message)
    }
}
