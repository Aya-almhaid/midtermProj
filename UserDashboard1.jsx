import React from "react";

function UserDashboard1() {
    const products = [
        { id: 1, name: "Clothes", price: "$120" },
        { id: 2, name: "Electronics", price: "$350" },
        { id: 3, name: "Kitchen Tools", price: "$80" },
    ];
    return (
        <div>
            <h1>User Dashboard</h1>
    
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {products.map(p => (
                    <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                        <h3>{p.name}</h3>
                        <p>{p.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserDashboard1;
