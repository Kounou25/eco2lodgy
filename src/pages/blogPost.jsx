import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import DOMPurify from 'dompurify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://alphatek.fr:3008/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data.post);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="error-container">
        <p>Error: {error || 'Post not found'}</p>
        <button onClick={() => navigate(-1)} className="back-button">
          <FiArrowLeft size={16} /> Back
        </button>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <Navbar />

      <header className="hero-section">
        {post.thumbnail_url && (
          <img
            src={`https://alphatek.fr:3008${post.thumbnail_url}`}
            alt={post.title}
            className="hero-image"
          />
        )}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span>By {post.author}</span>
            <span>{new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="content-grid">
          <article className="post-content">
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            />
          </article>
          <aside className="sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">About the Post</h3>
              <p><strong>Author:</strong> {post.author}</p>
              <p><strong>Published:</strong> {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <p><strong>Updated:</strong> {new Date(post.updated_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
            </div>
          </aside>
        </div>
      </main>

      <button onClick={() => navigate(-1)} className="back-button">
        <FiArrowLeft size={18} /> Back
      </button>

      <Footer />

      <style jsx>{`
        .blog-post-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1a202c;
          line-height: 1.6;
          background: #f7fafc;
          min-height: 100vh;
        }

        .loading-container,
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }

        .loading-container {
          gap: 16px;
        }

        .loading-dots {
          display: flex;
          gap: 8px;
        }

        .loading-dots .dot {
          width: 12px;
          height: 12px;
          background: #4299e1;
          border-radius: 50%;
          animation: bounce 0.6s infinite alternate;
        }

        .loading-dots .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loading-dots .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }

        nav {
          height: 70px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          font-size: 1rem;
        }

        nav * {
          font-size: 1rem;
          padding: 10px 14px;
        }

        .back-button {
          position: fixed;
          top: 78px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1px solid #e2e8f0;
          color: #4299e1;
          font-size: 0.95rem;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
          z-index: 10;
        }

        .back-button:hover {
          background: #edf2f7;
          transform: translateX(-2px);
        }

        .hero-section {
          position: relative;
          height: 50vh;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 70px;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: zoom 20s infinite ease-in-out;
        }

        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .post-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0 0 16px;
          color: #1a202c;
        }

        .post-meta {
          display: flex;
          justify-content: center;
          gap: 16px;
          font-size: 0.95rem;
          color: #718096;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 32px;
        }

        .post-content {
          background: #fff;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid #edf2f7;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          animation: fadeIn 0.5s ease-out;
        }

        .post-body {
          font-size: 1.1rem;
          color: #4a5568;
          white-space: pre-wrap;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sidebar-card {
          background: #fff;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #edf2f7;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .sidebar-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 16px;
          color: #1a202c;
        }

        .sidebar-card p {
          margin: 8px 0;
          font-size: 0.95rem;
          color: #4a5568;
        }

        .sidebar-card strong {
          color: #2d3748;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .sidebar {
            margin-top: 24px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 40vh;
            min-height: 350px;
          }

          .post-title {
            font-size: 2rem;
          }

          .post-meta {
            flex-direction: column;
            gap: 8px;
          }

          .hero-content {
            padding: 16px;
          }

          .post-content {
            padding: 24px;
          }

          .sidebar-card {
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 35vh;
            min-height: 300px;
          }

          .post-title {
            font-size: 1.6rem;
          }

          .back-button {
            top: 74px;
            padding: 6px 12px;
            font-size: 0.9rem;
          }

          .post-content {
            padding: 16px;
          }

          .container {
            padding: 24px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;