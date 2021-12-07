import './styles.css';
import { Button } from '../../Button';

import {Link} from 'react-router-dom'



export const CoffeeItem = (props) => {

    const {image, name, type, price, id} = props;



    return (
        <div className="coffee">
            <img className="coffee-photo" src={image} alt={name + type + "photo"} />

            <Link to={`/coffee/${id}`}>
            <h1 className="coffee-name"> {name}</h1>
            </Link>

            <p className="coffee-type"> {type}</p>
            <p className="coffee-price">{price} $ </p>

        <Button text="Add to Cart" type="primary" isDisabled={false} action={() => alert("Added item")}/>

        </div>
    )
}