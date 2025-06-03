import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DOMPurify from 'dompurify';

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://alphatek.fr:3008/api/posts/');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();

        const formatted = data.posts.map(post => ({
          ...post,
          excerpt: DOMPurify.sanitize(
            post.content.length > 100
              ? post.content.slice(0, 100) + '...'
              : post.content
          ),
          image: post.thumbnail_url.startsWith('http')
            ? post.thumbnail_url
            : `https://alphatek.fr:3008${post.thumbnail_url}`,
        }));

        setPosts(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const scrollTo = (index) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.querySelector('.post-item')?.offsetWidth;
      if (itemWidth) {
        sliderRef.current.scrollTo({
          left: index * (itemWidth + 24),
          behavior: 'smooth',
        });
      }
    }
  };

  const handlePrev = () => {
    const index = (activeIndex - 1 + posts.length) % posts.length;
    setActiveIndex(index);
    scrollTo(index);
  };

  const handleNext = () => {
    const index = (activeIndex + 1) % posts.length;
    setActiveIndex(index);
    scrollTo(index);
  };

  if (loading || error) {
    return (
      <section className="py-16 bg-[#FDF7EC]" id="posts">
        <div className="container mx-auto px-4 text-center">
          {loading ? (
            <p className="text-gray-600">Chargement des articles...</p>
          ) : (
            <p className="text-red-600">Erreur : {error}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#FDF7EC]" id="posts">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-[#2E5A27] font-display">Nos articles</h2>
            <div className="h-1 w-16 bg-[#2E5A27] mt-2 mb-3"></div>
            <p className="text-gray-600 max-w-xl">Découvrez nos dernières actualités et analyses.</p>
          </div>

          {/* Arrows */}
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button
              size="icon"
              variant="outline"
              onClick={handlePrev}
              className="border-[#2E5A27] text-[#2E5A27] hover:bg-[#2E5A27] hover:text-white rounded-full"
              aria-label="Précédent"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={handleNext}
              className="border-[#2E5A27] text-[#2E5A27] hover:bg-[#2E5A27] hover:text-white rounded-full"
              aria-label="Suivant"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Posts Slider */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {posts.map((post, i) => (
              <div
                key={post.id}
                className="post-item min-w-[300px] md:min-w-[360px] lg:min-w-[420px] flex-shrink-0 snap-center"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] overflow-hidden">
                    <div className="relative h-[220px]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 p-4">
                        <h3 className="text-white text-xl font-bold">{post.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div
                        className="text-gray-600 text-sm mb-2"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                      <p className="text-gray-500 text-xs">
                        Par {post.author} •{' '}
                        {new Date(post.created_at).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 text-center">
          <div className="inline-flex space-x-2">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  scrollTo(i);
                }}
                className={`w-2 h-2 rounded-full ${
                  i === activeIndex ? 'bg-[#D4A017]' : 'bg-gray-300'
                } transition-colors`}
                aria-label={`Aller au slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Button
            className="bg-[#2E5A27] text-white hover:bg-[#2E5A27]/90"
            onClick={() => navigate('/blog')}
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PostSection;
