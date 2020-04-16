import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="container">
      <h1>Webpack 4 starter boilerplate template with React, Bootstrap 4</h1>
      <div className="welcome">
        Thanks for using this preconfigured starter template. I really wish it
        will help you maintain and build a fast and scalable application.
      </div>
      <p>
        If you encounter any bugs, feel free to open issues here:{' '}
        <a href="https://github.com/shivero/webpack-4-react-bootstrap-starter-template">
          [Github]
        </a>
        .
      </p>
      <p>
        This project can be always better, so if you have ideas - I sincerely
        encourage you to create a pull request on Github.
      </p>
      <BgDemo />
      <FormDemo />
    </div>
  );
};

function BgDemo() {
  return (
    <React.Fragment>
      <p>Example image from /src</p>
      <div className="bg-demo" />
    </React.Fragment>
  );
}

function FormDemo() {
  return (
    <React.Fragment>
      <h4>Boostrap Form demo</h4>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Example select</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
          <select multiple className="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
      </form>
    </React.Fragment>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
