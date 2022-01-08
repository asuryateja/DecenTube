import React from 'react'
import { shortenAddress } from './shortenAddress';

function Addr({ text }) {
    return (
        <>
            <p className='p-2 text-black mb-8 text-center justify-center mt-3'> {shortenAddress(text)}</p>
        </>
    )
}

export default Addr
