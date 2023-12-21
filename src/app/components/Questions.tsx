'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';

const questionsRecents = [
  {
    value: 'item-1',
    question: 'Oque é tal ?',
    response: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but .
    `,
  },
  {
    value: 'item-2',
    question: 'Oque é tal ?',
    response: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but .
    `,
  },
  {
    value: 'item-3',
    question: 'Oque é tal ?',
    response: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but .
    `,
  },
  {
    value: 'item-4',
    question: 'Oque é tal ?',
    response: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but .
    `,
  },
  {
    value: 'item-5',
    question: 'Oque é tal ?',
    response: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but .
    `,
  },
  {
    value: 'item-6',
    question: 'Oque é tal ?',
    response: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but .
    `,
  },
];

export default function Questions() {
  return (
    <section className="w-full py-24 flex items-center justify-center bg-pink-children-dark/5">
      <div className="max-w-7xl w-full flex flex-col items-center justify-center">
        <h2 className="text-[40px] text-pink-children-dark font-bold leading-tight max-w-[588px] mb-12">
          Perguntas Frequentes
        </h2>

        <Accordion.Root type="multiple" className="w-full">
          {questionsRecents.map((question) => (
            <Accordion.Item
              key={question.value}
              value={question.value}
              className="rounded-lg w-full border-pink-children-dark/30 border-b-2 mt-2 bg-white p-2"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className=" group radix-state-open:rounded-t-lg radix-state-closed:rounded-lg focus:outline-none
                  inline-flex w-full items-center justify-between px-4 py-2 text-left"
                >
                  <span className="text-base sm:text-lg">
                    {question.question}
                  </span>
                  <Plus />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="w-full rounded-b-lg border-t mt-2 p-6">
                <div className="text-base text-zinc-children">
                  {question.response}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
