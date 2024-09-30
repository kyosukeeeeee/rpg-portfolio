import "./style/product.scss";

type StatusProps = {
    title: string,
    num: number
}

const Product: React.FC<StatusProps> = ({ title, num }) => {

    const imagePath =  `/images/work${num}.png`;

    return (
        <div className="product-item">
            <p className="title">{title}</p>
            <img className="image" src={imagePath} />
        </div>
    )
}

export default Product;