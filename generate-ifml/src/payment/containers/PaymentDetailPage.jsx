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

import PaymentDetail from '../components/PaymentDetail'
import getPaymentDetail from '../services/getPaymentDetail'
const PaymentDetailPage = props => {
const [isLoading, setIsLoading] = useState({
	paymentDetail: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [paymentDetail, setPaymentDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, paymentDetail: true}))
			const { data: paymentDetail } = await getPaymentDetail({  })
			setPaymentDetail(paymentDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, paymentDetail: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Payment Detail Page")
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
	title={"Payment Detail"}
	singularName={"Detail"}
	items={{...paymentDetail}}
	isLoading={isLoading.paymentDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<PaymentDetail {...{ data : { ...paymentDetail }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PaymentDetailPage

