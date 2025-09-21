const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Installing AdmirerX Backend Dependencies...\n');

try {
  // Check if backend directory exists
  const backendDir = path.join(__dirname, 'backend');
  if (!fs.existsSync(backendDir)) {
    console.error('❌ Backend directory not found!');
    process.exit(1);
  }

  // Install backend dependencies
  console.log('📦 Installing backend packages...');
  execSync('npm install', { 
    cwd: backendDir, 
    stdio: 'inherit' 
  });

  console.log('\n✅ Backend dependencies installed successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Create .env file in backend directory with Gmail credentials');
  console.log('2. Run: node start-servers.js');
  console.log('3. Or manually start backend: cd backend && npm start');
  console.log('4. Start frontend: npm start');

} catch (error) {
  console.error('❌ Installation failed:', error.message);
  process.exit(1);
}
