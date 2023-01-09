import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';


const SignupForm = () => {

  const formik = useFormik({
    initialValues: {
      subject:'',
      description:'',
      category:''
    },
    validationSchema: Yup.object({
      subject: Yup.string()
        .max(15, 'Must be 15 characters or less').min(3,'Must be 3 or more')
        .required('Required'),
        description: Yup.string()
        .max(15, 'Must be 15 characters or less').min(3,'Must be 3 or more')
        .required('Required'),
        category: Yup.string()
        .max(15, 'Must be 15 characters or less').min(3,'Must be 3 or more')
        .required('Required'),
    }),
    onSubmit: values => {
      toast.success('Successfully posted!')
      axios.post('https://northwind.vercel.app/api/products',values).then((res)=>console.log(res.data))
    },
  });
  return (
    
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="subject">subject</label>
      <input
        id="subject"
        name="subject"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
      />
      {formik.touched.subject && formik.errors.subject ? (
        <div>{formik.errors.subject}</div>
      ) : null}

      <label htmlFor="description">description</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />
      {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}

      <label htmlFor="category">category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.category}
      />
      {formik.touched.category && formik.errors.category ? (
        <div>{formik.errors.category}</div>
      ) : null}
      <button  type="submit" >Submit</button>
      <Toaster/>
    </form>
  );
};

export default SignupForm