import { ExternalLink } from 'react-external-link';
import React , {useState} from 'react'
import Typical from 'react-typical'
import '../../node_modules/react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';
import shortenAddress from './shortenAddress.js'
import './About.css'




function About() {
    const [text, setText] = useState('Connect')
    const [connected, setConnected] = useState(false)
    const ethEnabled = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setText(accounts[0]);
            setConnected(true)
          }
          else{
            toast.dark('Please Install MetaMask', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          }
    }
    const style = {
        fontWeight: 'bold',
        textDecoration: 'none !important'
    }
    return (
        
        <>
            <div class="container mt-0">
                
                <h5>
                We propose to build a Decentralized video streaming platform  use a distributed technology for video storage & Ethereum to security store information.
                <br />
                <br />
                <h6>Ethereum + IPFS 🔥 + ReactJS ⚛️ + Web 3.0 🌎 + Hardhat 👷</h6>
                </h5>
                <div class='text-center'>
                    
                <button type="button"  class="btn d-flex flex-start btn-light mt-5" style={style}  data-toggle="button" aria-pressed="false" autocomplete="off">
                <ExternalLink class='pa text-black' href="https://github.com/0ffs3c/IPFS-Video-Streaming.git">Github</ExternalLink>
                </button> 
            
                </div>
            </div>
        {/* <ExternalLink class='e' href="https://github.com/0ffs3c/IPFS-Video-Streaming.git">Github</ExternalLink>*/}
        </>
    )
}

export default About
