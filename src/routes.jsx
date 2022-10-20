import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import AddStock from "./Pages/Stock/AddStock/AddStock"
import AddUser from "./Pages/User/AddUser/AddUser"
import AddSupplier from "./Pages/Supplier/AddSupplier/AddSupplier"
import AddBill from "./Pages/Sales/AddBill/AddSale"
import AddCustomer from "./Pages/Sales/AddBill/AddCustomer/AddCustomer"
import SearchBill from "./Pages/Sales/SearchBill/index"

export const routes = [
    {
        path: '/login',
        Component: <Login/>
    },
    {
        path: '/',
        Component: <Home/>
    },
    {
        path: '/addstock',
        Component: <AddStock/>
    },
    {
        path: '/adduser',
        Component: <AddUser/>
    },
    {
        path: '/addsupplier',
        Component: <AddSupplier/>
    },
    {
        path: '/addbill',
        Component: <AddBill/>
    },
    {
        path: '/addbill/addcustomer',
        Component: <AddCustomer/>
    },
    {
        path: '/search-bill',
        Component: <SearchBill/>
    }

]