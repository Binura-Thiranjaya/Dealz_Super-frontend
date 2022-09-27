import React from 'react'
import Navbar from '../../../Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import productImage from "../Assests/pro.png";
import { Formik, Form } from 'formik';
import TextFields from './TextFields';
import * as Yup from 'yup';
import './add.css'

export default function AddStock() {
  const validate = Yup.object({
    productID: Yup.string().required('required'),
    barcode: Yup.string().required('required'),
    productName: Yup.string().required('required'),
    buyingPrice: Yup.number().positive('Invalid Price').required('required').typeError('Invalid Input Type'),
    sellinPrice: Yup.number().positive('Invalid Price').required('required').typeError('Invalid Input Type'),
    batchNumber: Yup.string().required('required'),
  })
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col md-5">
            <Formik
              initialValues={{
                productID: '',
                barcode: '',
                productName: '',
                buyingPrice: '',
                sellinPrice: '',
                batchNumber: ''
              }}
              validationSchema={validate}
            >
              {formik => (
                <div>
                  <h1 className="my-4 font-weight-bold-display-4">Add Products</h1>
                  <Form>
                    <TextFields label="Product ID" name="productID" type="text" />
                    <TextFields label="Product Barcode" name="barcode" type="text" />
                    <TextFields label="Product Name" name="productName" type="text" />
                    <TextFields label="Buying Price" name="buyingPrice" type="text" />
                    <TextFields label="Selling Price" name="sellinPrice" type="text" />
                    <TextFields label="Product Batch Number" name="batchNumber" type="text" />
                    <button className="add">Add Product</button>
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
