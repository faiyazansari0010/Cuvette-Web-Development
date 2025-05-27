import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setUsers, deleteUser, updateUser } from "./formSlice";
import * as Yup from "yup";

const Form = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.form.userData);
  const users = useSelector((state) => state.form.users);
  const [errors, setError] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
      .required("Email is required!"),
    password: Yup.string().required("Password is required!"),
    confirmPassword: Yup.string()
      .required("Confirm password is required!")
      .oneOf([Yup.ref("password"), null], "Passwords do not match"),
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await validationSchema.validate(userData, { abortEarly: false });

      if (!userData.id) {
        dispatch(setUsers({ ...userData, id: Date.now() }));
      } else {
        const updatedUsers = users.map((item) =>
          item.id === userData.id ? { ...userData } : item
        );
        dispatch(updateUser(updatedUsers));
      }
      dispatch(
        setUser({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          id: "",
        })
      );

      setError({});
    } catch (error) {
      const validationError = {};
      if (error.inner) {
        error.inner.forEach((err) => {
          validationError[err.path] = err.message;
        });
      }
      setError(validationError);
    }
  }

  return (
    <>
      <form>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={(e) => dispatch(setUser({ name: e.target.value }))}
        />
        {errors.name && (
          <>
            <br />
            <span style={{ color: "red", marginLeft: "50px" }}>
              {errors.name}
            </span>
          </>
        )}
        <br />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={(e) => dispatch(setUser({ email: e.target.value }))}
        />
        {errors.email && (
          <>
            <br />
            <span style={{ color: "red", marginLeft: "50px" }}>
              {errors.email}
            </span>
          </>
        )}
        <br />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={(e) => dispatch(setUser({ password: e.target.value }))}
        />
        {errors.password && (
          <>
            <br />
            <span style={{ color: "red", marginLeft: "50px" }}>
              {errors.password}
            </span>
          </>
        )}
        <br />
        <br />
        <label>Confirm password: </label>
        <input
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={(e) =>
            dispatch(setUser({ confirmPassword: e.target.value }))
          }
        />
        {errors.confirmPassword && (
          <>
            <br />
            <span style={{ color: "red", marginLeft: "50px" }}>
              {errors.confirmPassword}
            </span>
          </>
        )}

        <br />
        <br />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          {userData.id ? "Update" : "Save"}
        </button>
      </form>

      <br />
      <br />

      <table style={{ border: "2px solid black" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => dispatch(setUser(users[index]))}>
                  Edit
                </button>
                <button onClick={() => dispatch(deleteUser(item.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;
