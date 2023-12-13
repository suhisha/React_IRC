import{useState} from "react"
const TempComp=()=>({
    username:'',
    password:''
})
const handleCahnge=(e)=>{
    setData({...DataTransfer,[e.target.id]:e.target.value})
}
const handleSubmit=()=>{
    alert('submitted')
}
return(
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" id="username" onChange={handlechange}/>
        <input type="password" placeholder="password" id="password" onChange={handlechange}/>
        <input type="submit" value="Login"/>
        </form>
        </>
)
}
export default TempComp;
