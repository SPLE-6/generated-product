/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
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

const FormEditProfil = ({ 
	editProfil
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
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
		  title="Edit Profil" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="fullName"
		        name="fullName"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Full Name"
		            placeholder="Masukkan full name"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="email"
		        name="email"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Email"
		            placeholder="Masukkan email"
		            fieldState={fieldState}
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
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="jenisKelamin"
		        name="jenisKelamin"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Gender"
		            placeholder="Masukkan gender"
		            fieldState={fieldState}
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
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="kotaAsal"
		        name="kotaAsal"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Hometown"
		            placeholder="Masukkan hometown"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="statusPernikahan"
		        name="statusPernikahan"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Marital Status"
		            placeholder="Masukkan marital status"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="pendidikanTerakhir"
		        name="pendidikanTerakhir"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Education"
		            placeholder="Masukkan education"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="kontakDarurat"
		        name="kontakDarurat"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Emergency Contact"
		            placeholder="Masukkan emergency contact"
					type="number"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="fotoUrlProfil"
		        name="fotoUrlProfil"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Photo URL"
		            placeholder="Masukkan photo url"
		            fieldState={fieldState}
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

export default FormEditProfil
