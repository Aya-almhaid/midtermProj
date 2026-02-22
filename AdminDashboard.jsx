import React, { useState } from "react";
import Nav from "../Nav.jsx";
import Foot from "../Foot.jsx";
import Layout from "../Layout.jsx";

function AdminDashboard() {
    const [sortType, setSortType] = useState("default");
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([
        { id: 1, name: "Clothes", category: "Fashion", price: 120 },
        { id: 2, name: "Laptop", category: "Electronics", price: 800 },
        { id: 3, name: "Garden Tools", category: "Garden", price: 50 },
    ]);
    const [form, setForm] = useState({ id: null, name: "", category: "", price: "" });

    // sorting
    const sortedProducts = [...products].sort((a, b) => {
        if (sortType === "priceLow") return a.price - b.price;
        if (sortType === "priceHigh") return b.price - a.price;
        if (sortType === "name") return a.name.localeCompare(b.name);
        return 0;
    });

    // seaeching
    const filteredProducts = sortedProducts.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    );

    // updating
    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = { ...form, price: Number(form.price) };

        if (form.id) {
            setProducts(products.map(p => (p.id === form.id ? productData : p)));
        } else {
            setProducts([...products, { ...productData, id: Date.now() }]);
        }

        setForm({ id: null, name: "", category: "", price: "" });
    };

    const handleEdit = (product) => setForm(product);
    const handleDelete = (id) => setProducts(products.filter(p => p.id !== id));

    return (
        <>
        
            <Nav />
            <div style={{ padding: "20px", fontFamily: "Arial" }}>
                <h1>Admin Dashboard</h1>

                {/* SEARCH & SORT */}
                <div style={{ marginBottom: "15px" }}>
                    <input
                        type="text"
                        placeholder="Search by name or category..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ padding: "5px", width: "250px" }}
                    />
                    <select
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                        style={{ marginLeft: "10px" }}
                    >
                        <option value="default">Default</option>
                        <option value="priceLow">Price Low → High</option>
                        <option value="priceHigh">Price High → Low</option>
                        <option value="name">Name A → Z</option>
                    </select>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={form.price}
                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                        required
                    />
                    <button type="submit">{form.id ? "Update" : "Add"}</button>
                </form>

                {/* product table*/}
                <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price ($)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(p => (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.category}</td>
                                <td>{p.price}</td>
                                <td>
                                    <button onClick={() => handleEdit(p)}>Edit</button>
                                    <button onClick={() => handleDelete(p.id)} style={{ marginLeft: "8px", color: "red" }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Foot />

        </>
    );
}

export default AdminDashboard;