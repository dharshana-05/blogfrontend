'use client';

import { useEffect, useState } from 'react';
import { getBlogData, saveBlogData } from '../../lib/data';
import '../../globals.css';

export default function UpdateBlogPage() {
  const [blogId, setBlogId] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newImage, setNewImage] = useState('');
  const [message, setMessage] = useState('');
  const [adminBlogs, setAdminBlogs] = useState([]);

  useEffect(() => {
    
    const allBlogs = getBlogData();
    const adminOnly = allBlogs.filter(blog => Number(blog.id) > 15);
    setAdminBlogs(adminOnly);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const allBlogs = getBlogData();

    
    const updatedBlogs = allBlogs.map((blog) => {
      if (blog.id === blogId) {
        return {
          ...blog,
          title: newTitle || blog.title,
          description: newContent || blog.description,
          image: newImage || blog.image,
        };
      }
      return blog;
    });

    // Only store admin blogs in localStorage
    const onlyAdminBlogs = updatedBlogs.filter(blog => Number(blog.id) > 15);
    saveBlogData(onlyAdminBlogs);

    setMessage(' Blog updated successfully!');
    setBlogId('');
    setNewTitle('');
    setNewContent('');
    setNewImage('');
    setAdminBlogs(onlyAdminBlogs); 
  };

  return (
    <div className="form-container">
      <h2>Update Blog</h2>
      <form onSubmit={handleUpdate} className="form">
        <select
          value={blogId}
          onChange={(e) => setBlogId(e.target.value)}
          required
        >
          <option value="">Select Blog ID to Update</option>
          {adminBlogs.map(blog => (
            <option key={blog.id} value={blog.id}>
              {blog.id} - {blog.title}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="New Title (optional)"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="New Description (optional)"
          rows={6}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="New Image URL (optional)"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />

        <button type="submit" className="admin-btn">Update Blog</button>
      </form>

      {message && <p className="success-msg">{message}</p>}

      {/* Optional: Show all admin blogs for reference */}
      <div style={{ marginTop: '2rem' }}>
        <h3> Admin Blogs</h3>
        <ul>
          {adminBlogs.map(blog => (
            <li key={blog.id}>
              <strong>ID:</strong> {blog.id} | <strong>Title:</strong> {blog.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
