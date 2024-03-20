const getDetails = async () => {
  const params = new URLSearchParams(location.search);
  const productId = params.get("product_id");

  const response = await axios.get(
    `https://dummyjson.com/products/${productId}`
  );
  const data = response.data;
  console.log(data);
  const { title, description, thumbnail, price, brand, category } = data;

  document.querySelector("h2").textContent = title;
  document.querySelector("h3").textContent = category;
  document.querySelector("img").src = thumbnail;
  document.querySelector("h4").textContent += price;
  document.querySelector("h5").textContent += brand;
  document.querySelector("p").textContent = description;
};
getDetails();
