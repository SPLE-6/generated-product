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
import { useSearchParams } from "react-router";
import FormEditProfile from '../components/FormEditProfile'

import getEditProfile from '../services/getEditProfile'
const EditProfilePage = props => {
const [isLoading, setIsLoading] = useState({
	editProfile: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [editProfile, setEditProfile] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editProfile: true}))
		const { data: editProfileResponse } = await getEditProfile({   })

	    setEditProfile(editProfileResponse.data)


	    setIsLoading(prev => ({...prev, editProfile: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Edit Profile Page")
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
		singularName={"Profile"}
		isLoading={isLoading.editProfile}
	>
		{editProfile ? 
		(<>
		 <FormEditProfile
			{...{ 
				editProfile
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditProfilePage

