import React, { useRef } from "react";
import LineFrameAssembled from "./arwes/frames/LineFrameAssembled";
import { Animated, Animator } from "@arwes/react";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  href,
}) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (anchorRef.current) {
      anchorRef.current.style.backgroundColor = "hsl(110.55, 100%, 53.92%)";
      anchorRef.current.style.color = "black";
      anchorRef.current.style.borderColor = "hsl(110.55, 100%, 53.92%)";
    }
  };

  const handleMouseLeave = () => {
    if (anchorRef.current) {
      anchorRef.current.style.backgroundColor = "transparent";
      anchorRef.current.style.color = "hsl(110.55, 100%, 53.92%)";
      anchorRef.current.style.borderColor = "hsl(110.55, 100%, 53.92%)";
    }
  };

  return (
    <Animator>
      <Animated
        as="div"
        style={{
          width: "100%",
          maxWidth: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "180px",
            marginBottom: "1rem",
            overflow: "hidden",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>

        {/* Content Container */}
        <div style={{ width: "320px" }}>
          <LineFrameAssembled width={320} height={240}>
            <div
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
                gridArea: "1/1",
              }}
            >
              {/* Header */}
              <div>
                <h3
                  style={{
                    color: "hsl(110.55, 100%, 53.92%)",
                    fontSize: "1.4rem",
                    margin: "0 0 1rem 0",
                    fontWeight: "bold",
                    lineHeight: "1.2",
                  }}
                >
                  {title.replace("&amp;", "&")}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  color: "hsl(110.55, 100%, 53.92%)",
                  fontSize: "0.9rem",
                  lineHeight: "1.4",
                  margin: "0 0 1.5rem 0",
                  opacity: 0.9,
                  flex: 1,
                }}
              >
                {description}
              </p>
              {/* Image */}
              <img
                src={image}
                alt={title}
                style={{
                  height: "45%",
                  objectFit: "contain",
                  objectPosition: "center",
                  paddingBottom: "1rem"
                }}
              />

              {/* Button */}
              <div>
                <a
                  ref={anchorRef}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-default"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    color: "hsl(110.55, 100%, 53.92%)",
                    backgroundColor: "transparent",
                    borderColor: "hsl(110.55, 100%, 53.92%)",
                    border: "1px solid hsl(110.55, 100%, 53.92%)",
                    padding: "0.5rem 1rem",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    display: "inline-block",
                    cursor: "pointer",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </LineFrameAssembled>
        </div>
      </Animated>
    </Animator>
  );
};

export default BlogCard;