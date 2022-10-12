import React, { useState } from 'react';
import Customer from '../AddCustomer/AddCustomer'
import {Routes, Route, useNavigate} from 'react-router-dom';


export default function AddCustomer() {
  const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [total, setTotal] = useState('');
    const [discount, setDiscount] = useState('');
    const [discountInvoice, setDiscountInvoice] = useState('');
    const [balance, setBalance] = useState('');
    const [paid, setPaid] = useState('');
    const navigate = useNavigate();


    const saveDB=()=>{
        // <Routes>
        //     <Route path="/addCustomer" element={<Customer/>}/>
        // </Routes>
        navigate('addCustomer');
    }

  return (
  
    <div>   
        <div className="row">
            <div className="col-sm">
            <h1>Add Product</h1>
            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="code">Code</label>
                    <input type="text" className="form-control" id="code" placeholder="Enter Code"
                        onChange={(e) => setCode(e.target.value)
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name"
                        onChange={(e)=>setName(e.target.value)
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" placeholder="Enter Price"
                        onChange={(e)=>setPrice(e.target.value)
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" className="form-control" id="quantity" placeholder="Enter Quantity"
                        onChange={(e)=>setQuantity(e.target.value)
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="discount">Discount</label>
                    <input type="text" className="form-control" id="discount" placeholder="Enter Discount"
                        onChange={(e)=>setDiscount(e.target.value)
                    }/>
                </div>
                <button type="submit" className="btn btn-warning mt-2">Add Product</button>
            </form>
        </div>

            <div className="col-sm">
            <h1>Add Customer</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="total">Total</label>
                    <input type="text" className="form-control" id="total" placeholder="Total"
                        onChange={(e)=>setTotal(e.target.value)
                    }/>
                </div>
                 <div className="form-group">
                    <label htmlFor="discountInvoice">Discount</label>
                    <input type="text" className="form-control" id="discountInvoice" placeholder="Discount"
                        onChange={(e)=>setDiscountInvoice(e.target.value)
                    }/>
                </div>
                 <div className="form-group">
                    <label htmlFor="paid">Paid</label>
                    <input type="text" className="form-control" id="paid" placeholder="Paid"
                        onChange={(e)=>setPaid(e.target.value)
                    }/>
                 </div>
                <div className="form-group">
                    <label htmlFor="balance">Balance</label>
                    <input type="text" className="form-control" id="balance" placeholder="Balance"
                        onChange={(e)=>setBalance(e.target.value)
                    }/>
                </div>
                <button type="submit" className="btn btn-warning mt-2" onClick={saveDB}>Save</button>
                </form>               
            </div>
        </div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Discount</th>
            <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Coca Cola</td>
            <td>1</td>
            <td>0</td>
            <td>150</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Coca Cola</td>
            <td>1</td>
            <td>0</td>
            <td>150</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Coca Cola</td>
            <td>1</td>
            <td>0</td>
            <td>150</td>
            </tr>
        </tbody>
        </table>

    </div>
    )
}
