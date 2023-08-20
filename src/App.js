import React, { useState } from "react";
import Search from "./components/Search";
import Detail from "./components/Detail";

function App() {
  const [ips, setIps] = useState(null);

  const handleSearch = (response) => {
    if (response && response.ipDetails) {
      setIps(response.ipDetails);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen space-y-8 p-8">
      <Search onSearch={handleSearch} />
      <Detail searchingIPDetail={ips} />
    </div>
  );
}

export default App;
