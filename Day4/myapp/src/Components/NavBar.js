import{useState} from 'react'
const NavBar=()=>{
    const [visible,setVisible]=useState(false);
    const [data,setData]=const [Data,setData] = useState({
        username:'',
        password:''
    }
    )
    const toggle=()=>{
        e.preventDefault();
        alert(data.username+data.password)
    }
    const handlecahnge=(e)=>{setData({...Data,[e.target.id]:e.target.value})}
    return(
        <div> 
            <div class="navbar">
                <div class="navtitle">
                    Hello world
                </div> 
                    <ul class="navlinks">
                        <li>
                            Homo
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                        <li onClick={toggle}>
                            Login
                        </li>
                    </ul>
         </div>
         {visible ?(
            <div className='card-wrapper'>
                <div className="">
                    <h2 className="auth-title">Login</h2>
                    <form className="auth-container h-30v shadow" onSubmit={Login}>
                        <input type="text" name="" id="username" placeholder="Username" className="auth-input" onChange={handleCahnge}/>
                        <input type="password" name="" id="password" placeholder="Password" className="auth-input" onChange={handlecahnge}/>
                        <span className='btn-container'>
                            <input type="submit" value="Login" className="auth-btn w-50"/>
                            <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                        </span>
                    </form>
                </div>
            </div>
         ):('')
}
</div>
}