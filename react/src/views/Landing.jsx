import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles';

export default function Landing() {
return (
  <div>
    <header className = "top-area">
      <div className = "header-area">
        <nav className = "navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className = "container">
            <div className = "navbar-header">
              <button type="button" className = "navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i className = "fa fa-bars"></i>
              </button>
              <a className = "navbar-brand" href="">React + Laravel</a>
            </div>
            <div className = "collapse navbar-collapse menu-ui-design" id="navbar-menu">
              <ul className = "nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li className = " smooth-menu active"></li>
                <li className = "smooth-menu"><Link to="/">Home</Link></li>
                <li className = "smooth-menu"><Link to="/login">Login</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className = "clearfix"></div>
    </header>

    <section id="welcome-hero" className = "welcome-hero">
      <div className = "container">
        <div className = "row">
          <div className = "col-md-12 text-center">
            <div className = "header-text">
              <h2>hello <span>,</span> user!</h2>
              <p>Create an account and proceed to login</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <footer id="footer-copyright" className = "footer-copyright">
      <div className = "container">
        <div className = "hm-footer-copyright text-center">
          <p>
            &copy; 2023 - Rolly A. Delos Reyes
          </p>
        </div>
      </div>
      <div id="scroll-Top">
        <div className = "return-to-top">
          <i className = "fa fa-angle-up " id="scroll-top" ></i>
        </div>
      </div>
    </footer>
  </div>
  )
}
