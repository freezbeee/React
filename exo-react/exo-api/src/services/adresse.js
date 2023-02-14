export  function Address(props) { 
    const {street, postCode, city} = props.address
    return (
        <div className='container-client'>
            <p><span>rue : </span>{street}</p>
            <p><span>code postale : </span>{postCode}</p>
            <p><span>ville : </span>{city}</p>
                
                
            </div>
    )
    }