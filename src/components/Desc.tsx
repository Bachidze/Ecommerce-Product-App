import { useState } from "react";

const Desc = () => {
  const [increase, setIncrease] = useState(0);

  const pricePerUnit = 125; 

  const totalPrice = pricePerUnit * (increase + 1);

  const up = () => {
    if (increase < 7) {
      setIncrease(increase + 1);
    }
  };

  const down = () => {
    if (increase > 0) {
      setIncrease(increase - 1);
    }
  };

  const handlePrevent = (e:any) => {
    e.preventDefault();
  }

  const ShopImg = '/assets/Group 14.svg';
  
  return (
    <div className="p-6 flex flex-col justify-center items-center xl:mb-[10px]">
      <h1 className="text-[#FF7E1B] text-[14px]  font-bold relative bottom-[75px] right-[115px]  xl:text-[14px] xl:font-bold xl:right-[158px]">Sneaker Company</h1>
      <h2 className="text-[26px] font-bold  text-[#1D2026] relative bottom-[60px] xl:text-[44px] xl:w-[445px] ">Fall Limited Edition Sneakers</h2>
      <p className="text-[15px] text-[#69707D]  w-[350px] relative bottom-[50px] pl-4 xl:text-[16px] xl:w-[445px] xl:right-[13px]">These low-profile sneakers are your perfect 
        casual wear companion. Featuring a durable
        rubber outer sole, they’ll withstand
        everything the weather can offer.</p>

      <div className="flex justify-between items-center relative bottom-[30px] xl:gap-[110px] xl:right-[5px]">
        <div className="flex gap-5 items-center relative right-[50px]">
          <h3 className="text-[#1D2026] font-bold text-[28px]">${totalPrice.toFixed(2)}</h3>
          <h4 className="text-[#FF7E1B] font-bold bg-[#FFEEE2] text-[16px] w-[40px] h-[25px] rounded-[5px] flex justify-center">50%</h4>
        </div>
        <div>
          <h3 className="text-[16px] text-[#B6BCC8] line-through relative left-[52px]">${(totalPrice * 2).toFixed(2)}</h3>
        </div>
      </div>

      <div className="flex items-center justify-between w-[327px] bg-[#F6F8FD] h-[56px] rounded-[15px] pl-4 pr-4 relative bottom-[15px] mb-[15px] cursor-pointer xl:w-[450px]">
        <div onClick={up} className="text-[#FF7E1B] font-bold text-[26px]">+</div>
        <div className="text-[#1D2026] font-bold text-[20px]">{increase}</div>
        <div onClick={down} className="text-[#FF7E1B] font-bold text-[26px]">-</div>
      </div>

      <form  className="flex justify-center items-center">
        <button onClick={handlePrevent} className="flex gap-3  bg-[#FF7E1B] w-[327px] h-[56px] justify-center items-center rounded-[10px] font-bold text-[white] text-[16px] xl:w-[450px]"style={{ boxShadow: '0px 20px 50px -20px #FF7E1B' }}>
          <img src={ShopImg} alt="ShopImg" />
          Add to cart
        </button>
      </form>
    </div>
  );
};

export default Desc;
