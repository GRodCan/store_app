import React from "react";

const Paginator = ({items_number, page, change}) => {
  
  const prevPage=()=>change(page-10)
  const nextPage=()=>change(page+10)
  
  const printPages=(items)=>{
    let pages=[]
    for(let i=0;i*10<items;i++){      
      pages.push(<button key={i+1} onClick={()=>change((i+1)*10)}>{(i+1)}</button>)
    }
    return pages
  }

  
  return <div>
  {((page/10)-1)>0?<button onClick={prevPage}>Prev</button>:null}
  {/* {((page/10)-2)>0?<button>{(page/10)-2}</button>:null}
  {((page/10)-1)>0?<button>{(page/10)-1}</button>:null}
    
    <button>{page/10}</button>
    <button>{(page/10)+1}</button>
    
    <button>{(page/10)+2}</button> */}
    {printPages(items_number)}
    {((page/10)+1)<=((items_number/10)+1)?<button onClick={nextPage}>Next</button>:null}
    </div>;
};

export default Paginator;
