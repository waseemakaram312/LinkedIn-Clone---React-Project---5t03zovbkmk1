import React, {useState} from 'react'
import "../styles/login.css"


function Login() {
  const [signup, setSignUp] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register= (e)=>{
    e.preventDefault();
   if(!name)
   {
    return alert("Name is required.")
   }
    if(!photoURL)
   {
    return alert("photoURL is required")
   }
    if(!email)
   {
    return alert("email is required")
   }
   
    if(!password)
   {
    return alert("password is required")
   }
   
   setName(" ");
   setPhotoURL("");
   setEmail("");
   setPassword("");

  }

  return (
    <>
    
    <div className="main">
      <nav className="nav_bar">
        <div className="logo">
      <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"/>
      </div>
      <join>Join now</join>
      <p className='btn_sgn'>Sign in</p>

    </nav>
    <section>
      <pic>
        <h1>Welcome to your professional community</h1>
       
      </pic>
      {
      signup===true? (
      <form className='loginScreen' onSubmit={register}>
        <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)}/>
        <input type="text" placeholder='Profile Picture URL' value={photoURL} onChange={e=>setPhotoURL(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
         <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
           <input type="submit" value="Sign Up"/>
        <h4> Already a member?<span>Login Here</span></h4>
      </form>) : (
      <form className='loginScreen'>
       
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="submit" value="Sign In"/>
        <h4>Not a member?<span onClick={e=>setSignUp(true)}>Resister Here</span></h4>
      </form>)
    }
    </section>
    </div>
    </>
  )
}

export default Login