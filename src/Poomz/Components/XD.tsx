const XD = (props: any) => {
    return (<>
        <span className='Background-blackdrop' />


        <div className='bg-light' >

            <div className='containerE'>
                {
                    props.children
                }
            </div>

        </div>
    </>)
}

export default XD;