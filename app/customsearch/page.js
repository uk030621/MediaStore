"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle form submission by sending search query to the server
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setResults([]);

    try {
      // Make a POST request to the server-side API route
      const response = await fetch("/api/customsearch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }), // Send the search query
      });

      const data = await response.json();

      // Handle errors in the response
      if (!response.ok) {
        console.error("Error:", data.error || "Unknown error");
        setResults([]);
        return;
      }

      // Set the results returned from the API
      if (data.results) {
        setResults(data.results);
      }
    } catch (error) {
      // Log any client-side error that occurs during the fetch operation
      console.error("Error fetching search results:", error);
      setResults([]);
    }

    setLoading(false);
  };

  // Function to clear/reset the search form
  const handleClear = () => {
    setQuery("");
    setResults([]);
  };

  // Handle copying the URL to the clipboard
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    alert(`Copied URL: ${url}`);
  };

  return (
    <div className="search-container">
      <h1 className="text-2xl font-bold mb-4">URL Search</h1>
      <Link className="mb-4" href="/htmlpage">
        <button style={{ backgroundColor: "black" }}>⬅️ Back</button>
      </Link>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
          required
        />
        <div className="flex space-x-24">
          <button
            style={{ width: "fit-content" }}
            type="submit"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
          <button
            style={{
              width: "fit-content",
              marginLeft: "100px",
              backgroundColor: "black",
            }}
            type="button"
            onClick={handleClear}
          >
            Clear/Reset
          </button>
        </div>
      </form>

      {/* Display Search Results */}
      {results.length > 0 && (
        <div className="results">
          <h3 className="mb-4 text-lg">Search Results:</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {result.title}
                    </a>
                  </td>
                  <td>
                    <button onClick={() => handleCopy(result.url)}>Copy</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
          width: 100%;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        th {
          background-color: #f2f2f2;
        }

        td a {
          text-decoration: none;
          /*color: #0070f3;*/
          color: grey;
        }

        td a:hover {
          text-decoration: underline;
        }

        td button {
          background-color: #f44336;
          color: white;
          padding: 5px 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
