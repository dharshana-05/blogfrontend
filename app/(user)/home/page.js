'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBlogData, saveBlogData } from '../../lib/data';

import '../../globals.css';

const UserHomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const data = getBlogData(); 
    setBlogs(data);
  }, []);

  return (
    <main className="user-home-grid">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <h3 className="blog-title">
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </h3>
        </div>
      ))}
    </main>
  );
};

export default UserHomePage;

