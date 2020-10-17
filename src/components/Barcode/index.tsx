import * as React from "react";
//@ts-ignore
import BarcodeStyles from "../../../styles/Barcode.scss";
import { MenuConsumer } from '../../context/MenuContext';
import moment from 'moment';

const Barcodes: React.FC = () => {
    const [barcodes, setBarcodes] = React.useState();

    const getBarcodes = async() => {
        const res = await fetch('http://localhost:5000/barcodes');
        return res.json();
    }
    React.useEffect(() => {
        async function getBarcodeItems() {
          const barcodeData = await getBarcodes();
          setBarcodes(barcodeData);
        }
        getBarcodeItems();
    }, [])

    return <MenuConsumer>
        {({menuData}: any) => (
            menuData.map(item => {
                return <div className={BarcodeStyles.eachBarcodeCntr} key={item.id}>
                    <div className={BarcodeStyles.leftside}>
               
                        {/* <p></p> */}
                        <div className={BarcodeStyles.leftTop}>
                            <span><img src="/kitchenmatelogo.ico" />{item.category}</span>
                            <p className={BarcodeStyles.subhead}><i>Globally inspired favourites</i></p>
                        </div>
                        <p className={BarcodeStyles.description}>{item.summary}</p>
                        <div className={BarcodeStyles.itemContain}>
                            <p><b>Contains: </b> 
                            {item.nutrition.visible_allergens.map(tag => {
                                return <span key = {tag}>{tag}, </span>
                            })}</p>
                            <p><b>Intolerances: </b> 
                            {item.nutrition.visible_intolerances.map(tag => {
                                return <span key = {tag}>{tag}, </span>
                            })}
                            </p>
                        </div>
                    </div>
            
                    <div className={BarcodeStyles.rightside}>
                        <div className={BarcodeStyles.rightTop}>
                            Do not remove film before cooking. Consume meal only when finished cooking by the Smart Cooker. Keep Refrigerated.
                        </div>
            
                        <div className={BarcodeStyles.barcode}>
                            <img src={`data:image/png;base64,${barcodes}`}/>
                        </div>
            
                        <div className={BarcodeStyles.rightCenter}>
                            <p>Best Before</p>
                            <p>{moment(new Date()).format('MMMM Do YYYY')}</p>
                        </div>
            
                        <div className={BarcodeStyles.rightBottom}>
                            <p>Produced for:</p>
                            <p><b>Kitchenmate Inc, toronto</b></p>
                        </div>
                    </div>
            
                    <div className={BarcodeStyles.footer}>
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                    </div>
                 </div>
            })
        )}
    </MenuConsumer>
};

export default Barcodes;