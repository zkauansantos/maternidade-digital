import { Star } from 'lucide-react';

export default function WhatLearning() {
  return (
    <section className="w-full py-24 flex items-center justify-center bg-main">
      <div className="max-w-7xl w-full ">
        <div className="flex items-start justify-between w-full">

          {/* CONTENT */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl uppercase font-bold leading-tight max-w-[588px] mb-6">
              O que você vai
              <span className="text-pink-children"> aprender </span>
              ?
            </h2>

            <p className="max-w-[500px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but .
            </p>

            {Array.from({ length: 2 }).map(() => (
              <div className="flex items-center flex-wrap max-w-[560px] mt-10 gap-6" key={Math.random()}>
                {Array.from({ length: 12 }).map(() => (
                  <div key={Math.random()} className="flex items-center gap-2">
                    <Star fill="orange" color="orange" />
                    Item
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="bg-zinc-300 w-[432px] h-[432px] rounded-lg" />
        </div>
      </div>
    </section>
  );
}
