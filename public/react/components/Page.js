import React from 'react';

export const Page = ({title, slug, fetchPage}) => {
// console.log(title);
// console.log(slug);
  return <>
    <h3 onClick={()=>fetchPage(slug)}>{title}</h3>
  </>
} 