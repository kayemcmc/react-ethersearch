import React, { Component, Fragment } from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import map from "lodash/map";
import { fetchTransactions } from "../../store/actions/address";
import Popup from "reactjs-popup";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      address: "",
      loading: false,
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }
  openModal = () => {
    this.setState({ open: true });
  };
  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.state;
    this.props.fetchTransactions(id);
    this.setState({ id: "" });
    this.setState({
      showPopup: true,
      open: true
    });
    this.openModal();
  }

  render() {
    console.log(this.state.id);
    const searchForm = (
      <Form>
        <FormGroup>
          <FormControl
            type="text"
            name="id"
            value={this.state.id.trim()}
            placeholder="Search ethereum address!"
            onChange={this.handleChange}
          />

          <Searchbutton
            type="button"
            className="btn btn-primary mt-4"
            onClick={this.handleSubmit}
          >
            Search Etherscan
          </Searchbutton>
        </FormGroup>
      </Form>
    );
    return (
      <div>
        {" "}
        <Searchcontainer>
          {searchForm}
          <Popup
            open={this.state.open}
            position="right center"
            style={{ width: "600px" }}
          >
            <div>
              <h2 className="text-center">Your fetch results</h2>
              {this.props.address ? (
                this.props.address.map(transaction => (
                  <div
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={transaction.hash}
                  >
                    <div style={{ fontSize: "17px", fontWeight: "400" }}>
                      Hash: {transaction.hash}
                      <br />
                      blockHash: {transaction.blockHash}
                      <br />
                      blockNumber: {transaction.blockNumber}
                      <br />
                      confirmations : {transaction.confirmations}
                      <br />
                      cumulativeGasUsed : {transaction.cumulativeGasUsed}
                      <br />
                      from: {transaction.from}
                      <br />
                      gas: {transaction.gas}
                      <br />
                      gasPrice: {transaction.gasPrice}
                    </div>
                    <hr />
                  </div>
                ))
              ) : (
                <div>loading</div>
              )}
            </div>
          </Popup>
        </Searchcontainer>
      </div>
    );
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
