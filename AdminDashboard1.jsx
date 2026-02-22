import React, { useState } from "react";

function AdminDashboard1() {
    const [products, setProducts] = useState([
        { id: 1, name: "Clothes", price: 120 },
        { id: 2, name: "Electronics", price: 350 },
        { id: 3, name: "Kitchen Tools", price: 80 },
    ]);

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Price</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{p.name}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>${p.price}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <button onClick={() => deleteProduct(p.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard1;
