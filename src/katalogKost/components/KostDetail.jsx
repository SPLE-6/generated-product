/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const KostDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "propertyName",
          condition: "",
          label: "Property Name",
          featureName: "namaProperti",
        }
        ,
        {
          id: "propertyDescription",
          condition: "",
          label: "Property Description",
          featureName: "deskripsiProperti",
        }
        ,
        {
          id: "price",
          condition: "",
          label: "Price",
          featureName: "hargaProperti",
        }
        ,
        {
          id: "location",
          condition: "",
          label: "Location",
          featureName: "Lokasi",
        }
        ,
        {
          id: "roomType",
          condition: "",
          label: "Room Type",
          featureName: "tipeKamar",
        }
        ,
        {
          id: "roomDescription",
          condition: "",
          label: "Room Description",
          featureName: "deskripsiKamar",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default KostDetail;
