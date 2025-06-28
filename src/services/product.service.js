import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;

const config = {
  onDownloadProgress: function (progressEvent) {
    console.log('progressEvent: ', progressEvent);
  },
};
export const ProductService = {
  async getAll () {
    try {
      const response = await axios.get(
        API_URL,
        config
      );

      // console.log('dataaa: ', response.status);
      return response.data;
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      throw error;
    }
  },

  async getById (id) {
    try {
      const response = await axios.get(
        `${API_URL}/${id}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async create (data) {
    try {
      const response = await axios.post(
        API_URL,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to create car", error);
    }
  }

}