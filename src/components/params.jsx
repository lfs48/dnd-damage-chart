import React, {useState} from 'react';
import {merge} from 'lodash';

const Params = () => {

    const [state, setState] = useState({
        encountersPerDay: 6,
        encountersPerShortRest: 2,
        roundsPerEncounter: 4,
        enemiesHitAoe: 4
    });

    const updateInput = (event, field) => {
        event.preventDefault();
        const newState = lodash.merge({}, state);
        newState[field] = event.target.value;
        setState(newState);
    }

    return (
        <section className="params-container">

            <label htmlFor="encounterPerDaySlider">Encounters per Day</label>
            <input 
                type="range" 
                min="1" max="10" 
                value={state.encountersPerShortRest} 
                onChange={e => updateInput(e,"encounterPerDay")}
                id="encounterPerDaySlider"
            ></input>

            <label htmlFor="encounterPerShortRest">Encounters per Short Rest</label>
            <input 
                type="range" 
                min="1" max="10" 
                value={state.encountersPerShortRest}
                onChange={e => updateInput(e,"encountersPerShortRest")}
                id="encounterPerShortRest"
            ></input>

            <label htmlFor="roundsPerEncounter">Average Encounter Length (in Rounds)</label>
            <input 
                type="range" 
                min="1" max="10" 
                value={state.roundsPerEncounter}
                onChange={e => updateInput(e,"roundsPerEncounter")}
                id="roundsPerEncounter"
            ></input>

            <label htmlFor="enemiesHitAoe">Average Number of Enemies Hit by AoE</label>
            <input 
                type="range" 
                min="1" max="20" 
                value={state.enemiesHitAoe}
                onChange={e => updateInput(e,"enemiesHitAoe")}
                id="enemiesHitAoe"
            ></input>

        </section>
    );
}

export default Params;