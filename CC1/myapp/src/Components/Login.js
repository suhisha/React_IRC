import {Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="body">

        <div class="login-container">
            <header>
            <nav>
              <ul>
                <Link to = '/'>
                  <li>Home</li>
                </Link>
                  <Link to = '/login'>
                  <li>Login</li>
                  </Link>
                  <Link to ="/register">
                  <li>Register</li>
                    </Link>  
              </ul>
          </nav>
            </header>

            <form class="container">
                <h1>Login</h1>
                <label for="username">USERNAME</label>
                <input type="text" id="username" name="username" required placeholder="Enter your name" />

                <label for="password">PASSWORD</label>
                <input type="password" id="password" name="password" required placeholder="Enter your password" />
                <button type="submit">
                    Submit
                </button>
                <p>Don't have an account? <a href="1-2.html">Register here</a>.</p>


            </form>
            </div>
        </div>

    )
}
export default Login;