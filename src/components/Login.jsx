import { useState } from 'react';
import axios from 'axios';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
const navigate = useNavigate();
const Login = () => {

    const [email, setEmailId] = useState("Naatu@gmail.com");
    const [password, setPassword] = useState("Naatu@1234");
    const dispatch = useDispatch();
    const handleLogin = async () => {
        
        try {
            const result = await axios.post(BASE_URL+"/login", {
                email: email,
                password: password
            }, {
                withCredentials: true,
            });
            console.log(result.data);
            dispatch(addUser(result.data));
            return navigate("/");
        } catch (error) {
            console.error("Error during login:", error);
        }
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div>
                        <fieldset className="fieldset text-left">
                            <legend className="fieldset-legend text-left">Email id</legend>
                            <input
                                type="text"
                                value={email}
                                className="input w-full"
                                onChange={(e) => setEmailId(e.target.value)}
                            />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="fieldset text-left">
                            <legend className="fieldset-legend text-left">Password</legend>
                            <input
                                type="text"
                                value={password}
                                className="input w-full"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </fieldset>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login