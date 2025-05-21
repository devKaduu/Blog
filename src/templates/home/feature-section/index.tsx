export function FeatureSection() {
  return (
    <section className="max-w-[1200px] mx-auto grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <div className="flex flex-col gap-2 rounded-lg p-6 bg-white/5 md:p-12">
        <span className="bg-rainbow text-outline font-bold px-2 py-1 w-fit rounded-sm uppercase text-lg">
          A maioria aqui é cuzão
        </span>
        <h2 className="text-gray-100 text-3xl md:text-5xl font-bold mt-6">
          Unidos pelo acaso e mantidas pela merda falada diariamente.
        </h2>
      </div>

      <div className="flex flex-col gap-2 rounded-lg p-6 bg-white/5 md:p-12">
        <span className="bg-rainbow text-outline px-2 py-1 w-fit text-white rounded-sm uppercase font-bold text-lg ">
          baixo nível, zero noção
        </span>
        <h2 className="text-gray-100 text-3xl md:text-5xl font-bold mt-6">
          Pior que isso, só cair em golpe de pirâmide.
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2 rounded-lg p-6 bg-white/5 md:p-12">
        <span className="bg-rainbow text-outline px-2 py-1 w-fit text-white rounded-sm uppercase font-bold  text-lg">
          O QUE É SOM?
        </span>
        <h2 className="text-gray-100 text-3xl md:text-5xl font-bold mt-6">
          Bando de arrombado fodido tentando não morrer de cirrose ou vergonha.
        </h2>
      </div>
    </section>
  );
}
