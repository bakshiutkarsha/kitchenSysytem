import * as React from "react";
import  '../styles/styles.globals.scss';
//@ts-ignore
import BarcodeStyles from "../styles/Barcode.scss";
//@ts-ignore
import Barcodes from '../src/components/Barcode/index';


const BarcodePage: React.FC <any>= () => {
  const [pdfLink, serPdfLink] = React.useState('');

  const [loader, setLoader] = React.useState(false)

  const getPdfLink = async() => {
      setLoader(true);
      const res = await fetch('http://localhost:5000/barcodes.pdf');
      serPdfLink(await res.json());
      setLoader(false)
  }
  
  return <div className={BarcodeStyles.barcodeCntr}>
      <Barcodes></Barcodes>
      <div className={BarcodeStyles.barcodeButton} onClick={getPdfLink}><span>Get PDF Link 
        {loader ? <img className={BarcodeStyles.loader} src="/loader.gif"/> : ''}
        </span></div>
       <div className={BarcodeStyles.urlCntr}>URL:
          {pdfLink ? <div>{pdfLink}</div>:''}
       </div>
  </div>
  
};

export default BarcodePage;