import {React,useState} from 'react'

export default function SearchBill() {
    const [billNo, setBillNo] = useState('');

    const findBill=()=>{
        console.log("Bill No is:",billNo);
        console.log("searching bill");
    }

  return (
    <div className="container">
        <div className="d-flex justify-content-center">
            <h1>Search Bill</h1><br/>
        </div>
        <div className="row justify-content-center">
            <div className="col-4">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Invoice ID</span>
                    </div>
                    <input type="text" className="form-control" aria-label="inv_id" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setBillNo(e.target.value)}/>
                </div>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-primary mr-1" onClick={findBill}>Search</button>
                <button type="button" className="btn btn-danger ">Cancel</button>            
            </div>
        </div>
    </div>


  )
}
