import React, {useState} from 'react';
import {dndClasses, subclasses} from '../data/dndclasses';
import {merge} from 'lodash';

const Character = () => {

    const [state, setState] = useState({
        class: "Artificer",
        subclass: "Alchemist",
        level: 3
    });

    const updateInput = (event, field) => {
        event.preventDefault();
        const newState = merge({}, state);
        newState[field] = event.target.value;
        setState(newState);
    }

    const classOptions = dndClasses.map( (name,i) => {
        return <option value={name} key={i}>{name}</option>
    });

    const subclassOptions = subclasses[state.class].map( (name,i) => {
        return <option value={name} key={i}>{name}</option>
    });

    return (
        <section className="character-container">

            <label htmlFor="levelInput">Level</label>
            <input 
                type="number" 
                min="1" max="20" 
                value={state.level} 
                onChange={e => updateInput(e,"level")}
                id="levelInput"
            ></input>

            <label htmlFor="classSelect">Class</label>
            <select 
                id="classSelect"
                value={state.class}
                onChange={e => updateInput(e, 'class')}
            >
                {classOptions}
            </select>

            <label htmlFor="subclassSelect">Subclass</label>
            <select 
                id="subclassSelect"
                value={state.subclass}
                onChange={e => updateInput(e, 'subclass')}
            >
                {subclassOptions}
            </select>

        </section>
    );
}

export default Character;