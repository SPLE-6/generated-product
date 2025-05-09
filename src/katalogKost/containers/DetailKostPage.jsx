/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import KostDetail from '../components/KostDetail'
import getKostDetail from '../services/getKostDetail'
const DetailKostPage = props => {
const [isLoading, setIsLoading] = useState({
	kostDetail: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [kostDetail, setKostDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, kostDetail: true}))
			const { data: kostDetail } = await getKostDetail({ idProperti })
			setKostDetail(kostDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, kostDetail: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Kost Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/sewa-kost
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Sewa Kost
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Kost Detail"}
	singularName={"Detail"}
	items={{...kostDetail}}
	isLoading={isLoading.kostDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<KostDetail {...{ data : { ...kostDetail }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailKostPage

