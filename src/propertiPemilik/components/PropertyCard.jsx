/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const PropertyCard = ({ listProperty,
	}) => {
  const { checkPermission } = useAuth();
  const {  } = useParams()
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listProperty]}
  	
  	itemsAttrs={[
          {
            id: "propertyName",
            condition: "",
            label: "Property Name",
  		  featureName: "namaProperti",
            editable: false
          }
  ]}
      itemsEvents={(propertyItem) => [
  	]}
    />
  )	
};

export default PropertyCard;
