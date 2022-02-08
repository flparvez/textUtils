import React from 'react'

function Navbar(props) {
  return (
    <>
      <div className="App">

        <nav className={`bg-slate-100 flex items-center justify-between flex-wrap bg-${props.mode} p-6`}>
          <div className="flex items-center flex-shrink-0 text-red-500 mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span className="font-bold text-xl tracking-tight">TextUtils</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
            <div className="text-sm lg:flex-grow">
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-yellow-500 mr-4">
                Home
              </a>
              <a href="About.js" className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-yellow-600 mr-4">
                About
              </a>
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-yellow-700">
                Blog
              </a>
            </div>
           
            <div className="flex justify-center">
<div className="form-check form-switch">
<input onClick={props.toggleMode} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked76" />
<label className="form-check-label inline-block text-purple-600" htmlFor="flexSwitchCheckChecked">Enable DarkMode</label>
  </div>

</div>
          </div>
         
        </nav>
     
      </div>
      





    </>
  )
}

export default Navbar;


// <div className="flex justify-center">
// <div className="form-check form-switch">
//   <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
//   <label className="form-check-label inline-block text-gray-800" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
// </div>
// </div>