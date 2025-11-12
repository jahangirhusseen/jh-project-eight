import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [loading, setLoading] = useState(true);
  const [app, setApp] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../appData.json")
      .then((data) => setApp(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { app, error, loading };
};

export default useApps;
