"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/lib/firebase";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <main className="min-h-screen bg-[#faf7f5] p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#5c4a42]">
            Painel Nessa Arte
          </h1>

          <p className="mt-2 text-[#806f66]">
            Bem-vinda ao painel de administração.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#5c4a42]">
              📸 Fotos
            </h2>

            <p className="mt-2 text-gray-500">
              Gerencie as fotos exibidas no site.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#5c4a42]">
              🛍️ Produtos
            </h2>

            <p className="mt-2 text-gray-500">
              Adicione e remova produtos.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#5c4a42]">
              ⚙️ Configurações
            </h2>

            <p className="mt-2 text-gray-500">
              Configurações do painel.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
