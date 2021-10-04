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

  return (
    <div>
      <nav className="">
        <ul className="pagination">
          <li
            className={
              current_page == 1
                ? `paginate_button page-item previous disabled`
                : `paginate_button page-item previous`
            }
          >
            <a
              className="page-link"
              tabIndex={-1}
              style={{ cursor: "pointer" }}
              onClick={() => changePage(current_page - 1)}
            >
              Previous
            </a>
          </li>
          {total_pages &&
            pagesArray.map((item, index) => {
              return (
                <li
                  className={
                    current_page == index + 1
                      ? `paginate_button page-item active`
                      : `paginate_button page-item`
                  }
                  key={index}
                >
                  <a
                    className="page-link"
                    onClick={() => changePage(index + 1)}
                    style={{ cursor: "pointer" }}
                  >
                    {index + 1}
                  </a>
                </li>
              );
            })}

          <li
            className={
              current_page == total_pages
                ? `paginate_button page-item next disabled`
                : `paginate_button page-item next`
            }
          >
            <a
              className="page-link"
              onClick={() => changePage(current_page + 1)}
              style={{ cursor: "pointer" }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
