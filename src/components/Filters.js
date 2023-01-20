import React, {useState} from 'react'
import Rating from './Rating'

const Filters = () => {
    const [rate, setRate] = useState(3)
    return (
        <div style={styles.filters}>
            <p style={styles.title}>Filter Products</p>
            <form>
                <input type="radio" aria-label='Ascending' name='group1' id={`inline-1`} />
                <input type="radio" aria-label='Descending' name='group1' id={`inline-2`} />
                <input type="checkbox" aria-label='Include Out of Stock' name='group1' id={`inline-3`} />
                <input type="checkbox" aria-label='Include Out of Stock' name='group1' id={`inline-4`} />
                <span>
                    <label style={{paddingRight: 10 }}>Rating: </label>
                    <Rating rating={rate} onClick={(i) => setRate(i + 1)} />
                </span>
                <button>CLear Filters</button>
            </form>
        </div>
    )
}

export default Filters

const styles = {
    filters: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#343a40',
        color: 'white',
        padding: '20px',
        margin: '10px',
        height: '86vh'
    },
    span:{
        paddingBottom: '20px',
    },
    title: {
        fontSize: '30px'
    }
}