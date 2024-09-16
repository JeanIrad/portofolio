const Projects = () => {
  return (
    <div
      className="w-full md:w-[80%] px-4 mt-16 mx-auto flex flex-col gap-8"
      id="projects"
    >
      <h1 className="text-3xl font-bold text-center text-sky-900/80">
        Projects
      </h1>
      <iframe
        src="https://e-commerce-mavericks-fn.netlify.app/"
        height={"800"}
        className="mx-auto w-full"
      ></iframe>
    </div>
  );
};

export default Projects;
