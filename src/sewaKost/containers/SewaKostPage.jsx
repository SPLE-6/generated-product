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
import FormSewaKost from '../components/FormSewaKost'
const SewaKostPage = props => {
const [isLoading, setIsLoading] = useState({
	sewaKost: false,

	});
	const { setTitle } = useContext(HeaderContext);

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, sewaKost: true}))


	    setIsLoading(prev => ({...prev, sewaKost: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Sewa Kost Page")
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
		singularName={"Kost"}
		isLoading={isLoading.sewaKost}
	>
		<FormSewaKost
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default SewaKostPage

