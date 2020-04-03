require("dotenv").config();
module.exports = {
  env: {
    MAIN_IMAGE_URL: process.env.MAIN_IMAGE_URL,
    SCRAPBOX_USER_NAME: process.env.SCRAPBOX_USER_NAME
  }
};
