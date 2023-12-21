import Button from './Button';

export default function Main() {
  return (
    <main className="w-full bg-balls py-16 border-b-zinc-100 border">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold leading-tight max-w-[588px]">
          O título aqui no
          <span className="text-blue-children"> máximo deste </span>
          tamanho
        </h1>

        <p className="text-2xl max-w-[900px] text-zinc-children">
          Subtítulo aqui subtítulo aqui subtítulo aqui subtítulo aqui subtítulo
          aqui subtítulo aqui subtítulo aquisubtítulo aqui subtítulo aqui
          subtítulo aqui
        </p>
      </div>

      <div className="flex flex-col items-center mt-12 gap-8">
        <div className="bg-zinc-700 w-[750px] h-[325px] rounded-lg" />

        <Button label="Comprar" color="blue" />
      </div>
    </main>
  );
}
