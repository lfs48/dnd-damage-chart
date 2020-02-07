import React, {useState} from 'react';
import {dndClasses, subclasses} from '../data/dndclasses';
import {merge} from 'lodash';

const Character = () => {

    const [state, setState] = useState({
        class: "Artificer"
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

    return (
        <section className="character-container">

            <label htmlFor="classSelect">Class</label>
            <select 
                id="classSelect"
                value={state.class}
                onChange={e => updateInput(e, 'class')}
            >
                {classOptions}
            </select>

        </section>
    );
}

export default Character;