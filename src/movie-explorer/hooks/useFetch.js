import { useEffect, useState } from "react";

export default function useFetch(fetchFn, deps = []) {
  const [data, setData] = useState(null); // IMPORTANT
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching started...");
      setLoading(true);
      setError(null);

      try {
        const result = await fetchFn();
        console.log("Result inside hook:", result);
        setData(result);
      } catch (err) {
        console.error("HOOK ERROR:", err);
        setError(err.message || "Some Error Occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, deps);

  return { data, loading, error };
}
