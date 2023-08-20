import React from "react";
import Search from "./components/Search";
import Detail from "./components/Detail";

function App() {
  const handleSearch = (response) => {
    // API'den gelen yanıtı burada işleyebilirsiniz
    console.log("API'den gelen yanıt:", response);
  };
  
  return (
    <>
      <Search onSearch={handleSearch} />
      <Detail />
    </>
  );
}

export default App;
