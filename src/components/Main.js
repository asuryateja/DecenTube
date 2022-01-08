import React, { useState } from 'react'
import './Main.css'
import Lottie from "react-lottie";
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'
import animationData from './blockchain.json'
import About from './About';
import Addr from './Addr';
import { shortenAddress } from './shortenAddress';

function Main() {
  const [text, setText] = useState([])
  const ethEnabled = async () => {
    if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setText(accounts[0]);
      }
    }

    

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <>
        <div class='container pt-5'>
        <ToastContainer style = {{marginTop: "5%"}}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        </div>
        <div class='container py-2'>
          <div class='row align-items-center'>
            <div class='tx col-lg-6 col-md-6 col-12 w-50'>
            <h1 className='justify-content kk'>Video Streaming Platform</h1>
              <About />
              </div>
              <div class='imgg col-lg-6 col-md-6 col-12 w-50'>
                <div className=' flex flex-center eth-card white-glassmorphism '>
                  <p className='text-black p-2 text-bold'>Eth Address:</p>
                  <p className='p-2 text-black mb-8 text-center justify-center mt-3'>
                     {text.length !== 0 ? shortenAddress(text) : <p className='pa' onClick={ethEnabled}>Connect</p>}</p>
                </div>
              <Lottie options={defaultOptions} height={400} width={400} />
              </div>
          </div>
        </div>
        </>
    )
}

export default Main
