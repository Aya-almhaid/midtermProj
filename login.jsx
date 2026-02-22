import React, { useState } from "react";
import api from "../../api.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../Layout.css";
import { searchItems } from "../../utils/searchUtils";
import Foot from "../Foot.jsx";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const products = [
        { id: 1, name: "Clothes", category: "Fashion", price: 120 },
        { id: 2, name: "Shoes", category: "Fashion", price: 200 },
        { id: 3, name: "Laptop", category: "Electronics", price: 900 },
    ];

    const filteredProducts = searchItems(products, search);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await api.post("/Auth/login", { email, password });
            const { token, user, message } = res.data || {};
            if (!token || !user) throw new Error("Invalid response");

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            toast.success(message || "Login successful");

            navigate(user.role === "admin" ? "/Admin/AdminDashboard" : "/User/UserDashboard");
        } catch (error) {
            if (error.response) toast.error(error.response.data?.message || "Server error");
            else if (error.request) toast.error("Cannot reach server.");
            else toast.error(error.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {filteredProducts.map((p) => (
                        <div key={p.id}>
                            {p.name} — {p.category}
                        </div>
                    ))}

                    <label>Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>

            <Foot />
        </div>
    );
}

export default Login;