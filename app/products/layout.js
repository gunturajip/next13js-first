import Link from "next/link"

async function getAllProducts() {
    let products = await fetch('https://dummyjson.com/products?limit=5')
    return products.json()
}

export default async function Layout({children}) {
    const {products} = await getAllProducts()
    return <>
        <h1>Kodeapik Blog</h1>
        <>
            {products.map((product) => (
                <>
                    <div key={product.id}>
                        <Link href={ `/products/${product.id}` }>No. {product.id} - {product.title}</Link>
                    </div>
                </>
            ))}
            <hr/>
            <div>{children}</div>
        </>
    </>
}