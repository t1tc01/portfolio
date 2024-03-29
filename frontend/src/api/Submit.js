import axiosClient from "./Client"

const ContactApi = {
    createSubmit: (data) => {
        const url = "/submit"
        return axiosClient.post(url, {data})
    }
}

export default ContactApi