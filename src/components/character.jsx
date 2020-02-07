import React from 'react';
import {dndClasses, subclasses} from '../data/dndclasses';

const Character = () => {

    const classOptions = dndClasses.map( (name,i) => {
        return <option value={name} key={i}>{name}</option>
    });

    return (
        <section className="character-container">

            <label htmlFor="classSelect">Class</label>
            <select 
                id="classSelect"
            >
                {classOptions}
            </select>

        </section>
    );
}

export default Character;