

const FisheDisplay = (props) => {
    const fishe = props.fish
  
    
  
    return (
        <div className="border border-info rounded p-3 my-3 ">
          <div className="row">
            <div className="col-4">
            <img src={fishe.avatar} className="rounded-circle" alt="" />
            </div>
          <div className="col"> 
        <div className="d-flex justify-content-between align-items-center">
            <div className="rounded-circle">
            
            </div>
          <h5>{fishe.firstName} / {fishe.lasteName}</h5>
          
        {props.isLogged && <button className="btn btn-outline-warning m-2" onClick={()=> props.updateFish(fishe.id)}><i className="bi bi-pen-fill"></i></button>}
        {props.isLogged && <button className="btn btn-outline-danger m-2"  onClick={() => props.deletFish(fishe.id)} ><i className="bi bi-trash me-1"></i></button>}
        </div>
          <hr />
          <ul>
            <li>Date de naissance : {fishe.birth}</li>
            <li>age : {fishe.age} ans</li>
            <li>email: {fishe.email}</li>
            <li>Numéro de teslephone : {fishe.phone}</li>
          </ul>
        
        <div className="d-flex justify-content-between align-items-center">
        
        </div>
        </div>
          </div>
      </div>
    )
  }
  
  export default FisheDisplay