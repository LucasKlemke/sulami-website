import Image from "next/image";

const services = [
  {
    title: "Bancadas de Cozinha",
    description: "Bancadas sob medida em mármore, granito ou quartzo para sua cozinha.",
    image: "/images/servicos/bancada-cozinha.jpg",
  },
  {
    title: "Lavabos",
    description: "Lavabos elegantes que transformam o visual do seu banheiro.",
    image: "/images/servicos/lavabo.jpg",
  },
  {
    title: "Revestimento de Escadas",
    description: "Escadas revestidas com pedras naturais para sofisticação e durabilidade.",
    image: "/images/servicos/escada.jpg",
  },
  {
    title: "Áreas Gourmet",
    description: "Espaços gourmet com acabamento impecável em pedras naturais.",
    image: "/images/servicos/area-gourmet.jpg",
  },
  {
    title: "Pingadeiras",
    description: "Pingadeiras em mármore e granito para proteção e beleza.",
    image: "/images/servicos/pingadeira.jpg",
  },
  {
    title: "Soleiras",
    description: "Soleiras que complementam o acabamento de portas e janelas.",
    image: "/images/servicos/soleira.jpg",
  },
  {
    title: "Túmulos",
    description: "Acabamentos em mármore e granito para homenagens eternas.",
    image: "/images/servicos/tumulo.jpg",
  },
  {
    title: "Lareiras",
    description: "Revestimento de lareiras com elegância e resistência ao calor.",
    image: "/images/servicos/lareira.jpg",
  },
  {
    title: "Churrasqueiras",
    description: "Churrasqueiras revestidas em pedra para sua área de lazer.",
    image: "/images/servicos/churrasqueira.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-gray-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            O que fazemos
          </p>
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Nossos Serviços
          </h2>
          <div className="mx-auto h-1 w-20 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-medium">
            Oferecemos uma ampla gama de serviços em mármores, granitos e pedras
            naturais, com qualidade e acabamento impecável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-medium">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-gray-medium">
            Tem um projeto em mente? Entre em contato conosco!
          </p>
          <a
            href="https://wa.me/554736331830"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent-light hover:shadow-xl"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicite um Orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
