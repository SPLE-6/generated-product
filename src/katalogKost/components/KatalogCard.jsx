/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const KatalogCard = ({ listKatalogKost,
	}) => {
  const { checkPermission } = useAuth();
  const {  } = useParams()
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listKatalogKost]}
  	
  	itemsAttrs={[
          {
            id: "name",
            condition: "",
            label: "Name",
  		  featureName: "namaProperti",
            editable: false
          }
  ,
          {
            id: "location",
            condition: "",
            label: "Location",
  		  featureName: "lokasiProperti",
            editable: false
          }
  ,
          {
            id: "idProperti",
            condition: "",
            label: "Id Properti",
  		  featureName: "idProperti",
            editable: false
          }
  ]}
      itemsEvents={(katalogItem) => [
  	]}
    />
  )	
};

export default KatalogCard;
