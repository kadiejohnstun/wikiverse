import React, {useState} from 'react';
import apiURL from '../api';

export const PageComp = ({page, setPage, fetchPage}) => {

  return <>
    <h3>{page.title}</h3>

        <h4>{`Author: ${page.author.name}`}</h4>
        <h4>{`Published: ${page.createdAt}`}</h4> 
        <h4>{`Content: ${page.content}`}</h4>

        <button onClick={()=> setPage({})} >Back to Wiki List</button> 
        <button onClick={fetchPage}>Delete</button>
  </>
} 