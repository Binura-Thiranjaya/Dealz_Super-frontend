import React from 'react'
import Navbar from '../../../Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import productImage from "../Assests/pro.png";
import { Formik, Form } from 'formik';
import TextFields from './TextFields';
import * as Yup from 'yup';
import './add.css'

import { addbatch } from './Addbatch.helper';


export default function AddStock() {
  const validate = Yup.object({
    productId: Yup.string().required('required'),
    batchNo: Yup.string().required('required'),
    ManufacturerBNo: Yup.string().required('required'),
    mfDate: Yup.date().required('required'),
    exDate: Yup.date().required('required'),
    buyingPrice: Yup.number().positive('Invalid Price').required('required').typeError('Invalid Input Type'),
    sellingPrice: Yup.number().positive('Invalid Price').required('required').typeError('Invalid Input Type'),
  })
  return (
    <>
      <Navbar />
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col md-5">
            <Formik
              initialValues={{
                productId: '',
                batchNo: '',
                ManufacturerBNo: '',
                mfDate: '',
                exDate: '',
                buyingPrice: '',
                sellingPrice: ''
              }}
              validationSchema={validate}
            >
              {formik => (
                <div>
                  <h1 className="my-4 font-weight-bold-display-4">Add New Product</h1>
                  <Form>
                    <TextFields label="Product ID" name="productId" type="text" />
                    <TextFields label="Batch Number" name="batchNo" type="text" />
                    <TextFields label="Manufacturer Batch Number" name="ManufacturerBNo" type="text" />
                    <TextFields label="Manufacture Date" name="mfDate" type="date" />
                    <TextFields label="Expire Date" name="exDate" type="date" />
                    <TextFields label="Buying Price" name="buyingPrice" type="text" />
                    <TextFields label="Selling Price" name="sellingPrice" type="text" />
                    <button className="add" onClick={()=>{
                      addbatch(formik.values)
                      .then(() => {
                        formik.resetForm()
                        window.alert('Batch Added Sucessfully')
                      })
                      .catch((err) => {
                        window.alert('Batch Adding Unsucessfull')
                      })
                    }}>Add Product</button>
                    <button className="reset" type='reset'>Reset</button>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
          <div className="col md-7 my-auto ">
            <img className="img-fluid w-100" src={productImage} alt='' />
          </div>
        </div>
      </div>


    </>
  )
}
