/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import submit from '../services/submit'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditProfile = ({ 
	editProfile
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: editProfile })
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    submit({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/profile`)
  	notifySuccess(`Submit berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Profile" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="email"
		        name="email"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Email"
		            placeholder="Masukkan email"
		            defaultValue={editProfile.email}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="noHP"
		        name="noHP"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Phone Number"
		            placeholder="Masukkan phone number"
					type="number"
		            defaultValue={editProfile.noHP}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="jenis_kelamin"
		        name="jenis_kelamin"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Gender"
		            placeholder="Masukkan gender"
		            defaultValue={editProfile.jenis_kelamin}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="pekerjaan"
		        name="pekerjaan"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Job"
		            placeholder="Masukkan job"
		            defaultValue={editProfile.pekerjaan}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="kota_asal"
		        name="kota_asal"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Hometown"
		            placeholder="Masukkan hometown"
		            defaultValue={editProfile.kota_asal}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="status_pernikahan"
		        name="status_pernikahan"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Marital Status"
		            placeholder="Masukkan marital status"
		            defaultValue={editProfile.status_pernikahan}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="pendidikan_terakhir"
		        name="pendidikan_terakhir"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Education"
		            placeholder="Masukkan education"
		            defaultValue={editProfile.pendidikan_terakhir}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="kontak_darurat"
		        name="kontak_darurat"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Emergency Contact"
		            placeholder="Masukkan emergency contact"
		            defaultValue={editProfile.kontak_darurat}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="photo_url"
		        name="photo_url"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Photo URL"
		            placeholder="Masukkan photo url"
		            defaultValue={editProfile.photo_url}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="full_name"
		        name="full_name"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Full Name"
		            placeholder="Masukkan full name"
		            defaultValue={editProfile.full_name}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditProfile
