import {useState} from 'react'
import {addUser} from '../services/api'
import {useNavigate} from 'react-router-dom'

 const Adduser = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({
        username:'',
        passwor:''
    })
    const handlechange =(e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
            const res = await addUser(data)
            if(res.status===201){
                alert('user added')
                navigate('/')
            }
        }
        catch{
            console.log(e)
        }

    }
  return (

        <>
        <form on onSubmit={handleSubmit}>
            <input type ='text' id='username' placeholder='username' onChange={handleChange}/>
            <input type ='text' id ='password' placeholder='username' onChange={handleChange}/>
            <input type ='submit' className='submit-btn'/> Add <button/>
            </form>
            </>
    
  )
}

export default Adduser