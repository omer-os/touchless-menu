import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";

const style = cva(
  `flex group flex-col h-max w-full md:rounded-xl rounded-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105`,
  {
    variants: {
      intent: {
        primary: `bg-light-100 shadow-md`,
      },
    },

    defaultVariants: {
      intent: "primary",
    },
  }
);

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
      <div className="img md:h-[12em] h-[6em] overflow-hidden">
        <img
          src={img}
          className="w-full transition-all group-hover:scale-110 h-full object-cover"
          alt={`image of ${title}`}
        />
      </div>

      <div className="flex md:py-3 py-2 md:px-5 px-2 flex-col">
        <h1 className="font-bold truncate">{title}</h1>

        <div className="flex gap-2 mt-2 items-baseline">
          <div className="font-bold text-sm md:text-xl">{price}</div>
          <div className="md:text-sm text-xs text-gray-500">/person</div>
        </div>
      </div>
    </Link>
  );
}
