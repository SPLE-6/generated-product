/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams, useSearchParams } from "react-router";
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
import confirm from '../services/confirm'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormSewaKost = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()

  const {idKamar} = useParams();

  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    confirm({
      ...cleanData,
    }, {idKamar})
    .then(({ data: { data } }) => {
     navigate(`/riwayat`)
  	notifySuccess(`Confirm berhasil!`);
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
