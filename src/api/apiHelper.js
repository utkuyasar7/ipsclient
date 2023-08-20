import axios from "axios";

export function getIPDetail(setIPDetail) {
  axios.get('https://ips-eight.vercel.app/domain/ip')
    .then(response => {
      setIPDetail(response.data);
    })
    .catch(error => {
      console.error('API isteği başarısız:', error);
    });
}
