import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ListadoTarea = () => {



    const proyectosContext = useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext



    //obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext)
    const { tareasproyecto } = tareasContext




    if (!proyecto) return <h2>SELECCIONA UN PROYECTO</h2>


    //array destructuring
    const [proyectoActual] = proyecto




    //eliminar proyecto
    const onClickeliminarProyecto = () => {
        eliminarProyecto(proyectoActual.id)
    }





    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickeliminarProyecto}
            >Eliminar Proyecto</button>



            <h2>PROYECTO: {proyectoActual.nombre} en MERNTasks</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea">No hay tareas</li>)
                    : <TransitionGroup>
                        {tareasproyecto.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={500}
                                classNames="tarea"
                            >
                                <Tarea

                                    tarea={tarea}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>

        </Fragment>
    );
}

export default ListadoTarea;


