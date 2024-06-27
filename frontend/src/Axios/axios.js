import axios from "axios"
const instance = axios.create({
    baseURL:"https://todo-multiuser-e7pt.vercel.app"
})
export default instance