import * as React from "react";
import { Component } from "react";
import "./App.css";


function AppHeader() {
	return (
		<div>
			<nav className="navbar navbar-default">
				<div className="col-md-offset-4 container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Contact List</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li className="btn btn-default"><a href="#">Add<span class="sr-only">(current)</span></a></li>
							<li className="btn btn-default"><a href="#">Link</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

class NameCaller extends React.Component {
	constructor(){
		super();
		this.state = {
			name: "",
			surName: ""};
	}
	
	output(){
		this.setState (() => {
			return { 
				name: this.refs.name.value,
				surName: this.refs.surName.value
			}
		})
	}
	
	render(){
		return (
			<div>
				<input type="text" placeholder="Name" ref="name" oninput="{this.output.bind(this)}"></input>
				<input type="text" placeholder="Surname" ref="surName" oninput="{this.output.bind(this)}"></input>
				<output> {this.state.name} {this.state.surName} </output>
			</div>
		);
	}
}
	
class ClickCounter extends React.Component {
	constructor() {
		super();
		this.state = {counter: 0,
			doubleClick: 0,
			totalCount: 0};
	}

	render() {
		return (
			<div className="text-center">
				
				<button onClick={this.increment.bind(this)}>+1</button>
				<div onDoubleClick={this.doubleClickMachine.bind(this)}>
					<output>Kliknięcia: {this.state.counter}</output>
					<output>Suma kliknięć: {this.state.totalCount}</output>
					<output>Podwójne kliknięcia: {this.state.doubleClick}</output>
				</div>
				<button onClick={this.decrement.bind(this)}>-1</button>	
			</div>
		);	
	}	
	increment() {
		this.setState({
			counter: this.state.counter + 1,
			totalCount: this.state.totalCount + 1
		});
	}	
	decrement() {
		this.setState({
			counter: this.state.counter - 1,
			totalCount: this.state.totalCount + 1
		});
	}

	doubleClickMachine() {
		this.setState({
			doubleClick: this.state.doubleClick + 1
		});
	}
}


function ContactsList() {
	return (
		<div>
			<div className="list-group text-center">
				<ContactItem
					avatarLogin="sunbites@gmail.com"
					name="Matt"
					department="Java Developer"
				/>
				<ContactItem
					avatarLogin="admin666"
					name="Stephan"
					department="UX Design"
				/>
				<ContactItem
					avatarLogin="qwerty123"
					name="Maria"
					department="Wordpress Developer"
				/>     
			</div>
		</div>
	);
}

function ContactItem( { avatarLogin, name, department } ) {
	return (
		<div className="item">
			<a href="#" className="list-group-item">
				<UserAvatar login={avatarLogin} />
				<h4>{name}</h4> 
				<p>{department}</p>
			</a>
		</div>
	);
}
 
function UserAvatar( { login } ) {
	let imgUrl;
 
	if (login.includes("@")) {
		imgUrl = "https://78.media.tumblr.com/avatar_4ed6e2f869e8_128.pnj";

	} else {
		imgUrl = "https://78.media.tumblr.com/avatar_37cec57dd00d_128.png";

	}
	return (
		<img src={imgUrl}/>
	);
}

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<AppHeader />
				<ContactsList />
				<ClickCounter />
			</div>
		);
	}
}

export default App;
