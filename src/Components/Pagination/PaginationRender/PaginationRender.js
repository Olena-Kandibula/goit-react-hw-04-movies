import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";

import { Context } from "../../../views/HomeView/Context";

import s from "../PaginationRender/PaginationRender.module.css";

function PaginationArya({ pagesTotal }) {
  const [total, setTotal] = useState(null);
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    if (pagesTotal <= 9) {
      setTotal(pagesTotal);
    }

    if (pagesTotal > 9) {
      setTotal(9);
    }
  }, [pagesTotal]);

  const pages = Array.from({ length: total }).map((u, i) => i + 1);

  if (pagesTotal <= 9) {
    return (
      <div>
        {pages.map((page) => (
          <button
            key={page}
            className={s.button}
            type="button"
            onClick={() => setContext(page)}
            disabled={page === "..."}
          >
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

    return (
      <div>
        {pages.map((page) => (
          <button
            key={page}
            className={s.button}
            type="button"
            onClick={() => setContext(page)}
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

// ==============try algoritm====
// const [btnId, setBtnId] = useState(null);
//  const [btnValue, setBtnValue] = useState(null);

//     const pages = [
//         { id: 1, value: 1 },
//         { id: 2, value: 2 },
//         { id: 3, value: 3 },
//         { id: 4, value: 4 },
//         { id: 5, value: 5 },
//         { id: 6, value: 6 },
//         { id: 7, value: 7 },
//         { id: 8, value: 8 },
//         { id: 9, value: 9 }

// ]
//   const handleClick = (page, e) => {

//       setContext(page.value)
//     //   setBtnId(page.id)
//     //   setBtnValue(page.value)

//   };
// if (pagesTotal > 9 && btnId === 7 && btnValue < pagesTotal - 5) {
//     console.log('btnId777', btnId)
//     pages[0].value = 1;
//     pages[1].value = "...";
//     pages[7].value = "...";
//     pages[8].value = pagesTotal;

//     pages[2].value = btnValue;
//     pages[3].value = btnValue + 1;
//     pages[4].value = btnValue + 2;
//     pages[5].value = btnValue + 3;
//     pages[6].value = btnValue + 4;
// }
//     if (pagesTotal > 9 && btnId === 3 ) {
//         console.log('<5', btnId)
//     }

// return (
//     <div >
//         {pages.map((page) => (
//             <button
//                 key={page.id}
//                  className={s.button}
//                 type="button"
//                 onClick={() => handleClick(page, page.value)}
//                 activ="true"
//                 disabled={page.value === "..."}
//             >
//                 {page.value}

//             </button>

//         ))}

//     </div>

// );
