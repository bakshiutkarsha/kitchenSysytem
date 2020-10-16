import * as React from "react";
//@ts-ignore
import MenuStyles from "../../../styles/Menu.scss";
import { MenuConsumer } from '../../context/MenuContext';

const MenuItems: React.FC = () => {
  return <MenuConsumer>
     {({menuData}) => (
        menuData.map(item => {
          return <div className={MenuStyles.eachItem} key={item.id}>
            <div className={MenuStyles.imgCntr}><img src={item.side_photo}/></div>
            <div className={MenuStyles.itemDetail}>
              <p className={MenuStyles.itemName}> {item.name}</p>
              <p className={MenuStyles.summary}> {item.summary}</p>
            </div>
            </div>
          })
     )}
    </MenuConsumer>
};

export default MenuItems;