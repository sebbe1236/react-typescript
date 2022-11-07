import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../utils/api";
import useAuth from "../../components/context/Context";

type signupProps = {
  username: string;
  email: string;
  password: string;
};

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const url = BASE_URL + "auth/local/register";

function Signup() {
  const [signup, setSignUp] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  //const [auth, setAuth] = useAuth(); const [auth, setAuth] = useAuth(); element is not a array type error message

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: signupProps) => {
    setSignUp(true);
    setError(null);
    try {
      const response = await axios.post(url, {
        username: data.username,
        password: data.password,
        email: data.email,
      });
      console.log(response.data);
      console.log(response.data.jwt);

      reset();
    } catch (error: any) {
      console.log(error);
      setError(error.toString());
    } finally {
      setSignUp(false);
    }
  };

  return (
    <>
      <Form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter username" {...register("username", { required: true })} />
          {errors.username && <div>invalid username</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && <div>invalid username</div>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" {...register("password", { required: true })} />
          {errors.password && <div>invalid username</div>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Signup;
