import { useEffect, useState } from "react";

export default function useCardLoad() {
  const [data, setData] = useState({
    success: false,
    loading: true,
    error: null,
    user: null,
  });

  const fetchData = async () => {
    console.log("func called !");
    
    try {
      const res = await fetch("https://api.github.com/users/outgoingrudra");
      
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const userData = await res.json();
      console.log(userData);
      

      setData({
        success: true,
        loading: false,
        error: null,
        user: userData,
      });
    } catch (err) {
      setData({
        success: false,
        loading: false,
        error: err.message,
        user: null,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}
