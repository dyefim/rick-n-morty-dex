import React from 'react';

const Pagination = ({
  numberOfPages = 1,
  pageSetter,
}: {
  numberOfPages?: number;
  pageSetter: (page: number) => void;
}) => (
  <nav>
    {Array.from({ length: numberOfPages }).map((_, i) => (
      <button key={i} onClick={() => pageSetter(i)}>
        {i + 1}
      </button>
    ))}
  </nav>
);

export default Pagination;
