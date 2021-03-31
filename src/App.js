import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import Like from "./Like";
import Search from "./Search";
import UserProfile from "./UserProfile";

function App() {
  document.title = "Instagram";
  return (
    <Router>
      <div id="header">
        <div id="headerContainer">
          <NavLink to="/" id="appName">
            Instagram
          </NavLink>
          <input type="text" id="search" placeholder="&#xF002; Search" />
          <div id="pages">
            <NavLink to="/">
              <button className="pageIcon" id="homePage">
                <i className="fas fa-home"></i>
              </button>
            </NavLink>
            <NavLink to="/chat">
              <button className="pageIcon" id="chatPage">
                <i className="fab fa-facebook-messenger"></i>
              </button>
            </NavLink>
            <NavLink to="/search">
              <button className="pageIcon" id="searchPage">
                <i className="fas fa-compass"></i>
              </button>
            </NavLink>
            <NavLink to="/like">
              <button className="pageIcon" id="likePage">
                <i className="fas fa-heart"></i>
              </button>
            </NavLink>
            <NavLink to="/profile">
              <button className="pageIcon" id="profilePage">
                <img
                  src="https://i.pinimg.com/236x/a0/4d/84/a04d849cf591c2f980548b982f461401.jpg"
                  alt="Profile"
                  id="profilePhotoIcon"
                />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/like">
          <Like />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
