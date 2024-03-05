import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        /* !isEditing you can update like this but not best practice */
        setIsEditing((editing) => !editing);//this is the recommended way, use arrow function, 
        // the editing parameter is the instance of the current isEditing state
        if(isEditing){
            onChangeName(symbol,playerName);
        }
    }
    //event is automatically passed as parameter in onChange of the input field!
    function handleChange(event){
        setPlayerName(event.target.value);//set the value to playerName state
    }

    let editablePlayerName = isEditing ? <input type="text" value={playerName} onChange={handleChange} required /> 
                            : 
                            <span className="player-name">{playerName}</span>;
    let btnCaption = isEditing ? "Save" : "Edit";

    return (
        <li className={isActive ? 'active':undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleEditClick()}>{btnCaption}</button>
        </li>
    );
}