export type Product = {
    _id:string | number,
    name:string
    price:number,
    img: string,
    desc: string,
};
export type ProductCreate = {
    name: string
};