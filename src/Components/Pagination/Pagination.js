import PropTypes from "prop-types";
import PaginationRender from "./PaginationRender/PaginationRender";

function Pagination({ moviewsRequest }) {
  return (
    <>
      {moviewsRequest && (
        <PaginationRender pagesTotal={moviewsRequest.total_pages} />
      )}
    </>
  );
}

Pagination.propTypes = {
  moviewsRequest: PropTypes.object,
};

export default Pagination;
