export function FeatureSection() {
  return (
    <section className="max-w-[1200px] mx-auto grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <div className="flex flex-col gap-2 rounded-lg p-6 bg-white/5 md:p-12">
        <span className="bg-white/10 text-outline font-bold px-2 py-1 w-fit rounded-sm  text-lg">A arte de pensar</span>
        <h2 className="text-gray-100 text-3xl md:text-3xl font-bold mt-6">
          Esse espaço não promete respostas. Promete perguntas.
        </h2>
      </div>

      <div className="flex flex-col gap-2 rounded-lg p-6 bg-white/5 md:p-12">
        <span className="bg-white/10 text-outline px-2 py-1 w-fit text-white rounded-sm  font-bold text-lg ">
          Pensamentos Soltos
        </span>
        <h2 className="text-gray-100 text-3xl md:text-3xl font-bold mt-6">
          Alguns fazem sentido. Outros só fazem volume.
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2 rounded-lg p-6 bg-white/5 md:p-12">
        <span className="bg-white/10 text-outline px-2 py-1 w-fit text-white rounded-sm font-bold  text-lg">
          É uma pesquisa? É um estudo?
        </span>
        <h2 className="text-gray-100 text-3xl md:text-3xl font-bold mt-6">
          Tem pesquisa que ninguém pediu, estudo que começa sério e termina no caos, e pensamentos aleatórios que brotam
          do nada e fazem mais sentido.
        </h2>
      </div>
    </section>
  );
}
