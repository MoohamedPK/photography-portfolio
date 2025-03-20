import Button from "../common/Button";

function EmailRes({ message, setEmailResVisibility }) {
  return (
    <div className="bg-white py-5 px-10 text-center grid place-content-center z-90 w-full md:w-1/2 h-[400px] text-black fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-2xl mb-8">
        Thanks for reaching out! Let’s turn your vision into stunning visuals.
      </h1>
      <p className="text-lg bg-black py-2 text-white">{message}</p>

      <div className="close-btn" onClick={() => setEmailResVisibility(false)}>
        <Button text="Finish" link="/" />
      </div>
    </div>
  );
}

export default EmailRes;
