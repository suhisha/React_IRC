
import {Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <>
        <Nav/>
        <div class="navbar">
            <h1>Toy Store</h1>

            <Link to='/'>
            <nav>Home</nav>
            </Link>

            <Link to='/Login'>
            <nav>Login</nav>
            </Link>

            <Link to='/Register'>
            <nav>Register</nav>
            </Link>
        </div>
        
        </>
    )
}
export default Nav;