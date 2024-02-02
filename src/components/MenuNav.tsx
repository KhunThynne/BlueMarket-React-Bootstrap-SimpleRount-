import { Link, Outlet } from "react-router-dom";



const MenuNav = () => {

    const menu = () => {
        return (
            <><div className="mx-3">
                <Link to="">Home</Link>
            </div>
                <div className="mx-3">
                    <Link to="blogs">Blogs</Link>
                </div>
                <div className="mx-3">
                    <Link to="demo">Demo</Link>
                </div>
                <div className="mx-3">
                    <Link to="example">Ex</Link>
                </div> 
              
                <div className="ms-auto">
                    <Link to="contact">Contact</Link>
                </div></>
        )

    }


    return (
        <><div className="NavigationBar">
            <div className="d-flex  container p-4 ">
                {menu()}
            </div>
        </div>
            <Outlet />
        </>



    );
};

export default MenuNav;