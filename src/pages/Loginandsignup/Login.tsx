// @ts-nocheck
import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useAuth } from "../../components/context/Context";
import { BASE_URL } from "../../utils/api";

type FormData = {
  username: string;
  password: string;
};

type signInProps = {
  username: string;
  password: string;
};

function Login() {
  const [submitting, setSubmit] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccessMessage] = useState(false);

  const url = BASE_URL + "auth/local";

  const [auth, setAuth] = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: signInProps) => {
    setSubmit(true);
    setError(null);

    try {
      const response = await axios.post(url, {
        identifier: data.username,
        password: data.password,
      });
      setAuth(response.data.jwt);
      setSuccessMessage(response.data);
      reset();
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setSubmit(false);
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
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" {...register("password", { required: true })} />
          {errors.password && <div>invalid password</div>}
        </Form.Group>

        <Button variant="primary" type="submit">
          {submitting ? "Logging in" : "Log in"}
        </Button>
      </Form>
      {success && <div>You have been successfully logged in.</div>}
      {error && <div>Something went wrong. Please contact customer support.</div>}
    </>
  );
}

export default Login;
