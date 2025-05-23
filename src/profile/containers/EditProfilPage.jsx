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
import FormEditProfil from '../components/FormEditProfil'

import getEditProfil from '../services/getEditProfil'
const EditProfilPage = props => {
const [isLoading, setIsLoading] = useState({
	editProfil: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [editProfil, setEditProfil] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editProfil: true}))
		const { data: editProfilResponse } = await getEditProfil({  })

	    setEditProfil(editProfilResponse.data)
		


	    setIsLoading(prev => ({...prev, editProfil: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Edit Profil Page")
	}, []);

	console.log(editProfil)
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Profil"}
		isLoading={isLoading.editProfil}
	>
		{editProfil ? 
		(<>
		 <FormEditProfil
			{...{ 
				editProfil
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditProfilPage

