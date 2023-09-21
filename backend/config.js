require('dotenv').config();

const PORT = process.env.PORT || 3003;
const OPENCAGE_API_KEY = process.env.OPENCAGE_API_KEY;

module.exports = {
  PORT,
  OPENCAGE_API_KEY,
};
