import Image from "next/image"
import styles from "../../styles/ListadoCursos.module.css"
import Layout from "../../components/Layout"

const EntradaCursos = ({cursos}) => {
    const {titulo, descripcion, precio, imagen, url, published_at} = cursos[0]
    
    return (
        <Layout
            pagina={`Curso ${titulo}`}
        >
        <article>
            <div className={styles.contenedor}>
                <Image layout='responsive' width={800} height={700} src={imagen.url} alt={`imagen curso ${titulo}`} />
                <div className={styles.contenido}>
                    <h3 className={styles.titulo}>{titulo}</h3>
                    <p className={styles.descripcionCompleta}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                <form className={styles.formulario}>
                <input 
                    type='submit'
                    value='Agregar al Carrito'
                />
            </form>
                </div>
            </div>
        </article>
        </Layout>
    )
}

export async function getServerSideProps({query: {url} }){
    // hace la consulta por cursos, con el botón ver producto
    const urlCursos = `${process.env.API_URL}/academies?url=${url}`
    const respuesta = await fetch(urlCursos)
    const cursos = await respuesta.json()

    return{
        props: {
            cursos
        }
    }
}

export default EntradaCursos