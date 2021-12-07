

import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import CoffeeOrderContext from '../../../context/coffeeOrderContext';


import "./styles.css";


export const CoffeeDetailsPage = (props) => {
    const {id} = useParams();

    const [coffee, setCoffees] = useState({});

    const globalState = useContext(CoffeeOrderContext);

    useEffect ( () => {
        const coffee= globalState.coffee.find(
        (coffee) => coffee.id.stringValue === id 
    );
    setCoffees (coffee);
    }, [])

    if (coffee) {
         return (
        <div className="coffee-page">
            <h1 className="coffee-title"> {coffee.name?.stringValue} </h1>
            <img src={coffee.image?.stringValue} alt="coffee photo"/>
        </div>
    )
    } else {
        return <p>No coffee drink with this id</p>
    }

}