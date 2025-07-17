'use client';
import { useState } from 'react';
import { getBlogData, saveBlogData } from '../../lib/data';
import '../../globals.css';

export default function CreateBlogPage() {
  const [blogId, setBlogId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const handleCreate = (e) => {
    e.preventDefault();
    const allBlogs = getBlogData();
    const exists = allBlogs.some(blog => blog.id === blogId);
    if (exists) {
      setMessage(` Blog ID "${blogId}" already exists. Try a different one.`);
      return;
    }
    const newBlog = {
      id: blogId,
      title,
      description: content,
      image: image || 'https://via.placeholder.com/600x300',
    };
    const onlyAdminBlogs = allBlogs.filter(blog => Number(blog.id) > 15);
    const updated = [...onlyAdminBlogs, newBlog];
    saveBlogData(updated);
    setMessage(` Blog "${title}" (ID: ${blogId}) created successfully!`);

    // clear form
    setBlogId('');
    setTitle('');
    setContent('');
    setImage('');
  };
  return (
    <div className="form-container">
      <h2>Create New Blog (Manual ID)</h2>
      <form onSubmit={handleCreate} className="form">
        <input
          type="text"
          placeholder="Enter Unique Blog ID"
          value={blogId}
          onChange={(e) => setBlogId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Content"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" className="admin-btn">Create Blog</button>
      </form>

      {message && <p className="success-msg">{message}</p>}
    </div>
  );
}
