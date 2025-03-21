# School Management Backend  

A backend application for managing student records, built with **Express.js** and **Prisma**. This application provides a RESTful API to create, read, update, and delete student information.  

## Table of Contents  

- [Features](#features)  
- [Technologies](#technologies)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)   

## Features  

- Create new student records  
- Retrieve all students or a specific student by registration number  
- Update student details  
- Soft delete student records  
- Data validation with Zod  

## Technologies  

- [Node.js](https://nodejs.org/en/) - JavaScript runtime  
- [Express.js](https://expressjs.com/) - Web framework for Node.js  
- [Prisma](https://www.prisma.io/) - Database toolkit for TypeScript and Node.js  
- [Zod](https://zod.dev/) - TypeScript-first schema declaration and validation  
- [SQLite](https://www.sqlite.org/index.html) - Lightweight database (or another database of your choice)  

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/school-management-backend.git  
   cd school-management-backend
2. Install the dependencies:
     ```bash
     npm install
3. Set up your database:
    ```bash
    npx prisma migrate dev --name init
4. Start the server:
   ```bash
   npm start

The server will run on http://localhost:8000.


## API Endpoints  

### Students  

- **Create Student**  
  - `POST /students`  
  - **Body**:  
    ```json  
    {  
      "Registration_number": "string",  
      "Name": "string",  
      "Class": "string",  
      "Roll_No": "number",  
      "contact_number": "string"  
    }  
    ```  

- **Get All Students**  
  - `GET /students`  

- **Get Student by Registration Number**  
  - `GET /students/:regNo`  

- **Update Student**  
  - `PUT /students/:regNo`  
  - **Body**:  
    ```json  
    {  
      "Name": "string",  
      "Class": "string",  
      "Roll_No": "number",  
      "contact_number": "string"  
    }  
    ```  

- **Delete Student (soft delete)**  
  - `DELETE /students/:regNo`


## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or features.
