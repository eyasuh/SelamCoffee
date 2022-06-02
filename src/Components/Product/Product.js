import './Product.css';
import background from './groundCoffee2.jpg'; 

let product = {
    imageSrc: background,
    name: 'Kenenisa Hotel',
    address: '1010 Paddington Way',
    city: 'Addis Ababa',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

function Product() {

    return (
        <div className="Business">
            <div className="image-container">
                <img src={product.imageSrc} alt='ground coffee' />
            </div>
            <h2>Arabica Coffee</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{product.name}</p>
                    <p>{product.city}</p>
                    <p>10101</p>
                </div>
                <div className="Business-reviews">
                    <h3>Keffa</h3>
                    <h3 className="rating">4.5 stars</h3>
                    <p>90 reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Product;


