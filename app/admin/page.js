"use client"
import React, { useEffect, useState } from "react";

export default function AdminDashboard() {

    const [menuItems, setMenuItems] = useState([]);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("/api/orders")
            .then((res) => res.json())
            .then(setOrders);
    }, []);



    useEffect(() => {
        fetch("/api/menu-item").then((res) => {
            res.json().then((menuItems) => setMenuItems(menuItems));
        });
    }, []);

    const stats = [
        { label: "Total Orders", value: orders.length , color: "bg-orange-500" },
        { label: "Menu Items", value: menuItems.length, color: "bg-green-500" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800">
                    🍟 Hello Admin
                </h1>
                <p className="mt-2 text-gray-600">
                    Manage menu and orders from one place
                </p>
            </header>

            {/* Stats Section */}
            <section className="grid gap-6 sm:grid-cols-2 mb-10">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className={`rounded-xl p-6 shadow-lg text-white ${stat.color}`}
                    >
                        <h2 className="text-3xl font-bold">{stat.value}</h2>
                        <p className="mt-1 text-sm uppercase tracking-wide">{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* Quick Links */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    Quick Actions
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <a
                        href="/admin/meals/allmeals"
                        className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
                    >
                        <span className="text-4xl">📋</span>
                        <p className="mt-2 font-medium text-gray-800">Manage Menu</p>
                    </a>
                    <a
                        href="/admin/orders"
                        className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
                    >
                        <span className="text-4xl">🛒</span>
                        <p className="mt-2 font-medium text-gray-800">View Orders</p>
                    </a>
                    <a
                        href="/admin/category"
                        className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
                    >
                        <span className="text-4xl">🍴</span>
                        <p className="mt-2 font-medium text-gray-800">Edit Categories</p>
                    </a>
                </div>
            </section>
        </div>
    );
}