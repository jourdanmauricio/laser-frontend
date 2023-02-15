import axios from 'axios';
import { useEffect, useState } from 'react';

const useFooter = () => {
  const [action, setAction] = useState('form');
  const [formMsg, setFormMsg] = useState(null);

  const [suscribe, setSuscribe] = useState({
    name: '',
    email: '',
    status: 'Activo',
  });

  const [error, setError] = useState({
    name: null,
    email: null,
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

    setSuscribe({
      ...suscribe,
      [name]: value,
    });

    if (!e.target.required && !pattern) {
      setError({
        ...error,
        [name]: null,
      });
    }

    if (e.target.required && value === '') {
      setError({
        ...error,
        [name]: 'Requerido',
      });
    }

    let regex = new RegExp(pattern);
    regex.exec(value) === null
      ? setError({
          ...error,
          [name]: textError,
        })
      : setError({
          ...error,
          [name]: null,
        });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formError = false;
    let fieldsErrors = Object.assign({}, error);
    const fields = ['name', 'email'];
    for (let field of fields) {
      if (suscribe[field] === '') {
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
      const API_URL = `${process.env.NEXT_PUBLIC_API_BACKEND}/subscribers`;

      const response = await axios.post(API_URL, suscribe);
      setFormMsg('Formulario enviado!. Pronto recibirás novedades.');
    } catch (error) {
      setFormMsg('Error enviando el formulario');
    } finally {
      setAction('msg');
    }
  };

  return { action, error, formMsg, handleChange, handleSubmit };
};

export default useFooter;
