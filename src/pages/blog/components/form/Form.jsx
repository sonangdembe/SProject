import React from 'react'

export const Form = ({type}) => {
  return (
 <>
     <form className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold mb-4">{type} Blog</h2>

      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          className="w-full mt-1 p-2 border rounded"
          placeholder="Enter blog title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Choose file</label>
        <input
          type="file"
          name="image"
          accept='image/'
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
       <div>
        <label className="block text-sm font-medium">Category</label>
        <input
          type="text"
          name="image"
          placeholder ='category'
          className="w-full mt-1 p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Content</label>
        <textarea
          name="content"
          rows="5"
          className="w-full mt-1 p-2 border rounded"
          placeholder="Write your blog content"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Blog
      </button>
    </form>
 </>
  )
}
