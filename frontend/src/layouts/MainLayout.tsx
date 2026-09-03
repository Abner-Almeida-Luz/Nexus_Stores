import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0F0F13] text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">

          <div>
            <h2 className="text-xl font-extrabold tracking-widest">
              NEX<span className="text-[#8257E5]">ORA</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Uma experiência moderna de compras construída para o futuro.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Empresa</h3>

            <div className="mt-4 space-y-2 text-sm text-zinc-500">
              <p>Sobre nós</p>
              <p>Carreiras</p>
              <p>Contato</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Suporte</h3>

            <div className="mt-4 space-y-2 text-sm text-zinc-500">
              <p>Ajuda</p>
              <p>Pedidos</p>
              <p>Privacidade</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Pagamento</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {["PIX", "Visa", "Mastercard", "Elo"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs text-zinc-600">
          © 2026 NEXORA
        </div>
      </footer>
    </div>
  );
}