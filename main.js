const getProduct = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
  const result = data.products
    .map(function (ele) {
      return `
          <h2>${ele.title}</h2>
          <img src=${ele.thumbnail} />
          <a href=" details.html?product_id=${ele.id}">details</a>
          
        `;
    })
    .join("");

  document.querySelector(".products").innerHTML = result;
};

getProduct();
