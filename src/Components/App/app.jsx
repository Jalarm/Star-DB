import React from 'react';
import Header from '../Header';
import ItemList from '../Item-List';
import PersonDetails from '../Person-Details';
import PlanetDetails from '../Planet-Details';
import RandomPlanet from '../Random-Planets';
import StarshipsDetails from '../Starships-Details';

import Apps from './app';

const App = () => {
    return (
        <div>
            <header>
                <Header/>
                <RandomPlanet/>
            </header>
            <ItemList/>
            <PersonDetails/>
            <PlanetDetails/>
            <StarshipsDetails/>
            <Apps/>
        </div>
    )
}
export default App