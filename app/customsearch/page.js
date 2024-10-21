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
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">URL Search</h1>
      <Link className="mb-4" href="/htmlpage">
        <button className="bg-black text-white px-4 py-2 rounded">
          ⬅️ Back
        </button>
      </Link>
      <form onSubmit={handleSearch} className="flex flex-col gap-4 w-72">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
          required
          className="p-2 text-base border border-gray-300 rounded"
        />
        <div className="flex justify-between space-x-24">
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 text-white rounded ${
              loading ? "bg-gray-500" : "bg-blue-600"
            }`}
          >
            {loading ? "Searching..." : "Search"}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-3 py-2 bg-black text-white rounded"
          >
            Clear/Reset
          </button>
        </div>
      </form>
      {/* Display Search Results */}
      {results.length > 0 && (
        <div className="mt-8 w-full">
          <h3 className="mb-4 text-lg">Search Results:</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-100">Title</th>
                <th className="border p-2 bg-gray-100">URL</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:underline"
                    >
                      {result.title}
                    </a>
                  </td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleCopy(result.url)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
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
