import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PostSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://alphatek.fr:3008/api/posts/');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        const formattedPosts = data.posts.map(post => ({
          id: post.id,
          title: post.title,
          excerpt: post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content,
          image: post.thumbnail_url.startsWith('http') 
            ? post.thumbnail_url 
            : `https://alphatek.fr:3008${post.thumbnail_url}`,
          author: post.author,
          created_at: post.created_at
        }));
        setPosts(formattedPosts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % posts.length;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + posts.length) % posts.length;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.querySelector('.post-item')?.offsetWidth;
      if (itemWidth) {
        sliderRef.current.scrollTo({
          left: index * (itemWidth + 24), // Account for gap
          behavior: 'smooth',
        });
      }
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-[#D4A017]/10" id="posts">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">Loading posts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-[#D4A017]/10" id="posts">
        <div className="container mx-auto px-4">
          <p className="text-center text-red-600">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#D4A017]/10" id="posts">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#2E5A27]">Our Blog</h2>
            <div className="h-1 w-16 bg-[#2E5A27] mt-2 mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our latest insights and updates.
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-[#2E5A27] hover:text-white border-[#2E5A27] text-[#2E5A27] rounded-full transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-[#2E5A27] hover:text-white border-[#2E5A27] text-[#2E5A27] rounded-full transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="post-item min-w-[280px] md:min-w-[360px] lg:min-w-[420px] flex-shrink-0 snap-center"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md h-full transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer">
                    <div className="relative h-[220px] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-lg md:text-xl font-bold text-white">{post.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                      <p className="text-gray-500 text-xs">
                        By {post.author} • {new Date(post.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-[#D4A017]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button 
            className="bg-[#2E5A27] hover:bg-[#2E5A27]/80 text-white transition-colors"
            onClick={() => navigate('/blog')}
          >
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PostSection;