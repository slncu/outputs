const SCRAPBOX_ENDPOINT = "https://scrapbox.io/api";
const SCRAPBOX_USER_NAME = process.env.SCRAPBOX_USER_NAME;

export default {
  SB_PAGES: `${SCRAPBOX_ENDPOINT}/pages/${SCRAPBOX_USER_NAME}`
};
