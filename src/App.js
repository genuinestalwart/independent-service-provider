import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import Banner from './components/Home/Banner/Banner';
import Extra from './components/Home/Extra/Extra';
import Services from './components/Home/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import InformToast from './components/Shared/InformToast/InformToast';
import useAuth from './hooks/useAuth';

function App() {
	const { registered, setRegistered, user, setUser, info, setInfo, showToast, setShowToast } = useAuth();

	return (
		<div className="App">
			<Header registered={registered} user={user}></Header>

			<main>
				<InformToast info={info} show={showToast}></InformToast>

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
					<Route path='/register' element={<Register registered={registered} setRegistered={setRegistered} setUser={setUser} setInfo={setInfo} setShowToast={setShowToast}></Register>}></Route>
				</Routes>
			</main>

			<Footer></Footer>
		</div>
	);
}

export default App;
