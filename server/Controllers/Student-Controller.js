import prisma from "../lib/db";

const CreateStudents = async (req, res) => {
  try {
    const Student_data_Validation = StudentValidation.safeParse(req.body());

    if (!Student_data_Validation) {
      return res.status(401).json("Wrong Student details");
    }

    const {
      Registration_number,
      Name,
      Class,
      Roll_No,
      contact_number,
      Status,
    } = Student_data_Validation.data;

    const students = await prisma.students.create({
      data: {
        Registration_number,
        Name,
        Class,
        Roll_No,
        contact_number,
        Status,
      },
    });
    return res.status(200).json("Student data created successfully", students);
  } catch (e) {
    console.error(e);
    return res.status(500).json("internal server error");
  }
};

const GetAllStudents = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const startIndex = (page - 1) * limit;
    const totalItems = await students.countDocuments();
    const items = await students.find().skip(startIndex).limit(limit);
    const students = await prisma.students.findMany();

    return res.status(200).json("Student data created successfully", students, {
      items,
      currentPage: page,
      totalPage: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json("internal server error");
  }
};

const GetStudentsRegNo = async (req, res) => {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
      const regNo = searchParams.get("id");
      
      if (!regNo) {
          return res.status(401).json("wrong registration Number")
      }

    const students = await prisma.students.findUnique({
      where: {
        id: regNo,
      },
    });
    return res.status(200).json("Student data created successfully", students);
  } catch (e) {
    console.error(e);
    return res.status(500).json("internal server error");
  }
};

const UpdateStudent = async (req, res) => {
  try {
    
      const url = new URL(req.url);
      const searchParams = new URLSearchParams(url.search);
      const Id = searchParams.get("Id");

    if (!Id) {
      return res.status(401).json("Student Id does not exist");
      }
      
      const student = await prisma.students.findUnique({
          where: {
              id:Id
          }
      })

      if (!student) {
          return res.status(404).json("student data is unavailable")
      }

    const {
      Registration_number,
      Name,
      Class,
      Roll_No,
      contact_number,
      Status,
    } = Student_data_Validation.data;

    const students = await prisma.students.update({
      data: {
        Registration_number,
        Name,
        Class,
        Roll_No,
        contact_number,
        Status,
      },
    });
    return res.status(200).json("Student data Updated successfully", students);
  } catch (e) {
    console.error(e);
    return res.status(500).json("internal server error");
  }
};


const DeleteStudent = async (req, res) => {
    try {
      
        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.search);
        const regNo = searchParams.get("Id");
  
      if (!Id) {
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
  
module.exports = {
    CreateStudents,
    GetAllStudents,
    GetStudentsRegNo,
    UpdateStudent,
    DeleteStudent,
}