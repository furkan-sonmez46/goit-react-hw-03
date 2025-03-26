import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 karakter olmalı')
      .max(50, 'Maksimum 50 karakter olabilir')
      .required('İsim gerekli'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67')
      .required('Numara gerekli'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.contactForm}>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" autoComplete="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <Field type="text" id="number" name="number" autoComplete="tel" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
