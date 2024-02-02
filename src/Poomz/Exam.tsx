
import './Exam.css'
import { Content, Head, XD, Category, ProductForYou, SlotEND } from './Components';

import img from '../assets/test7.gif'

const Exam = () => {




    return (<>


        <XD>
         
                <Head>
                    <img src={img} className='rounded Thynne' height="50" alt="description of image" />
                </Head>
                <Content >

                    <Category />
                    <ProductForYou Hi="HI" />
                    <SlotEND />
                </Content>
         
        </XD>


    </>);
};

export default Exam;