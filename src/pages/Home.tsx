import ItemData from "../components/ItemData";



const Home = () => {


    return (<>

        <div className="containerXD ">
            <div className="px-5">       <h1 className=" border-bottom">Home      </h1></div>



            <div className="d-lg-flex  " style={{ height: `90%` }} >
                <div className="border mx-1 mx-auto mb-2 bodyTop" >


                </div>

                <div className="border overflow-auto  p-1 " style={{ width: `100%`, height: `80%` }}>
                    <ItemData />

                </div>
            </div>






        </div>








    </>);
};

export default Home;