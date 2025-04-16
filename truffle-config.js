module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Match Ganache port
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "0.8.3", // Match Solidity version
      optimizer: { enabled: true, runs: 200 },
    },
  },
};
