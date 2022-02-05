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

      <div className="container my-3 min-w-full" style={myStyle} >
      <div className="max-w-md mx-auto bg-blue-300 text-center" style={myStyle}>
      <h1 className='text-red-900 w-64' style={myStyle}>hellow zayaan how are you </h1>
      <h1 className='text-orange-600 mt-8 w-96' style={myStyle}>hellow welcome this is freelancer parvez </h1>
   
         </div>


         <button onClick={toggleStyle} style={myStyle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
{btnText}
</button>
</div>






    )
}

export default About;


// <div className="container">
// <div className="max-w-min">
// <h1>This is home page section </h1>

// <p>This is parvez.I am a web developer .</p>
// </div>

// <div className="flex justify-center">
// <div className="form-check form-switch">
// <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
// <label className="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">Default switch checkbox input</label>
// </div>
// </div>
// </div>
