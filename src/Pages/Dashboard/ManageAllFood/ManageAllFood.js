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

const ManageAllFood = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get(" https://floating-mesa-38074.herokuapp.com/foods")
      .then((res) => setFoods(res.data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      axios
        .delete(` https://floating-mesa-38074.herokuapp.com/foodsdelete/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            alert("Food deleted");
            const restData = foods.filter((order) => order._id !== id);
            setFoods(restData);
          }
        });
    }
  };
  return (
    <Container>
      <h2 style={{ padding: "5%" }}>Manage All Foods Data</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Food Id</TableCell>
              <TableCell align="center">Food Name</TableCell>
              <TableCell align="center">Food Image</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foods.map((product) => (
              <TableRow
                key={product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{product.foodId}</TableCell>
                <TableCell component="th" scope="row">
                  {product.foodName}
                </TableCell>
                <TableCell align="center">
                  <img
                    style={{ width: 50, height: 50 }}
                    src={product.foodImage}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">$ {product.price}</TableCell>

                <TableCell align="center">
                  {" "}
                  <Button
                    onClick={() => handleDelete(product._id)}
                    sx={{ bgcolor: "error.main" }}
                    variant="contained"
                  >
                    {" "}
                    Delete Food{" "}
                  </Button>{" "}
                  <Button
                    // onClick={() => handleDelete(product._id)}
                    sx={{ bgcolor: "error.main" }}
                    variant="contained"
                  >
                    {" "}
                    Update Food{" "}
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

export default ManageAllFood;
