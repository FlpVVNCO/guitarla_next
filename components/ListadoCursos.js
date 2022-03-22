import Image from "next/image"
import Link from "next/link"
import {formatearFecha} from '../helpers'
import styles from "../styles/ListadoCursos.module.css"

const ListadoCursos = ({curso}) => {
    const {titulo, descripcion, precio, imagen, url, published_at} = curso
    
    return (
        <article>
            <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`imagen curso ${titulo}`} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/cursos/${url}`}>
                    <a className={styles.enlace}>Ver Curso</a> 
                </Link>
            
            </div>
        </article>
    )
}

export default ListadoCursos