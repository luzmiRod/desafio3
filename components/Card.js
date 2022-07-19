import styles from '../styles/Home.module.css'

const Card = ({nombre, descripcion, imagen, funcion}) => {
    return <div className={styles.card}>
        <img className={styles.img} src={imagen} />
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <button onClick={(e)=>funcion(nombre, imagen)} className={styles.boton}>Iniciar</button>
    </div>
}
export default Card