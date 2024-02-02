
import ItemProduct from "./ItemProduct"
const ProductForYou = (props: any) => {
    const menu = [{}, {}, {}, {}, {}, {}]
    return (<div className="py-2">

        <div className="d-flex justify-content-between p-2">
            <div className="fw-bold "> สินค้าแนะนำสำหรับคุณ </div>
            <div className="fw-bold text-color"> ดูทั้งหมด </div>
        </div>

        <div className='row g-1'>

            {
                menu.map((item: any) => {
                    return (<>

                        <ItemProduct />
                    </>)
                })
            }
        </div >  </div>)
}
export default ProductForYou;