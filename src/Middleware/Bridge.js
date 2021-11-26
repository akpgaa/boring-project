import http from "../Config/http"
import { ACCESS_POINT } from "../Config"


const Login = async (data) => {
    const result = await http.post(ACCESS_POINT + `/me/Login`, data)
    return result
}


export default {
    Login
}