import { useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import { authContext } from "contexts/auth";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Footer from "components/Footer/Footer";
import OauthGoogle from "pages/OauthGoogle/OauthGoogle";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import Profile from "pages/Profile/Profile";
import Post from "pages/Post/Post";
import PostEdit from "pages/PostEdit/PostEdit";
import PostChanges from "pages/PostChanges/PostChanges";
import PostWrite from "pages/PostWrite/PostWrite";
import Register from "pages/Register/Register";
import About from "components/About/About";
import Privacy from "components/Privacy/Privacy";
import Help from "components/Help/Help";
import TnC from "components/TnC/TnC";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/users/:id" element={<Profile />} />

          <Route path="/about" element={<About/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/tnc" element={<TnC/>} />

          {/* these routes should only be accessible when the user IS NOT logged in */}
          <Route element={<OnlyUnauthRoutes redirectTo="/" />}>
            <Route path="/login" element={<Login />} />
            <Route path="/oauth/google" element={<OauthGoogle />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* these routes should only be accessible when the user IS logged in */}
          <Route element={<AuthRoutes redirectTo="/login" />}>
            <Route path="/edit/:id" element={<PostEdit />} />
            <Route path="/oauth/google" element={<OauthGoogle />} />
            <Route path="/posts/changes/:id" element={<PostChanges />} />
            <Route path="/write" element={<PostWrite />} />
          </Route>

          {/* a catchall route for displaying 404 page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
    
  );
}

function AuthRoutes({ redirectTo }) {
  if (!redirectTo) {
    throw new Error("<AuthRoutes />: prop 'redirectTo' is required!");
  }

  const { currentUser } = useContext(authContext);
  return currentUser ? <Outlet /> : <Navigate to={redirectTo} />;
}

function OnlyUnauthRoutes({ redirectTo }) {
  if (!redirectTo) {
    throw new Error("<OnlyUnauthRoutes/>: prop 'redirectTo' is required!");
  }

  const { currentUser } = useContext(authContext);
  return currentUser ? <Navigate to={redirectTo} /> : <Outlet />;
}
