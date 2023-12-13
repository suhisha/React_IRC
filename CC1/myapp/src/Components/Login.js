
function Login() {
    return (
        <div class="login-container">
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
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

    )
}
export default Login;