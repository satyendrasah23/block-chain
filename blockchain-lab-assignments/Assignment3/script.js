// Smart Contract Details
const contractAddress = "0xD8e415eFD762f8618fc7F717Fd110F8F82448bC3";
const contractABI = [
    "function submitSubmission(string studentID,string cid)"
];

// Target Network (Sepolia Testnet)
const TARGET_CHAIN_ID = 11155111n; 

const connectWalletBtn = document.getElementById("connectWalletBtn");
const walletAddressDisplay = document.getElementById("walletAddress");
const addressText = document.getElementById("addressText");
const networkStatus = document.getElementById("networkStatus");
const studentIdInput = document.getElementById("studentId");
const ipfsCidInput = document.getElementById("ipfsCid");
const submitDataBtn = document.getElementById("submitDataBtn");
const transactionStatus = document.getElementById("transactionStatus");

let provider;
let signer;


async function connectWallet() {
    try {
        if (typeof window.ethereum === 'undefined') {
            alert("Please install MetaMask to use this dApp.");
            return;
        }

        provider = new ethers.BrowserProvider(window.ethereum);

        // Request account access from the user
        const accounts = await provider.send("eth_requestAccounts", []);

        // Get the signer (the account that will sign transactions)
        signer = await provider.getSigner();
        const address = await signer.getAddress();

        const network = await provider.getNetwork();
        if (network.chainId !== TARGET_CHAIN_ID) {
            alert("Wrong network selected! Please switch to the Ethereum Sepolia Testnet.");
            networkStatus.innerText = "Please switch to the Ethereum Sepolia Testnet in MetaMask.";
            networkStatus.className = "status-message error";
            submitDataBtn.disabled = true;
            return;
        }

        networkStatus.innerText = "";
        addressText.innerText = address;
        walletAddressDisplay.classList.remove("hidden");
        connectWalletBtn.innerText = "Wallet Connected";
        connectWalletBtn.disabled = true;
        submitDataBtn.disabled = false;

    } catch (error) {
        console.error("Error connecting wallet:", error);
        networkStatus.innerText = "Failed to connect wallet.";
        networkStatus.className = "status-message error";
    }
}

async function submitData() {
    if (!signer) {
        alert("Wallet not connected! Please connect your wallet first.");
        return;
    }

    const studentId = studentIdInput.value.trim();
    const cid = ipfsCidInput.value.trim();

    // Basic validation
    if (!studentId || !cid) {
        alert("Please enter both Student ID and IPFS CID.");
        return;
    }

    try {
        transactionStatus.innerText = "Initiating transaction... Please confirm in MetaMask.";
        transactionStatus.className = "status-message";
        submitDataBtn.disabled = true;

        // Initialize contract instance with signer
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Execute the transaction on the contract
        const tx = await contract.submitSubmission(studentId, cid);

        transactionStatus.innerText = "Transaction submitted... waiting for confirmation.";

        await tx.wait();

        // Success state
        transactionStatus.innerText = "Transaction submitted successfully!";
        transactionStatus.className = "status-message success";
        alert("Transaction successful!");

        studentIdInput.value = "";
        ipfsCidInput.value = "";

    } catch (error) {
        console.error("Transaction Error:", error);
        transactionStatus.innerText = "Transaction failed or rejected by user. See console for details.";
        transactionStatus.className = "status-message error";
    } finally {
        submitDataBtn.disabled = false;
    }
}

connectWalletBtn.addEventListener("click", connectWallet);
submitDataBtn.addEventListener("click", submitData);

if (window.ethereum) {
    window.ethereum.on('chainChanged', () => window.location.reload());
    window.ethereum.on('accountsChanged', () => window.location.reload());
}
