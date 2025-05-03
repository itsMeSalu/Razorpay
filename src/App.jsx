// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import Navbar from './component/Navbar';
// import { Route, Routes } from 'react-router-dom';
// import AllRoutes from './AllRoutes';
//  'react-router-dom';
//import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

function App() {


  return (
  <div >
    <nav class="bg-blue-900">
      <div class="relative w-[1000px] mx-auto flex items-center justify-between">
      
     {/* logo */}
     <img src="..\src\assets\logoraz.svg "width={120}></img>
     <ul class="flex space-x-4">
     <li class="text-white font-mono py-7 hover:text-blue-600 cursor-pointer transition-all
      duration-200 relative group: flex">
        <a href='#'>Payements</a>
        <div class="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all
      duration-200 ">
      </div>
      </li>
      <li class="text-white font-mono py-7 hover:text-blue-600 cursor-pointer transition-all
      duration-200 relative group: flex">
        <a href='#'>Banking</a>
        <div class="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all
      duration-200 ">
      </div>
      </li>
      <li class="text-white font-mono py-7 hover:text-blue-600 cursor-pointer transition-all
      duration-200 relative group: flex">
        <a href='#'>Corporate card</a>
        <div class="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all
      duration-200 ">
      </div>
      </li>
      <li class="text-white font-mono py-7 hover:text-blue-600 cursor-pointer transition-all
      duration-200 relative group: flex">
        <a href='#'>Payroll</a>
        <div class="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all
      duration-200 ">
      </div>
      </li>
      <li class="text-white font-mono py-7 hover:text-blue-600 cursor-pointer transition-all
      duration-200 relative group: flex">
        <a href='#'>Resources</a>
        <div class="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all
      duration-200 ">
      </div>
      </li>
      <li class="text-white font-mono py-7 hover:text-blue-600 cursor-pointer transition-all
      duration-200 relative group: flex">
        <a href='#'>support</a>
        <div class="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all
      duration-200 ">
      </div>
      </li>
      <li class="text-white font-mono py-7 hover:text-blue-600 cursor-pointer transition-all
      duration-200 relative group: flex">
        <a href='#'>Pricing</a>
        <div class="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all
      duration-200 ">
      </div>
      </li>
     </ul>
       <div class="flex space-x-4">
         <img src="..\src\assets\india-flag.svg"></img>
         <button class="py-3 px-5 font-mono text-white border-blue-500 border rounded-sm align-middle
          text-sm font-bold h-9">Login</button>
          <button class="py-3 px-4 font-mono border rou nded-sm  text-center
          text-sm font-bold bg-white text-blue-400 h-9 transition-all
      duration-200 hover:text-blue-500 flex items-center">Sign U
       <ArrowRightIcon className="h-5 w-5 ml-1" />
      </button>
 
       </div>
     </div>
    </nav>
     {/* hero section */}
    <section class="relative bg-blue-900 ">
      <div class="w-80 flex flex-row justify-between items-center mx-auto">
        {/* left side */}
        <div class="flex flex-col gap-4">
          <h1 class=" font-mono text-white font-bold leading-1 text-lg">Power your finance grown your business</h1>
          <div class="w-6 h-1 bg-green-500"></div>
          <p class=" font-mono text-white">Accept payment from customer!atumate Payements frm vendors & employess
            never runout-working capital
          </p>
          <div>
          <button class="py-3 px-4 font-mono border rou nded-sm  text-center
          text-sm font-bold bg-blue-600 text-white h-9 transition-all
      duration-200 hover:text-blue-200 flex items-center rounded-md ">Sign up Now </button>
      </div>
        </div>
        {/* right-hand */}
        <img src='..\src\assets\hero-illustration.jpg'w></img>
      </div>
      {/* shape-part */}
      <div>
        <img src="../src/assets/hero-shape.svg"></img>
      </div>
    </section>
    </div>
    
  );
}

export default App;

