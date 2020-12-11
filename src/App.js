import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login'
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51HxFrWIkwYaVGdxBLd8oYpC1jexoHyoCVZDGy0D5kdiPBy85TmdLTbQOwp1OrfkKYUM6a6dmLVMtAW2NaSB0CWPM00hy9xhI5M');

function App() {
	// eslint-disable-next-line
	const [{}, dispatch] = useStateValue();

	useEffect(() => {

		auth.onAuthStateChanged(authUser => {
			if (authUser) {
				// the just logged in or already logged in					
				dispatch({
					type: 'SET_USER',
					user: authUser
				});				
			} else {
				// user is logged out
				dispatch({
					type: 'SET_USER',
					user: null
				});			}
		})		
		return () => {
			// cleanup tasks here
		}
		// when we pass an empty array, this useEffect will on run once when app component loads
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path ="/login">
						<Login />
					</Route>

					<Route path ="/checkout">
						<Header />
						<Checkout />
					</Route>

					<Route path ="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>

					{/* default route at the bottom */}
					<Route path ="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
