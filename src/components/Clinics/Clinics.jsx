import Image from 'next/image';
import Link from 'next/link';

const Clinics = ({ settings, clinicBtn, clinics, clinicContent }) => {
  console.log('settings', settings);
  const waveClinicShow = settings.find(
    (setting) => setting.feature === 'waveClinicShow'
  );
  const waveClinic = settings.find(
    (setting) => setting.feature === 'waveClinic'
  );

  // const clinicBtnShow = settings.find(
  //   (setting) => setting.feature === 'clinicBtnShow'
  // );

  // const clinicBtnText = settings.find(
  //   (setting) => setting.feature === 'clinicBtnText'
  // );

  // const clinicBtnLink = settings.find(
  //   (setting) => setting.feature === 'clinicBtnLink'
  // );

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

      <div className="mt-20 flex flex-wrap justify-center items-center gap-8 text-clinicTextColor">
        {clinics.map((clinic) => (
          <div key={clinic.id} className="flip-card">
            <div className="min-w-[330px] py-5 px-10 border border-clinicTextColor flex-grow-0 flex-shrink-0 basis-full sm:basis-1/4 flip-face flip-front">
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

            <div className="flip-face flip-back">
              <Image
                src={clinic.image}
                alt={clinic.alt_image}
                width={350}
                height={350}
              />
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6023.874869075388!2d-57.94872510878222!3d-34.95025474229443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1679019878118!5m2!1ses!2sar"
                width="350"
                height="210"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </div>
        ))}
      </div>

      {clinicBtn.show.value === 'true' && (
        <div className="mt-12">
          <Link
            href={clinicBtn.link.value}
            className="border border-solid transition ease-in-out delay-100 hover:cursor-pointer btn__clinics"
          >
            {clinicBtn.text.value}
          </Link>
        </div>
      )}

      {waveClinicShow.value === 'true' && (
        <div className="pt-10 absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
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
