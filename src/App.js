import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path ="/checkout">
						<Header />
						<h1>basket</h1>
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
