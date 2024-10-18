// app/page.js
"use client"
import styles from '../styles/Home.module.css'; // Import the CSS module
import YouTube from 'react-youtube'; // Import the YouTube component

export default function HomePage() {

  const videoId = 'sRxrwjOtIag'; // Example YouTube video ID

  return (
    <div className='flex flex-col items-center'>
      <div className={styles.homeContainer}>
        <h1 className={styles.gradientText}>Welcome to your media library</h1>
        <p className={styles.description}>
          Keeping your most important media in a personal repository for easy reference.
        </p>
        <div className='flex justify-center items-center' >
          <ul className="text-center mt-12 text-slate-500">
          <li>
        ❤️ Add your favourite YouTube videos.<br />
        <span className='text-sm text-slate-400'>
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
            <li className='mt-6'>🏦 Add urls to useful on-line information for quick reference. </li>
            <li className='mt-6'>🔍 Easily search your library to keep the information you need always within reach.</li>
            <li className='mt-6'>🛒 One stop shop for all your media links.</li>
            <li className='mt-6'>🏆 Bonus applications you might like.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}