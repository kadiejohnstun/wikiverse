import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { PageComp } from "./PageComp";
import { Form } from './Form';

// import and prepend the api url to any fetch calls
import apiURL from "../api";
// import { CardInfo } from "./CardInfo";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState([]);
  const [addArticle, setAddArticle] = useState([]);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  async function fetchPage(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const pageData = await response.json();
      console.log(pageData);
      setPage(pageData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  async function handleDelete(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setPage(data);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  useEffect(() => {
    fetchPages();
  }, []);

  //page handler->open
  const handlerLink = () => {
    setShow(true);
  };
	// console.log(pages)
  return (
    <main>
      <h1>WikiVerse</h1>

      <h2>Click on an article for more info &#x2193;</h2>
    {
      Object.keys(page).length>0 ? <PageComp page={page} setPage={setPage} fetchPage={fetchPage}/> :
   
		<PagesList pages={pages} fetchPage={fetchPage}/>
  }
      
	

    </main>
  );
};