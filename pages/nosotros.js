import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Nosotros.module.css"


const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        > 
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="imagen sobre nosotros"/>

                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam lectus metus, hendrerit ut molestie vel, maximus vitae enim. Suspendisse eget risus viverra, 
                        sagittis dolor et, sollicitudin augue. Nullam accumsan augue id facilisis tempus. Etiam vestibulum tellus eros, ac varius orci vestibulum in. 
                        Morbi sagittis, justo ut aliquet consequat, purus sapien facilisis est, id fermentum diam lectus sit amet velit.
                        Donec placerat lectus in nunc mattis, quis aliquet felis vulputate. Nam rutrum massa vel mi consectetur, vel dapibus ipsum semper. Maecenas finibus eros ut rhoncus molestie. 
                        Mauris at vehicula dui, bibendum fringilla ex.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam lectus metus, hendrerit ut molestie vel, maximus vitae enim. Suspendisse eget risus viverra, 
                        sagittis dolor et, sollicitudin augue. Nullam accumsan augue id facilisis tempus. Etiam vestibulum tellus eros, ac varius orci vestibulum in. 
                        Morbi sagittis, justo ut aliquet consequat, purus sapien facilisis est, id fermentum diam lectus sit amet velit.
                        Donec placerat lectus in nunc mattis, quis aliquet felis vulputate. Nam rutrum massa vel mi consectetur, vel dapibus ipsum semper. Maecenas finibus eros ut rhoncus molestie. 
                        Mauris at vehicula dui, bibendum fringilla ex.
                        </p>
                    </div>
                </div>
            </main>
            
        </Layout>
    )
}

export default Nosotros