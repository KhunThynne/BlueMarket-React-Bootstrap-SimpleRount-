

const ItemData = () => {
    const list: any = []

    for (let i = 0; i < 11; i++) {
        list.push(<div className="col-6 col-xxl-4 col-md-4 col-lg-6"  key={i}>
            <div className="border p-5 box bright"> </div>
        </div>)
    }


    return (<>
        <div className="Header">
            <h1 className="border-bottom">Layout</h1>

        </div>

        <div className="row g-1" >

            {list}

        </div>
    </>);
};

export default ItemData;