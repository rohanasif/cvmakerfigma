import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ pageNumber }) => {
  const [currentPage, setCurrentPage] = useState(pageNumber);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    const pages = [1, 2, 3, 4];

    return pages.map((page) => (
      <li key={page}>
        <Link
          to={`/${page}`}
          onClick={() => changePage(page)}
          className={getPageItemClassName(page)}
        >
          {page}
        </Link>
      </li>
    ));
  };

  const getPageItemClassName = (page) => {
    if (page === currentPage || page <= currentPage) {
      return "active";
    }
    return "";
  };

  return <ul className="pagination">{renderPaginationItems()}</ul>;
};

export default Pagination;
