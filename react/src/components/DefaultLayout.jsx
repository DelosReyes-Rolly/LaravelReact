import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import {useEffect} from "react";

export default function DefaultLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();

  if (!token) {
    return <Navigate to="/home"/>
  }

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data)
      })
  }, [])

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
                <Link to="/dashboard"><a className = "navbar-brand" href="#">Hello {user.name}!</a></Link>
              </div>
              <div className = "collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className = "nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  <li className = " smooth-menu active"></li>
                  <li className = "smooth-menu"><Link to="/dashboard">A message for you!</Link></li>
                  <li className = "smooth-menu"><Link to="/users">Users</Link></li>
                  <li className = "smooth-menu"><a onClick={onLogout} className="btn-logout" href="#">Logout</a></li>
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
            <main className="">
              <Outlet/>
            </main>
            {notification &&
              <div className="notification">
                {notification}
              </div>
            }
          </div>
        </div>
      </div>
    </section> 
    </div>
  )
}