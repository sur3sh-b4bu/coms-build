// iisnode entry bridge for COMS backend
const path = require('path');
const fs = require('fs');

const backendDir = path.resolve(__dirname, '../backend');
const backendNodeModules = path.join(backendDir, 'node_modules');

if (fs.existsSync(backendDir)) {
  process.chdir(backendDir);
  if (fs.existsSync(backendNodeModules)) {
    module.paths.unshift(backendNodeModules);
    if (require.main && require.main.paths) {
      require.main.paths.unshift(backendNodeModules);
    }
  }
  const envPath = path.join(backendDir, '.env');
  if (fs.existsSync(envPath)) {
    try {
      const dotenv = require(path.join(backendNodeModules, 'dotenv'));
      dotenv.config({ path: envPath });
    } catch (e) {
      // ignore
    }
  }
}

require(path.join(backendDir, 'src', 'server.js'));
