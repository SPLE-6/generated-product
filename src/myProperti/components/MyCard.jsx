/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const MyCard = ({ listMyProperti,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listMyProperti]}
  	
  	itemsAttrs={[
          {
            id: "idProperti",
            condition: "",
            label: "Id Properti",
  		  featureName: "idProperti",
            editable: false
          }
  ,
          {
            id: "namaProperti",
            condition: "",
            label: "Nama Properti",
  		  featureName: "namaProperti",
            editable: false
          }
  ,
          {
            id: "lokasi",
            condition: "",
            label: "Lokasi",
  		  featureName: "lokasiProperti",
            editable: false
          }
  ]}
      itemsEvents={(myItem) => [
  	]}
    />
  )	
};

export default MyCard;
