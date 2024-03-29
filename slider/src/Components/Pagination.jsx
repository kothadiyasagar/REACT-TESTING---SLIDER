import '../App.css'

export const Pagination = ({ total, selected, onPageChange }) => {
         let  str=[]
          for (let i= 1; i<=total; i++ ){
             str.push(i)
          }
          console.log(selected)
  return <div className="pageContainer">
      {selected==1 ? "" : <div onClick={()=>{onPageChange(selected-1)}}  >prev</div>}
        {str.map((el,index)=>{
           return(
             <>
             {console.log(selected===el)}
             {+(selected)==el ? (<div style={{   border: "1px solid #fb1414",
   marginRight: "10px",
   textalign: "center",
   padding: "10px",
}}>{el}</div>) : (<div style={{   border: "1px solid #111518",
marginRight: "10px",
textalign: "center",
padding: "10px",
}}>{el}</div>)}
             </>
           )
        })}
       { selected==total ? "":<div  onClick={()=>{onPageChange(selected+1)}}>next</div>}
        
  </div>;

};
