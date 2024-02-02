
import { useState, useRef } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { CSSTransition } from 'react-transition-group';


const Modal01 = (props: any) => {
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
                    !Modal01
                </button>
            </>}






            <CSSTransition nodeRef={nodeRef} in={showModal} timeout={200} classNames="my-node" unmountOnExit
                appear>
                <>
                    <div ref={nodeRef} className="backdrop"  >
                        <div className="Modal01">
                            <div className="head">

                                <div className="d-flex p-3 justify-content-between">
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

export default Modal01