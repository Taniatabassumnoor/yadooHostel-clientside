import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageStudent = () => {
  const [allBlogPost, setAllBlogPost] = useState([]);
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    axios
      .get(`  http://localhost:5000/getstudents`)
      .then((res) => setAllBlogPost(res.data));
  }, [isReload]);
  const handleStatus = (data) => {
    data.status = "Active";
    const url = `  http://localhost:5000/getstudents/${data._id}`;
    axios
      .put(url, data)
      .then((res) => console.log("Updating order ", res.data))
      .finally(() => setIsReload(true));
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      axios
        .delete(`  http://localhost:5000/deletestudents/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            alert("Student Data Deleted");
            const restData = allBlogPost.filter((order) => order._id !== id);
            setAllBlogPost(restData);
          }
        });
    }
  };
  return (
    <Container>
      <h2 style={{ padding: "5%" }}>Manage Students</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="center">Roll Number</TableCell>
              <TableCell align="center">Hall Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBlogPost.map((order) => (
              <TableRow
                key={order?.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.fullName}
                </TableCell>
                <TableCell align="center">{order.roll}</TableCell>
                <TableCell align="center">{order.hallName}</TableCell>

                {order.status === "InActive" ? (
                  <TableCell
                    sx={{
                      bgcolor: "warning.main",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: 16,
                    }}
                    align="center"
                  >
                    {order.status}
                  </TableCell>
                ) : (
                  <TableCell
                    sx={{
                      bgcolor: "success.main",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: 16,
                    }}
                    align="center"
                  >
                    {order.status}
                  </TableCell>
                )}
                <TableCell align="center">
                  <Button
                    onClick={() => handleStatus(order)}
                    sx={{ bgcolor: "success.main" }}
                    variant="contained"
                  >
                    Active
                  </Button>{" "}
                  <Button
                    onClick={() => handleDelete(order._id)}
                    sx={{ bgcolor: "error.main" }}
                    variant="contained"
                  >
                    {" "}
                    Delete{" "}
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

export default ManageStudent;
