const Contact = () => {
  return (
    <div
      className="w-full md:w-[80%] mx-auto px-4 mt-16 flex flex-col gap-8"
      id="contact"
    >
      <h1 className="text-3xl font-bold text-center text-sky-900/80">
        Contact me
      </h1>
      <form action="" className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 w-full lg:max-w-[500px]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="border border-sky-900 py-2 pl-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-full lg:max-w-[500px]">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="border border-sky-900 py-2 pl-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-full lg:max-w-[500px]">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="resize-none border border-sky-900 py-2 pl-2 rounded-md focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-sky-900 text-white w-full lg:w-[500px] py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
