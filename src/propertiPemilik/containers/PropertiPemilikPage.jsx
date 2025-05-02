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

import PropertiPemilikDetail from '../components/PropertiPemilikDetail'
import getPropertiPemilikDetail from '../services/getPropertiPemilikDetail'
const PropertiPemilikPage = props => {
const [isLoading, setIsLoading] = useState({
	propertiPemilikDetail: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [propertiPemilikDetail, setPropertiPemilikDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, propertiPemilikDetail: true}))
			const { data: propertiPemilikDetail } = await getPropertiPemilikDetail({ idProperty })
			setPropertiPemilikDetail(propertiPemilikDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, propertiPemilikDetail: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Properti Pemilik Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Properti Pemilik Detail"}
	singularName={"Pemilik"}
	items={{...propertiPemilikDetail}}
	isLoading={isLoading.propertiPemilikDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<PropertiPemilikDetail {...{ data : { ...propertiPemilikDetail }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PropertiPemilikPage

