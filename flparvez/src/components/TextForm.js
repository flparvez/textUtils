import React, { useState } from 'react';



function TextForm(props) {




  const [Text, setText] = useState('Enter Your Value');


  const HandleUpClick = () => {

    let NewText = Text.toUpperCase();

    // console.log('This is ' + Text);

    setText(NewText);

  }
  const HandleClearClick = () => {

    let NewText = ("");

    // console.log('This is ' + Text);

    setText(NewText);

  }

  const HandleLowUpClick = () => {

    let NewText = Text.toLowerCase();

    // console.log('This is ' + Text);

    setText(NewText);

  }

  const HandleChange = (event) => {
    // console.log('uppercase onchange click');
    setText(event.target.value);
  }


  return (
    <>
      <div className="container">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">

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
          text-gray-700
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

        <div className="flex space-x-2 justify-center">
          <button
            type="button"
            data-mdb-ripple="true" onClick={HandleUpClick}
            data-mdb-ripple-color="light"
            className="inline-block  px-6 py-2.5 mx-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >Convert Uppercase</button>
          <br></br>
          <button
            type="button"
            data-mdb-ripple="true" onClick={HandleLowUpClick}
            data-mdb-ripple-color="light"
            className="inline-block px-6  py-2.5 mx-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >Convert Lowercase</button>

          <button
            type="button"
            data-mdb-ripple="true" onClick={HandleClearClick}
            data-mdb-ripple-color="light"
            className="inline-block px-6  py-2.5 mx-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >Clear Text</button>


        </div>
        <div className="container my-4">
          <h1>Your Text Summery</h1>
          <p> {Text.split(" ").length} words {Text.length} Characters </p>
          <p>{0.008 * Text.split(" ").length} Miniute Read</p>
          <h3>Overview</h3>
          <p className='text-blue-500  font-sans'>{Text}</p>
        </div>
      </div>
    </>

  )
}


export default TextForm;
