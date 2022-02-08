import React, { useState } from 'react';
function TextForm(props) {


  const [Text, setText] = useState('Enter Your Value');


  const HandleUpClick = () => {

    let NewText = Text.toUpperCase();

    // console.log('This is ' + Text);

    setText(NewText);

  }

  const HandleExtraSpace =() => {

    let NewText = Text.split(/[ ]+ /);
    setText(NewText.join(" "));
  }


  const HandleClearClick = () => {

    let NewText = ("");

    // console.log('This is ' + Text);

    setText(NewText);

  }

  const HandleCopyText = () => {
var text =document.getElementById('myBox');
text.select();
    navigator.clipboard.writeText(text.value);
  }


  const HandleLowUpClick = () => {

    let NewText = Text.toLowerCase();

    // console.log('This is ' + Text);

    setText(NewText);

  }
  // let myStyle ={

  //   color:"white",
  //   backgroundColor:"black"
  //   }

  const HandleChange = (event) => {
    // console.log('uppercase onchange click');
    setText(event.target.value);
  }


  return (

    <>


      <div className="container min-w-full">

        <div className="flex justify-center min-w-full text-center" >
          <div className="mb-3 xl:w-96" >

            <h1>{props.heading}</h1>


            <textarea  
              className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-green-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
              id="myBox" onChange={HandleChange} value={Text}
              rows="8"

            ></textarea>

          </div>
        </div>
        <div className='container my-4 p-4 text-center min-w-full ' >

          <div className="flex space-x-2 justify-center p-4" >
            <button
              type="button"
              data-mdb-ripple="true" onClick={HandleUpClick}
              data-mdb-ripple-color="light"
              className="inline-block  px-6 py-2.5 mx-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >Convert Uppercase</button>

            <button
            type="button"
            data-mdb-ripple="true" onClick={HandleLowUpClick}
            data-mdb-ripple-color="light"
            className="inline-block px-6  py-2.5 mx-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >Convert Lowercase</button>

          </div>
          

          <div className="flex space-x-2 justify-center p-5">
          <button
            type="button"
            data-mdb-ripple="true" onClick={HandleCopyText}
            data-mdb-ripple-color="light"
            className="inline-block px-6  py-2.5 mx-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >Copy Text</button>


          <button
          type="button"
          data-mdb-ripple="true" onClick={HandleClearClick}
          data-mdb-ripple-color="light"
          className="inline-block px-6  py-2.5 mx-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >Clear Text</button>

        </div>

        <div className="flex space-x-2 justify-center p-5">
        <button
          type="button"
          data-mdb-ripple="true" onClick={HandleExtraSpace}
          data-mdb-ripple-color="light"
          className="inline-block px-6  py-2.5 mx-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >Remove Extra Space</button>
      </div>

      

        </div>

        <div className="container my-4 p-5 min-w-full text-center text-blue-700">
          <h1>Your Text Summery</h1>
          <p> {Text.split(" ").length} words {Text.length} Characters </p>
          <h3>Overview</h3>
          <p className='text-blue-500  font-sans'>{Text}</p>

          <p>{0.008 * Text.split(" ").length} minute Read</p>


        </div>


      </div>

    </>


  )
}


export default TextForm;

