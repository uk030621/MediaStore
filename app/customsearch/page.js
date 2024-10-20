"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Google Custom Search API Key and CSE ID from environment variables
  const GOOG_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;  // Ensure these are correctly set in .env.local
  const CSEngine_ID = process.env.NEXT_PUBLIC_CSE_ID;

  // Debugging logs to ensure the API key and CSE ID are available
  console.log("Google API Key: ", GOOG_API_KEY);
  console.log("CSEngine ID: ", CSEngine_ID);

  // Handle form submission to Google Custom Search API
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    // Log the search query for debugging
    console.log("Search Query: ", query);

    setLoading(true);
    setResults([]);

    // Google Custom Search API URL
    const searchUrl = `https://www.googleapis.com/customsearch/v1?key=${GOOG_API_KEY}&cx=${CSEngine_ID}&q=${encodeURIComponent(query)}`;

    // Log the constructed search URL for debugging
    console.log("Constructed Search URL: ", searchUrl);

    try {
      const response = await fetch(searchUrl);

      // Log the response to check if the API request was successful
      console.log("API Response: ", response);

      // Check if the response is ok (status 200)
      if (!response.ok) {
        console.error(`Error: Received status ${response.status}`);
        return;
      }

      const data = await response.json();

      // Log the response data for debugging
      console.log("API Response Data: ", data);

      // If there are search results, map them to display titles and URLs
      if (data.items) {
        setResults(data.items.map(item => ({ title: item.title, url: item.link })));
      } else {
        console.log("No results found.");
        setResults([]);
      }
    } catch (error) {
      // Log any error that occurs during the fetch operation
      console.error("Error fetching search results: ", error);
      setResults([]);
    }

    setLoading(false);
  };

// Function to clear/reset the search form
const handleClear = () => {
  setQuery('');       // Clear the search query
  setResults([]);
};


  // Handle copying the URL to the clipboard
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    alert(`Copied URL: ${url}`);
  };

  return (
    <div className="search-container">
      <Link className="mb-4" href="/htmlpage"><button >⬅️ Back</button></Link>
      <form onSubmit={handleSearch} className="search-form">
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
          required
        />

        {/* Search Button */}
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
        <button onClick={handleClear}>Clear/Reset</button>
      </form>

      {/* Display Search Results */}
      {results.length > 0 && (
        <div className="results">
          <h3>Search Results:</h3>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <a href={result.url} target="_blank" rel="noopener noreferrer">{result.title}</a>
                <button onClick={() => handleCopy(result.url)}>Copy URL</button>
                
              </li>
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        .search-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .search-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 300px;
        }

        input {
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          border-radius: 4px;
          background-color: #0070f3;
          color: white;
        }

        .results {
          margin-top: 2rem;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        li a {
          text-decoration: none;
          color: #0070f3;
        }

        li a:hover {
          text-decoration: underline;
        }

        li button {
          background-color: #f44336;
          color: white;
        }
      `}</style>
    </div>
  );
}
