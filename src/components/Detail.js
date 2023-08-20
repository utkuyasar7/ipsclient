import React, { useEffect, useState } from "react";
import{getIPDetail} from "../api/apiHelper"

function Detail() {
  const [IPDetail, setIPDetail] = useState(null); // Başlangıçta null olarak ayarlayın

  useEffect(() => {
    getIPDetail(setIPDetail)
  }, []);

  return (
    <div className="bg-gray-200 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">IP Detayları</h2>
      {IPDetail ? (
        <div>
          <p><strong>IP Adresi:</strong> {IPDetail.ip}</p>
          <p><strong>Şehir:</strong> {IPDetail.city}</p>
          <p><strong>Ülke:</strong> {IPDetail.country}</p>
          <p><strong>ISP:</strong> {IPDetail.org}</p>
        </div>
      ) : (
        <p>Veriler yükleniyor...</p>
      )}
    </div>
  );
}

export default Detail;
