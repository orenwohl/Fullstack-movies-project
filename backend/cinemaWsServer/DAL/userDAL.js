const jFile = require("jsonfile");

const readFile = () => {
  return new Promise((resolve, reject) => {
    jFile.readFile(__dirname + "/./users.json", function (err, data) {
      if (err) {
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
};

const writeToFile = (obj) => {
  return new Promise((resolve, reject) => {
    jFile.writeFile(__dirname + "/./users.json", obj, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("OK");
      }
    });
  });
};

module.exports = { readFile, writeToFile };
