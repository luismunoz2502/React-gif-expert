import { useState } from "react"



export const AddCategory = ({onNewCategory}) => {
  const [inpuntValue, setInputValue] = useState(" ")
  const onInputChange =({target})=> {
    setInputValue(target.value);

   

    }
    const onSubmit= (event) =>{
      event.preventDefault();
      if(inpuntValue.trim().length<=1)return;
      //setCategories(categories=> [inpuntValue, ...categories]);
      onNewCategory(inpuntValue.trim())
      setInputValue("");

  }
  
  
    return (
        <form onSubmit={(event)=> onSubmit(event)}>
      <input
        type='text'
        placeholder="Buscar gifs"
        value={inpuntValue}
        onChange={onInputChange}
      
      />
    </form>
  )
}
