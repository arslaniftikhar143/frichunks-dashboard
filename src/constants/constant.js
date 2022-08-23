import axios from "axios";
export let catagoryDataOption = [];

axios
  .get(`https://frichunks.herokuapp.com/api/v1/category/get_all`)
  .then((res) => {
    res.data.map((item) =>
      catagoryDataOption.push({ value: item.name, label: item.name })
    );
  });
