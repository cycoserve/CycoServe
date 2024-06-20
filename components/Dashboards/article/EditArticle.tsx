import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '@/utils/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Article {
  id: string;
  title: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  slug: string;
  tags: string[];
  category: string;
  published: boolean;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

const EditArticle: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (id) {
        try {
          const docRef = doc(db, 'articles', id as string);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const article = docSnap.data() as Article;
            setTitle(article.title);
            setImageUrl(article.imageUrl);
            setExcerpt(article.excerpt);
            setContent(article.content);
            setSlug(article.slug);
            setTags(article.tags);
            setCategory(article.category);
          } else {
            setError('No such document!');
          }
        } catch (error) {
          setError('Failed to fetch article data');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchArticle();
  }, [id]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    const generatedSlug = value
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    setSlug(generatedSlug);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
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

    const updatedArticle = {
      title,
      slug,
      imageUrl,
      excerpt,
      content,
      tags,
      category,
      published: true,
      updatedAt: new Date(),
    };

    try {
      const docRef = doc(db, 'articles', id as string);
      await updateDoc(docRef, updatedArticle);
      alert('Article updated successfully');
      router.push('/dashboard/articles');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-full mx-auto px-4 py-8 grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="col-span-2">
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="slug" className="block mb-2 font-semibold">Slug</label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block mb-2 font-semibold">Content</label>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={{
              toolbar: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
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
            className="w-full min-h-editor rounded-md h-96"
          />
        </div>
      </div>

      <div className="col-span-1">
        <div className="mb-6">
          <label htmlFor="imageUrl" className="block mb-2 font-semibold">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="excerpt" className="block mb-2 font-semibold">Excerpt</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows={3}
            readOnly
          />
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="block mb-2 font-semibold">Category</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a category...</option>
            <option value="Technology">Technology</option>
            <option value="Web Design">Web Design</option>
            <option value="SEO">SEO</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="tags" className="block mb-2 font-semibold">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={tags.join(', ')}
            onChange={handleTagChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button type="button" onClick={handleAddTag} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-1 rounded-md">
            Add Tag
          </button>
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 ring-1 rounded-md transition duration-300"
          >
            Update Article
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditArticle;
