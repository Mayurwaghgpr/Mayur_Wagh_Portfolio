import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  // Capture postcard and send (dummy)
  const sendPostcard = async () => {
    setMessage("");
  };

  return (
    <div className="flex sm:flex-row flex-col justify-between gap-5 items-center h-screen text-white z-20">
      {/* Postcard Section */}
     <div className="flex flex-col items-center justify-center text-start p-8 w-full z-20">
              
        <div
          id="postcard"
          className=" flex flex-col justify-start items-center gap-4 w-full max-w-md rounded-2xl shadow-2xl p-6"
              >
          <h2 className="text-xl font-bold mb-2">Send </h2>
                  
          <div className="w-full">
            <label className="block text-sm font-medium opacity-50 mb-1">
              Email (optional)
            </label>
            <input
              type="email"
              placeholder="recipient@email.com"
              className="w-full p-3 rounded-lg border  focus:outline-none placeholder:opacity-50 bg-inherit"
            />
          </div>
          {/* Message Box */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            className="w-full h-28 p-2  rounded-lg border bg-inherit outline-none  placeholder:opacity-50 "
          />

          {/* Send Button */}
          <button
            onClick={sendPostcard}
            className="mt-4 w-full text-white py-2 rounded-lg shadow-md"
          >
            Send Postcard ✈️
          </button>
        </div>
      </div>
      {/* Fixed size container for globe */}
      {/* <GlobeContainer handleGlobeClick={handleGlobeClick} /> */}
    </div>
  );
}
