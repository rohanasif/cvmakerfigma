import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    const pages = [1, 2, 3, 4];

    return pages.map((page) => (
      <li key={page}>
        <a
          href="#"
          onClick={() => changePage(page)}
          className={getPageItemClassName(page)}
        >
          {page}
        </a>
      </li>
    ));
  };

  const getPageItemClassName = (page) => {
    if (page === currentPage || page < currentPage) {
      return "active";
    }
    return "";
  };

  return <ul className="pagination">{renderPaginationItems()}</ul>;
};

export default Pagination;
