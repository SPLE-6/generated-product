/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import KatalogKostPage from './containers/KatalogKostPage'
import DetailKostPage from './containers/DetailKostPage'

const katalogKostRoutes = [
{ 
	path: "/katalog",
	element: <KatalogKostPage />,
}

	
,
{ 
	path: "/katalog/:idProperti",
	element: <DetailKostPage />,
}

	

]

export default katalogKostRoutes
