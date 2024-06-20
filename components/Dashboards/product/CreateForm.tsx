import React, { useState } from 'react';

interface CreateProductFormProps {
  onSubmit: (productData: { title: string; description: string; category: string }) => void;
}

const CreateProductForm: React.FC<CreateProductFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, category });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="div flex gap-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
        >
          Save
        </button>
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateProductForm;
