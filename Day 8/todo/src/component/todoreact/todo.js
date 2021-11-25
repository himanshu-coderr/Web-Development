import React, { useState, useEffect } from 'react'
import "./style.css"

    // get the localStorage data back
    const getLocalData = () => {
        const lists = localStorage.getItem("mytodolist");   //mytodolist = key, 

        if(lists)
            return JSON.parse(lists)
        else
            return [];
    }
const Todo = () => {

    const [inputdata, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    //add items function
    const addItem = () => {
        if(!inputdata)
            alert("please fill the data")

        else if(inputdata && toggleButton){
            setItems(
                items.map((curElem) => {
                    if(curElem.id === isEditItem){
                        // return { ...curElem, name: inputdata};
                        return { id: curElem.id, name: inputdata};
                    }
                    return curElem;
                })
            )
            setInputData("");               // input field empty
            setIsEditItem(null);            // id becomes null
            setToggleButton(false);         // +
        }
        else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData])      // old array + new element
            setInputData("")       // makes input text field empty again
        }
    }

    // edit items
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) =>{
            return curElem.id === index;
        })
        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);       // toggle = true
    }

    // delete items
    const deleteItem = (index) => {
        const updatedItem = items.filter((curElem) => {
            return curElem.id !== index;                 // getting the array without the deleted item
        });
        setItems(updatedItem);         //
    }

    // remove all items
    const removeAll = () =>{
        setItems([])
        setInputData("")
        setToggleButton(false)    //🧠
    }


    // adding localStorage
    useEffect(() => {
        localStorage.setItem("mytodolist",JSON.stringify(items));           // (key,value) value should be in strings

    }, [items])      // whenever items value get changed, useEffect works
    
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                       <figure>
                           <img src="./images/todo.svg" alt="todologo"/>
                           <figcaption>Add Your List Here</figcaption>                           
                       </figure>
                        <div className="addItems">
                            <input 
                                type="text"
                                placeholder="✍ Add Item" 
                                className="form-control"
                                value={inputdata}
                                onChange={(event) => setInputData(event.target.value)}
                            />
                            {toggleButton ? 
                            (   <i className="far fa-edit add-btn" onClick={addItem}></i> 
                            ):(
                                <i className="fa fa-plus add-btn" onClick={addItem}></i>
                            ) }
                            {/* <i className="fa fa-plus add-btn" onClick={addItem}></i> */}
                        </div>

                        {/* Show Items */}
                        <div className="showItems">
                            {items.map((curElem, index) => {
                                return(
                                    <div className="eachItem" key={curElem.id}>
                                        <h3>{curElem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn"
                                                onClick={() => editItem(curElem.id)}>
                                            </i>
                                            
                                            <i className="far fa-trash-alt add-btn"
                                               onClick={()=> deleteItem(curElem.id)}>
                                            </i>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>

                        {/* Remove all button */}
                        <div className="showItems">
                            <button 
                                className="btn effect04" 
                                data-sm-link-text="Remove All"
                                onClick={removeAll}>
                                <span>CHECK LIST</span>
                            </button>
                        </div>
                </div>                
            </div>
        </>
    )
}

export default Todo
