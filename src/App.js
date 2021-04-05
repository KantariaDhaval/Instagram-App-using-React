import { Component } from "react";
import Header from "./HeaderComponents/Header";
import Profile from "./ProfileComponents/Profile";
import Menu from "./MenuComponents/Menu";
import Posts from "./PostsComponents/Posts";
import Footer from "./FooterComponents/Footer";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    fetch("./Data.json")
      .then((response) => response.json())
      .then((data) => {
        this.props.setStateWithFetchedData(false, data);
      })
      .catch((err) => {
        this.props.setStateWithError(false, true);
      });
  }

  render() {
    const { loading, error } = this.props;
    if (loading) {
      return <h1>Loading...</h1>;
    } else if (error) {
      return <h1>Some error occured...</h1>;
    } else {
      return (
        <div>
          <Header />
          <Profile />
          <Menu />
          <Posts />
          <Footer />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setStateWithFetchedData: (loading, data) => {
      dispatch({
        type: "SUCCESS_IN_DATA_FETCHING",
        payload: {
          loading: loading,
          data: data,
        },
      });
    },
    setStateWithError: (loading, error) => {
      dispatch({
        type: "ERROR_IN_FETCHING_DATA",
        payload: {
          loading: loading,
          error: error,
        },
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
