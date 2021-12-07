import "./styles.css"
import {useEffect, useState, useContext} from 'react';
import { CoffeeItem } from "../CoffeeItem";
import CoffeeOrderContext from "../../../context/coffeeOrderContext";

export const CoffeeHomePage = () => {

    const [coffee, setCoffees] = useState([]);
    const [filteredPets, setFilteredPets] = useState ([]);
    const [loading, setLoading] = useState(true);
    const globalState = useContext(CoffeeOrderContext);

    useEffect(
        () => {
            getCoffees();
        }, []
    );

    const getCoffees = async() => {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/assignment3-coffee/databases/(default)/documents/products/ ');
            const data = await response.json();
            const formattedData = data.documents.map((item) => {
                return item.fields
            });

            console.log(formattedData);
            setCoffees(formattedData);
            globalState.initializeCoffee(formattedData);

        }catch(err) {
            console.log (err)
        }
    }

    return (
        <div className="coffee-page">
          <h1 className="coffee-title"> All Coffee Drinks</h1>
          <div className="coffee-container">
          { 
          coffee.map((coffee) => (
            <CoffeeItem key={coffee.id.stringValue} image={coffee.image.stringValue} name={coffee.name.stringValue} type={coffee.coffeeType.stringValue}
             price={coffee.price.stringValue} id={coffee.id.stringValue} ></CoffeeItem>
          )) 
        }
          </div>
        </div>
    );
};