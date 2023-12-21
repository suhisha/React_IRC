import '../Assets/Login.css'
import { Link } from 'react-router-dom';
function Login()
{
    return(
        <div className='body'>
           <form class="container">
                <h1>Login</h1>
                <label for="username">USERNAME</label>
                <input type="text" id="username" name="username" required placeholder="Enter your name" className='input' />

                <label for="password">PASSWORD</label>
                <input type="password" id="password" name="password" required placeholder="Enter your password" className='input'/>
                <Link to = '/Reg'>
                <button type="submit">
                    Submit
                </button>

                </Link>
                <p>Don't have an account? <a href="1-2.html">Register here</a>.</p>


            </form>
        </div>
    )
}
export default Login;