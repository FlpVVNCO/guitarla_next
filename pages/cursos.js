import Layout from '../components/Layout'
import Academy from '../components/Academy'

const cursos = ({cursos}) => {

    return (
        <Layout
            pagina='Cursos'
        >
            <main className='contenedor'>
            <Academy
                cursos={cursos}
            />
            </main>
        </Layout>
    )
}



export async function getServerSideProps(){
    const url = `${process.env.API_URL}/academies?_sort=created_at:desc`
    const respuesta = await fetch(url)
    const cursos = await respuesta.json()

    return{
        props: {
            cursos
        }
    }
}


export default cursos