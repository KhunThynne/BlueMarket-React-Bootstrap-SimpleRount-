
import { useRef } from "react";

import { CSSTransition } from 'react-transition-group';
const AlertT = (props: any) => {
    const nodeRef = useRef(null);


    const mystyle: any = {
        position: `fixed`,
        margin: `auto`,
        width: `300px`,
        textAlign: `center`,
        top: `35%`,
        left: `50%`,
        borderRadius: `10px 10px 5px `,
        transform: `translate(-50%, 0)`,
        backgroundColor: `white`,

    };

    const Bool = props.State

    if (Bool) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    return (
        <>

            <CSSTransition nodeRef={nodeRef} in={Bool} timeout={200} classNames="my-node" unmountOnExit
                appear>
                <>
                    <div ref={nodeRef} className="backdrop" >

                        <div style={mystyle} className="Alert01">
                            <div className="head fs-2 rounded-top text-dark border-bottom p-2">
                                Header
                            </div>
                            <div className="p-4 text-dark">
                                !!{"body"}
                            </div>
                            <div className="text-end p-2 ">
                                <button className="btn btn-outline-primary" onClick={props.close}> close </button>
                            </div>

                        </div>  </div></>
            </CSSTransition >



        </>



    );
};

export default AlertT