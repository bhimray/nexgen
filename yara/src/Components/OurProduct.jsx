import Card from './Card'

const OurProduct = () => {
    return (
        <section className="block-list-product-tax  padd-top-130 padd-bott-150">
            <div className="container-fluid">
                <div className="section-title">
                    <h2 className="title">OUR PRODUCTS</h2>
                </div>
                <div className="taxonomies-container">
                    <div className="row row-cols-lg-5">
                        <Card
                            Name={"ON THE GO"}
                            imageSource={"https://i-drinkbottles.com/wp-content/uploads/2022/04/On-The-Go_categoria.jpg"}
                            Description="On the go set. Colorful products , high quality materials.
                                            Its includes the bottle B-evo, the lunch box and the cutlery set"
                            productLink="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProduct