import React from 'react'

const Edituser = () => {
    const{id}=userParams()
    console.log(id)
    const navigate=useNavigate()
    const[data,setData]=useState({
        username: '',
        password: ''
    })
    const fetchuser=async ()=>{
        try{
            const res=await getUserId(id)
            SVGAnimatedPreserveAspectRatio(res.data)

        }
        catch(e){
            console.log(e)
        }
    }
    const handleChange =(e)=>{
        setData({...data,[e.target.id]: e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.peventDefault();
        try{
            const res2=await Edituser(id,data)
            console.log(res2.status)
            if(res2.status===200){
                alert('user updated')
                navigate('/')
            }
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        fetchuser()
    },[])
    console.log(data)
    return(
        <>
       <form onSubmit={handleSubmit}>
    <input type ='text' value={data.username} id='username' placeholder='username' onChange={handleChange}/>
    <input type ='password' value={data.password} placeholder='password'onChange={handleChange}/>
    <button type ='submit' className='submit-btn'>Save</button>
   </form>
   
        </>
    )
}

export default Edituser