import { useContext } from "react"
// import AuthProvider from "../contexts/AuthProvider";
import { AuthContext } from "../contexts/AuthProvider.js"

const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth;