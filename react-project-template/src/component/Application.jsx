import '../Style.css'
import {useState} from 'react'

const Application = () => {
  const[start,setStart]=useState(0)
  const[end,setEnd]=useState(100)
  const[numbers,setNumbers]=useState([])

  const startChange=(e)=>{
    setStart(e.target.value)
  }
  const endChange=(e)=>{
    setEnd(e.target.value)
  }


  function handleClick(){
    let s=start
    let e=end
    let num=[]
    for(s;s<=e;s++){
      num.push(s)
    }
    setNumbers(num)
  }
  return ( <>
    <div className="container mt-sm-5 mb-5">
     <div className="row row-cols-1 row-cols-sm-2 mt-sm-4 d-flex justify-content-between">
      <div className="col-sm-3 gx-5  mb-5">
        <h3 className='border-bottom border-2  mt-sm-5 '>Instructions</h3>
        <p className="lead">Enter <strong>starting value on the left</strong>
                     and <strong>ending value on the right</strong>. press button and values will appear on the results section.</p>
      </div>
       <div className="col-sm-8 gx-5">
            <h3>enter values</h3>
            <div style={{backgroundColor:'#ABB9A2'}}className="border border-2 p-3">
              <form>
                <div className="row">
                  <div className="col">
                  <label className="label-form">start</label>
                  <input type="text" onChange={startChange} className="form-control" defaultValue='0'/>
                  </div>
                  <div className="col">
                  <label className="label-form">end</label>
                  <input type="text" className="form-control" onChange={endChange}defaultValue='100'/>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center" >
                    <button className="btn btn-outline-dark btn-lg mt-3" onClick={handleClick} type='button'>display the hundo</button>
                  </div>
                </div>
              </form>
              <h5 className='mt-3 border-bottom border-2 text-center p-2'>results</h5>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <tbody>
                    {numbers.map(num=>{
                      
                        if(num%2==0){
                          return <tr><td style={{fontWeight:'bolder'}}>{num}</td></tr>
                        }else{
                          return <tr><td>{num}</td></tr>
                        }
                      
                    })}
                  </tbody>
                </table>
              </div>
            </div>
       </div>
     </div>
    </div>
  </> );
}
 
export default Application;