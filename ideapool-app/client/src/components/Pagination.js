import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

// function Pagination({ currentPage, totalPages, onPageChange }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ol className="pagination">
//         {pageNumbers.map(number => (
//           <li key={number} className="page-item">
//             <button
//               className={currentPage === number ? 'page-link active' : 'page-link'}
//               onClick={() => onPageChange(number)}
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// }

// export default Pagination;


function MyPagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => onPageChange(i)}>
        {i}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination>{pageNumbers}</Pagination>
  );
}

export default MyPagination;
