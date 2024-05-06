import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import supabase from "./Supabase.jsx";
const SignupSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  para1: Yup.string().required("Required"),
  para2: Yup.string().required("Required"),
  para3: Yup.string().required("Required"),
});

const CreateBlog = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          image: "",
          para1: "",
          para2: "",
          para3: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          const { data, error } = await supabase.from("blogs").insert([
            {
              id: Math.floor(Math.random() * 9),
              title: values.title,
              description: values.description,
              image: values.image,
              para1: values.para1,
              para2: values.para2,
              para3: values.para3,
            },
          ]);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex gap-4 max-w-screen-md mx-auto flex-col">
            <label htmlFor="Title">Title</label>
            <Field name="title" className="border rounded-md border-black" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <label htmlFor="Description">Description</label>
            <Field
              name="description"
              className="border rounded-md border-black"
            />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}
            <label htmlFor="image">image</label>
            <Field name="image" className="border rounded-md border-black" />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}
            <label htmlFor="para1">para1</label>
            <Field name="para1" className="border rounded-md border-black" />
            {errors.para1 && touched.para1 ? <div>{errors.para1}</div> : null}
            <label htmlFor="para2">para2</label>
            <Field name="para2" className="border rounded-md border-black" />
            {errors.para2 && touched.para2 ? <div>{errors.para2}</div> : null}
            <label htmlFor="para3">para3</label>
            <Field name="para3" className="border rounded-md border-black" />
            {errors.para3 && touched.para3 ? <div>{errors.para3}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateBlog;
