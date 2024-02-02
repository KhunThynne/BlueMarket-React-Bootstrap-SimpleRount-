//import React from 'react';
import { socket } from '../socket';
import { useState, useEffect } from 'react';
const PrsocketIOT = () => {

    const [isConnected, setIsConnected] = useState(socket.connected);

    const [text, setText] = useState(``);

    const [data, setData] = useState<any>([]);




    const update: any = () => {
        // socket.connect();
        fetch(`http://192.168.1.2:5555/io/${window.location.host}/${text}`, {
            method: 'Get',
            // We convert the React state to JSON and send it as the POST body

        }).then(function (response) {


        }).catch(err => {
            console.log(err)
        });
    }
    useEffect(() => {

        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }
        /*
                function onFooEvent(value: any) {
                    setFooEvents((previous) => [...previous, value]);
                }
                     socket.on('foo', onFooEvent);
        */
     
        socket.connect();
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);


        return () => {
            socket.on("ProJectSOcketIo", (arg: any) => {
                //Push value at the end:
                /*
                setData((odata: any) => [{ arg }, ...odata]);*/
                if (arg) {

                    setData((prevState: any) => ([arg, ...prevState]));
                }

            });


            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            // socket.off('foo', onFooEvent);

        };
    }, []);


    return (
        <>
            <div className='containerXD'>
                <div className={`border-dark px-5  `} >
                    <h1 className=' text-dark bg-white px-5'>Projects</h1>

                </div>

                <button type='button' className='btn btn-success' onClick={() => update()}></button>

{isConnected}
                <input type='text' onChange={(ev) => setText(ev.target.value)} />

                <br />
                <div>

                    {data.map((item: any, index: any) => (
                        <div key={index}>
                            <div className='bg-white p-3'>

                                <div className='d-flex text-secondary justify-content-between'>    <text style={{ fontSize: `xx-small` }}>  {index}  </text> <text style={{ fontSize: `xx-small` }}>   {item.name}  </text></div>
                                <div className='border p-2 overflow-auto'><b>  Data</b> =? : {item.data}</div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );


}

export default PrsocketIOT;