import React from "react";
import { useNavigate } from "react-router-dom";

function LandingHome() {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <>
            <h1 style={{ color: "yellowgreen" }}>This is our and yours Store</h1>
            <div style={{ color: "black" }}>Welcome To our Store</div>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </>
    )
}

export default LandingHome;
