const CardItem = (props) => {
    return(<img style={styles.container} src={props.itemImg} alt={props.itemImgAlt} />)
}
export default CardItem

const styles = {
    container: {
        background: 'grey',
        borderRadius: '50%',
        width: '50px',
        height: '50px'
    }
}