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
						<a className="navbar-brand" href="navbar">Contact List</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li className="btn btn-default"><a href="button-adress">Add<span className="sr-only">(current)</span></a></li>
							<li className="btn btn-default"><a href="button-adress">Link</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}


class NameCaller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {fname: "",
			lname: ""};
	}

	render() {
		return (
			<div className="text-center">
				<label htmlFor="…">First name:</label> <input oninput=                    	{this.onInputNameChange}/>		                      {this.state.fname}
				<label htmlFor="…">Last name:</label> <input oninput=
					{this.onInputNameChange}/>
				{this.state.lname}
			</div>
		);
	}

	onInputNameChange = () => {
		this.setState({
			fname: this.state.fname.target.value,
			lname: this.state.lname.target.value
		});
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
				<button onClick={this.increment}>+1</button>
				<div onDoubleClick={this.doubleClickMachine}>
					<output>Kliknięcia: {this.state.counter}</output>
					<output>Suma kliknięć: {this.state.totalCount}</output>
					<output>Podwójne kliknięcia: {this.state.doubleClick}</output>
				</div>
				<button onClick={this.decrement}>-1</button>	
			</div>
		);	
	}	

	increment = () => {
		this.setState({
			counter: this.state.counter + 1,
			totalCount: this.state.totalCount + 1
		});
	}	
	decrement = () => {
		this.setState({
			counter: this.state.counter - 1,
			totalCount: this.state.totalCount + 1
		});
	}
	doubleClickMachine = () => {
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

class MyFirstForm extends React.Component {
  state = {
    name: '',
    color: 'blue',
    message: '',
    isChecked: true,
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  handleColorChange = (e) => {
    this.setState({
      color: e.target.value
    });
  }
  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }
  handleCheckboxChange = (e) => {
    this.setState({
      isChecked: e.target.checked
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleNameChange} />
        <select value={this.state.color} onChange={this.handleColorChange}>
          <option value="red">Czerwony</option>
          <option value="blue">Niebieski</option>
          <option value="green">Zielony</option>
        </select>
        <textarea value={this.state.message} onChange={this.handleMessageChange} />
        <label>
          <input type="checkbox" checked={this.state.isChecked} onChange={this.handleCheckboxChange} />
        </label>
      </div>
    );
  }
}

function ContactItem( { avatarLogin, name, department, selectedUser } ) {

	return (
		<div className="item">
			<a href="contact-link" className="list-group-item">
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
		<img src={imgUrl} alt=""/>
	);
}

class App extends React.Component {
	state = {
		contacts: []
	  };
	
	  componentDidMount() {
		fetch("https://randomuser.me/api/?format=json&results=10")
		  .then(res => res.json())
		  .then(json => this.setState({ contacts: json.results }));
	  }

	render() {
		return (
			<div className="App">
				<AppHeader />
				<Parent />
				<NameCaller />
				<SearchForm />
				<ContactsList />
				<ClickCounter />
				<UserBox />
				<main className="ui main text container">
          		<ContactsArray contacts={this.state.contacts} />
				</main>
			</div>
		);
	}
}

export default App;
