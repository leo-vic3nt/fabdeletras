import { useState } from 'react';

function MessageSender() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = '558592401410';
    const message = encodeURIComponent(input);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className=" text-white flex flex-col gap-10 items-center bg-[url('images/background-texture-mobile.png')] lg:bg-[url('images/background-texture.png')] bg-cover bg-center bg-no-repeat py-14 ">
      <div>
        <h2 className="font-blackcrow text-2xl lg:text-4xl">Nos mande uma mensagem!</h2>
        <p className="text-center">Responderemos o mais breve possível</p>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-white rounded-lg px-4 py-2 text-gray-700 border-0 focus:ring-2 focus:ring-[#a71617]"
          required
        />
        <button type="submit" className="border px-6 py-2 rounded text-white bg-[#a71617] border-white cursor-pointer">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default MessageSender;
