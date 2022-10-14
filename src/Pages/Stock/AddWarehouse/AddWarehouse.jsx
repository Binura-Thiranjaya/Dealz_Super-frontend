import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form } from 'formik';
import TextFields from './TextFields';
import * as Yup from 'yup';
import './add.css'
import axios from 'axios';
import * as AiIcons from "react-icons/ai";
import { addwarehouse } from './AddWarehouse.helper';

export default function AddStock() {

  const [warehouse, setwarehouse] = useState([]);
  useEffect(()=>{
    axios
    .get('http://localhost:5000/warehouse')
    .then(res=>{
      console.log(res)
      setwarehouse(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
    },[])

  const validate = Yup.object({
    warehouseID: Yup.string().required('required'),
    location: Yup.string().required('required'),
  })
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col md-5 ">
            <Formik
              initialValues={{
                warehouseID: '',
                location: ''
              }}
              validationSchema={validate}
            >
              {formik => (
                <div>
                  <h1 className="my-4 font-weight-bold-display-4">Add New Warehouse</h1>
                  <Form>
                    <TextFields label="Warehouse ID" name="warehouseID" type="text" />
                    <TextFields label="Location" name="location" type="text" />
                    <button className="add" onClick={()=>{
                      addwarehouse(formik.values)
                      .then(() => {
                        formik.resetForm()
                        window.alert('Warehouse Added Sucessfully')
                      })
                      .catch((err) => {
                        window.alert('Warehouse Adding Unsucessfull')
                      })
                    }}>Add Warehouse</button>
                    <button className="reset" type='reset'>Reset</button>
                    {/* <div></div> */}
                  </Form>
                </div>
              )}
            </Formik>
          </div>
          <div className="col md-7 my-auto">
          <table className="table table-striped table-dark ">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Warehouse ID</th>
                  <th scope="col">Location</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  warehouse.map(getwh => (
                    <tr key={getwh.id}>
                      <td>{getwh.warehouseID}</td>
                      <td>{getwh.location}</td>
                      <td><AiIcons.AiTwotoneEdit/></td>
                      <td><AiIcons.AiFillDelete/></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  )
}
