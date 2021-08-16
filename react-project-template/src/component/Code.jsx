import '../prism.css'
import '../Style.css'
import Highlight, { defaultProps } from "prism-react-renderer";
import demo from 'prism-react-renderer/themes/synthwave84'
import styled from "styled-components";



const Code = () => {
  // insert your code here
  const exampleCode = `
  import {useState} from 'react'

  const Application = () => {

    //STEP 1
    const[start,setStart]=useState(0)
    const[end,setEnd]=useState(100)
    const[numbers,setNumbers]=useState([])
    
    //STEP2
    const startChange=(e)=>{
      setStart(e.target.value)
    }
    const endChange=(e)=>{
      setEnd(e.target.value)
    }

    //STEP3
    function handleClick(){
      let s=start
      let e=end
      let numArray=[]
      for(s;s<=e;s++){
        numArray.push(s)
      }
      setNumbers(numArray)
    } 
    return(
      //building ui has been ommited in order to shortening the code
      //go to github for full code
      <table className="table table-striped table-sm">
      <tbody>

      //STEP 4
        {numbers.map(number=>{
            if(number%2==0){
              return <tr><td style={{fontWeight:'bolder'}}>{number}</td></tr>
            }else{
              return <tr><td>{number}</td></tr>
            }
        })}
      </tbody>
    )
  }     `.trim();

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  color:white
`;

const LineContent = styled.span`
  display: table-cell;
`;
  return ( <>
   <div className="container py-5 px-5">
     <h3 className="border-1 border-bottom border-dark pb-3">the code of project</h3>
     <div className="row row-cols-1 row-cols-sm-2">
       <div className="col-sm-8">
          
        <Highlight 
        {...defaultProps}  
        theme={demo}
        code={exampleCode} 
        language="js">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
             <Pre className={className} style={style}>
              {tokens.map((line, i) => (
               <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
               <LineContent>
               {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
               ))}
               </LineContent>
               </Line>
        ))}
      </Pre>
    )}
  </Highlight>
          
       </div>
       <div className="col-sm-4 order-sm-last order-first">
         <div className="row mt-sm-5">
           <div className="col mt-sm-5">
             <h6 className='mt-sm-5'>step1</h6>
             <p>using react hooks (useState) in order to building changable variables</p>
           </div>
         </div>
         <div className="row mt-sm-5">
           <div className="col">
             <h6>step2</h6>
             <p>using event handlers for tracking changes wich user had made</p>
           </div>
        </div>
        <div className="row mt-sm-5 mb-sm-5">
           <div className="col">
             <h6>step3</h6>
             <p>using event handlers for clicking button and start to generating numbers</p>
           </div>
         </div>
         <div className="row"><div className="col mb-sm-5 mt-sm-5"></div></div>
         
         <div className="row mt-sm-5">
           <div className="col mt-sm-5">
             <h6 className='mt-sm-5'>step4</h6>
             <p>displaying numbers in the form of table and using if statment to bold even numbers</p>
           </div>
         </div>
         </div>
     </div>
   </div>
  </> );
}
 
export default Code;



 