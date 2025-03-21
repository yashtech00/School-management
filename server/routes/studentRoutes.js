import express from "express";

import {
  CreateStudents,
  DeleteStudent,
  GetAllStudents,
  GetStudentsRegNo,
  UpdateStudent,
} from "../Controllers/StudentController.js";

const router = express.Router();

router.post("/", CreateStudents);
router.get("/", GetAllStudents);
router.get('/:regNo', GetStudentsRegNo);
router.put("/:regNo", UpdateStudent);
router.delete("/:regNo", DeleteStudent);

export default router;
