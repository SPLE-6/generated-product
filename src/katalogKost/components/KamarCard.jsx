/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";

import { useAuth } from "@/commons/auth";
import { Button } from "@/commons/components";

import * as Layouts from "@/commons/layouts";

const KamarCard = ({ listKamar }) => {
  const { checkPermission } = useAuth();
  const {} = useParams();

  return (
    <Layouts.ListComponentCardLayout
      items={[listKamar]}
      itemsAttrs={[
        {
          id: "tipeKamar",
          condition: "",
          label: "Tipe Kamar",
          featureName: "tipeKamar",
          editable: false,
        },
        {
          id: "hargaKamar",
          condition: "",
          label: "Harga Kamar",
          featureName: "hargaKamar",
          editable: false,
        },
        {
          id: "idKamar",
          condition: "",
          label: "Id Kamar",
          featureName: "idKamar",
          editable: false,
        },
        {
          id: "status",
          condition: "",
          label: "Status",
          featureName: "status",
          editable: false,
        },
      ]}
      itemsEvents={(kamarItem) => {
        if (kamarItem.status !== "Tersedia") {
          return null; 
        }

        return [
          <Link
            to={`/sewa-kost/${kamarItem.idKamar}`}
            key={`link-${kamarItem.idKamar}`}
          >
            <Button size="sm" variant="primary">
              Sewa
            </Button>
          </Link>,
        ];
      }}
    />
  );
};

export default KamarCard;
