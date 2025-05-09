/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import PropertiPemilikPage from './containers/PropertiPemilikPage'
import ListPropertPage from './containers/ListPropertPage'

const propertiPemilikRoutes = [
{ 
	path: "/my-property/:userId",
	element: <ListPropertPage />,
}

	
,
{ 
	path: "/my-property/:userId/:idProperty",
	element: <PropertiPemilikPage />,
}

	

]

export default propertiPemilikRoutes
