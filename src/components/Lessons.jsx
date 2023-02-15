const Lessons = ({ lessons }) => {
  return (
    <section className="py-10 px-5 lg:px-20" id="lessons" data-scroll-spy>
      <div className="divider__content">
        <p className="divider__text">Horarios</p>
      </div>
      <p className="paragraph">
        Ya se pueden realizar las inscripciones acercándote al gimnasio o
        poniéndote en contacto.
      </p>
      <table
        id="lessons-table"
        className="border-spacing-1 border-collapse bg-pink-500 rounded overflow-hidden max-w-[800px] w-full mx-auto relative shadow-[0_0_10px_rgba(0,0,0,0.25)]"
      >
        <thead>
          <tr className="pl-2 h-14 bg-tableHeaderColor text-base text-tableHeaderTextColor border-b border-solid border-tableBorderColor">
            <th className="pl-2 text-center">Días</th>
            <th className="pl-2 text-center">Horario</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr
              key={lesson.id}
              className="h-12 border-b border-solid border-tableBorderColor bg-tableBodyColor text-tableBodyTextColor"
            >
              <td className="text-center">{lesson.days}</td>
              <td className="text-center">{lesson.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Lessons;
