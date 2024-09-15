import AboutDescription from "./content/AboutDescription";
const content =
  "I am a software engineer with a passion for web development. I have experience in building web applications using React, Next.js, Nestjs,  and Tailwind CSS. I am also familiar with Node.js, Express,  MongoDB and Postgres. I am always eager to learn new technologies and improve my skills.";
export default function About() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 w-full mt-16 md:w-[80%] md:mx-auto px-4"
      id="about"
    >
      <h1 className="text-3xl font-bold text-sky-900/80 ">About me</h1>

      <AboutDescription content={content} />
      <button className=" bg-sky-900 text-white rounded-md px-4 py-2 pointer-events-auto duration-200 ease-in-out hover:bg-sky-900/80">
        <a href="#">Download CV</a>
      </button>
    </div>
  );
}
