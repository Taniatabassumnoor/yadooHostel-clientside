import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";

const ManageAllStudent = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:5000/students")
      .then((res) => setStudents(res.data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      axios
        .delete(` http://localhost:5000/deletestudents/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            alert("Student data deleted");
            const restData = students.filter((order) => order._id !== id);
            setStudents(restData);
          }
        });
    }
  };
  return (
    <Container>
      <h2 style={{ padding: "5%" }}>Students Data Table</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="center">Roll Number</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Class</TableCell>
              <TableCell align="center">Hall Name</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((product) => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{product.fullName}</TableCell>
                <TableCell align="center">{product.roll}</TableCell>
                <TableCell align="center">{product.age}</TableCell>
                <TableCell align="center">{product.studentClass}</TableCell>
                <TableCell align="center">{product.hallName}</TableCell>

                <TableCell align="center">
                  {" "}
                  <Button
                    onClick={() => handleDelete(product._id)}
                    sx={{ bgcolor: "error.main" }}
                    variant="contained"
                  >
                    {" "}
                    Delete Student Data{" "}
                  </Button>{" "}
                  <Button
                    // onClick={() => handleDelete(product._id)}
                    sx={{ bgcolor: "error.secondary" }}
                    variant="contained"
                  >
                    {" "}
                    Update Student Data{" "}
                  </Button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageAllStudent;
