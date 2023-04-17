import { useEffect, useState } from "react";
import axios from "axios";

function useFetch() {
  const [data, setdata] = useState(null);

  const getPdata = async () => {
    try {
      const data = await axios.get(
        "https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"
      );
      setdata(data.data.scholarship);
      // console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPdata();
  }, []);

  return data;
}

export default useFetch;
