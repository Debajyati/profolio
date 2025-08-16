import React from "react";
import "../bootstrap/main.css";
import "../bootstrap/main";
import { NavLink } from "react-router-dom";
import { bleepPlay } from "../bleeps";
import HeaderFrame from "./arwes/frames/HeaderFrame";
import CornerFrame from "./arwes/frames/CornerFrame";

const links = [
  {
    name: "01 : Home",
    href: "/",
    end: true,
  },
  {
    name: "02 : Projects",
    href: "/works",
    end: false,
  },
  {
    name: "03 : About me",
    href: "/about",
    end: false,
  },
  {
    name: "04 : Contact",
    href: "/contact",
    end: false,
  },
];

const Navbar: React.FC = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    target.style.color = "hsl(180, 75%, 85%)";
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.color = "hsl(180, 75%, 45%)";
  };

  return (
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div style={{ position: "relative" }}>
        <div className="container">
          {/* Mobile “hamburger” toggle (Bootstrap JS handles collapsing) */}
          <HeaderFrame />
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-expanded="false"
            style={{ backgroundColor: "hsl(180, 75%, 30%)" }}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div
            style={{ background: "none" }}
            className="collapse navbar-collapse"
            id="navbar-collapse"
          >
            <ul className="nav navbar-nav">
              {links.map((link) => (
                <li key={link.name}>
                  <CornerFrame height={25} width={120}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      style={({ isActive }) =>
                        isActive
                          ? { color: "rgba(0,0,0,0)" }
                          : { color: "rgba(0,0,0,0)" }
                      }
                      end={link.end}
                    >
                      <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => bleepPlay("click")}
                        style={{
                          position: "relative",
                          color: "hsl(180, 75%, 45%)",
                          margin: "auto 5px",
                        }}
                      >
                        <b style={{ fontFamily: "JetBrains Mono, monospace" }}>
                          {link.name}
                        </b>
                      </div>
                    </NavLink>
                  </CornerFrame>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
