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
import MyCard from "../components/MyCard";

import getListMyProperti from '../services/getListMyProperti'
const MyPropertiPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listMyProperti: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listMyProperti, setListMyProperti] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listMyProperti: true}))
				const { data: listMyProperti } = await getListMyProperti()
				setListMyProperti(listMyProperti.data)
			} finally {
				setIsLoading(prev => ({...prev, listMyProperti: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("MyProperti Page")
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
	title={"List My Properti"}
	singularName={"My"}
	items={[listMyProperti]}
	isLoading={isLoading.listMyProperti}
>
	<MyCard
		listMyProperti={listMyProperti}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default MyPropertiPage

