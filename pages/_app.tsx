import * as React from "react";
import '../styles/styles.globals.scss';
import { MenuProvider } from '../src/context/MenuContext';


function MyApp({ Component, pageProps }) {
  const [menuItems, setMenuItems] = React.useState([]);

  React.useEffect(() => {
    async function getMenuItems() {
      const menu = await getMenu();
      setMenuItems(menu);
    }
    getMenuItems();
  }, [])
  
  const getMenu = async () => {
    const res = await fetch('https://fridge.kitchenmate.com/api/public/menus/95/recipes');
    return await res.json();
  }
  
  return <MenuProvider value = {{menuData : menuItems}}>
      <Component {...pageProps} />
    </MenuProvider>
}

export default MyApp;
