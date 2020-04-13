import React, { useState, useCallback, useEffect } from "react";
import PaginationCommon from "./Pagination";
import Comment from "./Comment";
import { data } from "./data";

const CommentWithPagination = () => {

  const [currentPage, setCurrentPage] = useState(1);

  let NUM_OF_RECORDS = data.length;
  let LIMIT = 3;

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

  const currentComments = data.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );

  return (
    <div className="pagination-wrapper">
      {/* <Comment comments={currentComments} /> */}
      <PaginationCommon
        // totalRecords={NUM_OF_RECORDS}
        // pageLimit={LIMIT}
        totalPages={8}
        pageNeighbours={1}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
    </div>
  );
};
export default CommentWithPagination;
