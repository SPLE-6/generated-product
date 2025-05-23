/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import Details from '../components/Details'
import getDataBinding from '../services/getDataBinding'
const ProfilDetailPage = props => {
const [isLoading, setIsLoading] = useState({
	details: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBinding, setDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, details: true}))
			const { data: dataBinding } = await getDataBinding({  })
			const mappedData = {
				...dataBinding.data,
				jenisKelamin:
				dataBinding.data.jenisKelamin === true ? "Perempuan" : "Laki-Laki",
			};
			setDataBinding(mappedData)
		} finally {
			setIsLoading(prev => ({...prev, details: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Profil Detail Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/profile/edit
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Edit Profile
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Details"}
	singularName={""}
	items={{...dataBinding}}
	isLoading={isLoading.details}
	isCorrelatedWithAnotherComponent={false}
>
	<Details {...{ data : { ...dataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ProfilDetailPage

