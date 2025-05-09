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

import ProfileDetail from '../components/ProfileDetail'
import getProfileDetail from '../services/getProfileDetail'
const ProfileDetailPage = props => {
const [isLoading, setIsLoading] = useState({
	profileDetail: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [profileDetail, setProfileDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, profileDetail: true}))
			const { data: profileDetail } = await getProfileDetail({ id })
			setProfileDetail(profileDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, profileDetail: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Profile Detail Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/profile/edit
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Edit Profile
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Profile Detail"}
	singularName={"Detail"}
	items={{...profileDetail}}
	isLoading={isLoading.profileDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<ProfileDetail {...{ data : { ...profileDetail }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ProfileDetailPage

