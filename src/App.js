import React from "react";
import { Spinner, Row, Col } from "react-bootstrap";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import regeneratorRuntime from "regenerator-runtime";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      loading: true,
      number: {},
      hash: {},
      transactions: [],
    };
  }

  async handleSearch(blockNumber) {
    this.setState({
      loading: true,
    });

    let hexString = "0x" + blockNumber.toString(16);

    if (isNaN(blockNumber)) {
      hexString = "latest"
    }

    console.log("hexString", hexString);

    fetch(
      new Request("https://cloudflare-eth.com", {
        method: "POST",
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_getBlockByNumber",
          params: [hexString, true],
          id: 64,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    )
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        console.log(json.result);
        this.setState({
          loading: false,
          number: json.result.number,
          hash: json.result.hash,
          transactions: json.result.transactions,
          error: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  }

  async componentDidMount() {
    fetch(
      new Request("https://cloudflare-eth.com", {
        method: "POST",
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_getBlockByNumber",
          params: ["latest", true],
          id: 64,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    )
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        console.log(json.result);
        this.setState({
          loading: false,
          number: json.result.number,
          hash: json.result.hash,
          transactions: json.result.transactions,
          error: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  }

  render() {
    const { loading, number, hash, transactions } = this.state;

    return (
      <div>
        <Header handleSearch={this.handleSearch} />

        {this.state.error ? (
          <ErrorScreen />
        ) : (
          <Info
            loading={loading}
            number={number}
            hash={hash}
            transactions={transactions}
          />
        )}
      </div>
    );
  }
}

export default App;
