export const useServerContext = () => {
  const isServer = !Boolean(process.browser);

  return { isServer };
};
