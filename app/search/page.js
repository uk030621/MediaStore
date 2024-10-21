"use client"; // Ensure this component is client-side

import { useState } from "react";
import Link from "next/link";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [engine, setEngine] = useState("google"); // Default search engine

  // Search engines and their query URLs
  const searchEngines = {
    google: "https://www.google.com/search?q=",
    bing: "https://www.bing.com/search?q=",
    duckduckgo: "https://duckduckgo.com/?q=",
    yahoo: "https://search.yahoo.com/search?p=",
  };

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;

    // Construct search URL based on selected engine
    const searchUrl = `${searchEngines[engine]}${encodeURIComponent(query)}`;

    // Open search URL in a new tab
    window.open(searchUrl, "_blank");
  };

  // Handle clear/reset
  const handleClear = () => {
    setQuery(""); // Clear search input
    setEngine("google"); // Reset search engine selection to Google
  };

  return (
    <div className="flex flex-col items-center mt-12">
      {" "}
      {/* Centers horizontally with margin-top */}
      <h1 className="text-2xl font-bold mb-4">URL Search</h1>
      <Link href="/htmlpage">
        <button className="bg-black text-white px-4 py-2 rounded-md mb-4">
          ⬅️ Back
        </button>{" "}
        {/* Back Button */}
      </Link>
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center w-full max-w-md"
      >
        {" "}
        {/* Centered Form */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
          required
          className="border border-gray-300 p-2 rounded-md w-full mb-4"
        />
        <div className="flex justify-between w-full space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            {loading ? "Searching..." : "Search"}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-black text-white px-4 py-2 rounded-md w-full"
          >
            Clear/Reset
          </button>
        </div>
      </form>
      {/* Display Search Results */}
      {results.length > 0 && (
        <div className="w-full max-w-3xl mt-8">
          <h3 className="text-lg mb-4">Search Results:</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">URL</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {result.title}
                    </a>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleCopy(result.url)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md"
                    >
                      Copy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
