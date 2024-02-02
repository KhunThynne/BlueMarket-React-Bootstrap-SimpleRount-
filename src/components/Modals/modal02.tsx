
import { useState, useRef } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { CSSTransition } from 'react-transition-group';


const Modal02 = (props: any) => {
    const nodeRef = useRef(null);
    const [showModal, setModal] = useState(false);

    if (showModal) {

        document.body.style.overflow = "hidden";
        /*
                setTimeout(() => {
                    setModal(!showModal)
                }, 1000);
        */
    } else {
        document.body.style.overflow = "auto";

    }
    return (
        <>

            {props.demo && <>
                <button type="button" className="btn btn-secondary" onClick={() => { setModal(!showModal) }} >
                    !Modal02
                </button>
            </>}






            <CSSTransition nodeRef={nodeRef} in={showModal} timeout={300} classNames="modalAnime" unmountOnExit
            >
                <>
                    <div ref={nodeRef} className="backdrop"  >
                        <div className="Modal02">
                            <div className="head">

                                <div className="d-flex p-3 justify-content-between nav" >
                                    <div className="">   Name_ </div>
                                    <AiFillCloseSquare className="fs-4 text-danger" onClick={() => { setModal(!showModal) }} />
                                </div>
                                Modal Header

                            </div>
                            <div className="body">
                                Modal Body

                            </div>
                            <div className="foot">
                                Modal Footer

                            </div>

                        </div>
                    </div></>
            </CSSTransition >

        </>
    );
};

export default Modal02