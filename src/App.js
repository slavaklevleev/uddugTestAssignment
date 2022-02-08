import React from "react";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
  Link,
  useRouteMatch,
  useParams,
  useNavigate,
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header handleSearch={this.handleSearch} />

        <Routes>
          <Route path="/block/:blockNumber" element={<Info />} />
          <Route path="/block" element={<Info />} />
          <Route path="*" element={<Navigate to="/block" />} />
        </Routes>
      </>
    );
  }
}

export default App;
