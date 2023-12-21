'use client';

import 'flickity/css/flickity.css';
import Flickity from 'react-flickity-component';

import { flickityOptions } from '@/app/utils/flickityOptions';

import CardDepoiment from './CardDepoiment';

export default function DepoimentsCarousel() {
  return (
    <section className="w-full bg-blue-children-opacity pt-20 pb-[124px] overflow-hidden">
      <div className="w-full">
        <Flickity
          options={{
            ...flickityOptions,
            initialIndex: 15 / 2,
          }}
        >
          {Array.from({ length: 15 }).map(() => (
            <CardDepoiment
              key={Math.random()}
              name="Fulano"
              comment="Lorem ipsum dolor amet
          sip sop dolor metesu sea."
            />
          ))}
        </Flickity>
      </div>
    </section>
  );
}
