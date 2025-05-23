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
import { useSearchParams } from "react-router";
import AddedFormPaymentKreditForm from '../components/AddedFormPaymentKreditForm'
const PaymentKreditForm = props => {
const [isLoading, setIsLoading] = useState({
	paymentKreditForm: false,

	});
	
	const { setTitle } = useContext(HeaderContext);


useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, paymentKreditForm: true}))


	    setIsLoading(prev => ({...prev, paymentKreditForm: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Payment Kredit Form")
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
		singularName={"Kredit"}
		isLoading={isLoading.paymentKreditForm}
	>
		<AddedFormPaymentKreditForm
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PaymentKreditForm

