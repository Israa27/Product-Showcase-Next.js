import Card from "./Card";

export default function Products({ products, activeTab }) {
  const filteredProducts = activeTab
    ? products.filter((product) => product.category === activeTab)
    : products;

  return (
    <div className="w-[1345px] flex flex-wrap mx-[20px] justify-start mt-[4rem]">
      {filteredProducts.map((product) => 
        <Card key={product.id} product={product} />
      )}
    </div>
  );
}
