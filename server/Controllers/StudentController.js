import prisma from "../lib/db.js";
import { StudentValidation } from "../Middlewares/StudentMiddleware.js";

export const CreateStudents = async (req, res) => {

    const Student_data_Validation = StudentValidation.safeParse(req.body());

    if (!Student_data_Validation) {
      return res.status(401).json("Wrong Student details");
    }

  try {
   
    const {
      Registration_number,
      Name,
      Class,
      Roll_No,
      contact_number,
    } = Student_data_Validation.data;

    const students = await prisma.students.create({
      data: {
        Registration_number,
        Name,
        Class,
        Roll_No,
        contact_number,
      },
    });
    return res.status(200).json("Student data created successfully", students);
  } catch (e) {
    console.error(e);
    return res.status(500).json("internal server error");
  }
};

//get all students
export const GetAllStudents = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const take = parseInt(limit);
    const skip = (page - 1) * take;

  try {
    
      const students = await prisma.students.findMany({
        skip,
        take,
        where: {
            Status:true
        }
      })

    return res.status(200).json("Student data created successfully", students);
  } catch (e) {
    console.error(e);
    return res.status(500).json("internal server error");
  }
};

// get student by registration number

export const GetStudentsRegNo = async (req, res) => {

    const { regNo } = req.params;
  try {

    const students = await prisma.students.findUnique({
      where: {
        Registration_number: regNo,
      },
    });
      if (!students || students.status) {
          return res.status(404).json("student not found or inactive")
      }
    return res.status(200).json("Student data created successfully", students);
  } catch (e) {
    console.error(e);
    return res.status(500).json("internal server error");
  }
};

//update student
export const UpdateStudent = async (req, res) => {
    const { regNo } = req.params;
    const { Name, Roll_No, Class, contact_number } = req.body;

  try { 
      const student = await prisma.students.findUnique({
          where: {
              id:Id
          }
      })

      if (!student) {
          return res.status(404).json("student detail does not exist")
      }

      if (Roll_No && Roll_No !== student.Roll_No) {
          const existingRoll = await prisma.students.findFirst({
              where: {
                  Roll_No,
                  Class,
                  Status:true,
              }
          })
          if (existingRoll) {
              return res.status(400).json("Roll no does not exist for this class");
          }
      }


      const UpdateStudents = await prisma.students.update({
          where: {
            Registration_number:regNo
        },
      data: {
        Name,
        Class,
        Roll_No,
        contact_number,
      },
    });
    return res.status(200).json("Student data Updated successfully", UpdateStudents);
  } catch (e) {
    console.error(e);
    return res.status(500).json("internal server error");
  }
};



//delete student (soft delete)
export const DeleteStudent = async (req, res) => {

    const { regNo } = req.params;
    try {
        const student = await prisma.students.findUnique({
            where: {
                Registration_number:regNo
            }
        })

      if (!student) {
        return res.status(401).json("Student detail does not exist");
        }
        
  //update the status to false for soft delete
      const students = await prisma.students.update({
          where: {
              Registration_number: regNo,     
          },
          data: {
              Status:false
          }
      });
      return res.status(200).json("Student data deleted successfully", students);
    } catch (e) {
      console.error(e);
      return res.status(500).json("internal server error");
    }
};
  