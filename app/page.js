"use client";
import { useState } from "react";
import styles from "../styles/Home.module.css"; // Import the CSS module
import YouTube from "react-youtube"; // Import the YouTube component

export default function HomePage() {
  const videoId = "sRxrwjOtIag"; // Example YouTube video ID
  const [showInstructions, setShowInstructions] = useState(false); // State to toggle instructions

  // Function to toggle instruction visibility
  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <div className="background-container">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/passingclouds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col items-center">
        <div className={styles.homeContainer}>
          <h1 className={styles.gradientText}>Welcome To Your Media Library</h1>
          <p className={styles.description}>
            Keeping your most important media in a personal repository for easy
            reference.
          </p>

          {/* Instruction Panel with fade-in/fade-out effect */}
          {/*<div
            className={`mt-6 transition-opacity duration-700 ${
              showInstructions ? "opacity-100" : "opacity-0"
            }`}
            style={{ display: showInstructions ? "block" : "none" }}
          >
            <div className="bg-gray-100 p-4 rounded-lg shadow-md text-left">
              <h3 className="text-xl font-bold mb-4 ml-2">
                How to Use This Library
              </h3>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  Add your favorite YouTube videos to save them in your media
                  library for quick access.
                </li>
                <li className="mb-2">
                  Add URLs of websites you frequently use for easy reference and
                  access later.
                </li>
                <li className="mb-2">
                  Use the search functionality to quickly locate a video or URL
                  in your personal repository.
                </li>
                <li className="mb-2">
                  Copy URLs directly from the search results to the clipboard
                  for quick use.
                </li>
                <li>
                  Redirect back to the library at any time by using the
                  &quot;Back&quot; button for convenience.
                </li>
              </ul>
            </div>
          </div>*/}
          {/* Toggle instructions button */}
          {/*<div className="mt-8">
            <button
              onClick={toggleInstructions}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {showInstructions ? "Hide Instructions" : "User Instructions"}
            </button>
          </div>*/}

          <div className="flex justify-center items-center">
            <ul className="text-center mt-6 text-slate-800">
              <li>
                ❤️ Add your favourite YouTube videos.
                <span className="text-sm text-slate-600">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    {/* Centralizing YouTube component */}
                    <YouTube
                      videoId={videoId}
                      opts={{
                        width: "150", // Adjust width
                        height: "100", // Adjust height
                        playerVars: {
                          autoplay: 0, // Do not autoplay
                          modestbranding: 1, // Minimal YouTube branding
                          rel: 0, // Prevent showing related videos
                        },
                      }}
                    />
                  </div>
                </span>
              </li>
              <li className="mt-6">🏦 Add URLs for quick reference.</li>
              <li className="mt-6">🔍 Easily search your library.</li>
              <li className="mt-6">🛒 Centralise your media links.</li>
              <li className="mt-6">🏆 Bonus applications included.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
