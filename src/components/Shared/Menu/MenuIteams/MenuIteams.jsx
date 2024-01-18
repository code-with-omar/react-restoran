import { Card } from "react-bootstrap";
import "./MenuIteams.css"
const MenuIteams = ({ data }) => {
    console.log(data)
    const { img, title, details, price } = data;
    return (
        <Card className="menu-items-wrap w-100">
            <Card.Body className="d-flex">
                <div className="image justify-content-center mt-3">
                    <img src={img} alt="" className="img-fluid rounded"/>
                </div>
                <div className="menu-details w-100 d-flex flex-column text-start ps-4" style={{width: "80px"}}>
                    <div className="d-flex justify-content-between border-bottom pb-2">
                        <h5>{title}</h5>
                        <p className="price">${price}</p>
                    </div>
                    <div>
                        <p className="menu-text-details">{details}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default MenuIteams;