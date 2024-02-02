
import AlertT from "../components/Alerts/AlertT";
import AlertT02 from "../components/Alerts/AlertT02";
import Modal01 from "../components/Modals/modal01";
import { useState } from "react";
import MenuNav01 from "../components/Menus/Menu01";
import Modal02 from "../components/Modals/modal02";
const Demo = () => {
    const [bt, setBt] = useState(false)


    return (<>

        <div className="containerXD ">
            <div className="px-5">       <h1 className=" border-bottom">Demo      </h1></div>
            <div className="p-4">
                <div className="text-white">
                    __navs__
                </div>
                <div className="border p-2">
                    <MenuNav01 /></div>
            </div>


            <div className="p-4">
                <div className="text-white">
                    __alerts__
                </div>
                <div className="border">

                    <button type="button" className="btn btn-primary" onClick={() => { setBt(!bt) }} >
                        !Alert
                    </button>

                    <AlertT02 demo="true" />

                </div>

            </div>

            <div className="p-4">
                <div className="text-white">
                    __modals__
                </div>
                <div className="border">
                    <Modal01 demo="true" />
                    <Modal02 demo="true" />
                </div>

            </div>






        </div>


        <AlertT State={bt} close={() => { setBt(!bt) }} />





    </>);
};

export default Demo;