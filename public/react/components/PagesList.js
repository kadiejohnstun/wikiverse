import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, fetchPage}) => {
	// console.log(pages);
	return <>
		{
			pages.map((page, idx) => {
				return <Page title={page.title} slug={page.slug} fetchPage={fetchPage} key={idx} />
			})
		}
	</>
} 
