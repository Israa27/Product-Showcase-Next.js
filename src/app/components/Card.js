export default function Card({product}) {
  return (
    <div className='font-body font-medium w-[257px] flex flex-col  mx-[5px]  p-4 rounded-md shadow-cardShadow' >
    <img 
    src={product.image} 
    alt={product.title.EN} 
    className="w-[209px] h-[244px]"
    />
    <div className="text mt-[10px]">
     <h5 className='text-text_color h-[60px] overflow-hidden text-[20px]  mt-[5px]'>{product.title.EN}</h5>
     <div className="brand-stars flex justify-between mt-[10px]">
     <span className="text-[14px] text-span_color ">{product.brand}</span>
     <div>{Array(5).fill(0).map((_,index)=><i className="fa-solid fa-star text-star_color w-[19px] h-[19px]" key={index}></i>)}</div>
     </div>
     <div className='flex flex-row  h-[60px] items-stretch justify-between'>

       <span className="text-[24px] mt-[15px] text-text_color">
       {`${product.price.value}${product.price.currency} `}
       </span>
       
       <div className='relative flex items-center justify-center'>
  {product.colors.slice(0, 2).map((item, index) => 
    <span
      key={index}
      className='absolute w-[25px] h-[25px] rounded-full'
      style={{
        backgroundColor: item,
        zIndex: index,
        right: `${12 * (2 - index)}px`,
      }}
    ></span>
  )}

  {product.colors.length >= 3 && (
    <span className={`absolute font-bold w-[25px] h-[25px] 
    text-[12px] rounded-full z-10 right-[-3px]
    leading-[25px] text-center
     bg-neutral-100 text-black border border-solid border-#1E1E1E42
     `}>
      +{product.colors.length - 3}
    </span>
  )}
</div>

     

     

     </div>
    </div>
    </div>
  )
}
