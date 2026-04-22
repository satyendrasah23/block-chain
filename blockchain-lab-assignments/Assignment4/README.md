# Assignment 4: IPFS Integration with Blockchain Storage

## Objective
The objective of this assignment is to upload a project file to IPFS (InterPlanetary File System), generate a Content Identifier (CID), store the CID on the Ethereum Sepolia blockchain using a smart contract, and verify decentralized storage and retrieval of the file.


## Tools and Technologies Used
* IPFS Desktop Application
* Remix IDE
* MetaMask Wallet
* Ethereum Sepolia Testnet
* Etherscan Explorer

## IPFS Service Used
The file was uploaded using the **IPFS Desktop Application**.
IPFS stores files in a decentralized way and generates a unique hash called a **CID (Content Identifier)**. This CID acts as a permanent reference to retrieve the file.


## Steps Performed
### Step 1: File Upload to IPFS
1. Opened IPFS Desktop application
2. Started the IPFS local node
3. Uploaded the project PDF file
4. Generated the CID after upload
5. Ensured the file was pinned for persistence


### Step 2: CID Generated
CID obtained after upload:
QmTbskZChAp6maSGd4LQaoyEcaJD1A13Cgr7u79GQ4JEYc


### Step 3: File Retrieval Using Gateway
The uploaded file was verified using IPFS public gateway:
https://ipfs.io/ipfs/QmTbskZChAp6maSGd4LQaoyEcaJD1A13Cgr7u79GQ4JEYc
The file opened successfully, confirming decentralized storage.


### Step 4: Store CID on Blockchain

1. Opened Remix IDE
2. Connected MetaMask wallet
3. Selected Ethereum Sepolia Testnet network
4. Deployed IPFS submission smart contract
5. Called submit() function with Student ID and CID
6. Confirmed transaction through MetaMask
7. Verified transaction on Etherscan


### Step 5: Retrieve CID from Smart Contract
The stored CID was retrieved using the getSubmission() function from the deployed smart contract inside Remix IDE.
This confirms successful blockchain storage and retrieval.

## Smart Contract Deployment Details

Network Used:
Ethereum Sepolia Testnet

CID Stored On Blockchain:
QmTbskZChAp6maSGd4LQaoyEcaJD1A13Cgr7u79GQ4JEYc

Storage Method:
submit(studentID, CID)

Retrieval Method:
getSubmission()


## Verification Using Blockchain Explorer
Transaction storing the CID was verified on Sepolia Etherscan.
The transaction confirms:
* successful smart contract execution
* CID stored on blockchain
* wallet interaction recorded permanently
(Event page transaction screenshot attached in submission folder)


## Result
The file was successfully:
* uploaded to IPFS
* assigned a valid CID
* retrieved using IPFS gateway link
* stored securely on Ethereum Sepolia blockchain
* verified through blockchain transaction explorer

This demonstrates decentralized storage with blockchain-based verification.
