import ListadoCursos from './ListadoCursos'
import styles from "../styles/Curso.module.css"


const Academy = ({cursos}) => {
    return (
        <>
        <h2 className='heading'>Cursos</h2>
        <div className={styles.cursos}>
            
            {cursos.map( curso => (
                <ListadoCursos 
                    key={curso.url}
                    curso={curso}
                />
            ))}
        </div>
        </>
        
    )
}

export default Academy