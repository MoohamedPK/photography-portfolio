

function Button({text, link, type}) {
  return (
    <button type={type ? type : ""} className="contact-btn mt-20 mx-auto text-sm md:text-xl font-semibold cursor-pointer">
      <a
        href={link ? link : null}
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:border-white group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
            {text}
        </span>
      </a>
    </button>
  );
}

export default Button