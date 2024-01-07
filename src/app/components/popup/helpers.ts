export const getModalIsOpened = () => {
  const modal = sessionStorage.getItem("modal");
  return Boolean(modal);
};

export const setModalIsOpened = () => {
  sessionStorage.setItem("modal", "modalOpened");
};
