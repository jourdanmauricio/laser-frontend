const Clinics = ({ clinics }) => {
  return (
    <section className="py-10 px-5 lg:px-20 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {clinics.map((clinic) => (
          <div
            key={clinic.id}
            className="w-full md:w-1/2 py-5 px-10 border border-gray-700"
          >
            <p>
              <strong>{clinic.name}</strong>
            </p>
            <p className="mt-2">{clinic.email}</p>
            <p>{clinic.phone}</p>

            <p>
              {clinic.street}, nro {clinic.number}
              {clinic.floor && (
                <span>
                  - {clinic.floor} {clinic.apartment}
                </span>
              )}
            </p>

            <p>
              {clinic.state}, <strong>{clinic.city}</strong> - {clinic.cp}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clinics;
