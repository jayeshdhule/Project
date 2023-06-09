import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OauthButtonGoogle from "components/OauthButtonGoogle/OauthButtonGoogle";
import { authContext } from "contexts/auth";
import Divider from 'components/Divider/Divider';
import LogoAnimation from "components/Loader/LogoAnimation"

// styles for this page are in index.scss
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)
  const { login } = useContext(authContext);
  useEffect(()=> {
    setTimeout(()=> setLoading(false), 4000)
  },[])

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setError(null);
      setIsSubmitting(true);

      if (password.includes(" ")) {
        throw new Error("passwords cannot have spaces!");
      } else if (password.length < 8) {
        throw new Error("password should be at least 8 characters long!");
      }

      const user = { email: email.trim(), password };
      await login(user);
    } catch (err) {
      console.error(err);
      if (err.response) {
        setError(err.response.data.error);
      } else {
        setError(err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  if(loading) return <LogoAnimation/>

  return (
    <div className="page" id="login-page" style={ {
          paddingTop: '6rem',
        }
      }>
     
      <div className="login-card">
        <h2>Quotify</h2>

        <form action="POST" className="form" onSubmit={handleSubmit}>
          <OauthButtonGoogle />
          <Divider>OR</Divider>

         <div className="form__field">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
         <div className="form__field">
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-msg">{error}</div>}
        <button className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log In"}
        </button>
        <span>
          Don't have an account?
          <br />
          <Link to="/register">Create Account</Link>
        </span>
        
      </form>
      </div>
    </div>
  );
}

// window.onload = function () {
//   google.accounts.id.initialize({
//     client_id: "YOUR_GOOGLE_CLIENT_ID",
//     callback: handleCredentialResponse,
//   });
//   google.accounts.id.renderButton(
//     document.getElementById("buttonDiv"),
//     { theme: "outline", size: "large" } // customization attributes
//   );
// };

// function loadGsiClientScript(callback) {
//   if (document.getElementById("gsi-script")) {
//     console.log(Object.keys(document.getElementById("gsi-script")));
//     return;
//   }

//   const script = document.createElement("script");
//   script.src = "https://accounts.google.com/gsi/client";
//   script.id = "gsi-script";
//   document.body.appendChild(script);
//   window.addEventListener("load", () => callback());
// }

// function removeGsiClient() {
//   const script = document.getElementById("gsi-script");
//   if (script) {
//     script.remove();
//   }
// }
