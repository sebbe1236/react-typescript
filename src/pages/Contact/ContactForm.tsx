import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "../../components/layout/Heading";
import { BASE_URL } from "../../utils/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

type FormData = {
  title: string;
  description: string;
  email: string;
};

type dataPropsOnSubmit = {
  title: string;
  description: string;
  email: string;
};

function ContactForm() {
  const [submitting, setSubmit] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successfulSubmit, setSuccessfulMessage] = useState<boolean>(false);

  const url = BASE_URL + "contacts";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: dataPropsOnSubmit) => {
    setSubmit(true);
    setError(null);

    const contactData = {
      data: {
        title: data.title,
        description: data.description,
        email: data.email,
      },
    };

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setSuccessfulMessage(result);
      reset();
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setSubmit(false);
    }
  };

  return (
    <>
      <Heading>Contact form</Heading>

      <Form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="title" {...register("title", { required: true, minLength: 3 })} />
          {errors.title && <div>Name must be over 3 letters</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && <div>Please enter a valid email address</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Fill in your question below</Form.Label>
          <Form.Control as="textarea" rows={5} {...register("description", { required: true, minLength: 20 })} />
        </Form.Group>
        {errors.description && <div>Subject must contain 20 letters or more</div>}

        <div>
          <Button type="submit">{submitting ? "Sending" : "Submit"}</Button>
        </div>
      </Form>
      {successfulSubmit && (
        <div className="p-3 h3 text-center">Your form has been sent. We will get back to you shortly. </div>
      )}
      {error && <div>form couldn't`t be sent.</div>}
    </>
  );
}

export default ContactForm;
