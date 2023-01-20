//Parent/Smart Component: Layout

import Filters from "../components/Filters";
import SingleProduct from "../components/SingleProduct";
import { CartState } from "../context/Context";

const Layout = () => {
    const  { 
        state: {products} 
    } = CartState();

    console.log(products)
    return (
        <div style={styles.layout}>
            <Filters />
            <p>Layout</p>
            <div style={styles.productContainer}> 
                {products.map((prod) => {
                    return <SingleProduct prod={prod} key={prod.id} />
                })} 
            </div>
        </div>
    );
}

export default Layout;


const styles = {
    layout: {
        display: 'flex'
    },
    productContainer:{
        display: 'flex',
        width: '78%',
        padding: '20px',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}