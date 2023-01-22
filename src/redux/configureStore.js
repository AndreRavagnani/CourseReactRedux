if (process.env.NODE_ENV === "production") {
  module.exports = require("./configureStored.prod");
} else {
  module.exports = require("./configureStored.dev");
}
