// iisnode entry bridge for COMS backend
const path = require('path');
const fs = require('fs');

// Resolve backend directory relative to wwwroot
const backendDir = path.resolve(__dirname, '../backend');
if (fs.existsSync(backendDir)) {
  process.chdir(backendDir);
  require('dotenv').config({ path: path.join(backendDir, '.env') });
} else {
  require('dotenv').config();
}

// Start backend server
require('../backend/src/server.js');
