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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import KatalogCard from "../components/KatalogCard";

import getListKatalogKost from '../services/getListKatalogKost'
const KatalogKostPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listKatalogKost: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listKatalogKost, setListKatalogKost] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listKatalogKost: true}))
				const { data: listKatalogKost } = await getListKatalogKost({ })

				setListKatalogKost(listKatalogKost.data)
			} finally {
				setIsLoading(prev => ({...prev, listKatalogKost: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Katalog Kost Page")
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
	title={"List Katalog Kost"}
	singularName={"Katalog"}
	items={[listKatalogKost]}
	isLoading={isLoading.listKatalogKost}
>
	<KatalogCard
		listKatalogKost={listKatalogKost}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default KatalogKostPage

