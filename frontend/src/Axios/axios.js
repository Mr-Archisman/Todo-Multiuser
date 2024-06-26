import axios from "axios"
const instance = axios.create({
    baseURL:"https://todo-multiuser-back.vercel.app/api"
})
export default instance