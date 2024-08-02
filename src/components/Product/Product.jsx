import "./Product.css";
import Price from "../Cost/Cost.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];

  let discription = [
    ["8,000 DPI", "5 Programmable button"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for ipad Pro", "Intuitive surface"],
    ["wireless", "optical orientation"]
  ];

  return (
    <>
      <div className="product">
        <h4>{title}</h4>
        <p>Title</p>
        <p>{discription[idx][0]}</p>
        <p>{discription[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>
    </>
  );
}

export default Product;
