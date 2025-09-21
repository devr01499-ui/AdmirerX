const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting AdmirerX Development Servers...\n');

// Start Backend Server
console.log('📧 Starting Backend Server (Port 3001)...');
const backend = spawn('node', ['server.js'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit',
  shell: true
});

// Wait a moment for backend to start
setTimeout(() => {
  console.log('🌐 Starting Frontend Server (Port 3000)...');
  
  // Start Frontend Server
  const frontend = spawn('npm', ['start'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down servers...');
    backend.kill();
    frontend.kill();
    process.exit(0);
  });

}, 2000);

// Handle backend errors
backend.on('error', (err) => {
  console.error('❌ Backend server error:', err);
});

backend.on('close', (code) => {
  if (code !== 0) {
    console.error(`❌ Backend server exited with code ${code}`);
  }
});
