import { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'uppercase rounded-lg text-white font-bold mt-9 transition-all',
  variants: {
    size: {
      default: 'py-4 px-10 text-2xl',
    },
    color: {
      pink: 'bg-pink-children-dark hover:bg-pink-children',
      blue: 'bg-blue-children hover:bg-blue-children-dark',
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'blue',
  },
});

type TButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    label: string;
  };

export default function Button({
  label, size, color, className, ...props
}: TButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={button({
        size,
        color,
        className,
      })}
    >
      {label}
    </button>
  );
}
