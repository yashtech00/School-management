
const router = require("express").Router();




router.post('/CreateStudents',Student-Validation,Students);
router.get('/GetStudents',GetStudents);
router.get(`/GetStudent/:id`,GetStudentsId);
router.put('/UpdateStudent',UpdateStudent);
router.delete('/DeleteStudent', DeleteStudent);

module.exports = router;