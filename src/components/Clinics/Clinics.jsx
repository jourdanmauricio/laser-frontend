import Link from 'next/link';

const Clinics = ({ settings, clinics, clinicContent }) => {
  console.log('settings', settings);
  const waveClinicShow = settings.find(
    (setting) => setting.feature === 'waveClinicShow'
  );
  const waveClinic = settings.find(
    (setting) => setting.feature === 'waveClinic'
  );

  const clinicBtnShow = settings.find(
    (setting) => setting.feature === 'clinicBtnShow'
  );

  const clinicBtnText = settings.find(
    (setting) => setting.feature === 'clinicBtnText'
  );

  const clinicBtnLink = settings.find(
    (setting) => setting.feature === 'clinicBtnLink'
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

      {clinicBtnShow.value === 'true' && (
        <div className="mt-12">
          <Link
            href={clinicBtnLink.value}
            className="border border-solid px-8 py-2 transition ease-in-out delay-100  hover:cursor-pointer btn__clinics"
          >
            {clinicBtnText.value}
          </Link>
        </div>
      )}

      <div className="mt-20 flex flex-wrap justify-center items-center gap-8 text-clinicTextColor">
        {clinics.map((clinic) => (
          <div
            key={clinic.id}
            className="min-w-[350px] py-5 px-10 border border-clinicTextColor flex-grow-0 flex-shrink-0 basis-full sm:basis-1/4"
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
