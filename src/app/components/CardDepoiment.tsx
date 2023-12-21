interface ICardDepoimentProps {
  name: string;
  comment: string;
  // image: string;
}

export default function CardDepoiment({
  comment,
  // image,
  name,
}: ICardDepoimentProps) {
  return (
    <div className="bg-white rounded-lg py-5 px-6 flex items-center gap-3 mx-4">
      <div className="w-[60px] h-[60px] rounded-full bg-zinc-500" />

      <div className="flex flex-col gap-[6px]">
        <strong>{name}</strong>

        <p className="max-w-[160px] text-xs">{comment}</p>
      </div>
    </div>
  );
}
