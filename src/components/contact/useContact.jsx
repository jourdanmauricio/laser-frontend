import { useEffect, useState } from 'react';
import axios from 'axios';

const useContact = () => {
  const [action, setAction] = useState('form');
  const [formMsg, setFormMsg] = useState(null);
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

  return {
    action,
    error,
    formMsg,
    handleChange,
    handleSubmit,
  };
};

export default useContact;
