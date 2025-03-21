// Name:YASH GUPTA, Email:yashgtech00@gmail.com, Number:7879758136, School management Repository, Full Assignment to Codesore Technology

import express from "express";

import {
  CreateStudents,
  DeleteStudent,
  GetAllStudents,
  GetStudentsRegNo,
  UpdateStudent,
} from "../Controllers/StudentController.js";
import { StudentValidation } from "../Middlewares/StudentMiddleware.js";

const router = express.Router();

//routes for student operations
router.post("/",StudentValidation, CreateStudents);
router.get("/", GetAllStudents);
router.get('/:regNo', GetStudentsRegNo);
router.put("/:regNo", UpdateStudent);
router.delete("/:regNo", DeleteStudent);

export default router;


// Name:YASH GUPTA, Email:yashgtech00@gmail.com, Number:7879758136, School management Repository, Full Assignment to Codesore Technology
