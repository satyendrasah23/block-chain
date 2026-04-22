# SimpleStorage Contract

## Contract Purpose

The `SimpleStorage` contract is a basic Solidity smart contract designed to demonstrate fundamental blockchain concepts. It provides a simple mechanism to store and retrieve an unsigned integer value on the Ethereum blockchain. This contract serves as an introductory example for understanding how state variables are managed and how functions interact with blockchain data.

## Functions and Logic

### State Variable

**`number` (uint, public)**
- Stores a single unsigned integer value
- Public visibility allows external access to read the value
- Initialized to `0` by default

### Functions

#### 1. `setNumber(uint _number)`
- **Visibility**: `public`
- **Type**: State-changing function
- **Parameter**: `_number` - The unsigned integer value to store
- **Description**: Updates the `number` state variable with the provided value. This is a write operation that modifies the blockchain state and typically costs gas to execute.

#### 2. `getNumber()`
- **Visibility**: `public`
- **Type**: View function
- **Returns**: `uint` - The current value of the `number` state variable
- **Description**: Retrieves and returns the current value stored in the `number` variable. This is a read-only operation that does not modify the blockchain state and does not cost gas to execute.

## Usage Example

```solidity
// Set a number
setNumber(42);

// Get the number
uint myNumber = getNumber(); // Returns 42
```

## Key Concepts Demonstrated

- **State Variables**: Persistent data storage on the blockchain
- **Public Functions**: Functions accessible from outside the contract
- **View Functions**: Read-only functions that don't consume gas
- **Write Operations**: Functions that modify contract state
