import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { MdDelete, MdEdit, MdDone } from 'react-icons/md';
import './Tareas.css';

// Componente funcional Tarea
const Tarea = ({ tarea, eliminarTarea, marcarComoRealizada, editarTarea }) => {
  // Función para mostrar una confirmación antes de eliminar la tarea
  const mostrarConfirmacionEliminar = () => {
    // Utiliza SweetAlert2 para mostrar una ventana emergente de confirmación
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      // Si el usuario confirma, ejecuta la función de eliminarTarea y muestra un mensaje de éxito
      if (result.isConfirmed) {
        eliminarTarea(tarea.id);
        Swal.fire('¡Eliminado!', 'Tu tarea ha sido eliminada.', 'success');
      }
    });
  };

  // Función para mostrar una confirmación antes de editar la tarea
  const mostrarConfirmacionEditar = () => {
    // Se mostrará una ventana emergente de confirmación
    Swal.fire({
      title: '¿Estás por editar esta tarea?',
      text: 'Se abrirá el formulario de edición.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      // Si el usuario confirma, ejecuta la función de editarTarea
      if (result.isConfirmed) {
        editarTarea(tarea.id);
      }
    });
  };

  // Renderiza el componente Tarea
  return (
    <>
      {/* Elemento de lista que representa la tarea */}
      <li key={tarea.id} className={tarea.realizada ? 'realizada' : ''}>
        <span>{tarea.texto}</span>
      </li>
      {/* Contenedor de botones para marcar como realizada, editar y eliminar */}
      <div>
        {/* Botón para marcar la tarea como realizada */}
        <button onClick={() => marcarComoRealizada(tarea.id)} style={{ borderRadius: "50%" }}>
          <MdDone style={{ color: "white" }} />
        </button>
        {/* Botón para mostrar la confirmación antes de editar la tarea */}
        <button onClick={mostrarConfirmacionEditar} style={{ borderRadius: "50%" }}>
          <MdEdit style={{ color: "blue" }} />
        </button>
        {/* Botón para mostrar la confirmación antes de eliminar la tarea */}
        <button onClick={mostrarConfirmacionEliminar} style={{ borderRadius: "50%" }}>
          <MdDelete style={{ color: "red" }} />
        </button>
      </div>
    </>
  );
};

// Define las propTypes para las props del componente Tarea
Tarea.propTypes = {
  tarea: PropTypes.shape({
    id: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    realizada: PropTypes.bool,
  }).isRequired,
  eliminarTarea: PropTypes.func.isRequired,
  marcarComoRealizada: PropTypes.func.isRequired,
  editarTarea: PropTypes.func.isRequired,
};

export default Tarea;
