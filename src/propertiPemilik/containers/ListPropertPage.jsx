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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import PropertyCard from "../components/PropertyCard";

import getListProperty from '../services/getListProperty'
const ListPropertPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listProperty: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listProperty, setListProperty] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listProperty: true}))
				const { data: listProperty } = await getListProperty({ idProperty })
				setListProperty(listProperty.data)
			} finally {
				setIsLoading(prev => ({...prev, listProperty: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("List Propert Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Property"}
	singularName={"Property"}
	items={[listProperty]}
	isLoading={isLoading.listProperty}
>
	<PropertyCard
		listProperty={listProperty}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListPropertPage

