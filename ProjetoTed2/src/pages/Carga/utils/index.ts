export const getMerito = (merito: string) => {
  switch (merito) {
    case "individual":
      return 1;
    case "interno":
      return 2;
    case "externo":
      return 3;
    default:
      return 0;
  }
};
