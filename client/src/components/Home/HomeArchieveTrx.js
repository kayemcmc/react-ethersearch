import React, { Component } from "react";
import { connect } from "react-redux";
import map from "lodash/map";
import styled from "styled-components";
import { fetchDatabaseTransactions } from "../../store/actions/search";
import logoround from "../../assets/images/eround.png";

class HomeArchieveTrx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: null
    };
  }
  componentDidMount() {
    this.props.fetchDatabaseTransactions();
  }
  render() {
    console.log(this.props.transactions);

    return (
      <section className="text-center">
        <ul className="list-group">
          <li className="list-group-item  text-center">
            <Feedtitle>Transactions in Database</Feedtitle>
          </li>
          {map(this.props.transactions, (transaction, key) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={key}
            >
              <p>{transaction.blockHash}</p>
              <span>
                <img src={logoround} className="App-logo" alt="logo" />
              </span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions
});

const dispatchToProps = dispatch => ({
  fetchDatabaseTransactions: () => dispatch(fetchDatabaseTransactions())
});

const Feedtitle = styled.h4`
  height: 3.25;
  font-size: 1.75rem;
  color: #314559;
  letter-spacing: 1px;
  font-weight: 500;
  padding: 20px 0px;
  text-align: center;
`;
export default connect(
  mapStateToProps,
  dispatchToProps
)(HomeArchieveTrx);
