'use client';

import { useEffect, useState } from 'react';
import { getBlogData, saveBlogData } from '../../lib/data';
import '../../globals.css'; 
export default function DeleteBlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const data = getBlogData();
    const adminBlogs = data.filter(blog => Number(blog.id) > 15);
    setBlogs(adminBlogs);
  }, []);
  const handleDelete = (id) => {
    const allBlogs = getBlogData();
    const updated = allBlogs.filter(blog => blog.id !== id);
    const onlyAdminBlogs = updated.filter(blog => Number(blog.id) > 15);
    saveBlogData(onlyAdminBlogs);
    setBlogs(onlyAdminBlogs);
    setMessage('Blog deleted successfully!');
  };
  return (
    <div className="delete-form-container">
      <h2>List and Delete Admin Blogs</h2>
      {message && <p className="success-msg">{message}</p>}
      <div className="blog-list">
        {blogs.length === 0 ? (
          <p>No admin blogs to delete.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div>
                <p><strong>ID:</strong> {blog.id}</p>
                <p><strong>Title:</strong> {blog.title}</p>
                <p><strong>Description:</strong> {blog.description}</p>
              </div>
              <button className="admin-btn" onClick={() => handleDelete(blog.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
