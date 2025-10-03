function ContatoMenu() {
  return (
    <div className="text-white flex flex-col gap-2">
      <h3 className="font-blackcrow text-center">Contato</h3>
      <nav>
        <ul className="text-sm items-center flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
              ></path>
            </svg>
            <a href="https://maps.app.goo.gl/5dG9EwnChUkaUWtR6" target="_blank" rel="noopener noreferrer">
              <p>R. Belos Portos, 30 - Passaré</p>
            </a>
          </li>

          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
              ></path>
            </svg>
            <p>fabricadeletrasolucoes@gmail.com</p>
          </li>

          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
              ></path>
            </svg>
            <a
              href="https://api.whatsapp.com/send?phone=558592401410&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20da%20F%C3%A1brica%20de%20Letras%20!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>(85) 99240-1410</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ContatoMenu;
