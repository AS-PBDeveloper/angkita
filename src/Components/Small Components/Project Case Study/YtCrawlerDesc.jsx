import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import ytThumbnail from "../../Images/YtCrawlerThumbnail.png";
import ytcrawler from "../../Images/ytcrawler.png";
import TechStack from "../TechStack";

import { useDarkContext } from "../../Contexts/DarkModeContext";

function YtCrawlerDesc() {
  // Context
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
            <span className="text-gray-400">YTCrawler.</span>
          </p>
        </div>

        <p
          className={`sm:text-2xl text-xl ${
            mode ? `text-gray-400` : `text-gray-600`
          }`}
        >
          Revolutionizing YouTube Channel Discovery.
        </p>
        <div className="flex sm:flex-row flex-col gap-5">
          <img
            className="rounded-xl border"
            src={ytThumbnail}
            alt="something"
            height={270}
            width={200}
          />
          <div className="flex flex-col sm:w-1/2 w-auto gap-1">
            <p className="font-bold text-xl">YTcrawler</p>
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
                YTCrawler is a visionary online platform developed to redefine
                the way users discover and explore YouTube channels. Inspired by
                the need for a more personalized and efficient channel discovery
                experience, YTCrawler leverages innovative technologies to
                provide tailored recommendations and insights for both viewers
                and content creators.
              </span>
              <br />
              **This app is still in developement**
            </p>
            <Marquee
              gradient={true}
              gradientWidth={20}
              speed={30}
              gradientColor={mode ? "black" : "white"}
            >
              <TechStack obj={obj} />
            </Marquee>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`sm:w-40 w-auto font-medium flex justify-center gap-2 py-2 px-3 border rounded-3xl bg-gray-300 text-gray-500 transition ease-linear duration-100`}
              disabled
            >
              {" "}
              Private Github
            </motion.button>
          </div>
        </div>
        <div className="border rounded">
          <img src={ytcrawler} alt="weather" width={1500} height={750} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="sm:text-7xl text-5xl font-bold">
            Case <span className="text-gray-400">study</span>
          </p>
          <article>
            <p className="sm:text-4xl text-3xl font-medium">Introduction</p>
            <p className={`${mode ? `text-gray-400` : `text-gray-600`}`}>
              In the digital age of content consumption, navigating the vast
              landscape of YouTube channels can be overwhelming. Enter
              YTCrawler, an innovative platform designed to revolutionize the
              way users explore and engage with YouTube content. YTCrawler is
              more than just a channel discovery tool; it's a personalized
              gateway to a world of captivating videos and diverse creators.
            </p>
          </article>
          <article>
            <p className="sm:text-4xl text-3xl font-medium">Objective</p>
            <p className={`${mode ? `text-gray-400` : `text-gray-600`}`}>
              The primary goal of YTCrawler is to offer a comprehensive solution
              that enhances channel discovery, fosters community engagement, and
              empowers content creators to reach their target audiences
              effectively. By leveraging advanced algorithms and user-centric
              design principles, YTCrawler aims to become the go-to platform for
              discovering diverse and compelling YouTube content.
            </p>
          </article>
          <article>
            <p className="sm:text-4xl text-3xl font-medium">Key features</p>
            <ul className={`${mode ? `text-gray-400` : `text-gray-600`}`}>
              <li>
                <p>
                  <span className="font-bold">
                    Personalized Recommendations:
                  </span>{" "}
                  YTCrawler utilizes machine learning algorithms to analyze user
                  preferences, viewing history, and engagement patterns to
                  deliver personalized channel recommendations. This ensures
                  that users discover content aligned with their interests and
                  tastes.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">
                    Advanced Search and Filtering:
                  </span>{" "}
                  The platform offers robust search and filtering capabilities,
                  allowing users to narrow down their channel exploration based
                  on specific criteria such as topic, genre, language, and
                  audience demographics.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">
                    Real-time Analytics for Creators:
                  </span>{" "}
                  YTCrawler provides content creators with actionable insights
                  and analytics, including audience demographics, engagement
                  metrics, and performance trends. This data empowers creators
                  to optimize their content strategy and enhance viewer
                  engagement.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">User-friendly Interface:</span>{" "}
                  YTCrawler features an intuitive and visually appealing
                  interface designed for seamless navigation and effortless
                  discovery. The interface prioritizes usability and
                  accessibility, catering to users of all backgrounds and
                  preferences.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Cross-device Compatibility:</span>{" "}
                  YTCrawler is accessible across various devices, including
                  desktops, laptops, tablets, and smartphones. The platform
                  ensures a consistent user experience regardless of the device
                  used, enabling users to discover channels on the go.
                </p>
              </li>
            </ul>
          </article>
          <article>
            <p className="sm:text-4xl text-3xl font-medium">Future roadmap</p>
            <p className={`${mode ? `text-gray-400` : `text-gray-600`}`}>
              Looking ahead, YTCrawler plans to expand its feature set by
              incorporating social sharing functionalities, collaborative
              playlists, and enhanced content curation tools. The platform aims
              to establish partnerships with YouTube influencers and brands to
              further amplify channel discovery and audience engagement.
            </p>
          </article>
          <article>
            <p className="sm:text-4xl text-3xl font-medium">Conclusions</p>
            <p className={`${mode ? `text-gray-400` : `text-gray-600`}`}>
              YTCrawler represents a pioneering solution in the realm of YouTube
              channel discovery, leveraging technology to empower users and
              content creators alike. With its innovative features and
              user-centric approach, YTCrawler is poised to shape the future of
              online content exploration and community engagement.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default YtCrawlerDesc;
