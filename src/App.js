import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
function App() {
  return (
    <div className="App">
     	<React.Fragment> {/*es posible declarar React.Fragment solo como etiquetas <></>, 
		   * este cmp facilita reagrupar cmp en sustituci'on del di sin escribir este cmp en el DOM*/}
			<NavBar />
			<Switch>	
				<Route exact path="/" component={ProductList}/>
				<Route path="/details" component={Details}/>
				<Route path="/cart" component={Cart}/>
				<Route component={Default}/>
			</Switch>	
		</React.Fragment>		 
    </div>
  );
}


export default App;

/*class App extends Component{
	render(){
		<div className="container">
			<div className="row">
				<div className="col-6">coolumn number one</div>
				<div className="col-6">coolumn number two</div>
			</div>
		</div>		
	}
}*/



