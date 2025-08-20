'use client';
import { ChevronDownIcon, CookingPot, ForkKnife, Home, Menu, Package, PlusSquare, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';




export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className=" fixed top-4 left-4 z-40 bg-white p-2 rounded shadow"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r shadow-md z-50 transform transition-transform duration-700 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-lg">Admin Panel</span>
          <button
            onClick={() => setIsOpen(false)}
            className=" p-1 rounded hover:bg-gray-100 z-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-2 text-sm">
          


          <Link href="/admin" className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 rounded ">
            <Home strokeWidth={2} className='text-blue-900' /> Home 
          </Link>

          <Link href="/admin/category" onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 rounded">
            <ForkKnife strokeWidth={2} className='text-blue-900' /> Categories 
          </Link>

          <Link href="/admin/meals/allmeals" onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 rounded">
            <CookingPot strokeWidth={2} className='text-blue-900' /> Meals 
          </Link>

          <Link href="/admin/meals" onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 rounded">
            <PlusSquare strokeWidth={2} className='text-blue-900' /> Add A Meal 
          </Link>
          
          <Link href="/admin/orders" onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 rounded">
            <Package strokeWidth={2} className='text-blue-900' /> Orders 
          </Link>

        
         
        </nav>
      </aside>
    </>
  );
}
