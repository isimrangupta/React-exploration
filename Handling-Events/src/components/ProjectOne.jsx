import { useState } from "react"




const ProjectOne = () => {
  // const [name, setname] = useState("simran")

//  const [form, setForm] = useState([{name:"", phone:""}])

 const [form, setForm] = useState([])

  function handleClick(){
    alert('I am clicked')
  }


  function handleMouseOver(){
alert('I am a mouse over')
  } 

function handleChange(e){
  // setname(e.target.value)
  setForm({...form, [e.target.name]:e.target.value})
}
 

  return (
    <>
     <div className='button'>
     <button onClick={handleClick}>Click</button>
     </div>

     <div className='red' onMouseOver={handleMouseOver}>
      I am red div
     </div>

     <input type="text" name="email" value={form.email?form.email:"" } onChange={handleChange} />

     <input type="text" name="phone" value={form.phone?form.phone:"" } onChange={handleChange} />



    
    </>
  )
}

export default ProjectOne;
