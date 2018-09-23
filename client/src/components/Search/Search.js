import React, { Component } from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { browserHistory } from "react-router-dom";
import { fetchTransactions } from "../../store/actions/address";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      address: "",
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.state;
    this.props.fetchTransactions(id);
    this.setState({ id: "" });
  }
  render() {
    console.log(this.state.id);
    const searchForm = (
      <Form onClick={this.handleSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            name="id"
            value={this.state.id}
            placeholder="Search ethereum address!"
            onChange={this.handleChange}
          />

          <Searchbutton type="button" className="btn btn-primary mt-4">
            Search Etherscan
          </Searchbutton>
        </FormGroup>
      </Form>
    );
    return <Searchcontainer>{searchForm}</Searchcontainer>;
  }
}

const Searchcontainer = styled.div`
  width: 40%;
  padding: 30px 0px;
  @media (max-width: 988px) {
    width: 320px;
  }
`;
const Searchbutton = styled.button`
  cursor: pinter;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  background-color: #5c6ac4;
  color: white;
  font-size: 0.4em;
  line-height: 1.133;
  padding: 0.8625em 1.8em;
  letter-spacing: 0.09em;
  border: none;

  :hover {
    background-color: #2cc2c0;
    border: none;
  }
  @media (max-width: 988px) {
    background-color: #2cc2c0;
    :hover {
      background-color: #2cc2c0;
    }
  }
`;

const mapStateToProps = state => ({
  address: state.address
});

export default connect(
  mapStateToProps,
  { fetchTransactions }
)(Search);
