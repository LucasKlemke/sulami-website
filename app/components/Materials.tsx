import Image from "next/image";

const materials = [
  {
    name: "Mármores",
    description:
      "Elegância e sofisticação natural. Ideal para ambientes internos, lavabos e revestimentos nobres.",
    image: "/images/materiais/marmore.jpg",
  },
  {
    name: "Granitos",
    description:
      "Resistência e durabilidade incomparáveis. Perfeito para bancadas, pisos e áreas externas.",
    image: "/images/materiais/granito.jpg",
  },
  {
    name: "Quartzos",
    description:
      "Material industrializado de alta performance, com uniformidade e grande variedade de cores.",
    image: "/images/materiais/quartzo.jpg",
  },
  {
    name: "Quartzitos",
    description:
      "Pedra natural com a beleza do mármore e a resistência do granito. Versátil e sofisticada.",
    image: "/images/materiais/quartzito.jpg",
  },
];

export default function Materials() {
  return (
    <section id="materiais" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Trabalhamos com os melhores
          </p>
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Nossos Materiais
          </h2>
          <div className="mx-auto h-1 w-20 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-medium">
            Trabalhamos com uma ampla variedade de pedras naturais e
            industrializadas, sempre selecionando o melhor para cada projeto.
            Os materiais naturais estão sujeitos a variação de cor, tonalidade,
            desenhos e veios — características próprias de cada pedra.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <div
              key={material.name}
              className="group overflow-hidden rounded-xl border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={material.image}
                  alt={`${material.name} - Mil Mármores e Granitos`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-accent">
                  {material.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-medium">
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-medium">
            Além desses, trabalhamos com diversos outros materiais.{" "}
            <a
              href="https://wa.me/554736331830"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              Consulte-nos sobre o material ideal para seu projeto.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
