import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-800 to-black py-1">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-inter text-white text-sm">
            Welcome to My World.{" "}
            <a
              href="https://www.linkedin.com/in/angkita-paul/"
              target="_blank"
              className="underline text-white"
            >
              Let's Connect
            </a>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
