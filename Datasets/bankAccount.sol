// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleBank {
    // Mapping to store each user's balance
    mapping(address => uint256) public balances;

    // Event for logging deposits
    event DepositMade(address indexed account, uint256 amount);

    // Event for logging withdrawals
    event WithdrawalMade(address indexed account, uint256 amount);

    // Deposit function to add funds to the user's account
    function deposit() public payable {
        require(msg.value > 0, "Deposit must be greater than zero.");

        // Update the balance
        balances[msg.sender] += msg.value;

        // Log the deposit
        emit DepositMade(msg.sender, msg.value);
    }

    // Withdraw function to take funds out of the user's account
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Not enough balance.");

        // Deduct the balance and transfer the funds
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);

        // Log the withdrawal
        emit WithdrawalMade(msg.sender, amount);
    }

    // Function to check the balance of the caller (optional as `balances` is public)
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}
