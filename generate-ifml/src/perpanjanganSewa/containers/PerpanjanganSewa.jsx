/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
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
import AddedFormAddedForm from '../components/AddedFormAddedForm'
import RiwayatCard from "../components/RiwayatCard";

import getDataBinding from '../services/getDataBinding'
const PerpanjanganSewa = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	addedForm: false,
	listRiwayat: false,

	});
	const { setTitle } = useContext(HeaderContext);


const [dataBinding, setDataBinding] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRiwayat: true}))
				const { data: dataBinding } = await getDataBinding()
				setDataBinding(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRiwayat: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("PerpanjanganSewa")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Form"}
		
	>
		<AddedFormAddedForm
			{...props}
		/>
	</Layouts.FormContainerLayout>
<Layouts.ListContainerCardLayout
	title={"List Riwayat"}
	singularName={"Riwayat"}
	items={[dataBinding]}
	isLoading={isLoading.listRiwayat}
>
	<RiwayatCard
		dataBinding={dataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PerpanjanganSewa

