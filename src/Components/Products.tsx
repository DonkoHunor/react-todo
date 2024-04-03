import ProductCard from "./ProductCard";
import {useEffect, useState} from "react";

function Products() {
    const [prodId, setProdId] = useState<number>(1);
    const [product, setProduct] = useState<any>()

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + prodId)
            .then(res => res.json())
            .then(setProduct)
    }, [prodId]);

    function buttonOnClick(id: number) {
        setProdId(id);
    }

    return <div>
        <button onClick={() => buttonOnClick(1)}>1</button>
        <button onClick={() => buttonOnClick(2)}>2</button>
        <button onClick={() => buttonOnClick(3)}>3</button>
        <div className="card-container">
            {product ?
                <ProductCard title={product.title} description={product.description}/> :
                <ProductCard title={""} description={""}/>}
        </div>
    </div>
}
export default Products