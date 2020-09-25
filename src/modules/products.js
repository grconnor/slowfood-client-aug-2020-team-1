import axios from "axios";

const fetchProductData = async () => {
  let productData = await axios.get("/products");
  return productData.data.products;
};

export { fetchProductData };
