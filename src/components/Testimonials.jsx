import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonials = ({ settings, testimonials, testimonialsContent }) => {
  console.log('testimonials', testimonials, testimonialsContent);
  const waveTestimonialsShow = settings.find(
    (setting) => setting.feature === 'waveTestimonialsShow'
  );
  const waveTestimonials = settings.find(
    (setting) => setting.feature === 'waveTestimonials'
  );

  return (
    <section className="relative pt-10 pb-24 px-5 lg:px-20 text-center testimonials">
      <div
        className="relative ql-editor"
        dangerouslySetInnerHTML={{
          __html: testimonialsContent.title,
        }}
      />
      <div
        className="relative ql-editor"
        dangerouslySetInnerHTML={{
          __html: testimonialsContent.subsections[0].content,
        }}
      />

      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 text-testimonialsTextColor">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="mb-12 md:mb-0">
            <h5 className="mb-4 text-xl font-semibold">{testimonial.name}</h5>
            <p className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              {testimonial.message}
            </p>
            <div className="flex gap-4 text-yellow-500 justify-center">
              {testimonial.stars.split('').map((star, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => onClickStar(index, star)}
                >
                  {star == '1' && <FaStar />}
                  {star === '0' && <FaStarHalfAlt />}
                  {star === '2' && <FaRegStar />}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {waveTestimonialsShow.value === 'true' && (
        <div className="pt-10 absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d={waveTestimonials.value}
              className="stroke-none fill-footerBgColor"
            ></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
