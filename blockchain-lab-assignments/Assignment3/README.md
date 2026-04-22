# Assignment 3: Web Interface for Blockchain Interaction using MetaMask

## Objective

The objective of this assignment is to create a simple web interface that connects to a MetaMask wallet and interacts with a deployed smart contract on the Ethereum Sepolia Testnet. The interface allows users to submit their Student ID and IPFS CID to the blockchain through a transaction executed from the browser.

## Technologies Used

HTML
CSS
JavaScript
MetaMask Wallet
Ethers.js Library
Ethereum Sepolia Testnet


## Project Description

In this assignment, a basic frontend web interface was developed to interact with a smart contract deployed on the Ethereum Sepolia Testnet. The application allows a user to connect their MetaMask wallet and submit their Student ID along with an IPFS CID directly to the blockchain.

## Smart Contract Details

Network Used:
Ethereum Sepolia Testnet

Contract Address: 0xD8e415eFD762f8618fc7F717Fd110F8F82448bC3

Function Used:
submitSubmission(studentID, cid)
Example CID submitted: QmTbskZChAp6maSGd4LQaoyEcaJD1A13Cgr7u79GQ4JEYc


## How Frontend Connects to Blockchain

The frontend connects to the blockchain using MetaMask and the Ethers.js library.

Steps followed:

1. User opens the webpage in the browser.
2. User clicks the "Connect Wallet" button.
3. MetaMask prompts the user to allow wallet access.
4. After approval, the wallet gets connected to the application.
5. The contract address and ABI are used to create a contract instance.
6. When the user enters Student ID and CID and clicks the submit button, a transaction request is sent to MetaMask.
7. After confirmation, the transaction is recorded on the Sepolia blockchain.


## How MetaMask Is Used in This Project

MetaMask is used for the following purposes:

* connecting the user's wallet to the web interface
* selecting the Ethereum Sepolia Testnet network
* signing the transaction securely
* submitting the transaction to the blockchain
* confirming successful execution of the smart contract function

## Steps to Run the Project

1. Open MetaMask and switch to Ethereum Sepolia Testnet.
2. Open the project folder.
3. Run the file index.html in the browser.
4. Click the "Connect Wallet" button.
5. Enter Student ID and IPFS CID.
6. Click "Submit to Blockchain".
7. Approve the transaction in MetaMask.
8. Wait for the transaction confirmation message.

## Expected Output

After connecting MetaMask successfully, the wallet address is displayed on the webpage. When the user submits the Student ID and CID, MetaMask opens a transaction confirmation popup. After confirming the transaction, the data gets stored on the blockchain successfully.

## Screenshots Included

The following screenshots are included in the screenshots folder:
* Transaction confirmation popup during submission
* Successful transaction execution message
* Deployed testnet of sepolia screenshot
