import axios from "axios";

export let userDataOption = [];

axios.get(`https://frichunks.herokuapp.com/api/v1/user/get_all`).then((res) => {
  res.data.map((item) =>
    userDataOption.push({ value: item.username, label: item.username })
  );
});
