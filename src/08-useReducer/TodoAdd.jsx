
import useForm from '../hooks/useForm'

const TodoAdd = ({ onNewTodo }) => {
  
    //Se manda a llamar al useForm, pidiendo el valor de la descripciion, la función para cambiar el input y la función para reset
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });    
  
    //Cuando se hace submit se llama a esta función
    const onFormSubmit = ( event ) => {
        //Evita que se envíe automáticamente el formulario para poder validar
        event.preventDefault();
        //Si no hay nada en el input el formulario no hace nada
        if( description.length <= 1 ) return;

        //Se genera un nuevo todo con los valores del formulario
        const newTodo = {
            id: new Date().getTime(),
            done: false, 
            description: description,
        }
        //Se manda a llamar la función para agregar el valor a la lista
        onNewTodo( newTodo );
        onResetForm();
    }


    return (
    <form onSubmit={ onFormSubmit }>
        <input 
            type="text" 
            placeholder="¿Qué hay que hacer?" 
            className="form-control" 
            name='description'
            value={ description }
            onChange={ onInputChange }
            />
        <button type="submit" className="btn btn-outline-primary mt-1" >Agregar</button>
    </form>
  )
}

export default TodoAdd
