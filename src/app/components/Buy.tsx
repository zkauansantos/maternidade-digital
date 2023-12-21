'use client';

import useTime from '../hooks/useTime';
import formatTime from '../utils/formatTime';

import Button from './Button';

export default function Buy() {
  const { countdown } = useTime();

  return (
    <section className="py-24 flex items-center justify-center bg-main">
      <div className="max-w-7xl w-full">

        {/* COUNTER */}
        <div className="flex flex-col items-center">
          <h3 className="text-[40px] text-center">Oferta especial por tempo limitado!</h3>

          <div className="flex items-center gap-6 mt-6">
            <div className="rounded-lg min-h-[158px] min-w-[180px] bg-zinc-100 border border-zinc-300 flex items-center justify-center">
              <span className="text-[90px] text-pink-children-dark">
                {formatTime(countdown.minutes)}
                <small className="text-[30px]">m</small>
              </span>
            </div>
            <div className="rounded-lg min-h-[158px] min-w-[180px]  bg-zinc-100 border border-zinc-300 flex items-center justify-center">
              <span className="text-[90px] text-pink-children-dark">
                {formatTime(countdown.seconds)}
                <small className="text-[30px]">s</small>
              </span>
            </div>
          </div>
        </div>

        {/* PRICE */}
        <div className="flex flex-col items-center mt-10">
          <strong className="uppercase text-[40px] font-normal">
            De:
            <span className="text-pink-children-dark">   R$ 129,90</span>
          </strong>
        </div>

        {/* DISCOUNT */}
        <div className="flex flex-col items-center mt-2">
          <strong className="font-light text-[40px] text-black/50">Por Apenas:</strong>

          <strong className="font-normal text-[80px] text-blue-children-dark">
            R$ 99,90
          </strong>

          <span className="text-3xl text-black/60">
            Ou em
            {' '}
            <span className="text-pink-children-dark">12x</span>
            {' '}
            de
            {' '}
            <span className="text-blue-children-dark ">9,90</span>
          </span>

          {/* BUY */}
          <Button label="Comprar" color="pink" />
        </div>

      </div>
    </section>
  );
}
