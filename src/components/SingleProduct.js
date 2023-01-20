import React from 'react'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({ prod }) => {
    const {
        state: {cart},
        dispatch,
    } = CartState()
    return (
        <article style={styles.card}> 
            <img src={prod.image} alt={prod.name} style={styles.cardImg}/>
            <h1>{prod.name}</h1>
            {/* <h2>{prod.name}</h2> */}
            <span>${prod.price.split(".")[0]}</span>
            <p>
                {prod.fastDelivery ? (
                    <div>Fast Delivery</div>
                ) : (
                    <div>4 days delivery</div>
                )}
                <Rating rating={prod.ratings} />
                {cart.some((p) => p.id === prod.id) ? (
                    <button 
                        onClick={() => { 
                            dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                            })
                        }}>Remove from cart</button>
                ) : (
                    <button 
                        onClick={() => { 
                            dispatch({
                                type: "ADD_TO_CART",
                                payload: prod,
                            })
                        }}
                        disabled={!prod.inStock}>
                        {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                    </button>
                )}
            </p>
        </article>
    )
}

export default SingleProduct

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column'
    },
    cardImg: {
        height: '20vh',
        width: '13vw',
        borderRadius: '50%',
        backgroundColor: 'grey'
    }
}