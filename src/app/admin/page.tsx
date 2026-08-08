"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import {  addDoc,collection,getDocs,updateDoc,doc,deleteDoc, } from "firebase/firestore";
import { auth, db } from "@/app/lib/firebase";
import { upload } from "@imagekit/react";

export default function AdminPage() {
  const router = useRouter();

  const [arquivo, setArquivo] = useState<File | null>(null);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [imagemUrl, setImagemUrl] = useState("");
  const [produtos, setProdutos] = useState<
  {
    id: string;
    name: string;
    description: string;
    image: string;
  }[]
>([]);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/login");
      }
    });

    carregarProdutos();

    return () => unsubscribe();
  }, [router]);

  async function carregarProdutos() {
  try {
    const snapshot = await getDocs(collection(db, "products"));

    const lista = snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    })) as {
      id: string;
      name: string;
      description: string;
      image: string;
    }[];

    setProdutos(lista);
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
}

  async function enviarImagem() {
    if (!arquivo) {
      alert("Selecione uma imagem primeiro.");
      return;
    }

    try {
      setEnviando(true);

      const respostaAuth = await fetch("/api/upload-auth");

      if (!respostaAuth.ok) {
        throw new Error("Não foi possível autenticar o upload.");
      }

      const authData = await respostaAuth.json();

      const resposta = await upload({
        file: arquivo,
        fileName: arquivo.name,
        publicKey: authData.publicKey,
        token: authData.token,
        signature: authData.signature,
        expire: authData.expire,
      });

      setImagemUrl(resposta.url || "");

      alert("Imagem enviada com sucesso! 🎉");
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar a imagem.");
    } finally {
      setEnviando(false);
    }
  }

  async function salvarProduto() {
    if (!nome.trim()) {
      alert("Digite o nome do produto.");
      return;
    }

    if (!descricao.trim()) {
      alert("Digite a descrição do produto.");
      return;
    }

    if (!imagemUrl) {
      alert("Envie uma imagem primeiro.");
      return;
    }

    try {
      setEnviando(true);

      await addDoc(collection(db, "products"), {
        name: nome,
        description: descricao,
        image: imagemUrl,
        createdAt: new Date(),
      });

      alert("Produto salvo com sucesso! 🎉");

      setNome("");
      setDescricao("");
      setArquivo(null);
      setImagemUrl("");
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar o produto.");
    } finally {
      setEnviando(false);
    }
  }

  async function editarProduto(
  id: string,
  nomeAtual: string,
  descricaoAtual: string
) {
  const novoNome = prompt("Digite o novo nome:", nomeAtual);

  if (novoNome === null) return;

  const novaDescricao = prompt(
    "Digite a nova descrição:",
    descricaoAtual
  );

  if (novaDescricao === null) return;

  try {
    await updateDoc(doc(db, "products", id), {
      name: novoNome,
      description: novaDescricao,
    });

    alert("Produto atualizado com sucesso! 🎉");

    carregarProdutos();
  } catch (error) {
    console.error(error);
    alert("Erro ao editar o produto.");
  }
}

async function excluirProduto(id: string, nomeProduto: string) {
  const confirmar = window.confirm(
    `Tem certeza que deseja excluir "${nomeProduto}"?`
  );

  if (!confirmar) return;

  try {
    await deleteDoc(doc(db, "products", id));

    alert("Produto excluído com sucesso! 🗑️");

    carregarProdutos();
  } catch (error) {
    console.error(error);
    alert("Erro ao excluir o produto.");
  }
}

  return (
    <main className="min-h-screen bg-[#faf7f5] p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#5c4a42]">
            Painel Nessa Arte
          </h1>

          <p className="mt-2 text-[#806f66]">
            Gerencie os produtos do seu site.
          </p>
        </div>

        <div className="max-w-xl rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#5c4a42]">
            📸 Adicionar produto
          </h2>

          <div className="mt-6">
            <label className="font-semibold text-[#5c4a42]">
              Nome do produto
            </label>

            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Boneca personalizada"
              className="mt-2 w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-[#5c4a42]"
            />
          </div>

          <div className="mt-5">
            <label className="font-semibold text-[#5c4a42]">
              Descrição
            </label>

            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Digite uma descrição do produto..."
              rows={4}
              className="mt-2 w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-[#5c4a42]"
            />
          </div>

          <div className="mt-5">
            <label className="font-semibold text-[#5c4a42]">
              Foto
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setArquivo(e.target.files?.[0] || null);
                setImagemUrl("");
              }}
              className="mt-2 block w-full"
            />
          </div>

          <button
            onClick={enviarImagem}
            disabled={!arquivo || enviando}
            className="mt-5 rounded-xl bg-[#5c4a42] px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {enviando ? "Enviando..." : "Enviar imagem"}
          </button>

          {imagemUrl && (
            <div className="mt-6">
              <p className="mb-2 font-semibold text-[#5c4a42]">
                Pré-visualização:
              </p>

              <img
                src={imagemUrl}
                alt="Imagem do produto"
                className="max-h-80 rounded-xl object-contain"
              />
            </div>
          )}

          <button
            onClick={salvarProduto}
            disabled={enviando}
            className="mt-6 w-full rounded-xl bg-[#8f6f61] px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            💾 Salvar produto
          </button>
        </div>
      </div>
      <div className="mt-10 max-w-xl rounded-2xl bg-white p-6 shadow-sm">
  <h2 className="text-2xl font-semibold text-[#5c4a42]">
    📦 Produtos cadastrados
  </h2>

  <div className="mt-6 space-y-5">
    {produtos.map((produto) => (
      <div
        key={produto.id}
        className="rounded-xl border border-gray-200 p-4"
      >
        <img
          src={produto.image}
          alt={produto.name}
          className="h-40 w-full rounded-xl object-cover"
        />

        <h3 className="mt-3 text-lg font-semibold text-[#5c4a42]">
          {produto.name}
        </h3>

        <p className="mt-1 text-gray-600">
          {produto.description}
        </p>

        <button
  onClick={() =>
    editarProduto(
      produto.id,
      produto.name,
      produto.description
    )
  }
  className="mt-4 rounded-xl bg-[#5c4a42] px-5 py-2 font-semibold text-white"
>
  ✏️ Editar
</button>
<button
  onClick={() =>
    excluirProduto(produto.id, produto.name)
  }
  className="mt-4 ml-2 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white"
>
  🗑️ Excluir
</button>

      </div>
    ))}
  </div>
</div>
    </main>
  );
}
