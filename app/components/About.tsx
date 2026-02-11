import Image from "next/image";

export default function About() {
  const diferenciais = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Comprometimento",
      description: "Cumprimos prazos e suprimos a necessidade de cada cliente com dedicação total.",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Excelência",
      description: "Mais de 40 anos de experiência no ramo garantem a qualidade em cada projeto.",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Transparência",
      description: "Relacionamento honesto e claro com cada cliente, do orçamento à entrega.",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Inovação",
      description: "Sempre buscando oferecer o que há de mais novo no mercado de pedras.",
    },
  ];

  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Nossa História
          </p>
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Sobre Nós
          </h2>
          <div className="mx-auto h-1 w-20 bg-accent" />
        </div>

        {/* Content Grid */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-80 w-full overflow-hidden rounded-xl sm:h-96">
            <Image
              src="/images/placeholder.svg"
              alt="Equipe Mil Mármores e Granitos - Marmoraria em São Bento do Sul"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Substitua o src acima por: /images/sobre-empresa.jpg (600x400 recomendado) */}
          </div>

          {/* Text Content */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-primary sm:text-3xl">
              Tradição familiar desde 1997
            </h3>
            <p className="mb-4 leading-relaxed text-gray-medium">
              A Mil Mármores e Granitos iniciou suas atividades no ano de 1997 na
              cidade de Rio Negrinho, fundada por Alcides e Sulami, que hoje são os
              proprietários da empresa e atuam na área há mais de 40 anos. O
              conhecimento foi passado por familiares que já trabalhavam no ramo,
              criando uma verdadeira tradição familiar.
            </p>
            <p className="mb-6 leading-relaxed text-gray-medium">
              Com o tempo, a empresa consolidou grande parte de sua clientela em
              São Bento do Sul, onde atua até hoje. Nosso diferencial, além de
              décadas de experiência, é o comprometimento com cada cliente,
              cumprindo e suprindo suas necessidades com excelência e
              transparência, sempre buscando oferecer o que há de mais novo no
              mercado.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">28+</p>
                <p className="mt-1 text-sm text-gray-medium">Anos de experiência</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">40+</p>
                <p className="mt-1 text-sm text-gray-medium">Anos no ramo</p>
              </div>
              <div className="col-span-2 text-center sm:col-span-1">
                <p className="text-3xl font-bold text-accent">10</p>
                <p className="mt-1 text-sm text-gray-medium">Dias úteis de prazo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-100 bg-gray-light p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                {item.icon}
              </div>
              <h4 className="mb-2 text-lg font-semibold text-primary">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Garantia */}
        <div className="mt-16 rounded-xl bg-primary p-8 text-center sm:p-12">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Nossa Garantia
          </h3>
          <p className="mx-auto max-w-2xl text-white/80">
            Oferecemos <span className="font-semibold text-accent-light">30 dias de garantia</span> em
            nossos serviços. O granito, pela sua própria natureza, está sujeito
            a variações de cor, tonalidade, desenhos e veios, características
            que fazem de cada peça algo único e especial.
          </p>
        </div>
      </div>
    </section>
  );
}
