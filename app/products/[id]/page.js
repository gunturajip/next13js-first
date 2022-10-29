// HANYA UNTUK GAMBAR YANG BERASAL DARI ASET PRIBADI
import Image from "next/image"

async function getProductDetail(id) {
    let product = await fetch(`https://dummyjson.com/products/${ id }`)
    return product.json()
}

export default async function Page({params}) {
    const product = await getProductDetail(params.id)
    return <>
        <div>
            <img src={product.images[1]} alt={product.images[2]} width={400} height={400} />
            <p>Merk: {product.brand}</p>
            <p>Seri: {product.title}</p>
            <p>Kategori: {product.category}</p>
            <p>Rating: {product.rating}</p>
            <p>Stok: {product.stock}</p>
            <p>Harga: {product.price}</p>
            <p>Deskripsi: {product.description}</p>
        </div>
    </>
}