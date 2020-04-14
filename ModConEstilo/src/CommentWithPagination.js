import React, { useState, useCallback, useEffect } from "react";
import PaginationCommon from "./Pagination";
import './styles.css'

const CommentWithPagination = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChanged = useCallback(
    (event, page) => {
      console.log("Esto es el page:" , page)
      event.preventDefault();
      if(page > 0){
        setCurrentPage(page);
      }else{
        console.log("La pagina ya es menor que uno es imposible");
        
      }
    },
    [currentPage]
  );

  return (
    <div className="pagination-wrapper">
      <PaginationCommon
        totalPages={8}
        pageNeighbours={1}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
    </div>
  );
};
export default CommentWithPagination;
