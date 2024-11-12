// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStudentData {
    // Structure to store student information
    struct Student {
        uint256 id;
        string name;
        uint256 age;
    }

    // Array to hold all student records
    Student[] private students;

    // Function to add a new student record
    function addStudent(uint256 _id, string memory _name, uint256 _age) public {
        students.push(Student(_id, _name, _age));
    }

    // Function to get the total number of students
    function getTotalStudents() public view returns (uint256) {
        return students.length;
    }

    // Function to get student details by index
    function getStudent(uint256 _index) public view returns (uint256, string memory, uint256) {
        require(_index < students.length, "Invalid index");
        Student memory student = students[_index];
        return (student.id, student.name, student.age);
    }

    // Function to update student details by index
    function updateStudent(uint256 _index, string memory _newName, uint256 _newAge) public {
        require(_index < students.length, "Invalid index");
        students[_index].name = _newName;
        students[_index].age = _newAge;
    }
}
