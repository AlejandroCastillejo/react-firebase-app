import axios from "axios";
import { itemsPerPage } from "../constants/pages";

const API_URL = "https://api.punkapi.com/v2/beers";

//ToDo: use React Query for caching response
export const getPageData = async (page) => {
  const res = await axios.get(API_URL, {
    params: { page, per_page: itemsPerPage },
  });
  return res.data;
};
