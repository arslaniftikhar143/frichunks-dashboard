import axios from "axios";

export let productDataOption = [];

axios
  .get(`https://frichunks.herokuapp.com/api/v1/product/get_all`)
  .then((res) => {
    res.data.map((item) =>
      productDataOption.push({ value: item.name, label: item.name })
    );
  });
