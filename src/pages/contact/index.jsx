import axios from 'axios';
import Nav from '@/common/Nav';
import Footer from '@/common/Footer/Footer';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Spinner from '@/common/Spinner';

const Contact = ({ settings, clinics }) => {
  const [action, setAction] = useState('form');
  const [formMsg, setFormMsg] = useState(null);
  const email = settings.find((setting) => setting.feature === 'email');
  const phone = settings.find((setting) => setting.feature === 'phone');

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [error, setError] = useState({
    name: null,
    email: null,
    phone: null,
    comment: null,
  });

  useEffect(() => {
    if (formMsg) {
      const timeout = setTimeout(() => {
        setFormMsg(null);
        setAction('form');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [formMsg]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const pattern = e.target.pattern || e.target.dataset.pattern;
    const textError = e.target.title;

    setContact({
      ...contact,
      [name]: value,
    });

    if (!e.target.required && !pattern) {
      setError({
        ...error,
        [name]: null,
      });
      return;
    }

    if (e.target.required && value === '') {
      setError({
        ...error,
        [name]: 'Requerido',
      });
      return;
    }

    let regex = new RegExp(pattern);
    if (regex.exec(value) === null) {
      setError({
        ...error,
        [name]: textError,
      });
    } else {
      setError({
        ...error,
        [name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formError = false;
    let fieldsErrors = Object.assign({}, error);
    const fields = ['name', 'email', 'comment'];
    for (let field of fields) {
      if (contact[field] === '') {
        formError = true;
        fieldsErrors = {
          ...fieldsErrors,
          [field]: 'Requerido',
        };
      }
      if (error[field]) {
        formError = true;
      }
    }

    if (formError === true) {
      setError(fieldsErrors);
      return;
    }

    try {
      setAction('loading');
      const API_URL = `${process.env.NEXT_PUBLIC_API_BACKEND}/comments`;

      const response = await axios.post(API_URL, contact);
      setFormMsg('Formulario enviado!. En breve nos pondremos en contacto.');
    } catch (error) {
      setFormMsg('Error enviando el formulario');
    } finally {
      setAction('msg');
    }
  };

  const navBgColor = settings.find(
    (setting) => setting.feature === 'navBgColor'
  );
  const navTextColor = settings.find(
    (setting) => setting.feature === 'navTextColor'
  );
  const navHoverColor = settings.find(
    (setting) => setting.feature === 'navHoverColor'
  );
  const navCurrentPageColor = settings.find(
    (setting) => setting.feature === 'navCurrentPageColor'
  );
  const bodyBgColor = settings.find(
    (setting) => setting.feature === 'bodyBgColor'
  );
  const contactPage = settings.filter(
    (setting) => setting.type === 'pageContact'
  );
  const pageContact = contactPage.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  return (
    <>
      <style jsx global>{`
        :root {
          --navBgColor: ${navBgColor.value};
          --navTextColor: ${navTextColor.value};
          --navHoverColor: ${navHoverColor.value};
          --navCurrentPageColor: ${navCurrentPageColor.value};
          --bodyBgColor: ${bodyBgColor.value};
          // CONTACT
          --heroBgColor: ${pageContact.heroBgColor.value};
          --bgColor: ${pageContact.bgColor.value};
          --decorationColor: ${pageContact.decorationColor.value};
        }
      `}</style>
      <Nav settings={settings} />
      <div className="overflow-x-hidden">
        <div className="relative bg-heroBgColor flex flex-col justify-center items-center">
          <div
            className="relative ql-editor"
            dangerouslySetInnerHTML={{
              __html: pageContact.h1.value,
            }}
          />
          <div className="absolute z-0 w-40 h-40 bg-decorationColor rounded-full -right-20 -bottom-28"></div>
        </div>

        <div className="antialiased bg-gray-100">
          <div className="flex w-full justify-center items-center">
            <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-bgColor p-8 sm:p-12 shadow-lg text-white overflow-hidden">
              <div className="flex flex-col space-y-8 justify-between w-full md:w-1/2">
                <div className="relative z-10">
                  <div
                    className="relative ql-editor"
                    dangerouslySetInnerHTML={{
                      __html: pageContact.text.value,
                    }}
                  />
                </div>
                <div className="flex flex-col text-[16px] space-y-6 px-4">
                  <div className="inline-flex space-x-2 items-center">
                    <FaPhoneAlt className="text-decorationColor" />
                    <span>{phone.value}</span>
                  </div>
                  <div className="inline-flex space-x-2 items-center">
                    <FaEnvelope className="text-decorationColor" />
                    <span>{email.value}</span>
                  </div>
                  {clinics.map((clinic) => (
                    <div
                      key={clinic.id}
                      className="inline-flex space-x-2 items-center"
                    >
                      <FaMapMarkerAlt className="text-decorationColor" />
                      <span>
                        {`${clinic.city}, ${clinic.street} ${clinic.number} 
                        ${clinic.floor || ''} ${clinic.apartment || ''} - ${
                          clinic.phone
                        }`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative w-full md:w-1/2 ">
                <div className="absolute z-0 w-40 h-40 bg-decorationColor rounded-full -left-28 -bottom-16"></div>
                <div className="relative z-10 h-full bg-blue-50 rounded-xl shadow-lg p-8 text-gray-600">
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col space-y-4"
                  >
                    {action === 'form' && (
                      <>
                        <div>
                          <label htmlFor="" className="text-sm">
                            Nombre
                          </label>
                          <input
                            className="ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-decorationColor"
                            type="text"
                            name="name"
                            title="Ingresa solo letras"
                            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$"
                            placeholder="Tu nombre"
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
                        <div>
                          <label htmlFor="" className="text-sm">
                            Email Adrress
                          </label>
                          <input
                            className="ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-decorationColor"
                            type="email"
                            name="email"
                            autoComplete="on"
                            title="Ingresa un email válido"
                            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                            placeholder="Email Adrress"
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
                        <div>
                          <label htmlFor="" className="text-sm">
                            Teléfono
                          </label>
                          <input
                            className="ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-decorationColor"
                            type="text"
                            title="El teléfono solo admite números, -, +, y ()"
                            name="phone"
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
                        <div>
                          <label htmlFor="" className="text-sm">
                            Mensaje
                          </label>
                          <textarea
                            className="ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-decorationColor"
                            type="text"
                            rows={4}
                            name="comment"
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
                        <button className="inline-block self-end bg-bgColor text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                          Enviar mensaje
                        </button>
                      </>
                    )}
                    {action === 'loading' && <Spinner />}
                    {action === 'msg' && (
                      <h3
                        id="form-rta"
                        className="text-decorationColor text-2xl w-5/6 h-4/6 mx-auto text-center"
                      >
                        {formMsg}
                      </h3>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer settings={settings} />
      </div>
    </>
  );
};

export default Contact;

export async function getStaticProps() {
  try {
    const API_SETTINGS = `${process.env.NEXT_PUBLIC_API_BACKEND}/settings`;
    const responseSettings = await axios(API_SETTINGS);

    const API_CLINICS = `${process.env.NEXT_PUBLIC_API_BACKEND}/clinics`;
    const responseClinics = await axios(API_CLINICS);

    const clinics = responseClinics.data
      .sort((a, b) => a.order - b.order)
      .filter((post) => post.main === true);

    return {
      props: {
        settings: responseSettings.data,
        clinics,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
