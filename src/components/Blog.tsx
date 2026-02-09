import type React from "react";
import { useEffect, useState, useRef } from "react";
import Background from "./arwes/Background.tsx";
import BlogCard from "./BlogCard";
import { Animator, Text } from "@arwes/react";

interface BlogItem {
  title: string;
  href: string;
  image: string;
  description: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerTop, setHeaderTop] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const cacheKey = 'blogData';
      const timestampKey = 'blogDataTimestamp';
      const cacheExpiry = 7 * 24 * 60 * 60 * 1000; // 7 days in ms

      const cachedData = localStorage.getItem(cacheKey);
      const cachedTimestamp = localStorage.getItem(timestampKey);

      if (cachedData && cachedTimestamp) {
        const age = Date.now() - parseInt(cachedTimestamp, 10);
        if (age < cacheExpiry) {
          setBlogs(JSON.parse(cachedData));
          setLoading(false);
          return;
        }
      }

      try {
        const response = await fetch(
          "https://farfetchd.debajyati.com/api?devto_user=ddebajyati&keploy_writer=debajyati-dey&limit=5"
        );
        const data = await response.json();
        const allBlogs = [...(data.devto || []), ...(data.keploy || [])];
        setBlogs(allBlogs);
        localStorage.setItem(cacheKey, JSON.stringify(allBlogs));
        localStorage.setItem(timestampKey, Date.now().toString());
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        // If fetch fails, use cached data if available (even if expired)
        if (cachedData) {
          setBlogs(JSON.parse(cachedData));
        } else {
          setBlogs([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (headerRef.current && headerTop === null) {
      setHeaderTop(headerRef.current.offsetTop);
    }
  }, [blogs, loading, headerTop]);

  return (
    <>
      <Background />
      <Animator>
        <div
          className="section-container"
          style={{
            minHeight: "100vh",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <div
            className="container"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >
            {/* Header Section */}
            <div className="row section-container-spacer">
              <div
                ref={headerRef}
                className="col-sm-12 text-center"
                style={{
                  marginBottom: "3rem",
                  position: headerTop !== null ? 'fixed' : 'static',
                  top: headerTop !== null ? `${headerTop}px` : 'auto',
                  zIndex: 1000,
                  backgroundColor: 'hsl(180, 80%, 10%)',
                  padding: '1rem 0',
                  width: '1150px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              >
                <Text
                  style={{
                    color: "hsl(180, 100%, 50%)",
                    fontWeight: "bold",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  as="h1"
                  className="h2"
                >
                  05 : Blog
                </Text>
              </div>
            </div>

            {/* Blogs Grid */}
            {loading ? (
              <div className="text-center">
                <Text style={{ color: "hsl(180, 75%, 65%)" }}>
                  Loading blogs...
                </Text>
              </div>
            ) : (
              <div
                className="blogs-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "2rem",
                  padding: "0 1rem",
                  justifyItems: "center",
                }}
              >
                {blogs.map((item, idx) => (
                  <BlogCard
                    key={idx}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    href={item.href}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Animator>
    </>
  );
};

export default Blog;