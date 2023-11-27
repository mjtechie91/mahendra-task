import { useState, useEffect } from "react";
import fetchClient from "./../utils/fetchClient";

const SUB_ID = "7979373711";
const useCatApi = () => {
  const [catItems, setCatItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchCatData = async () => {
    setLoading(true);
    try {
      const catResponse = await fetchClient.get(
        `v1/images/?sub_id=${SUB_ID}&limit=50&order=DESC`
      );
      setCatItems(catResponse.data);
      console.log(catResponse, "catResponse");
    } catch (error) {
      console.error("Error fetching cats:", error);
      setError(
        `Error fetching cat data: ${error.message} This may be due to a high volume of requests. Please wait for a minute and reload the page. } `
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  const deleteCat = async (catId) => {
    setLoading(true);
    try {
      await fetchClient.delete(`v1/images/${catId}`);
      fetchCatData();
      setMessage("Cat deleted successfully!!");
    } catch (error) {
      setError(
        "Error deleting the cat. This may be due to a high volume of requests. Please wait for a minute and reload the page."
      );
      console.error("Error deleting cat:", error);
    }
    setLoading(false);
  };

  const voteCat = async (catId, value) => {
    setLoading(true);
    try {
      const requestData = {
        image_id: catId,
        value: value,
        sub_id: SUB_ID,
      };
      await fetchClient.post("v1/votes", requestData);
      fetchCatData();
      setMessage("Vote updated successfully!!");
    } catch (error) {
      setError(
        "Error voting for the cat. This may be due to a high volume of requests. Please wait for a minute and reload the page."
      );
      console.error("Error voting for cat:", error);
    }
    setLoading(false);
  };

  const favoriteCat = async (catId, favoriteId = null) => {
    setLoading(true);
    try {
      if (favoriteId) {
        await fetchClient.delete(`v1/favourites/${favoriteId}`);
      } else {
        await fetchClient.post("v1/favourites", {
          image_id: catId,
          sub_id: SUB_ID,
        });
      }
      fetchCatData();
      setMessage("Favourite updated successfully!!");
    } catch (error) {
      setError(
        `Error favouriting the cat. This may be due to a high volume of requests. Please wait for a minute and reload the page.`
      );
      console.error("Error favoriting cat:", error);
    }
    setLoading(false);
  };

  return {
    catItems,
    error,
    voteCat,
    favoriteCat,
    deleteCat,
    loading,
    message,
  };
};

export const uploadCatApi = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("sub_id", SUB_ID);
    const uploadHeader = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await fetchClient.post("v1/images/upload", formData, uploadHeader);
    return true;
  } catch (error) {
    console.error("Error uploading cat image:", error);
    return error;
  }
};

export default useCatApi;
