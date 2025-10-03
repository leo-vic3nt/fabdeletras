interface Props {
  isActive: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenuToggue({ isActive, toggleMenu }: Props) {
  return (
    <button className="fixed left-6 top-6 z-50 cursor-pointer" onClick={() => toggleMenu((s) => !s)}>
      {isActive ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24">
          <path
            fill="#fff"
            d="M10.586 12L2.793 4.207l1.414-1.414L12 10.586l7.793-7.793l1.414 1.414L13.414 12l7.793 7.793l-1.414 1.414L12 13.414l-7.793 7.793l-1.414-1.414z"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24">
          <path fill="#fff" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"></path>
        </svg>
      )}
    </button>
  );
}

export default MobileMenuToggue;
