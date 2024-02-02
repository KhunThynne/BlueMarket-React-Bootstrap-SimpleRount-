import { Link, Outlet } from "react-router-dom";
import { useState, useRef } from "react";

import { CSSTransition } from 'react-transition-group';
import { IoGridOutline } from "react-icons/io5";
const MenuNav01 = () => {

    const [btNav, setBtNav] = useState(false);
    const nodeRef = useRef(null);

    const menu = () => {
        return (
            <>
                <div className="mx-3 d-none d-lg-block">
                    <Link to="">Home</Link>
                </div>
                <div className="mx-3 d-none d-lg-block">
                    <Link to="blogs">Blogs</Link>
                </div>
                <div className="mx-3 d-none d-lg-block">
                    <Link to="demo">Demo</Link>
                </div>
            </>
        )

    }



    if (btNav) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    return (
        <><div className="Menu01">
            <div className="d-flex   container p-lg-4 p-2">
                {menu()}

                <div className="d-lg-none ms-auto">
                    <IoGridOutline className="fs-1 p-0 m-0 active " onClick={() => setBtNav(!btNav)}>


                    </IoGridOutline>
                    {


                        < CSSTransition nodeRef={nodeRef} in={btNav} timeout={300} classNames="sidemenu" unmountOnExit
                            appear>
                            <>
                                <div className="sidemenu01" ref={nodeRef}>

                                    <div >

                                        <div className="text-end">
                                            <div className="fs-1 text-danger" onClick={() => setBtNav(!btNav)}>
                                                X
                                            </div>

                                        </div>
                                    </div>


                                </div>

                            </>
                        </CSSTransition >



                    }
                </div>
                <div className="ms-auto d-none d-lg-block">
                    <Link to="contact">Contact</Link>
                </div>


            </div>
        </div >
            <Outlet />
        </>



    );
};

export default MenuNav01;