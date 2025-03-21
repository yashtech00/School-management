
const express = require("express");
const router = express.Router();

const {
    CreateStudents,
    GetAllStudents,
    GetStudentsRegNo,
    UpdateStudent,
    DeleteStudent
} = "../Controllers/Student-Controller"



router.post('/',CreateStudents);
router.get('/',GetAllStudents);
router.get(`/:regNo`,GetStudentsRegNo);
router.put('/:regNo',UpdateStudent);
router.delete('/:regNo', DeleteStudent);

module.exports = router;