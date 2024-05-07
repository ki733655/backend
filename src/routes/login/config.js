// config.js

const crypto = require('crypto');

// Function to generate a random secret key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Export the generated secret key
module.exports = {
  secretKey: generateSecretKey()
};

