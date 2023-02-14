export  function Address(props) { 
    const {street, postCode, city} = props.address
    return (
        <div className='container-client'>
            <p>rue : {street}</p>
            <p>code postale : {postCode}</p>
            <p>ville : {city}</p>
                
                
            </div>
    )
    }