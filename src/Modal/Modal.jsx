import { useState } from "react";


function Modal() {

  const [checkDisplay, setCheckDisplay] = useState(true);

function handleAcceptOffer(e){
  setCheckDisplay(!checkDisplay);
}


function handleCloseWindow(e){
  setCheckDisplay(!checkDisplay);
}



  return (
    <div className="w-full h-full bg-blue-800 p-5 relative">

<div className="absolute right-[50%] top-10 bg-pink-300 w-[50%} h-auto" style={{display:checkDisplay ? "none" : "block"}}> 
    <div className="p-5 relative">
      <button className="absolute my-2 right-0 top-0 bg-green-500 mx-5 text-white hover:bg-green-300 hover:text-blue-500 px-3 py-2 rounded-lg" onClick={handleCloseWindow}>X</button>
      
      <h2 className="my-3 mt-8 font-semibold text-xl text-red-800">Congratulations You Accepted the offer!!</h2>
      <h3 className="text-center italic">You will soon receive offer letter over your Email</h3>
      <button className=" mx-auto ml-28 my-4 bg-blue-500 mx-5 text-white hover:bg-green-300 hover:text-blue-500 px-3 py-2 rounded-lg" onClick={handleCloseWindow}>Close Window</button>      
      </div>      
       </div>

      <div className="">
    <h1 className="text-center text-xl font-semibold text-pink-200 my-5">JOBS offer Accept Reject</h1>
      <div className="w-[70%] h-[70%] bg-blue-100 p-3 mx-auto py-5">

    <h3 className="text-center text-blue-950 font-italic text-lg">You got an offer for a Remote job of 1800000 LPA from TCS</h3>
    <div className="my-5 flex gap-5 justify-center p-3 mx-auto">
    <button className="bg-green-500 mx-5 text-white hover:bg-green-300 hover:text-blue-500 px-3 py-2 rounded-lg" onClick={handleAcceptOffer}>Accept</button>
    <button className="bg-red-500 mx-5 text-white hover:bg-red-200 hover:text-blue-500 px-3 py-2 rounded-lg">Reject</button>

   

    </div>
      </div>
      </div>
    </div>
  )
}
export default Modal