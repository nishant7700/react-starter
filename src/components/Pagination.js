import React, { useEffect, useState } from "react";

function Pagination({ total, current_page, limit, changePage }) {
  const [total_pages, setTotal_pages] = useState();
  const [pagesArray, setpagesArray] = useState();
  useEffect(() => {
    setTotal_pages(Math.ceil(total / limit));
  }, [total, limit]);
  useEffect(() => {
    setpagesArray([...Array(total_pages).keys()]);
  }, [total_pages]);
  console.log("Pages Array", pagesArray);
  return (
    <div>
      <nav className="pagination-button">
        <ul className="pagination">
          <li
            className={
              current_page == 1
                ? `pagination-previous disabled`
                : `pagination-previous`
            }
          >
            <a
              className="page-link"
              tabIndex={-1}
              onClick={() => changePage(current_page - 1)}
            >
              <i className="fa fa-angle-left" />
            </a>
          </li>
          {total_pages &&
            pagesArray.map((item, index) => {
              return (
                <li
                  className={current_page == index + 1 ? ` active` : ``}
                  key={index}
                >
                  <a
                    className="page-link"
                    onClick={() => changePage(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              );
            })}

          <li
            className={current_page == total_pages ? `next disabled` : `next`}
          >
            <a
              className="page-link"
              onClick={() => changePage(current_page + 1)}
            >
              <i className="fa fa-angle-right" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
