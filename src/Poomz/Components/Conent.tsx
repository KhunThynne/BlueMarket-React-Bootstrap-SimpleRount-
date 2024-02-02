
import Topup from '../../assets/test2.png'
import Coupon from '../../assets/test3.png'
import Youtube from '../../assets/test5.png'
import Discord from '../../assets/test4.png'

import { AiOutlineNotification } from 'react-icons/ai'

const Content = (props: any) => {


    const notify = () => {
        return (<>
            <div className=' d-flex p-2 border align-items-center rounded my-3 '>

                <div className=' rounded p-2 d-flex align-items-center fw-bold'
                    style={{ backgroundColor: `#fbf3ea`, color: `#d28b2d` }} >

                    <AiOutlineNotification className='mx-1' />
                    ประกาศ
                </div>
                <div className='px-3 fw-bold text-secondary' style={{ fontSize: `0.9vmax` }}>

                    บริการขายรหัสและบริการสุ่ม ID อันดับ 1 ระบบเติมเงิน Qrcode & Wallet อัตโนมัติ 24 ช.ม
                </div>
            </div>
        </>)
    }
    const menu1 = () => {
        const menu = [Topup, Coupon, Youtube, Discord]
        return (<>
            <div className='row '>
                {
                    menu.map((key: any, item: any) => {
                       
                 return (

                    item &&
                            <>


                               
                                    < div key={key} className='col-6 col-lg-3 ' >
                                        <img src={item} className='rounded' alt={item} />
                                    </div>
                              

                            
                            </>
                            
                            
                            
                            )
                    })
                }
            </div ></>)
    }
    const menu2 = () => {
        const menu = [{ head: 'ผู้ใช้งานทั้งหมด', value: '4382', count: "คน" },
        { head: 'สินค้าทั้งหมด', value: '74', count: "ชิ้น" },
        { head: 'สต๊อกทั้งหมด', value: '2325', count: "ชิ้น" },
        { head: 'ขายแล้วทั้งหมด', value: '32202', count: "ชิ้น" }]
        return (<>
            <div className='row py-2 g-2'>
                {
                    menu.map((key:any,item: any) => {
                        return (
                        item ??
                        <div key={key}>
                            < div className='col-6 col-lg-3 ' >
                                <div className='border  p-4 BorDerA'  >

                                    <div className='fw-bold ' style={{ fontSize: `12px` }}> {item.head}</div>

                                    <h3 style={{ color: `#d28b2d` }}>{item.value}<span className='' style={{ fontSize: `12px` }}> {item.count}</span> </h3>

                                </div>
                            </div>
                        </div>)
                    })





                }
            </div ></>)
    }


    return (<>
        <div className=' Content'>
            <div className='p-2 px-3'>
                {notify()}
                {menu1()}

                {menu2()}
                {
                    props.children
                }
            </div>
        </div>

    </>)
}

export default Content;