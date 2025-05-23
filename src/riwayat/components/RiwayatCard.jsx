/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import environment from "@/commons/utils/environment";
import tokenManager from "@/commons/utils/token";

import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";

import { useAuth } from "@/commons/auth";
import { Button } from "@/commons/components";

import * as Layouts from "@/commons/layouts";

const RiwayatCard = ({ listRiwayat, refresh }) => {
  const { checkPermission } = useAuth();
  const {} = useParams();

  return (
    <Layouts.ListComponentCardLayout
      items={[listRiwayat]}
      itemsAttrs={[
        {
          id: "idPemesanan",
          condition: "",
          label: "Id Pemesanan",
          featureName: "idPemesanan",
          editable: false,
        },
        {
          id: "startDate",
          condition: "",
          label: "Start Date",
          featureName: "startDate",
          editable: false,
        },
        {
          id: "endDate",
          condition: "",
          label: "End Date",
          featureName: "endDate",
          editable: false,
        },
        {
          id: "totalPay",
          condition: "",
          label: "Total Harga",
          featureName: "totalPay",
          editable: false,
        },
        {
          id: "statusPemesanan",
          condition: "",
          label: "Status Pemesanan",
          featureName: "statusPemesanan",
          editable: false,
        },
        {
          id: "detail",
          condition: "",
          label: "Detail",
          featureName: "detail",
          editable: false,
        },
        {
          id: "createdAt",
          condition: "",
          label: "Created At",
          featureName: "createdAt",
          editable: false,
        },
      ]}
      itemsEvents={(riwayatItem) => {
        if (riwayatItem.statusPemesanan === "Success") {
          return [
            <Button
              key="selesaikan"
              size="sm"
              variant="success"
              onClick={async () => {
                try {
                  const { getToken } = tokenManager();
	                const token = getToken();
                  const res = await fetch(
                    `${environment.rootApi}/call/pemesanan/update-kamar?idPemesanan=${riwayatItem.idPemesanan}`,
                    {
                      method: "PUT", 
                      params: {token},
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ status: "Selesai" }), 
                    }
                  );

                  if (!res.ok) throw new Error("Gagal mengupdate status");
                  refresh();
                  
                } catch (err) {
                  alert("Gagal menyelesaikan pemesanan.");
                  console.error(err);
                }
              }}
            >
              Selesaikan Pemesanan
            </Button>,
          ];
        }

        if (riwayatItem.statusPemesanan == "Completed"){
          return null;
        }

        return [
          <Link to={`/payment-kredit/${riwayatItem.idPemesanan}`}>
            <Button size="sm" variant="primary">
              Pay
            </Button>
          </Link>,
        ];
      }}
    />
  );
};

export default RiwayatCard;
