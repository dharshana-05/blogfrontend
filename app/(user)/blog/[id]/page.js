'use client'; 
import { use } from 'react';
import { getBlogData } from '../../../lib/data';
import '../../../globals.css';
export default function BlogDetailPage({ params }) {
  const { id } = use(params); 
  const blogs = getBlogData(); 
  const post = blogs.find((item) => String(item.id) === String(id));
  if (!post) return <div className="not-found">Post not found</div>;
  return (
    <div className="blog-detail-container">
      <img src={post.image} alt={post.title} className="blog-detail-image" />
      <h1 className="blog-detail-title">{post.title}</h1>
      <p className="blog-detail-description">{post.description}</p>
    </div>
  );
}
