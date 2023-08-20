
import React, { useState } from "react";

function Search() {
    const [responseText, setResponseText] = useState("");

    const handleRequest = async () => {
      try {
        const response = await fetch("https://ips-h373.vercel.app/domain/resolve", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
          },
          body: JSON.stringify({
            "domain": "google.com"
          })
        });
  
        const data = await response.json();
        setResponseText(JSON.stringify(data, null, 2));
      } catch (error) {
        console.error('API isteği başarısız:', error);
        setResponseText("API isteği başarısız");
      }
    };
  
    return (
      <div className="bg-gray-200 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">API İstek</h2>
        <button onClick={handleRequest} className="bg-blue-500 text-white px-4 py-1 rounded">
          İstek Gönder
        </button>
        <pre className="mt-4 p-2 border rounded bg-white">
          {responseText}
        </pre>
      </div>
    );
  }
  

export default Search;
