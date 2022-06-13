import { useState } from "react";
//import Router from "next/router";
import React from "react";

import Layout from "../../components/Layout";
import Row from "../../components/prebuilt/Row";
import DonutShop from "../../components/prebuilt/DonutShop";
import CheckoutForm from "../../components/CheckoutForm";
import getDonutPrice from "../../utils/get-donut-price";
import { render } from "@testing-library/react";
import { Redirect } from "react-router";

const MainPage = props => {
   
  const [numDonuts, setNumDonuts] = useState(1);

  const addDonut = () => setNumDonuts(num => Math.min(12, num + 1));
  const remDonut = () => setNumDonuts(num => Math.max(1, num - 1));

  return (
    <Layout title="Donut Shop">
      <Row>
        <DonutShop
          onAddDonut={addDonut}
          onRemoveDonut={remDonut}
          numDonuts={numDonuts}
        />
      </Row>
      <CheckoutForm
        price={getDonutPrice(numDonuts)}
        onSuccessfulCheckout={() =>{ return <Redirect to ='/success'/>}}
      />
    </Layout>
  );
};


export default MainPage;
