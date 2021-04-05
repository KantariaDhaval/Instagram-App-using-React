import { Component } from "react";
import Header from "./HeaderComponents/Header";
import Profile from "./ProfileComponents/Profile";
import Menu from "./MenuComponents/Menu";
import Posts from "./PostsComponents/Posts";
import Footer from "./FooterComponents/Footer";
import { connect } from "react-redux";
import { setLoading, setError } from "./Redux/Actions/appActions";
import { setData } from "./Redux/Actions/postActions";

class App extends Component {
  componentDidMount() {
    fetch("./Data.json")
      .then((response) => response.json())
      .then((data) => {
        this.props.setData(data);
        this.props.setLoading(false);
      })
      .catch((err) => {
        this.props.setError(false, true);
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
  const { loading, error } = state.appReducer;
  return {
    loading: loading,
    error: error,
  };
}

export default connect(mapStateToProps, { setLoading, setData, setError })(App);
