
import { Button, Card } from 'react-bootstrap';

const Products = ({product}) => {
    const {id,title,price,description,image,rating}=product;
    return (
        <div className='col-sm-4 mt-4 shadow-sm'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='w-75 mx-auto p-3' src={image}/>
            <Card.Body>
            <h5>id:- {id}</h5>
            <Card.Title>{title.slice(0,17)}</Card.Title>
            <Card.Text>
            <p><strong>Description:-</strong> {description.slice(0,40)}</p>
            <p><strong>ratting:- </strong>{rating.rate}</p>
            <p><strong>Price:-</strong> {price}</p>
            </Card.Text>
            <div className='d-flex'>
            <button className='btn btn-success ms-2'>Add to Cart</button>
            <button className='btn btn-danger ms-2'>Delete</button>
            <button className='btn btn-primary ms-2'>Details</button>
            </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Products;