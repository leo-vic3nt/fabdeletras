interface Props {
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenuToggue({ toggleMenu }: Props) {
  return (
    <button className="fixed left-6 top-6 z-50 cursor-pointer" onClick={() => toggleMenu((s) => !s)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24">
        <path fill="#fff" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"></path>
      </svg>
    </button>
  );
}

export default MobileMenuToggue;
