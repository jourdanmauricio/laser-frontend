const Clinics = ({ settings, clinics, clinicContent }) => {
  const waveClinicShow = settings.find(
    (setting) => setting.feature === 'waveClinicShow'
  );
  const waveClinic = settings.find(
    (setting) => setting.feature === 'waveClinic'
  );
  return (
    <section className="relative pt-10 pb-24 px-5 lg:px-20 text-center clinic">
      <div
        className="relative ql-editor"
        dangerouslySetInnerHTML={{
          __html: clinicContent.title,
        }}
      />
      <div
        className="relative ql-editor"
        dangerouslySetInnerHTML={{
          __html: clinicContent.subsections[0].content,
        }}
      />

      <button className="mt-8 border border-gray-500 rounded px-8 py-2">
        Pedir cita
      </button>

      <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
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
      {waveClinicShow.value === 'true' && (
        <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d={waveClinic.value}
              className="stroke-none fill-footerBgColor"
            ></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default Clinics;
