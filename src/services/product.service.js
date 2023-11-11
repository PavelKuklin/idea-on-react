import axios from "axios"

const config = {
  onDownloadProgress: function (progressEvent) {
    console.log('progressEvent: ', progressEvent);
  },
};
export const ProductService = {
  async getAll () {
    try {
      const response = await axios.get(
        "https://6453d5b9e9ac46cedf310ba2.mockapi.io/cars",
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
        `https://6453d5b9e9ac46cedf310ba2.mockapi.io/cars/${id}`
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
        "https://6453d5b9e9ac46cedf310ba2.mockapi.io/cars/",
        data
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to create car");
    }
  }

}