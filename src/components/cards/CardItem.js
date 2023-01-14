const CardItem = (props) => {
    return(<img style={styles.container} src={props.itemImg} alt={props.itemImgAlt} />)
}
export default CardItem

const styles = {
    container: {
        background: 'grey',
        borderRadius: '50%',
        width: '100px',
        height: '100px'
    }
}