import { useState } from "react";

const useForm = ( initialForm = {} ) => {

    //Se utiliza el hook para crear un useState del valor otorgado del input del formulario
    const [formState, setFormState] = useState( initialForm );
    
    //Cuando se modifique algo del input, se llama esta función para modificar su valor
    //NOTA: El input debe tener un atributo que se llame igual que la variable a modificar.
    //Si se modifica la variable 'description' debe tener 
    // <html name="description />
    
    const onInputChange = ( {target} ) =>{
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [ name ]: value
        })
    }
    //Si se quiere reiniciar el valor del input al que se tenía inicialmente se llama esta función
    const onResetForm = () => {
        setFormState(initialForm);
    }
  
    //El llamado a la función retorna los valores dentro del estado actual, el estado actual global, 
    // la función para cambiar el valor del input y la función para reiniciarlo 
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

export default useForm
