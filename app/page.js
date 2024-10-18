// app/page.js
"use client"
import styles from '../styles/Home.module.css'; // Import the CSS module
import YouTube from 'react-youtube'; // Import the YouTube component

export default function HomePage() {

  const videoId = 'sRxrwjOtIag'; // Example YouTube video ID

  return (
<div className="background-container">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/passingclouds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


    <div className='flex flex-col items-center'>
      <div className={styles.homeContainer}>
        <h1 className={styles.gradientText}>Welcome to your media library</h1>
        <p className={styles.description}>
          Keeping your most important media in a personal repository for easy reference.
        </p>
        <div className='flex justify-center items-center' >
          <ul className="text-center mt-12 text-slate-800">
          <li>
        ❤️ Add your favourite YouTube videos.<br />
        <span className='text-sm text-slate-600'>
          Tip: To exclude adverts just enter the video ID.  Example: <span className='text-red-500'>sRxrwjOtIag&t</span>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
            {/* Centralizing YouTube component */}
            <YouTube
              videoId={videoId}
              opts={{
                width: '150', // Adjust width
                height: '100', // Adjust height
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
            <li className="mt-6">🛒 Centralize your media links.</li>
            <li className="mt-6">🏆 Bonus applications included.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}