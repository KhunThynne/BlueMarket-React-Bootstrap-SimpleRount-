const Head = (props: any) => {
    return (<>
        <div className='Head'>
            <div className=''>
                {
                    props.children
                }
            </div>
        </div>

    </>)
}

export default Head;