import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import Banner from './components/Home/Banner/Banner';
import Extra from './components/Home/Extra/Extra';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import User from './components/User/User';

function App() {
	return (
		<div className="App">
			<Header></Header>

			<main>
				<Routes>
					<Route path='/' element={<div>
						<Banner></Banner>
						<Services></Services>
						<Extra></Extra>
					</div>}></Route>
					<Route path='*' element={<NotFound></NotFound>}></Route>
					<Route path='/checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
					<Route path='/blogs' element={<Blogs></Blogs>}></Route>
					<Route path='/about' element={<About></About>}></Route>
					<Route path='/login' element={<Login></Login>}></Route>
					<Route path='/register' element={<Register></Register>}></Route>
					<Route path='/user' element={<RequireAuth><User></User></RequireAuth>}></Route>
				</Routes>
			</main>

			<Footer></Footer>
		</div>
	);
}

export default App;
