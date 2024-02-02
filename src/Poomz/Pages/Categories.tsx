

import { Category, XD } from "../Components"
import ItemProduct from "../Components/ItemProduct";
const Categories = (props: any) => {
    return (<>

        <XD >
            <Category />

            <div className="row g-1
            
            ">
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </div>
        </XD >


    </>)
}

export default Categories;