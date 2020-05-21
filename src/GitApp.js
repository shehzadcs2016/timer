import React from "react";
import "./App.css";
import { Form, Row, Col } from "react-bootstrap";
import List from "./List";
import axios from "axios";
class GitApp extends React.Component {
  state = { person: [], search: "" };

  Change = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ search: value });
  };
  Search = e => {
    const { person } = this.state;
    e.preventDefault();
    const search = e.target.elements.search.value;
    if (search) {
      axios
        .get(`https://api.github.com/users/${search}`)
        .then(res => {
          const persons = res.data;
          this.setState({ person: persons });
        })
        .catch(error => {
          alert("user not found");
        });
    } else {
      alert("please enter  the name");
    }
  };

  render() {
    const { person } = this.state;
    return (
      <div className="App">
        <h1 className="H1">SearchApp</h1>
        <div>
          <Form onSubmit={this.Search}>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col>
                <Form.Control
                  name="search"
                  autoComplete="off"
                  placeholder="Search UserName"
                  value={this.state.search}
                  onChange={this.Change}
                />
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Col className="Button">
              <button className="SearchButton">
                <h5>Search</h5>
              </button>
            </Col>
          </Form>
        </div>
        {person.length !== 0 ? (
          <div className="Center">
            <List person={person} />
          </div>
        ) : (
          <div className="User">No User shown </div>
        )}
      </div>
    );
  }
}

export default GitApp;
