import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'c842b8dfd1msh91e5f64565e0ae4p18e88cjsnaf98f294a241',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false)
    } catch (error) {
      setError(error);
      alert(error)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return {data, isLoading, error, refetch}

}

export default useFetch;