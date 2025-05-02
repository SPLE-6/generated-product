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
import RiwayatCard from "../components/RiwayatCard";

import getListRiwayat from '../services/getListRiwayat'
const RiwayatPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRiwayat: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listRiwayat, setListRiwayat] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRiwayat: true}))
				const { data: listRiwayat } = await getListRiwayat({ idRiwayat })
				setListRiwayat(listRiwayat.data)
			} finally {
				setIsLoading(prev => ({...prev, listRiwayat: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Riwayat Page")
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
	title={"List Riwayat"}
	singularName={"Riwayat"}
	items={[listRiwayat]}
	isLoading={isLoading.listRiwayat}
>
	<RiwayatCard
		listRiwayat={listRiwayat}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default RiwayatPage

