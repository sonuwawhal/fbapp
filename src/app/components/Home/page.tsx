import Image from 'next/image'
import React from 'react'
import fb from '../../../../public/img/fb.svg'

function Home1(){
    return(

        <div className="main flex w-screen h-screen justify-center align-middle gap-28 py-32 bg-gray-100">
            <div className='top-content w-2/6  mt-10'>
                <Image src={fb} alt="Fb" width="340" height="140" className="img"/>
                <p className='text-[25px] ml-8 from-neutral-800 mt-0'>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className='flex flex-col'>
                <div className='shadow-xl bg-white rounded-lg py-6'>
                     <div className="text-center">
                           <input type="text" placeholder="Email address or phone number"  className='w-5/6 text-lg outline:none  border-slate-400  border-2 rounded-md  outline-slate-400 hover:focus:outline-blue-700 mt-4 mb-5 py-2 px-6'/><br></br>
                              <input type="text" placeholder="Password" className='text-lg mb-5 w-5/6 border-slate-400  border-2 rounded-md  outline:none outline-slate-400 hover:focus:outline-blue-700 mt-4 py-2 px-4'/><br></br>
                            <button className="bg-blue-600 py-4 px-10 w-5/6 rounded-md text-white">Log In</button>
                            <p className="mt-3 text-blue-600 hover:underline">Forgotten password?</p>
                            <div>
                                <hr ></hr>
                                
                             <button className="bg-green-500 py-4 w-3/6 mt-4 rounded-md text-white font-bold">Create new account</button>
                            </div>
                 
                         </div>
                       
                 
                  </div>
                  <div className='mt-3 ml-16'>
                    <p><b className='hover:underline'>Create a Page</b> for a celebrity, brand or business.</p>
            
                      </div>
            
         
                 </div>
     
         </div>
    
    )
  
}

export default Home1
