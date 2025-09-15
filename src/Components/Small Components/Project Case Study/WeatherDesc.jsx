import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import weatherThumbnail from "../../Images/WeatherPointThumbnail.png";
import weather from "../../Images/Weather.png";
import TechStack from "../TechStack";

import { useDarkContext } from "../../Contexts/DarkModeContext";

function WeatherDesc({ hover }) {
  // Contexts
  const { mode } = useDarkContext();

  const obj = [
    <i className="fa-brands fa-react"></i>,
    <i className="fa-brands fa-js"></i>,
    <i className="fa-brands fa-node-js"></i>,
    <i className="fa-brands fa-html5"></i>,
    <i className="fa-brands fa-css3-alt"></i>,
    <i className="fa-brands fa-git"></i>,
    <i className="fa-brands fa-github"></i>,
    <i className="fa-brands fa-bootstrap"></i>,
  ];
  return (
    <div className={`${mode ? `bg-black text-white` : null}`}>
      <div className={`p-12 font-inter flex flex-col gap-5 max-w-6xl mx-auto`}>
        <Link to="/og-portfolio">
          <motion.i
            className={`fa-solid fa-arrow-left text-gray-400  transition ease-linear duration-100 ${
              mode ? `hover:text-white` : `hover:text-black`
            }`}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.i>
        </Link>
        <div className="font-bold flex flex-col gap-5">
          <p className="sm:text-7xl text-5xl">
            Welcome to the case study of{" "}
            <span className="text-gray-400">WeatherPoint</span>
          </p>
        </div>

        <p
          className={`sm:text-2xl text-xl ${
            mode ? `text-gray-400` : `text-gray-600`
          }`}
        >
          This is an ambitious project that I'm currently working on.
        </p>
        <div className="flex sm:flex-row flex-col gap-5">
          <img
            className="rounded-xl border"
            src={weatherThumbnail}
            alt="something"
            height={200}
            width={200}
          />
          <div className="flex flex-col sm:w-1/2 w-auto gap-1">
            <p className="font-bold text-xl">WeatherPoint</p>
            <p
              className={`font-medium ${
                mode ? `text-gray-400` : `text-gray-600`
              }`}
            >
              theOGdev.
            </p>
            <p className="text-sm">
              <span className="font-bold">Description:</span>{" "}
              <span className={`${mode ? `text-gray-400` : `text-gray-600`}`}>
                This is an extraordinary weather web app that has been given the
                power of managing and storing notes within itself. Users can log
                in and see the weather of their location and they can manage
                their daily notes in one place.
              </span>
              <br />
              **This app is still in developement**
            </p>
            <Marquee
              speed={30}
              gradient={true}
              gradientWidth={20}
              gradientColor={mode ? "black" : "white"}
            >
              <TechStack obj={obj} />
            </Marquee>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`sm:w-32 w-auto font-medium flex justify-center gap-2 border py-2 px-3 rounded-3xl ${
                mode ? `border-white bg-white` : `border-black`
              } ${
                hover
                  ? `hover:bg-black hover:text-white`
                  : `bg-black text-white`
              } transition ease-linear duration-100`}
            >
              <a
                href="https://github.com/AS-PBDeveloper"
                className={`flex ${mode && `text-black`}`}
                target="_blank"
              >
                GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </motion.button>
          </div>
        </div>
        <div className="border rounded">
          <img src={weather} alt="weather" width={1500} height={750} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="sm:text-7xl text-5xl font-bold">
            Case <span className="text-gray-400">study</span>
          </p>
          <article>
            <p className="sm:text-4xl text-3xl font-medium">Introduction</p>
            <p className={`${mode ? `text-gray-400` : `text-gray-600`}`}>
              WeatherPoint is an innovative weather application designed to
              deliver accurate and up-to-date weather information to users
              across different devices. Developed using React.js for the
              frontend, Node.js for the backend, and Firebase for data
              management, WeatherPoint offers a seamless and personalized
              weather forecasting experience.
            </p>
          </article>
          <article>
            <p className="sm:text-4xl text-3xl font-medium">Objective</p>
            <p className={`${mode ? `text-gray-400` : `text-gray-600`}`}>
              The objective of WeatherPoint is to deliver a comprehensive
              weather forecasting experience while incorporating note-taking
              functionalities. By leveraging React.js, Node.js, Firebase, and
              Bootstrap, WeatherPoint aims to offer users a versatile
              application where they can access weather information and easily
              jot down notes for personal use..
            </p>
          </article>
          <article>
            <p className="sm:text-4xl text-3xl font-medium">Key features</p>
            <ul className={`${mode ? `text-gray-400` : `text-gray-600`}`}>
              <li>
                <p>
                  <span className="font-bold">Real-time Weather Updates:</span>{" "}
                  WeatherPoint fetches and displays real-time weather data using
                  a third-party weather API, providing accurate forecasts for
                  any location worldwide.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Note-taking Capability:</span> In
                  addition to weather features, WeatherPoint allows users to
                  create, edit, and save notes directly within the application,
                  enabling seamless multitasking and organization.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">User Authentication:</span>{" "}
                  Firebase Authentication is integrated for user account
                  management, ensuring secure access to personalized weather
                  forecasts and notes.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Responsive Design:</span>{" "}
                  WeatherPoint is built with Bootstrap and custom CSS to ensure
                  a responsive layout across various devices, offering a
                  consistent experience on desktops, tablets, and mobile phones.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Location-based Forecast:</span>{" "}
                  Users can search for locations or use geolocation to
                  automatically retrieve weather information for their current
                  location.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Saved Locations and Notes:</span>{" "}
                  WeatherPoint allows users to save favorite locations for quick
                  weather updates and provides a dedicated space for managing
                  and organizing notes.
                </p>
              </li>
            </ul>
          </article>
          <article>
            <p className="sm:text-4xl text-3xl font-medium">Conclusion</p>
            <p className={`${mode ? `text-gray-400` : `text-gray-600`}`}>
              WeatherPoint exemplifies the capabilities of modern web
              technologies in developing a multifunctional application that
              caters to users' weather information needs alongside note-taking
              convenience. The innovative integration of these features enhances
              user productivity and engagement, with ongoing developments aimed
              at further enriching the application's functionality and user
              experience.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default WeatherDesc;
