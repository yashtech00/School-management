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

const GetStudents = async (req, res) => {
    try {  
      const students = await prisma.students.findMany();
      return res.status(200).json("Student data created successfully", students);
    } catch (e) {
      console.error(e);
      return res.status(500).json("internal server error");
    }
};
  
const GetStudentsId = async (req, res) => {
    try {
      
        const url = new URL(req.url);
        const serachParams = new URLSearchParams(url.search);
        const ID = serachParams.get("id");


      const students = await prisma.students.create({
          where: {
            id:ID
        }
      });
      return res.status(200).json("Student data created successfully", students);
    } catch (e) {
      console.error(e);
      return res.status(500).json("internal server error");
    }
};
  
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
      return res.status(200).json("Studdent data created successfully", students);
    } catch (e) {
      console.error(e);
      return res.status(500).json("internal server error");
    }
  };
