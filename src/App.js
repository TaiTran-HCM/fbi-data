import fib from "./fib-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-name">
          <p>DEPARTMENT OF JUSTICE</p>
          <b>FEDERAL INVESTIGATION BUREAU</b>
        </div>
        <div className="logo">
          <img src={fib} alt="" id="logo-fib" />
        </div>
      </header>
      <MDC_MAIN />
      <footer>
        <div className="mdc-footer"></div>
      </footer>
    </div>
  );
}

function MDC_LOGIN(){
  return (
    <div className="body">
    <div className="mdc-login" align="center">
      <div className="head-mdc-login">
        <i className="close-mdc-btn"></i>
      </div>
      <div className="body-mdc-login">
        <p className="mdc-heading-text text-heading">
          <span>Please login below to access this computer FIB</span>
        </p>
        <div className="mdc-input">
          <p className="mdc-officer-username-text text">
            <span>Username:</span>
            <input type="text" className="mdc-officer-username" />
          </p>
          <p className="mdc-password-text text">
            <span>Password:</span>
            <input type="password" className="mdc-password" />
          </p>
        </div>
        <div className="mdc-bnt">
          <input type="button" className="mdc-btn-login" value="Login" />
        </div>
      </div>
    </div>
  </div>
  )
}

function MDC_MAIN(){
  return(
    <div className="body_main">
      <div className="mdc-user-detail">
      <div className="user-name">
        <span>Name: </span>
      </div>
      <div className="date-join">
        <span>Date Join:</span> 27/12/2021
      </div>
      <div className="rank">
        Rank : Officer
      </div>
      <div className="btn-full-user-detail">
        full detail
      </div>
      <div className="bnt-logout">
        logout
      </div>
      </div>
      <div className="mdc-search-detail"></div>
    </div>
  )
}
export default App;
