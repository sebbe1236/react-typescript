import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "../../components/layout/Heading";
import { BASE_URL } from "../../utils/api";

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
  const [submit, setSubmit] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successfulSubmit, setSuccessful] = useState<boolean>(false);

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
      setSuccessful(result);
      reset();
    } catch (error: any) {
      setError(error.toString());
    }
  };

  return (
    <>
      <Heading>Contact form</Heading>
      <div>
        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Title</label>
            <input type="text" {...register("title", { required: true, minLength: 3 })} placeholder="Title" />
            {errors.title && <div>Name must be over 3 letters</div>}
          </div>

          <div>
            <label>Enter email address</label>
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              placeholder="email"
            />
            {errors.email && <div>Please enter a valid email address</div>}
          </div>

          <div>
            <label>Fill in your question below</label>
            <textarea
              {...register("description", { required: true, minLength: 20 })}
              placeholder="description"
            ></textarea>
            {errors.description && <div>Subject must contain 20 letters or more</div>}
          </div>
          <button type="submit" className="submit_button p-3 m-3">
            {submit ? "sending" : "submit"}
          </button>
        </form>
        {error && <div>form couldn't`t be sent.</div>}
        {successfulSubmit && <div>Your form has been sent. We will get back to you shortly. </div>}
      </div>
    </>
  );
}

export default ContactForm;
