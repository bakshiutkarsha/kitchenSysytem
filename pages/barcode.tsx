import * as React from "react";
import  '../styles/styles.globals.scss';
//@ts-ignore
import BarcodeStyles from "../styles/Barcode.scss";
import Barcodes from '../src/components/Barcode/index';


const BarcodePage: React.FC = ( ) => {
  return <div className={BarcodeStyles.barcodeCntr}>
      <Barcodes></Barcodes>
  </div>
  
};

export default BarcodePage;