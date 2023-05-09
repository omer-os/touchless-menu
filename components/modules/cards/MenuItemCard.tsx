import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";

const style = cva(`flex flex-col h-max w-full rounded-xl overflow-hidden`, {
  variants: {
    intent: {
      primary: `bg-light-300 shadow-md`,
    },
  },

  defaultVariants: {
    intent: "primary",
  },
});

interface MenuItemCardProps
  extends React.HTMLAttributes<HTMLLinkElement>,
    VariantProps<typeof style> {
  img: string;
  title: string;
  price: string;
  link: string;
}

export default function MenuItemCard({
  img,
  title,
  price,
  intent,
  className,
  link,
}: MenuItemCardProps) {
  const styles = style({
    className,
    intent,
  });
  return (
    <Link href={link} className={styles}>
      <div className="img md:h-[12em] h-[8em]">
        <img
          src={img}
          className="w-full h-full object-cover"
          alt={`image of ${title}`}
        />
      </div>

      <div className="flex py-3 px-5 flex-col">
        <h1 className="font-bold">{title}</h1>

        <div className="flex gap-2 mt-2 items-baseline">
          <div className="font-bold md:text-xl">{price}</div>
          <div className="text-sm text-gray-500">/person</div>
        </div>
      </div>
    </Link>
  );
}
