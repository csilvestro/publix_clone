import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rating, onClick }) => {
    return (
        <>
            <div>Rating</div>
            {[...Array(5)].map((_, i) => (
                <span key={i} onClick={() => onClick(i)} style={styles.link}>
                    {rating > i ? (<AiFillStar fontSize="15px" />
                    ) : (
                        <AiOutlineStar fontSize="15px" />
                    )}
                </span>
            ))}
        </>
    )
}

export default Rating

const styles = {
    link: {
        cursor: 'pointer'
    }
}