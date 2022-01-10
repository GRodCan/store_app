import React from "react";
import './Paginator.css'

const Paginator = ({items_number, page, change}) => {
  
  const prevPage=()=>change(page-10)
  const nextPage=()=>change(page+10)
  
  const printPages=(items)=>{
    let pages=[]
    for(let i=0;i*10<items;i++){      
      pages.push(<button key={i+1} onClick={()=>change((i+1)*10)} className="paginatorButton">{(i+1)}</button>)
    }
    return pages
  }

  
  return <div id="paginator">
          {((page/10)-1)>0?<button onClick={prevPage} className="paginatorButton">Prev</button>:null}
          {printPages(items_number)}
          {((page/10)+1)<=((items_number/10)+1)?<button onClick={nextPage} className="paginatorButton">Next</button>:null}
    </div>;
};

export default Paginator;
