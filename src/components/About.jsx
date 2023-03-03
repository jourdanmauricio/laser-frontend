const About = ({ h1Pos }) => {
  return (
    <section className="py-10 px-5 lg:px-20 text-center" id="nosotros">
      <h2 className="title text-h1Color font-quicksand  text-red-500">
        Sobre mi aaa
      </h2>
      <h2 className="title text-h1Color font-raleway  text-red-500">
        Sobre mi aaa
      </h2>
      {/* font-raleway font-quicksand */}
      <div className="font-medium text-left text-lg">
        <p className="py-5">
          ¡Hola! Soy [Tu Nombre], una ginecóloga y sexóloga apasionada por
          ayudar a las mujeres a tener una vida sexual y reproductiva saludable
          y satisfactoria.
        </p>
        <p className="py-5">
          Me gradué en la Facultad de Medicina hace [Número de años] y desde
          entonces he trabajado en diversos campos de la ginecología, incluyendo
          la atención prenatal, el tratamiento de trastornos ginecológicos y la
          cirugía laparoscópica. Pero mi verdadera pasión es la sexología, donde
          me especialicé después de darme cuenta de que muchos problemas
          ginecológicos están relacionados con la salud sexual y emocional de
          las mujeres.
        </p>
        <p className="py-5">
          En mi práctica, ofrezco una variedad de tratamientos de última
          generación, incluyendo tratamientos con láser para la salud vaginal.
          Los tratamientos láser son una forma no invasiva y efectiva de tratar
          muchos problemas ginecológicos, como el síndrome de relajación
          vaginal, la incontinencia urinaria y la atrofia vaginal. Además,
          también ofrezco terapia sexual para ayudar a las mujeres a superar
          cualquier problema relacionado con su vida sexual.
        </p>
        <p className="py-5">
          Mi objetivo es ayudar a todas mis pacientes a sentirse cómodas y
          seguras durante sus visitas, y proporcionarles el tratamiento y el
          asesoramiento que necesitan para llevar una vida sexual y reproductiva
          saludable y feliz. Si estás buscando un ginecólogo o sexólogo en quien
          puedas confiar, no dudes en contactar conmigo. Estoy aquí para
          ayudarte.
        </p>
      </div>
    </section>
  );
};

export default About;
