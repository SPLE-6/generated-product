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

const RiwayatCard = ({ dataBinding,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[dataBinding]}
  	
  	itemsAttrs={[
          {
            id: "idPemesanan",
            condition: "",
            label: "Id Pemesanan",
  		  featureName: "idPemesanan",
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
            id: "totalHarga",
            condition: "",
            label: "Total Harga",
  		  featureName: "totalHarga",
            editable: false
          }
  ,
          {
            id: "statusPemesanan",
            condition: "",
            label: "Status Pemesanan",
  		  featureName: "statusPemesanan",
            editable: false
          }
  ,
          {
            id: "detail",
            condition: "",
            label: "Detail",
  		  featureName: "detail",
            editable: false
          }
  ,
          {
            id: "createdAt",
            condition: "",
            label: "Created At",
  		  featureName: "createdAt",
            editable: false
          }
  ]}
      itemsEvents={(riwayatItem) => [
  	]}
    />
  )	
};

export default RiwayatCard;
