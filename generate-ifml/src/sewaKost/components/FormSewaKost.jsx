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

const FormSewaKost = ({ 
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
		  title="Sewa Kost" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="startDate"
		        name="startDate"
		        control={control}
				rules={{ required: "Harap masukkan start date" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Start Date"
		            placeholder="Masukkan start date"
					type="date"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="endDate"
		        name="endDate"
		        control={control}
				rules={{ required: "Harap masukkan end date" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="End Date"
		            placeholder="Masukkan end date"
					type="date"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="idProfilPengguna"
		        name="idProfilPengguna"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Id Profil Pengguna"
		            placeholder="Masukkan id profil pengguna"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="idKamar"
		        name="idKamar"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Id Kamar"
		            placeholder="Masukkan id kamar"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="detail"
		        name="detail"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Detail"
		            placeholder="Masukkan detail"
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

export default FormSewaKost
