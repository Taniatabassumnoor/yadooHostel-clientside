import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddNewStudent = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm();
  // onsubmit function
  const onSubmit = (data) => {
    axios.post(" http://localhost:5000/students", data).then((res) => {
      if (res.data.insertedId) {
        setSuccess("Student added successfully");
        reset();
      }
    });
  };
  setValue("status", "InActive");
  return (
    <div>
      <div className="pt-5 form-design">
        <h3 className="text-white pt-5">Please Add Student</h3>
        {/* add student form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <input
            style={{
              padding: "1%",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            placeholder="Student Full Name"
            {...register("fullName")}
          />{" "}
          <br />
          {/* Student Roll */}
          <input
            style={{
              padding: "1%",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            placeholder="Student Roll Number"
            type="text"
            {...register("roll")}
          />{" "}
          <br />
          {/*  Student Age */}
          <input
            style={{
              padding: "1%",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            placeholder="Student Age"
            type="text"
            {...register("age")}
          />{" "}
          <br />
          {/* Student Class*/}
          <input
            style={{
              padding: "2%",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            placeholder="Student Class"
            type="text"
            {...register("studentClass")}
          />{" "}
          <br />
          {/* Student Hall Name*/}
          <input
            style={{
              padding: "2%",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            placeholder="Student Hall Name"
            type="text"
            {...register("hallName")}
          />{" "}
          <br />
          {/* status */}
          <input
            style={{
              padding: "1%",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            className="d-none"
            type="text"
            {...register("status")}
          />{" "}
          <br />
          <input
            type="submit"
            className="rounded-pill btn btn-light p-3"
            value="Add Student"
          />
        </form>
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </div>
  );
};

export default AddNewStudent;
