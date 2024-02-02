
import { useState, useRef } from "react";

import { CSSTransition } from 'react-transition-group';
const AlertT02 = (props: any) => {
    const nodeRef = useRef(null);
    const [showAlert, setShowAlert] = useState(false);

    if (showAlert) {

        setTimeout(function () {
            setShowAlert(!showAlert)
        }, 1000);
    }
    return (
        <>

            {props.demo && <>
                <button type="button" className="btn btn-secondary" onClick={() => { setShowAlert(!showAlert) }} >
                    !Alert02
                </button>
            </>}






            <CSSTransition nodeRef={nodeRef} in={showAlert} timeout={200} classNames="my-node" unmountOnExit
                appear>
                <>
                    <div ref={nodeRef} className="" >
                        <div className="Alert02">
                            <div className="d-flex justify-content-between p-3">
                                <div> !alert    </div>
                                <button type="button" className="btn text-danger" onClick={props.close}> X </button>
                            </div>
                        </div> </div></>
            </CSSTransition >

        </>
    );
};

export default AlertT02