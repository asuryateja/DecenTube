import React, {useState} from 'react'
import storeHash from './storeHash';
import { ExternalLink } from 'react-external-link';
import ipfs from './ipfs'
import './Upload.css'
import web3 from './web3';



function Upload() {
const [hash, setHash] = useState([]);
const [h, setH] = useState([]);
const [click, setClick] = useState(false);
const [contractAdd, setcontractAdd] = useState(null);
const [file, setFile] = useState(null);
const [transactionHas, settransactionHas] = useState(null);
const [recep, setrecep] = useState(null);
const [blockNum, setblockNum] = useState(null);
const [gasUsed, setgasUsed] = useState(null);
const reader = new window.FileReader();

const captureFile = (e) => {
	e.stopPropagation();
	e.preventDefault();
	const file = e.target.files[0]
	reader.readAsArrayBuffer(file);
	reader.onloadend = () => convertToBuffer(reader)
};

const convertToBuffer = async(e) => {
	const buffer = await Buffer.from(reader.result)
	setFile(buffer)
}

const handleSubmit = async (e) => {
	e.preventDefault();
	await ipfs.add(file, (err, ipfsHash) => {
		console.log(err, ipfsHash);
        var nxt = ipfsHash[0].hash;
        setH(nxt);
        const url = `https://ipfs.io/ipfs/${nxt}`;
        console.log(url);
        setHash((prev) => [...prev,url]);
	})

    const accounts = await web3.eth.getAccounts();
    console.log('Sending from Metamask account: ' + accounts[0]);
    const ethAddress= await storeHash.options.address;
    setcontractAdd(ethAddress);
    storeHash.methods.sendHash(hash).send({from: accounts[0]}, (err, transactionHash) => {
        settransactionHas(transactionHash);
    })
}

const k = `https://ipfs.io/ipfs/${h}`








    return (
        <>
		<div class='containerr  pt-5 mt-5 '>
		<form onSubmit={handleSubmit} >
            <input type="file" onChange={captureFile} />
			<button type="submit" > Upload </button>
		</form>
		</div>
		<div class='containerr pt-5 text-center'>
			{h.length !== 0 ?<h5>Hash:<ExternalLink class='e' style={{color: '#eee'}} href={k}>{h}</ExternalLink></h5> : null}
		</div>
         <br />
         <hr className='container' />

         <div class="container">
            {/* <div className='row flex flex-start col-lg-6 col-12 col-md-6'>
            {
                hash.length !== 0 ? hash.map((el) =><> <iframe width="560" height="315" src={el}  ></iframe></>)
                : <code>Upload Data</code>
            }
            </div>
*/}
            <div class="row" >
  <div class="col-sm-6">
  <div class="card bg-transparent">
      <div class="card-body embed-responsive bg-transparent">
      <iframe class="embed-responsive-item" 
                src={hash}  width="560" height="315"
                allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
  <div class="card bg-transparent">
      <div class="card-body embed-responsive bg-transparent">
      <iframe class="embed-responsive-item" 
                src="https://ipfs.io/ipfs/QmaTvMwY9meKyu7nEhAQoR9Eb3H12ysRR7GLnTGtmFVkj6"  width="560" height="315"
                allowfullscreen>
        </iframe>
      </div>
    </div>
    </div>
    </div>

         </div>
        </>
    )
}

export default Upload
