const axios = require("axios");

console.log("Sending request...");

const data = JSON.stringify({
  email: "example.@gmail.com",
  password: "root",
});

const url = "https://www.demo.com/login";

const res = axios
  .post(
    url,
    data,
    { headers: { "Content-Type": "application/json" } }
  )
  .then((res) => {
    console.log(res.data);
    console.log("done");
  })
  .catch((err) => {
    console.log(err);
  });
