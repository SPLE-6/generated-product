/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
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
          id: "fullName",
          condition: "",
          label: "Full Name",
          featureName: "fullName",
        }
        ,
        {
          id: "email",
          condition: "",
          label: "Email",
          featureName: "email",
        }
        ,
        {
          id: "phoneNumber",
          condition: "",
          label: "Phone Number",
          featureName: "noHP",
        }
        ,
        {
          id: "gender",
          condition: "",
          label: "Gender",
          featureName: "jenisKelamin",
        }
        ,
        {
          id: "job",
          condition: "",
          label: "Job",
          featureName: "pekerjaan",
        }
        ,
        {
          id: "hometown",
          condition: "",
          label: "Hometown",
          featureName: "kotaAsal",
        }
        ,
        {
          id: "status",
          condition: "",
          label: "Status",
          featureName: "statusPernikahan",
        }
        ,
        {
          id: "education",
          condition: "",
          label: "Education",
          featureName: "pendidikanTerakhir",
        }
        ,
        {
          id: "emergecyContact",
          condition: "",
          label: "Emergecy Contact",
          featureName: "kontakDarurat",
        }
        ,
        {
          id: "photo",
          condition: "",
          label: "Photo",
          featureName: "fotoUrlProfil",
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
