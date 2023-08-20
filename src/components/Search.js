import React, { useState } from "react";

function Search({ onSearch }) {
  const [domain, setDomain] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (domain) {
      try {
        const response = await fetch("https://ips-mt5d.vercel.app/domain/resolve", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ domain }),
        });

        const data = await response.json();
        
        onSearch(data);
      } catch (error) {
        console.error("API isteği başarısız:", error);
      }
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded shadow w-80 md:w-full">
      <h2 className="text-xl font-semibold mb-2">IP Arama</h2>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Domain girin..."
          className="mr-2 px-2 py-1 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
          Ara
        </button>
      </form>
    </div>
  );
}

export default Search;
