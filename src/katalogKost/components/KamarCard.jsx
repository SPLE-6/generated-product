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

const KamarCard = ({ dataBinding,
	}) => {
  const { checkPermission } = useAuth();
  const {  } = useParams()
  
  return (
    <Layouts.ListComponentCardLayout
      items={[dataBinding]}
  	
  	itemsAttrs={[
          {
            id: "tipeKamar",
            condition: "",
            label: "Tipe Kamar",
  		  featureName: "tipeKamar",
            editable: false
          }
  ,
          {
            id: "hargaKamar",
            condition: "",
            label: "Harga Kamar",
  		  featureName: "hargaKamar",
            editable: false
          }
  ,
          {
            id: "idKamar",
            condition: "",
            label: "Id Kamar",
  		  featureName: "idKamar",
            editable: false
          }
  ]}
      itemsEvents={(kamarItem) => [
  	]}
    />
  )	
};

export default KamarCard;
