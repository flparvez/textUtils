import React, {useState} from 'react';


function About() {

    const [myStyle, setmyStyle] = useState ({
        color:"black",
    backgroundColor:"white"
    })
    
    const [btnText, setBtnText] = useState ("Enable Dark Mode")
    
    const toggleStyle = () =>{
        if(myStyle.color ==='black'){
    
    setmyStyle({
        color:"white",
        backgroundColor:"black"
    
    })
    setBtnText("Set Light Mode ")
        }
    
    else{
        setmyStyle({
    
            color:"black",
            backgroundColor:"white"
        })
        setBtnText("Set Dark Mode")
    }
    }
    


    return (

<>
        <div> 
      <div className="container my-3 min-w-full justify-center" style={myStyle} >
      <div className="max-w-md mx-auto bg-blue-300 text-center" style={myStyle}>
      <h1 className='text-red-900' style={myStyle}>Welcome To flparvez textutilis app </h1>
      <h1 className='text-orange-600' style={myStyle}>hellow welcome this is freelancer parvez </h1>
   
         </div>


         <button onClick={toggleStyle} style={myStyle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
{btnText}
</button>

</div>


</div>




</>


    )
}

export default About;


