/* This is a Barrel Module  to group exports of same type, 
give an alias to the file in webpack.config (#components)
to import them from that centralized point*/

/* extrem durumlarda performans masrafi olabilir (module eager loading) 
ama genelde goz ardi edilebilir.*/

export { default as ItemRow } from "./ItemRow/ItemRow.jsx";
export { default as Coupon } from "./Coupon/Coupon.jsx";
export { default as Wrapper } from "./Wrapper/Wrapper.jsx";
export { default as Loader } from "./Loader/Loader.jsx";
export { default as HeadRow } from "./HeadRow/HeadRow.jsx";
