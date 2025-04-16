# Blockchain Fund Allocation System 🏛️💸

A decentralized system for tracking and managing public fund allocations using **Solidity** smart contracts. This project ensures **transparency**, **accountability**, and **efficiency** in the disbursement of funds between **state authorities**, **vendors**, and **contractors**.

## 🚀 Features

- ✅ Smart contract-based fund management
- 🔐 Transparent transactions logged on the blockchain
- 🧾 Tender creation and bidding by contractors
- 📤 Payment approvals by vendors and state authorities
- 🧠 Role-based access for different stakeholders

## 🛠️ Technologies Used

- **Solidity** — Smart contract programming language
- **Ethereum** — Blockchain platform (tested on Remix/Hardhat)
- **JavaScript** — For scripting and frontend integration
- **Node.js** — For backend (future integration)
- **React.js** (planned) — For a decentralized frontend dApp
- **Metamask** — Wallet integration

## 📂 Folder Structure

BlockChain-Fund-allocation-system/ │ ├── contracts/ # Solidity smart contracts │ └── Transactions.sol │ ├── scripts/ # Deployment and interaction scripts (planned) │ ├── frontend/ # dApp frontend (React - coming soon) │ ├── test/ # JS test scripts (planned) │ └── README.md


## 🔐 Smart Contract Overview

### `Transactions.sol`

This contract allows:

- 🏗️ **Tenders** to be created by a state authority
- 🤝 **Bids** to be placed by contractors
- 📦 **Vendors** to approve project status and quality
- 💳 **Payments** to be released securely only after multi-party validation

### Roles

- **State Authority**
- **Vendor**
- **Contractor**

Each role has specific permissions and responsibilities coded into the smart contract.

## 🧪 How to Test (coming soon)

Tests will be written using **Hardhat** and **Mocha** for simulating user interactions and contract validation.

## 🌐 Future Plans

- Frontend dApp with role-based UI
- Real Ethereum testnet deployment
- Wallet authentication (via Metamask)
- Email/SMS notifications for payments and approvals
- Audit-ready smart contract documentation
