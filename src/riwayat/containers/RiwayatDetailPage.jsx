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

import RiwayatDetail from '../components/RiwayatDetail'
import getDetailRiwayat from '../services/getDetailRiwayat'
const RiwayatDetailPage = props => {
const [isLoading, setIsLoading] = useState({
	riwayatDetail: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailRiwayat, setDetailRiwayat] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, riwayatDetail: true}))
			const { data: detailRiwayat } = await getDetailRiwayat({ idRiwayat })
			setDetailRiwayat(detailRiwayat.data)
		} finally {
			setIsLoading(prev => ({...prev, riwayatDetail: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Riwayat Detail Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/riwayat/payment/:idUser/:idKost/:idPayment
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Payment
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Riwayat Detail"}
	singularName={"Detail"}
	items={{...detailRiwayat}}
	isLoading={isLoading.riwayatDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<RiwayatDetail {...{ data : { ...detailRiwayat }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default RiwayatDetailPage

