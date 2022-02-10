import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const AddFood = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm();
  // onsubmit function
  const onSubmit = (data) => {
    axios.post(" http://localhost:5000/foods", data).then((res) => {
      if (res.data.insertedId) {
        setSuccess("Food added successfully");
        reset();
      }
    });
  };
  // setValue("status", "InActive");
  return (
    <div className="pt-5 form-design">
      <h3 className="text-white pt-5">Please Add Foods</h3>
      {/* add food form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Food Img-url"
          {...register("foodImage")}
        />{" "}
        <br />
        {/* Food title */}
        <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Food Name"
          type="text"
          {...register("foodName")}
        />{" "}
        <br />
        {/*  food price */}
        <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Food Price"
          type="text"
          {...register("price")}
        />{" "}
        <br />
        {/* food Id*/}
        <input
          style={{
            padding: "2%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          placeholder="Food Id"
          type="text"
          {...register("foodId")}
        />{" "}
        <br />
        {/* status */}
        {/* <input
          style={{
            padding: "1%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          className="d-none"
          type="text"
          {...register("status")}
        />{" "}
        <br /> */}
        <input
          type="submit"
          className="rounded-pill btn btn-light p-3"
          value="Add Food"
        />
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddFood;
