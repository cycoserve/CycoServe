import React, { useState } from 'react';
import { db } from '@/utils/firebase'; // Adjust the import based on your Firebase setup
import { collection, addDoc } from 'firebase/firestore';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface ArticleFormProps {}

const ArticleForm: React.FC<ArticleFormProps> = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    // Automatically generate slug from title
    const generatedSlug = value
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    setSlug(generatedSlug);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
    // Generate excerpt from the content (first 50 characters)
    const contentWithoutHtml = value.replace(/<[^>]*>?/gm, '');
    setExcerpt(contentWithoutHtml.slice(0, 50));
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(e.target.value);
  };

  const handleAddTag = () => {
    if (currentTag.trim() !== '') {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newArticle = {
      title,
      slug,
      imageUrl,
      excerpt,
      content,
      tags,
      category,
      published: true,
      createdAt: new Date(),
    };

    try {
      await addDoc(collection(db, 'articles'), newArticle);
      alert('Article created successfully');
      // Reset form fields
      setTitle('');
      setSlug('');
      setImageUrl('');
      setExcerpt('');
      setContent('');
      setTags([]);
      setCategory('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-full mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
      {/* Left Column */}
      <div className="col-span-2">
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="slug" className="block mb-2 font-semibold">Slug</label>
          <input
            type="text"
            id="slug"
            value={slug}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-sm bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block mb-2 font-semibold">Content</label>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={{
              toolbar: [
                [{ header: '1'}, { header: '2'}, { font: [] }],
                [{ list: 'ordered'}, { list: 'bullet' }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            formats={[
              'header', 'font',
              'bold', 'italic', 'underline', 'strike', 'blockquote',
              'list', 'bullet',
              'link', 'image'
            ]}
            className="w-full min-h-editor rounded-sm h-96"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-1">
        <div className="mb-6">
          <label htmlFor="imageUrl" className="block mb-2 font-semibold">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="excerpt" className="block mb-2 font-semibold">Excerpt</label>
          <input
            id="excerpt"
            value={excerpt}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-sm bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="block mb-2 font-semibold">Category</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a category...</option>
            <option value="Technology">Web Development</option>
            <option value="Web Design">Mobile Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Search Engine Optimization">Search Engine Optimization</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Dightal Marketing">Digital Marketing</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="tags" className="block mb-2 font-semibold">Tags</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="tags"
              value={currentTag}
              onChange={handleTagChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2.5 rounded-sm transition duration-300"
            >
              Add
            </button>
          </div>
          <div className="mt-2 space-x-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 ring-1 rounded-sm transition duration-300"
          >
            Create Article
          </button>
        </div>
      </div>
    </form>
  );
};

export default ArticleForm;
