// The os module in Node.js provides operating system-related 
// utility methods and information. It allows you to retrieve 
// information about the system's operating system, network interfaces, 
// and more.

// Import the os module for operating system-related information
const os = require('os');

// Create an object to store operating system information
const osInfo = {
  platform: os.platform(),        // Operating system platform (e.g., 'darwin', 'win32')
  arch: os.arch(),                // CPU architecture (e.g., 'x64')
  cpus: os.cpus(),                // Information about the CPUs
  totalMemory: os.totalmem(),     // Total system memory in bytes
};

// Check if the CPUs property exists before accessing it
if (osInfo.cpus && osInfo.cpus.length > 0) {
  // Extract information about each CPU
  osInfo.cpus = osInfo.cpus.map((cpu, index) => ({
    model: cpu.model,             // CPU model (e.g., 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz')
    speed: cpu.speed,             // CPU speed in MHz
    coreIndex: index + 1,         // Index of the CPU core
  }));
}

// Log the operating system information
console.log('Operating System Information:', osInfo);
