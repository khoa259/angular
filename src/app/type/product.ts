export type Product = {
    _id:string | number,
    name:string
    price:number,
    img: string,
    desc: string,
    salePrice:string
};
export type ProductCreate = {
    name: string,
    img: string,
    price:number,
    salePrice: string
    desc: string,
};