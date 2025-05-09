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


const RiwayatDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "roomName",
          condition: "",
          label: "Room Name",
          featureName: "namaKamar",
        }
        ,
        {
          id: "propertyName",
          condition: "",
          label: "Property Name",
          featureName: "namaProperti",
        }
        ,
        {
          id: "startDate",
          condition: "",
          label: "Start Date",
          featureName: "startDate",
        }
        ,
        {
          id: "endDate",
          condition: "",
          label: "End Date",
          featureName: "endDate",
        }
        ,
        {
          id: "totalPrice",
          condition: "",
          label: "Total Price",
          featureName: "totalPay",
        }
        ,
        {
          id: "paymentStatus",
          condition: "",
          label: "Payment Status",
          featureName: "statusPemesanan",
        }
        ,
        {
          id: "detail",
          condition: "",
          label: "Detail",
          featureName: "detail",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default RiwayatDetail;
