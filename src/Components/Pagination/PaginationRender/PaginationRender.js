import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import React, { useContext } from "react";
import { Context } from "../../../views/HomeView/Context";

import s from "../PaginationRender/PaginationRender.module.css";

function PaginationArya({ pagesTotal, onClick }) {
  const [total, setTotal] = useState(null);
  const [value, setValue] = useState(null);
  const [context, setContext] = useContext(Context);

  // const [activ, setActiv] = useState(false);
  console.log("render context", context);
  useEffect(() => {
    if (pagesTotal <= 9) {
      setTotal(pagesTotal);
    }

    if (pagesTotal > 9) {
      setTotal(9);
    }
  }, [pagesTotal]);

  const pages = Array.from({ length: total }).map((u, i) => i + 1);

  const handleClick = (page, e) => {
    // setValue(page)
    handleCurrent(e);
    // setActiv(!activ)
    setValue(page);
    onClick(page);
  };
  const handleCurrent = (e) => {
    // //      console.log(e.currentTarget)
  };

  // console.log('value', value)

  if (pagesTotal <= 9) {
    return (
      <div>
        {pages.map((page) => (
          <button key={page} type="button">
            {page}
          </button>
        ))}
      </div>
    );
  }

  if (pagesTotal > 9) {
    pages[0] = 1;
    pages[total - 1] = "...";
    pages[total] = pagesTotal;
    // console.log(pages)
    return (
      <div>
        {pages.map((page) => (
          <button
            key={page}
            className={s.button}
            // className={classButton}
            type="button"
            // onClick={(e) => handleClick(page, e)}
            onClick={() => setContext(page)}
            // Change Context Value
            // activ={activ}
            activ="true"
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      </div>
    );
  }
}

PaginationArya.propTypes = {
  pagesTotal: PropTypes.number,
};

export default PaginationArya;
