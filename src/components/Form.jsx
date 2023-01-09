import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';


const SignupForm = () => {

  const formik = useFormik({
    initialValues: {
      name:'',
      quantityPerUnit:'',
      unitPrice:'',
      unitsInStock: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less').min(3,'Must be 3 or more')
        .required('Required'),
        quantityPerUnit: Yup.string()
        .max(15, 'Must be 15 characters or less').min(2,'Must be 3 or more')
        .required('Required'),
        unitPrice: Yup.string()
        .max(15, 'Must be 15 characters or less').min(1,'Must be 3 or more')
        .required('Required'),
        unitsInStock: Yup.string()
        .max(15, 'Must be 15 characters or less').min(1,'Must be 3 or more')
        .required('Required'),
    }),
    onSubmit: values => {
      toast.success('Successfully posted!')
      axios.post('https://northwind.vercel.app/api/products',values).then((res)=>console.log(res.data))
    },
  });
  return (
    
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Product name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="quantityPerUnit">quantityPerUnit</label>
      <input
        id="quantityPerUnit"
        name="quantityPerUnit"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.quantityPerUnit}
      />
      {formik.touched.quantityPerUnit&& formik.errors.quantityPerUnit? (
        <div>{formik.errors.quantityPerUnit}</div>
      ) : null}

      <label htmlFor="unitPrice">unitPrice</label>
      <input
        id="unitPrice"
        name="unitPrice"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.unitPrice}
      />
      {formik.touched.unitPrice && formik.errors.unitPrice ? (
        <div>{formik.errors.unitPrice}</div>
      ) : null}
       <label htmlFor="name">unitsInStock</label>
      <input
        id="unitsInStock"
        name="unitsInStock"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.unitsInStock}
      />
      {formik.touched.unitsInStock && formik.errors.unitsInStock ? (
        <div>{formik.errors.unitsInStock}</div>
      ) : null}
      <button  type="submit" >Submit</button>
      <Toaster/>
    </form>
  );
};

export default SignupForm