import Spinner from '../../common/Spinner';
import useContact from './useContact';

const Contact = () => {
  const { action, error, formMsg, handleChange, handleSubmit } = useContact();
  return (
    <section
      className="py-10 px-5 lg:px-20 text-center bg-[url('/images/contact.jpg')] bg-cover bg-center bg-no-repeat"
      id="contact"
      data-scroll-spy
    >
      <div className="p-10">
        <div className="divider__content">
          <p className="divider__text">Contacto</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center overflow-hidden pt-0">
          <article className="w-full h-[460px] sm:w-1/2 flex items-center justify-center">
            <h2 className="px-5 leading-10 text-2xl font-medium text-gray-800 text-center sm:-translate-y-1/2">
              Si tienes alguna duda, comentario o sugerencia envíanos un mensaje
              o correo electrónico y nos pondremos en contacto lo antes posible.
            </h2>
          </article>

          <article className="sm:w-1/2 h-[460px]">
            {action === 'form' && (
              <form
                id="form-contact"
                className="w-full h-full mx-auto flex flex-col items-center justify-center"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form__group">
                  <span className="form__icon">*</span>

                  <input
                    type="text"
                    className={`form__input ${
                      error.name
                        ? 'focus:border-errorColor'
                        : 'focus:border-teal-700'
                    }`}
                    name="name"
                    id="name-contact"
                    title="Obligatorio. Ingresa solo letras"
                    autoComplete="off"
                    placeholder="Ingresa tu nombre"
                    pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$"
                    required
                    onChange={handleChange}
                  />
                  <span
                    className={`form__error ${
                      error.name ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {error.name}
                  </span>
                </div>

                <div className="form__group">
                  <span className="form__icon">*</span>
                  <input
                    type="email"
                    className={`form__input ${
                      error.email
                        ? 'focus:border-errorColor'
                        : 'focus:border-teal-700'
                    }`}
                    name="email"
                    id="email-contact"
                    title="Obligatorio. Ingresa un email válido"
                    autoComplete="off"
                    placeholder="correo@dominio.com"
                    pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                    required
                    onChange={handleChange}
                  />
                  <span
                    className={`form__error ${
                      error.email ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {error.email}
                  </span>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className={`form__input ${
                      error.phone
                        ? 'focus:border-errorColor'
                        : 'focus:border-teal-700'
                    }`}
                    name="phone"
                    id="phone-contact"
                    title="El teléfono solo admite números, -, +, y ()"
                    autoComplete="off"
                    placeholder="(xxx) xxxx-xxxx"
                    pattern="^[0-9*\s()+?-]*$"
                    onChange={handleChange}
                  />
                  <span
                    className={`form__error ${
                      error.phone ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {error.phone}
                  </span>
                </div>

                <div className="form__group">
                  <span className="form__icon">*</span>
                  <textarea
                    className={`form__input ${
                      error.comment
                        ? 'focus:border-errorColor'
                        : 'focus:border-teal-700'
                    }`}
                    name="comment"
                    id="comments-contact"
                    cols="50"
                    rows="4"
                    placeholder="Escribe tu comentario"
                    title="Obligatorio. No puede exceder los 255 caracteres"
                    data-pattern="^.{1,255}$"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <span
                    className={`form__error ${
                      error.comment ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {error.comment}
                  </span>
                </div>

                <input
                  className="button__cta mt-8"
                  value="Enviar"
                  type="submit"
                />
              </form>
            )}

            {action === 'loading' && <Spinner />}
            {action === 'msg' && (
              <h3
                id="form-rta"
                className="text-pink-500 text-2xl w-5/6 h-4/6 mx-auto text-center"
              >
                {formMsg}
              </h3>
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
