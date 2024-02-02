
import './Exam.css'

const Exam = () => {

    const Content = (props: any) => {
        return (<>
            <div className='  Content'>
                <div className='border p-5'>
                    {
                        props.children
                    }
                </div>
            </div>

        </>)
    }


    return (<>
        <div className='containerE'>
            <Content >
                <div className='text-white'>  test </div>
            </Content>





        </div>

    </>);
};

export default Exam;