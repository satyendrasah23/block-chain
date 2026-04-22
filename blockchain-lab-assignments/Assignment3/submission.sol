// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentSubmission {

    string public studentID;
    string public cid;
    address public submittedBy;

    event SubmissionStored(
        string studentID,
        string cid,
        address wallet
    );

    function submitSubmission(
        string memory _studentID,
        string memory _cid
    ) public {

        studentID = _studentID;
        cid = _cid;
        submittedBy = msg.sender;

        emit SubmissionStored(
            _studentID,
            _cid,
            msg.sender
        );
    }

    function getSubmission()
        public
        view
        returns(
            string memory,
            string memory,
            address
        )
    {
        return (
            studentID,
            cid,
            submittedBy
        );
    }
}