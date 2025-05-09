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

const RiwayatCard = ({ listRiwayat,
	}) => {
  const { checkPermission } = useAuth();
  const {  } = useParams()
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listRiwayat]}
  	
  	itemsAttrs={[
          {
            id: "roomName",
            condition: "",
            label: "Room Name",
  		  featureName: "namaKamar",
            editable: false
          }
  ,
          {
            id: "propertyName",
            condition: "",
            label: "Property Name",
  		  featureName: "namaProperti",
            editable: false
          }
  ,
          {
            id: "startDate",
            condition: "",
            label: "Start Date",
  		  featureName: "startDate",
            editable: false
          }
  ,
          {
            id: "endDate",
            condition: "",
            label: "End Date",
  		  featureName: "endDate",
            editable: false
          }
  ,
          {
            id: "status",
            condition: "",
            label: "Status",
  		  featureName: "statusPemesanan",
            editable: false
          }
  ]}
      itemsEvents={(riwayatItem) => [
  	]}
    />
  )	
};

export default RiwayatCard;
