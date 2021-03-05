let fs = require("fs");

module.exports = () => {
  fs.readFile("data", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
