import Card from "./Card";

interface ProductCardProps {
    title: string,
    description: string
}
function ProductCard(props: ProductCardProps) {
    return <>
        <Card>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </Card>
    </>

}
export default ProductCard