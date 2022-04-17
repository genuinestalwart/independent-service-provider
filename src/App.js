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

function App() {
	return (
		<div className="App" style={{ textAlign: 'center' }}>
			<Header></Header>

			<main style={{ marginTop: '2rem' }}>
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
				</Routes>
			</main>

			<Footer></Footer>
		</div>
	);
}

export default App;
