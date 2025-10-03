function Logo() {
  return (
    <>
      <img src="/logos/logo-mobile.png" alt="logo" className="w-14 lg:hidden" />
      <img src="/logos/logo-desktop.png" alt="logo" className="w-[160px] hidden lg:block" />
    </>
  );
}

export default Logo;
