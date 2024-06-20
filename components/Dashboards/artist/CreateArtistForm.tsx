import React, { useState } from 'react';
import { db } from '@/utils/firebase'; // Adjust the import based on your Firebase setup
import { collection, addDoc } from 'firebase/firestore';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreateArtistForm = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [genres, setGenres] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState<{ [key: string]: string }>({});
  const [website, setWebsite] = useState('');
  const [contactInformation, setContactInformation] = useState('');
  const [albums, setAlbums] = useState<string[]>([]);
  const [events, setEvents] = useState<string[]>([]);
  const [slug, setSlug] = useState('');
  const [currentGenre, setCurrentGenre] = useState('');
  const [currentAlbum, setCurrentAlbum] = useState('');
  const [currentEvent, setCurrentEvent] = useState('');
  const [currentSocialMedia, setCurrentSocialMedia] = useState({ platform: '', url: '' });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    // Automatically generate slug from name
    const generatedSlug = value
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    setSlug(generatedSlug);
  };

  const handleBioChange = (value: string) => {
    setBio(value);
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentGenre(e.target.value);
  };

  const handleAddGenre = () => {
    if (currentGenre.trim() !== '') {
      setGenres([...genres, currentGenre.trim()]);
      setCurrentGenre('');
    }
  };

  const handleAlbumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAlbum(e.target.value);
  };

  const handleAddAlbum = () => {
    if (currentAlbum.trim() !== '') {
      setAlbums([...albums, currentAlbum.trim()]);
      setCurrentAlbum('');
    }
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentEvent(e.target.value);
  };

  const handleAddEvent = () => {
    if (currentEvent.trim() !== '') {
      setEvents([...events, currentEvent.trim()]);
      setCurrentEvent('');
    }
  };

  const handleSocialMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentSocialMedia({ ...currentSocialMedia, [name]: value });
  };

  const handleAddSocialMedia = () => {
    if (currentSocialMedia.platform && currentSocialMedia.url) {
      setSocialMediaLinks({ ...socialMediaLinks, [currentSocialMedia.platform]: currentSocialMedia.url });
      setCurrentSocialMedia({ platform: '', url: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newArtist = {
      name,
      slug,
      bio,
      genres,
      imageUrl,
      socialMediaLinks,
      website,
      contactInformation,
      albums,
      events,
      published: true,
      createdAt: new Date(),
    };

    try {
      await addDoc(collection(db, 'artists'), newArtist);
      alert('Artist created successfully');
      // Reset form fields
      setName('');
      setSlug('');
      setBio('');
      setGenres([]);
      setImageUrl('');
      setSocialMediaLinks({});
      setWebsite('');
      setContactInformation('');
      setAlbums([]);
      setEvents([]);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-full mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
      {/* Left Column */}
      <div className="col-span-2">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
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
          <label htmlFor="bio" className="block mb-2 font-semibold">Bio</label>
          <ReactQuill
            value={bio}
            onChange={handleBioChange}
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
          <label htmlFor="website" className="block mb-2 font-semibold">Website</label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="contactInformation" className="block mb-2 font-semibold">Contact Information</label>
          <input
            type="text"
            id="contactInformation"
            value={contactInformation}
            onChange={(e) => setContactInformation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="genres" className="block mb-2 font-semibold">Genres</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="genres"
              value={currentGenre}
              onChange={handleGenreChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={handleAddGenre}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2.5 rounded-sm transition duration-300"
            >
              Add
            </button>
          </div>
          <div className="mt-2 space-x-2">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="albums" className="block mb-2 font-semibold">Albums</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="albums"
              value={currentAlbum}
              onChange={handleAlbumChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={handleAddAlbum}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2.5 rounded-sm transition duration-300"
            >
              Add
            </button>
          </div>
          <div className="mt-2 space-x-2">
            {albums.map((album, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded-sm"
              >
                {album}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="events" className="block mb-2 font-semibold">Events</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="events"
              value={currentEvent}
              onChange={handleEventChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={handleAddEvent}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2.5 rounded-sm transition duration-300"
            >
              Add
            </button>
          </div>
          <div className="mt-2 space-x-2">
            {events.map((event, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded-sm"
              >
                {event}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="socialMediaLinks" className="block mb-2 font-semibold">Social Media Links</label>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              name="platform"
              value={currentSocialMedia.platform}
              onChange={handleSocialMediaChange}
              placeholder="Platform"
              className="w-1/3 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="url"
              value={currentSocialMedia.url}
              onChange={handleSocialMediaChange}
              placeholder="URL"
              className="w-2/3 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={handleAddSocialMedia}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2.5 rounded-sm transition duration-300"
            >
              Add
            </button>
          </div>
          <div className="mt-2 space-y-1">
            {Object.keys(socialMediaLinks).map((platform, index) => (
              <div key={index} className="flex items-center justify-between px-2 py-1 bg-gray-200 text-gray-700 rounded-sm">
                <span>{platform}: {socialMediaLinks[platform]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 ring-1 rounded-sm transition duration-300"
          >
            Create Artist
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateArtistForm;
