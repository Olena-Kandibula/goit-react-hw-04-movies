import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../views/HomeView/Context";

import * as moviesAPI from "../../services/movies-api";

import Container from "../../Components/Container/Container";
import PaginationRender from "./PaginationRender/PaginationRender";

function Pagination({ moviewsRequest }) {
  // const [moviewsRequest, setMoviewsRequest] = useState(null);
  // const [page, setPage] = useState(1);
  // const [status, setStatus] = useState('adle');
  // const [context, setContext] = useContext(Context);

  // console.log('pagination page', page)
  // console.log('pagination context', context);
  // useEffect(() => {
  //     // console.log('useEffect')
  //     moviesAPI
  //         .fetchMoviesTrending({page})
  //         .then((res) => (
  //             setMoviewsRequest(res),
  //             setStatus('resolved')),

  //         )//объект все фильмы
  //         .catch((error) => console.warn(error));
  // }, [page]);

  // const getCurrentPage = (pageClick) => {
  //     setPage(pageClick);
  // }

  // if (status==='resolved'){
  // // const totalPages = moviewsRequest.total_pages;

  // // const allPagesFromAPI = () => { //массив доступных страниц для пагинации
  // //     return new Array(totalPages)
  // //         .fill('')
  // //     .map((_, i) =>`${i+1}`)
  // // }
  // console.log(moviewsRequest.page)
  // }
  // console.log(moviewsRequest.total_pages)

  // console.log(moviewsRequest)
  // console.log(moviewsRequest.page)
  // console.log(moviewsRequest.total_results)
  //  console.log(moviewsRequest.total_pages)
  // console.log(moviewsRequest.results.total_pages)

  return (
    <Container>
      {moviewsRequest && (
        <PaginationRender
          pagesTotal={moviewsRequest.total_pages}
          // onClick={getCurrentPage}
        />
      )}
    </Container>
  );
}

export default Pagination;
