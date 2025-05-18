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
import Details from '../components/Details'
import getKostDetail from '../services/getKostDetail'
import KamarCard from "../components/KamarCard";

import getDataBinding from '../services/getDataBinding'
const DetailKostPage = props => {
const { propertiId } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	details: false,
	listKamar: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [kostDetail, setKostDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, details: true}))
			const { data: kostDetail } = await getKostDetail({ propertiId })
			setKostDetail(kostDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, details: false}))
		}
	}
	fetchData()
}, [])
const [dataBinding, setDataBinding] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listKamar: true}))
				const { data: dataBinding } = await getDataBinding({ propertiId })
				setDataBinding(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listKamar: false}))
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
	title={"Details"}
	singularName={""}
	items={{...kostDetail}}
	isLoading={isLoading.details}
	isCorrelatedWithAnotherComponent={false}
>
	<Details {...{ data : { ...kostDetail }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerCardLayout
	title={"List Kamar"}
	singularName={"Kamar"}
	items={[dataBinding]}
	isLoading={isLoading.listKamar}
>
	<KamarCard
		dataBinding={dataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailKostPage

