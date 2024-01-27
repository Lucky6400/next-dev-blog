import axios from "axios"

export const getAllPosts = async () => {
    try {
        const res = await axios.get(`${process.env.BASE_URL}/api/posts/all`);
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error)
    }
}