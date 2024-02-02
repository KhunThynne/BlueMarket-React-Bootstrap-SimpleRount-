//import React from 'react';

import { useState } from 'react';
const SendEmail = () => {

    const [text, setText] = useState('');
    const SendMail = (ev: any) => {
        fetch(`http://192.168.1.2:5555/users/test/mail/${text}`, {
            method: 'Get',
            // We convert the React state to JSON and send it as the POST body

        }).then(function (response) {
            console.log(response.body)

        }).catch(err => {
            console.log(err)
        });
    }
    const HandleData = (ev: any) => {
        setText(ev.target.value)
    }

    return (
        <>


            <div className='containerXD'>
                <div className={`border-dark px-5  `} >
                    <h1 className=' text-dark bg-white px-5'>ProjectsSendMail</h1>

                </div>





                <input type="text" onChange={HandleData} />

                <button className='btn btn-success' onClick={SendMail} > test </button>

            </div>



        </>
    );


}

export default SendEmail