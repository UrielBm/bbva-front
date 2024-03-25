import "./aboutus.css";
const AboutUs = () => {
  return (
    <article className="py-20 px-4 w-full max-w-98 mx-auto">
      <h1 className="text-center mb-4">Acerca de BBVA asistente virtual:</h1>
      <section className="w-full mx-auto wrapper">
        <p className="mb-2">
          Hola,Soy Uriel y cree este asistente virtual como proyecto personal
          usando nuevas tecnologias, la principal: <b>OpenIA</b>
        </p>
        <p>Aquí hay lista de la principales tecnologias que ocupe:</p>
        <ul className="list-disc list-inside pl-2 my-2">
          <li>OpenAI</li>
          <li>Nest.js</li>
          <li>Node</li>
          <li>API Rest</li>
          <li>React</li>
        </ul>
        <p className="my-2">
          También te dejo los repositorios con los proyectos por si es de tu
          interes revisarlos.
        </p>
        <ul className="list-disc list-inside pl-2 my-2">
          <li>
            <a href="https://github.com/UrielBm/bbva-front" target="_blank">
              Repositorio Front
            </a>
          </li>
          <li>
            <a href="https://github.com/UrielBm/bbva-gpt-Api" target="_blank">
              Repositorio Back
            </a>
          </li>
          <li>
            <a
              href="https://gist.github.com/UrielBm/cc08c3b3be428d3bb5e86b9cf7eff966"
              target="_blank"
            >
              Gist prompt asistente
            </a>
          </li>
        </ul>
        <b className="block text-center text-sm my-2">
          No se te olvide configurar las variables de entorno.
        </b>
      </section>
    </article>
  );
};
export default AboutUs;
