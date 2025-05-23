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

const AddedFormPaymentKreditForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  const { idPemesanan } = useParams()

  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
	confirm({
      ...cleanData,
    }, {idPemesanan})
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
		  title="Payment Kredit Form" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="accountNumber"
		        name="accountNumber"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Account Number"
		            placeholder="Masukkan account number"
		            	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="ccv"
		        name="ccv"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="CCV"
		            placeholder="Masukkan ccv"
		                        fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="provider"
		        name="provider"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Provider"
		            placeholder="Masukkan provider"
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

export default AddedFormPaymentKreditForm
