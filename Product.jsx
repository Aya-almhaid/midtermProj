import React from "react";
import Foot from "../Foot";
import Nav from '../Nav'
function Products() {
    const allProducts = [
        { id: 1, name: "Clothes", price: "$120" },
        { id: 2, name: "Electronics", price: "$350" },
        { id: 3, name: "Kitchen Tools", price: "$80" },
        { id: 4, name: "Garden Tools", price: "$50" },
    ];

    return (
        <div>
            <Nav/>
            <h1>Products</h1>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {allProducts.map(p => (
                    <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                        <h3>{p.name}</h3>
                        <p>{p.price}</p>
                    </div>
                ))}
            </div>
            <Foot/>
        </div>
    );
}

export default Products;
