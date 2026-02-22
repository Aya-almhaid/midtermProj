import React, { useState } from "react";
import api from "../../api.js"; // make sure this exists
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Nav from "../Nav.jsx";
import Foot from "../Foot.jsx";
import Layout from "../Layout.jsx";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        // ✅ Validate before API call
        if (password.length < 8) {
            toast.error("Password must be at least 8 characters");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const res = await api.post("/auth/register", {
                name,
                email,
                password,
                confirmPassword,
            });

            toast.success(res.data.message || "Registration successful");

            const { token, user } = res.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            console.log(user);

            // ✅ Role navigation
            if (user?.role === "admin") {
                navigate("/Admin/AdminDashboard");
            } else {
                navigate("/User/UserDashboard");
            }

        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <>
        
            <Nav/>

            <div style={{ padding: "20px" }}>

                <h1>Register</h1>

                <form onSubmit={handleRegister}>
                    <div>
                        <label style={{color:"gray"}} htmlFor="name">User Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <br />

                    <div>
                        <label style={{ color: "gray" }} htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <br />

                    <div>
                        <label style={{ color: "gray" }} htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <br />

                    <div>
                        <label style={{ color: "gray" }}  htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <br />

                    <button type="submit">Register</button>
                </form>
            </div>

            <Foot/>
            
        </>
    );
}

export default Register;
