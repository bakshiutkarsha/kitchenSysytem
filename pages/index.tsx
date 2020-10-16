import * as React from "react";
import Router from 'next/router';

//@ts-ignore
import MenuStyles from "../styles/Menu.scss";
import MenuItems from '../src/components/Item/index';

const IndexPage: React.FC = () => {
  const routeToBarcode = () => {
    Router.push('/barcode')
  }

  return <div className={MenuStyles.menuCntr}>
    <div className={MenuStyles.head}>Kitchenmate Menu
      <div className={MenuStyles.barcodeButton} onClick={routeToBarcode}><span>Get Barcodes</span></div>
    </div>
      <MenuItems></MenuItems>
  </div>
};

export default IndexPage;