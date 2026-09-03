import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  category: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  category,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A2E] transition duration-300 hover:-translate-y-1 hover:border-[#8257E5]/40">

      <Link to={`/products/${id}`}>
        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">

        <span className="rounded-full bg-[#8257E5]/10 px-3 py-1 text-xs text-violet-300">
          {category}
        </span>

        <h3 className="mt-3 font-semibold">
          {name}
        </h3>

        <div className="mt-2 text-sm text-yellow-400">
          {"★".repeat(Math.round(rating))}
          <span className="ml-2 text-zinc-500">
            {rating}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <strong className="text-lg">
            {price}
          </strong>

          <button
            className="rounded-xl bg-[#8257E5] px-4 py-2 text-sm font-semibold transition hover:bg-violet-600"
            onClick={(event) => {
              event.preventDefault();

              // Lógica futura:
              // adicionar produto ao carrinho
            }}
          >
            Comprar
          </button>
        </div>

      </div>
    </article>
  );
}