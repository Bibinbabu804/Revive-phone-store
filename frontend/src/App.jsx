
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contacts from './pages/Contacts'
import Product from './pages/Product'
import Carts from './pages/Carts'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './pages/AdminDashboard'
// import Chat from '../../admin/src/pages/Chat'
import ClientChat from './pages/ClientChat'



function App() {


  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >

<ToastContainer />
      
<Header/>
<SearchBar/>
       <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contacts/>} />
    
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Carts/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Login register={true} />} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/admindashboard' element={<AdminDashboard/>} />
        {/* <Route path='/chat' element={<Chat/>} /> */}
       <Route path='/chat'element={<ClientChat/>} />
      





       </Routes>
       <Footer/>


    </div>
  )
}

export default App
