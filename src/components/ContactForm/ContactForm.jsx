import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .matches(/^[0-9-]+$/, "Only numbers and dashes are allowed")
      .required("Number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <label>
            Name:
            <Field className={styles.contactFormInput} type="text" name="name" />
            <ErrorMessage className={styles.error} name="name" component="div" />
          </label>
          <label>
            Number:
            <Field className={styles.contactFormInput} type="text" name="number" />
            <ErrorMessage className={styles.error} name="number" component="div" />
          </label>
          <button className={styles.contactFormButton} type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
