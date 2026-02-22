import React, { useState } from "react";
import Layout from "../Layout";

function UserDashboard() {

    const [sortType, setSortType] = useState("default");
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "Clothes", price: 120, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200" },
        { id: 2, name: "Electronics", price: 850, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200" },
        { id: 3, name: "Garden Tools", price: 95, image: "https://images.unsplash.com/photo-1599685315640-0c58f6e51e10?w=200" },
        { id: 4, name: "Kitchen Tools", price: 60, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200" },
        { id: 5, name: "Books", price: 25, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200" },
        { id: 6, name: "Shoes", price: 140, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" },
        { id: 7, name: "Headphones", price: 220, image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=200" },
        { id: 8, name: "Backpack", price: 75, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200" }
    ];

    // ⭐ SORT LOGIC
    const sortedProducts = [...products].sort((a, b) => {
        if (sortType === "priceLow") return a.price - b.price;
        if (sortType === "priceHigh") return b.price - a.price;
        if (sortType === "name") return a.name.localeCompare(b.name);
        return 0;
    });

    const addToCart = (product) => setCart([...cart, product]);
    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleBuy = () => {
        alert(`✅ Purchase successful! Total paid: $${total}`);
        setCart([]);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
       
            <h1>User Dashboard</h1>

            {/* ⭐ SORT DROPDOWN */}
            <select value={sortType} onChange={(e) => setSortType(e.target.value)} style={{ marginBottom: "15px" }}>
                <option value="default">Default</option>
                <option value="priceLow">Price Low → High</option>
                <option value="priceHigh">Price High → Low</option>
                <option value="name">Name A → Z</option>
            </select>

            <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Price ($)</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {sortedProducts.map(product => (
                        <tr key={product.id}>
                            <td><input type="checkbox" /></td>
                            <td>{product.name}</td>
                            <td>
                                <img src={product.image} alt={product.name}
                                    style={{ height: "50px", width: "50px", objectFit: "cover" }} />
                            </td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 style={{ marginTop: "30px" }}>🛒 Cart</h2>

            {cart.length === 0 && <p>Cart is empty</p>}

            {cart.map(item => (
                <div key={item.id}>
                    {item.name} — ${item.price}
                    <button style={{ marginLeft: "10px" }} onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}

            {cart.length > 0 && (
                <>
                    <h3>Total: ${total}</h3>
                    <button onClick={handleBuy}
                        style={{ padding: "10px 20px", background: "#22c55e", color: "white", border: "none" }}>
                        Buy Now
                    </button>
                </>
            )}
        
        </div>
    );
}

export default UserDashboard;
