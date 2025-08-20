"use client"
import { Type } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const CategoryPage = () => {

  const [editedCategory, setEditedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");


  function fetchCategories() {
    fetch('/api/category').then(res => {
      res.json().then(categories => {
        setCategories(categories)
      })
    })
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function handleCategorySubmit(ev) {
    ev.preventDefault();

    const creationPromise = new Promise(async (resolve, reject) => {
      const data = { name: categoryName };
      if (editedCategory) {
        data._id = editedCategory._id
      }

      const response = await fetch('/api/category', {
        method: editedCategory ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setCategoryName('');
      fetchCategories();
      setEditedCategory(null);
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    })

    await toast.promise(creationPromise, {
      loading: editedCategory ? 'Modification de votre catégorie...' : "Création de votre catégorie...",
      success: editedCategory ? 'La catégorie a été modifie' : "La catégorie a été créée",
      error: "Une erreur est survenue, désolé...",
    });
  }


  return (
    <>

      <main className='flex flex-col w-full p-10 space-y-10'>

        <div className='text-center '>
          <h1 className='text-3xl md:text-4xl lg:text-7xl font-bold logo tracking-wider'>
            Manage Your Categories
          </h1>
        </div>

        <section className='relative'>
          <div className='text-center'>
            <h1 className='text-3xl text-gray-800 underline font-bold outfit tracking-wider'>
              {editedCategory ? 'Editing The Category' : 'Add A Category'}
            </h1>
          </div>

          <div>
            <form className='flex flex-col space-y-5' onSubmit={handleCategorySubmit}>
              <label className='text-xl font-semibold text-[#1d2b3a]'>
                {editedCategory ? 'Changing The Name Of:' : "Name Of The New Category :"}
                {editedCategory && (
                  <>
                    <b> {editedCategory.name} </b>
                  </>
                )}
              </label>
              <div className='flex items-center bg-[#f0fbfb] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200 '>
                <Type className='text-[#10b4d1] w-5 h-5 mx-4 animate-pulse' />
                <input type="text" placeholder="Enter The Category's Name (exp: Pizza)" className='w-full bg-transparent outline-none text-[#1d2b3a]  placeholder:text-[#1d2b3a]/60 text-lg' value={categoryName}
                  onChange={ev => setCategoryName(ev.target.value)} required />
                <button className='bg-[#f2c94c] hover:bg-[#e6b326] text-white px-8 py-3 text-lg rounded-full font-semibold  hover:scale-105 transition-transform duration-300' type='submit'>
                  {editedCategory ? 'Save' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className='relative space-y-10'>
          <div className='text-center'>
            <h1 className='text-3xl text-gray-800 underline font-bold outfit tracking-wider'>
              Existing Categories
            </h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {categories?.length > 0 && categories.map(category => (
              <div className='flex flex-row items-center justify-between bg-gray-200 px-4 py-2 rounded-lg'>

                <span className='text-xl font-bold capitalize outfit'>
                  {category.name}
                </span>

                <div className='space-x-4'>
                  <button className='bg-green-400 hover:bg-green-600 cursor-pointer text-white px-8 py-3 text-lg rounded-full font-semibold  hover:scale-105 transition-transform duration-300' onClick={() => {
                    setEditedCategory(category);
                    setCategoryName(category.name)
                  }}>
                    Edit
                  </button>
                  <button className='bg-red-400 hover:bg-red-600 cursor-pointer text-white px-8 py-3 text-lg rounded-full font-semibold  hover:scale-105 transition-transform duration-300' onClick={async () => {
                    const confirmed = confirm('Delete this category?');
                    if (!confirmed) return;

                    const res = await fetch(`/api/category/${category._id}`, {
                      method: 'DELETE',
                    });

                    if (res.ok) {
                      alert('Category deleted');
                      // Optionally refresh the list
                      setCategories(prev => prev.filter(c => c._id !== category._id));
                    } else {
                      alert('Failed to delete category');
                    }
                  }}>
                    Delete
                  </button>
                </div>

              </div>
            ))}




          </div>

        </section>

      </main>

    </>

  )
}

export default CategoryPage