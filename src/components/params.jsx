import React from 'react';

const Params = () => {
    return (
        <section className="params-container">

            <label htmlFor="encounterPerDaySlider">Encounters per Day</label>
            <input 
                type="range" 
                min="1" max="10" 
                default="6" 
                id="encounterPerDaySlider"
            ></input>

            <label htmlFor="encounterPerShortRest">Encounters per Short Rest</label>
            <input 
                type="range" 
                min="1" max="10" 
                default="2" 
                id="encounterPerShortRest"
            ></input>

            <label htmlFor="roundsPerEncounter">Average Encounter Length (in Rounds)</label>
            <input 
                type="range" 
                min="1" max="10" 
                default="4" 
                id="roundsPerEncounter"
            ></input>

            <label htmlFor="enemiesHitAoe">Average Number of Enemies Hit by AoE</label>
            <input 
                type="range" 
                min="1" max="20" 
                default="4" 
                id="enemiesHitAoe"
            ></input>

        </section>
    );
}

export default Params;