import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export default function AddCustomer() {
  const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0.0);
    const [quantity, setQuantity] = useState(0.0);
    const [total, setTotal] = useState(0.0);
    const [totalSum, setTotalSum] = useState(0.0);
    const [discount, setDiscount] = useState(0.0);
    const [discountInvoice, setDiscountInvoice] = useState(0.0);
    const [netTotal, setNetTotal] = useState(0.0);
    const [balance, setBalance] = useState(0.0);
    const [paid, setPaid] = useState(0.0);
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    const saveUser=()=>{
       // navigate('addCustomer');  
       let Mobile = prompt("Please enter your Mobile Number", "0771234567");
       let Address = prompt("Please enter your Address", "No. 123, Galle Road, Colombo 03");
       let Name = prompt("Please enter your Name", "Binura Thiranjaya");
       if((Mobile != null  && Name != null) || Address != null ){
           alert("Customer Added Successfully");
       }
    }
    const save=()=>{
        console.log("saving");
        console.log("code ",code+" name ",name+" price ",price+" quantity ",quantity+" total ",total+" discount ",discount+" discountInvoice ",discountInvoice+" balance ",balance+" paid ",paid);
        alert("Invoice Added Successfully");

        //Database Data to DB

    }
    const print=()=>{
        alert("Invoice Printed Successfully");
    }
    const addProduct=(e)=>{
        const Sum = price*quantity-discount;
        setTotalSum(totalSum+Sum);
        setItems([...items,{code:code,name:name,price:price,quantity:quantity,discount:discount,total:Sum}]);
        alert("Product Added Successfully Rs."+Sum +"/- ");
        document.getElementById("code").value = "";
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("discount").value = "";
        document.getElementById("code").focus();
    }
   
    const productDelete = (index,e) => {
        setItems(items.filter((v, i) => i !== index));
        setTotalSum(totalSum-items[index].total);
    }
    function changePaid(event) {
        setPaid(event.target.value);
    }
    function changeDiscount(event) {
        setDiscountInvoice(event.target.value);
    }

  return (
  
    <div>   
        <div className="row">
            <div className="col-sm">
            <h1>Add Product</h1>
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
                    <input type="number" className="form-control" id="price" placeholder="Enter Price"
                        onChange={(e)=>setPrice(e.target.value)
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" className="form-control" id="quantity" placeholder={quantity}
                        onChange={(e)=>setQuantity(e.target.value)
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="discount">Discount</label>
                    <input type="number" className="form-control" id="discount" placeholder="Enter Discount"
                        onChange={(e)=>setDiscount(e.target.value)
                    }/>
                </div>
                <button type="submit" className="btn btn-outline-success mt-2" onClick={addProduct}>Add Product</button>
        </div>
            <div className="col-sm">
            <h1>Billing Information</h1>
            <form>
                <div className="form-group row">
                    <label for="total" className="col-sm-2 col-form-label">Total</label>
                    <div className="col-sm-10">
                        <p className="form-control-plaintext" id="total">{totalSum}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="Discount" class="col-sm-2 col-form-label">Discount</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="discountInvoice" placeholder="Enter Discount" onChange={changeDiscount}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="net" class="col-sm-2 col-form-label">Net</label>
                    <div className="col-sm-10">
                        <p className="form-control-plaintext" id="Net">{totalSum-discountInvoice}</p>
                    </div>
                </div>
                 <div className="form-group row">
                    <label for="paid" class="col-sm-2 col-form-label">Paid</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="paid"  placeholder="Paid" onChange={changePaid}/>                    
                    </div>
                </div>
                <div className="form-group row">
                    <label for="Balance" className="col-sm-2 col-form-label">Balance</label>
                    <div className="col-sm-10">
                        <p className="form-control-plaintext" id="Balance">{(totalSum-discountInvoice)-paid}</p>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-info mt-2 m-1 " onClick={save}>Save</button>
                <button type="submit" className="btn btn-dark mt-2 m-1" onClick={print}>Print</button>
                <button type="submit" className="btn btn-dark mt-2 m-1" onClick={saveUser}>Loyalty Points</button>
                </form>               
            </div>
        </div>
        <table className="table" id="table_data">
        <thead>
            <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Discount</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item,index)=>(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.discount}</td>
                    <td>{item.price*item.quantity-item.discount}</td>
                    <td><button type="submit" className="btn btn-danger mt-2 m-1" onClick={e=> productDelete(index,e)}>Delete</button></td>


                </tr>
            ))}
        </tbody>
        </table>

    </div>
    )
}

