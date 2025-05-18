/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const Details = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "propertiName",
          condition: "",
          label: "Properti Name",
          featureName: "namaProperti",
        }
        ,
        {
          id: "propertiDescription",
          condition: "",
          label: "Properti Description",
          featureName: "deskripsiProperti",
        }
        ,
        {
          id: "location",
          condition: "",
          label: "Location",
          featureName: "lokasiProperti",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default Details;
