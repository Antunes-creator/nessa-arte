"use client";

import { useState } from "react";

export default function Home() {

  const [imagemAberta, setImagemAberta] = useState<string | null>(null);

  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <main className="min-h-screen bg-[#fffaf7] text-gray-800">

      {/* Menu */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-pink-100">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <img
            src="/imagens/logo.png"
            alt="Nessa Arte"
            className="h-16 w-auto"
          />


          <div className="flex items-center gap-6">

  <nav className="hidden md:flex gap-8">

    <a
      href="#produtos"
      className="hover:text-pink-500 transition"
    >
      Produtos
    </a>


    <a
      href="#galeria"
      className="hover:text-pink-500 transition"
    >
      Galeria
    </a>


    <a
      href="#contato"
      className="hover:text-pink-500 transition"
    >
      Contato
    </a>

  </nav>


  <button
  onClick={() => setMenuAberto(!menuAberto)}
  className="md:hidden text-3xl"
>
  ☰
</button>

{menuAberto && (
  <div className="absolute top-20 right-8 bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-5 md:hidden">

    <a href="#produtos">
      Produtos
    </a>

    <a href="#galeria">
      Galeria
    </a>

    <a href="#contato">
      Contato
    </a>

  </div>
)}

</div>
        </div>

      </header>



      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">


          <div>

            <p className="text-pink-400 uppercase tracking-widest font-semibold">
              Ateliê Artesanal
            </p>


            <h2 className="text-4xl md:text-6xl font-serif mt-5 leading-tight">
              Arte que encanta,
              <br />
              feita para você.
            </h2>


            <p className="mt-8 text-lg text-gray-600 leading-8">
              Peças personalizadas feitas à mão,
              criadas com carinho para transformar
              momentos especiais em lembranças únicas.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a
                href="#produtos"
                className="bg-pink-400 text-white px-8 py-4 rounded-full hover:bg-pink-500 transition"
              >
                Ver produtos
              </a>


              <a
                href="https://www.instagram.com/nessaarte.guarulhos/"
                target="_blank"
                className="border border-pink-300 px-8 py-4 rounded-full hover:bg-pink-100 transition"
              >
                Instagram
              </a>

            </div>


          </div>



          <div>

            <img
              src="/imagens/produto1.png"        
              alt="Nessa Arte"
              className="rounded-3xl shadow-2xl w-full max-w-xl mx-auto hover:scale-105 transition duration-500"
            />

          </div>


        </div>

      </section>

      
      {/* Produtos */}

      <section
        id="produtos"
        className="max-w-7xl mx-auto px-8 py-20"
      >

        <h3 className="text-4xl font-serif text-center mb-14">
          Bonecas Personalizadas
        </h3>


        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="grid md:grid-cols-3 gap-8">


            <div className="overflow-hidden rounded-3xl">

              <img
  src="/imagens/produto1.png"
  alt="Boneca personalizada"
  onClick={() => setImagemAberta("/imagens/produto1.png")}
  className="h-96 w-full object-cover hover:scale-110 transition duration-500 cursor-pointer"
/>

            </div>



            <div className="overflow-hidden rounded-3xl">

              <img
                src="/imagens/produto2.png"
                alt="Boneca personalizada"
                onClick={() => setImagemAberta("/imagens/produto2.png")}
                className="h-96 w-full object-cover hover:scale-110 transition duration-500"
              />

            </div>



            <div className="overflow-hidden rounded-3xl">

              <img
                src="/imagens/produto3.png"
                alt="Boneca personalizada"
                onClick={() => setImagemAberta("/imagens/produto3.png")}
                className="h-96 w-full object-cover hover:scale-110 transition duration-500"
              />

            </div>


          </div>


          <p className="text-center text-gray-600 mt-10 text-lg">
            Criações únicas feitas artesanalmente,
            pensadas para deixar cada momento ainda mais especial.
          </p>


        </div>


      </section>



      {/* Diferenciais */}

      <section className="bg-pink-50 py-20">

        <div className="max-w-7xl mx-auto px-8">


          <h3 className="text-4xl font-serif text-center mb-14">
            Por que escolher a Nessa Arte?
          </h3>



          <div className="grid md:grid-cols-3 gap-8">


            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition">

              <div className="text-5xl mb-5">
                🧵
              </div>

              <h4 className="text-2xl font-semibold mb-3">
                Feito à mão
              </h4>

              <p className="text-gray-600">
                Cada peça recebe cuidado e atenção
                em todos os detalhes.
              </p>

            </div>



            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition">

              <div className="text-5xl mb-5">
                🎁
              </div>

              <h4 className="text-2xl font-semibold mb-3">
                Personalizado
              </h4>

              <p className="text-gray-600">
                Produtos únicos feitos especialmente
                para cada cliente.
              </p>

            </div>



            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition">

              <div className="text-5xl mb-5">
                💖
              </div>

              <h4 className="text-2xl font-semibold mb-3">
                Muito carinho
              </h4>

              <p className="text-gray-600">
                Transformando ideias em lembranças
                especiais.
              </p>

            </div>


          </div>


        </div>

      </section>

      {/* Categorias */}

<section className="bg-pink-50 py-20">

  <div className="max-w-7xl mx-auto px-8">

    <h3 className="text-4xl font-serif text-center mb-12">
      Nossas criações
    </h3>


    <div className="grid md:grid-cols-3 gap-8">


      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

        <div className="text-5xl mb-5">
          🧸
        </div>

        <h4 className="text-2xl font-semibold mb-3">
          Bonecas Personalizadas
        </h4>

        <p className="text-gray-600">
          Peças únicas feitas especialmente
          para cada cliente.
        </p>

      </div>



      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

        <div className="text-5xl mb-5">
          🎁
        </div>

        <h4 className="text-2xl font-semibold mb-3">
          Lembrancinhas
        </h4>

        <p className="text-gray-600">
          Pequenos detalhes que tornam
          grandes momentos especiais.
        </p>

      </div>



      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

        <div className="text-5xl mb-5">
          ✨
        </div>

        <h4 className="text-2xl font-semibold mb-3">
          Encomendas Especiais
        </h4>

        <p className="text-gray-600">
          Criações personalizadas feitas
          do seu jeito.
        </p>

      </div>


    </div>

  </div>

</section>

      {/* Sobre a Nessa Arte */}

<section className="max-w-7xl mx-auto px-8 py-20">

  <div className="grid lg:grid-cols-2 gap-12 items-center">


    <div>

      <h3 className="text-4xl font-serif mb-6">
        Sobre a Nessa Arte 🌸
      </h3>


      <p className="text-gray-600 text-lg leading-8 mb-5">
        A Nessa Arte transforma ideias em peças únicas,
        feitas artesanalmente com muito carinho e dedicação.
      </p>


      <p className="text-gray-600 text-lg leading-8">
        Cada criação é pensada nos mínimos detalhes para
        tornar momentos especiais ainda mais inesquecíveis.
        Nosso objetivo é entregar produtos personalizados
        que carreguem amor e significado.
      </p>


    </div>



    <div>

      <img
        src="/imagens/destaque2.png"
        alt="Nessa Arte"
        className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
      />

    </div>


  </div>

</section>

      
      {/* Galeria */}

      <section
        id="galeria"
        className="py-20"
      >

        <div className="max-w-7xl mx-auto px-8">


          <h3 className="text-4xl font-serif text-center mb-6">
            Galeria
          </h3>


          <p className="text-center text-gray-600 mb-12 text-lg">
            Algumas das nossas criações feitas com amor e dedicação.
          </p>



          <div className="grid md:grid-cols-3 gap-8">


            <img
              src="/imagens/produto1.png"
              alt="Nessa Arte"
              className="rounded-3xl shadow-lg hover:scale-105 transition duration-500"
            />


            <img
              src="/imagens/produto2.png"
              alt="Nessa Arte"
              className="rounded-3xl shadow-lg hover:scale-105 transition duration-500"
            />


            <img
              src="/imagens/produto3.png"
              alt="Nessa Arte"
              className="rounded-3xl shadow-lg hover:scale-105 transition duration-500"
            />


          </div>


        </div>

      </section>



      {/* Contato */}

      <section
        id="contato"
        className="bg-pink-50 py-20 text-center"
      >

        <h3 className="text-4xl font-serif mb-6">
          Entre em contato
        </h3>


        <p className="text-gray-600 text-lg mb-8">
          Faça seu pedido personalizado ou acompanhe
          nosso trabalho no Instagram.
        </p>


        <a
          href="https://www.instagram.com/nessaarte.guarulhos/"
          target="_blank"
          className="bg-pink-400 text-white px-8 py-4 rounded-full hover:bg-pink-500 transition"
        >
          @nessaarte.guarulhos
        </a>


      </section>



      {/* Footer */}

      <footer className="border-t border-pink-100 py-8 text-center bg-white">


        <img
          src="/imagens/logo.png"
          alt="Nessa Arte"
          className="h-14 mx-auto mb-4"
        />


        <p className="text-gray-500">
          Arte feita à mão com carinho para momentos especiais.
        </p>


        <p className="text-gray-400 text-sm mt-5">
          © {new Date().getFullYear()} Nessa Arte. Todos os direitos reservados.
        </p>


      </footer>

      {/* Botão WhatsApp */}

<a
  href="https://wa.me/5511966750201?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Nessa%20Arte%20🌸"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition duration-300"
>
  💬
</a>

    {imagemAberta && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
    onClick={() => setImagemAberta(null)}
  >

    <img
      src={imagemAberta}
      alt="Imagem ampliada"
      className="max-h-[90vh] max-w-[90vw] rounded-3xl shadow-2xl"
    />


    <button
      className="absolute top-6 right-6 text-white text-4xl"
      onClick={() => setImagemAberta(null)}
    >
      ×
    </button>


  </div>
)}


    </main>
  
  )
  
}  