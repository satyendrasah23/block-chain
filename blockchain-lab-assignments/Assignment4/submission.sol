// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IPFSSubmission {

    string public studentID;
    string public cid;

    function submit(string memory _studentID, string memory _cid) public {
        studentID = _studentID;
        cid = _cid;
    }

    function getSubmission() public view returns(string memory, string memory) {
        return (studentID, cid);
    }
}