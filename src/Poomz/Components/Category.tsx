const Category = (props: any) => {
    return (<div className="p-2">

        <div className="d-flex justify-content-between p-2">
            <div className="fw-bold "> หมวดหมู่แนะนำสำหรับคุณ </div>
            <div className="fw-bold text-color"> ดูทั้งหมด </div>
        </div>
        <div className='row g-2'>

            <div className="col-12 col-md-6"><div className="border BorDerB" style={{ height: '180px' }}>  </div> </div>
            <div className="col-12 col-md-6"> <div className=" border BorDerB" style={{ height: '180px' }}>  </div></div>
            <div className="col-12 col-md-6"> <div className=" border BorDerB" style={{ height: '180px' }}>  </div></div>
            <div className="col-12 col-md-6"> <div className=" border BorDerB" style={{ height: '180px' }}>  </div></div>
        </div>

    </div>)
}

export default Category;