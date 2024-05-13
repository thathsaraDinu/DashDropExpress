import React from "react";

import Axios from "axios";
import { useEffect, useState } from "react";
import PackageForm from "./PackageForm";
import PackageTable from "./PackageTable";
import MainMenu from "../../MainMenu";
import FooterMain from "../../FooterMain";

const Package = () => {
  const [Packages, setPackages] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    getPackages();
  }, []);

  const getPackages = () => {
    Axios.get("http://localhost:3001/api/package")
      .then((response) => {
        setPackages(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  };
  const addPackage = (data, selectedItem) => {
    setSubmited(true);
    const payload = {
      id: data.id,
      customerName: data.customerName,
      packageType: selectedItem,
      packageWeight: data.packageWeight,
    };
    Axios.post("http://localhost:3001/api/createPackage", payload)
      .then(() => {
        getPackages();
        setSubmited(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  };
  const updatePackage = (data, selectedItem) => {
    setSubmited(true);
    const payload = {
      id: data.id,
      customerName: data.customerName,
      packageType: selectedItem,
      packageWeight: data.packageWeight,
    };
    Axios.post("http://localhost:3001/api/updatePackage", payload)
      .then(() => {
        getPackages();
        setSubmited(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  };
  const deletePackage = (data) => {
    Axios.post("http://localhost:3001/api/deletePackage", data)
      .then(() => {
        getPackages();
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  };

  return (
    <div
      style={{
        width: "calc(100%-100px)",
        margin: "auto",

        backgroundImage: "url('/pexels-mikhail-nilov-6613916.jpg')",
      }}
      className="backgroundimage"
    >
      <MainMenu></MainMenu>
      <PackageForm
        addPackage={addPackage}
        updatePackage={updatePackage}
        submited={submited}
        data={selectedPackage}
        isEdit={isEdit}
      />
      <PackageTable
        rows={Packages}
        selectedPackage={(data) => {
          setSelectedPackage(data);
          setIsEdit(true);
        }}
        deletePackage={(data) =>
          window.confirm("Are you sure?") && deletePackage(data)
        }
      />
      <FooterMain></FooterMain>
    </div>
  );
};

export default Package;
