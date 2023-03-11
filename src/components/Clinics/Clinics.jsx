const Clinics = ({ clinics }) => {
  return (
    <section className="py-10 px-5 lg:px-20 text-center">
      {/* <div className="flex flex-col md:flex-row justify-center items-center gap-8"> */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {clinics.map((clinic) => (
          <div
            key={clinic.id}
            className="min-w-[350px] py-5 px-10 border border-gray-700 flex-grow-0 flex-shrink-0 basis-full sm:basis-1/4"
          >
            <p>
              <strong>{clinic.name}</strong>
            </p>
            <p className="mt-2 text-sm">{clinic.email}</p>
            <p className="text-sm">{clinic.phone}</p>

            <p className="text-sm">
              {clinic.street}, nro {clinic.number}
              {clinic.floor && (
                <span>
                  - {clinic.floor} {clinic.apartment}
                </span>
              )}
            </p>

            <p className="text-sm">
              {clinic.state}, <strong>{clinic.city}</strong> - {clinic.cp}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clinics;
