import * as React from 'react';
import { Component } from 'react';
import './App.css';


function AppHeader() {
  return (
    <div>
      <nav class="navbar navbar-default">
      <div class="col-md-offset-4 container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
        <a class="navbar-brand" href="#">Contact List</a>
        </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="btn btn-default"><a href="#">Add <span class="sr-only">(current)</span></a></li>
            <li class="btn btn-default"><a href="#">Link</a></li>
              </ul>
          </div>
        </div>
        </nav>
    </div>
  );
}

function ContactsList() {
  return (
    <div>
      <div class="list-group text-center">
          <a href="#" class="list-group-item"><p>Matt</p> Java Developer</a>
          <a href="#" class="list-group-item"><p>Stephan</p> UX Design</a>
          <a href="#" class="list-group-item"><p>Maria</p> Wordpress Developer</a>
      </div>
    </div>
  );
}

function ContactItem() {
  return (
    <div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppHeader />
      <ContactsList />
      </div>
      
    );
  }
}

export default App;
