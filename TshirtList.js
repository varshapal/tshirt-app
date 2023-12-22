import Card from "../UI/Card";
import classes from './AddTshirtForm';

const TshirtList = (props) => {
    return(
        <Card className={classes.tshirts}>
            <ul>{props.tshirts.map((tshirt) => (
                <li>{tshirt.name} {tshirt.desc} {tshirt.price} {tshirt.qty}</li>
            ))}</ul>
        </Card>
    )
};

export default TshirtList;