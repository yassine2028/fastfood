// app/admin/orders/page.js
"use client";
import { useEffect, useState } from "react";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then(setOrders);
  }, []);

  console.log(orders);

  return (
    <div className="p-6 space-y-6 w-full flex flex-col ">
      <div className='text-center '>
        <h1 className='text-3xl md:text-4xl lg:text-7xl font-bold logo tracking-wider pb-4'>
          Manage Your Orders
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {orders.map((order) => (
          <div key={order._id} className="border p-4 rounded-lg space-y-4">
            <p className="font-bold">
              <strong>Statut:</strong> {order.status}
            </p>
            <p>
              <strong>Total:</strong> {"  "}
              <span className="font-bold text-green-800">
                {order.total.toFixed(2)} MAD
              </span>
            </p>

            <div className="bg-gray-200 m-2 rounded-lg p-4">
              <h3 className="text-xl text-center font-bold outfit">
                Informations{" "}
              </h3>

              <p className="text-lg font-semibold text-black ">
                Phone number:{"    "}
                <span className="font-bold outfit text-gray-600">
                  {order.customer.phone}
                </span>
              </p>
              <p className="text-lg font-semibold text-black ">
                Addresse:{"    "}
                <span className="font-bold outfit text-gray-600">
                  {order.customer.address}
                </span>
              </p>
            </div>

            <h3 className="font-[700]  logo text-4xl" >
              {order.items.length > 1 ? "Produits:" : "Produit:"}
            </h3>
            <ul className="">
              {order.items.map((item, i) => (
                <div key={i} className="bg-[#f1f2f3] m-2 rounded-lg p-4">
                  <h3 className="text-xl text-center font-bold outfit ">
                    {item.product.name}{" "}
                  </h3>

                  <p className="text-lg font-semibold text-black ">
                    Size:{"   "}
                    <span className="font-bold text-green-800">
                      {item.size.name}
                    </span>
                  </p>

                  {item.extras.length > 0 && (
                    <p className="text-lg font-semibold text-black flex">
                      Extras:{"   "} <br />
                      <div className="flex flex-col">
                        {item.extras.map((extra, index) => (
                          <span
                            className="font-bold  text-green-800 "
                            key={index}
                          >
                            *{extra.name}
                          </span>
                        ))}
                      </div>
                    </p>
                  )}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        onClick={async () => {
          const confirmed = confirm(
            "Are you sure you want to delete all orders?"
          );
          if (!confirmed) return;

          const res = await fetch("/api/orders", { method: "DELETE" });
          if (res.ok) {
            alert("All orders cleared!");
            setOrders([]); // Clear UI
          } else {
            alert("Failed to delete orders.");
          }
        }}
        className="bg-red-500 hover:scale-110 active:scale-95 cursor-pointer w-fit self-center text-xl transition-all duration-300 text-white px-8 py-4 rounded hover:bg-red-700"
      >
        Clear All Orders
      </button>
    </div>
  );
}
