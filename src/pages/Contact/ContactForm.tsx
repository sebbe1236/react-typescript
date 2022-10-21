import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../utils/api";

function ContactForm() {
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(null);

  const url = BASE_URL + "contacts";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
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
      reset();
    } catch (error: any) {
      setError(error.toString());
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Title</label>
            <input type="text" {...register("title", { required: true, minLength: 3 })} placeholder="name" />
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
      </div>
    </>
  );
}

export default ContactForm;
