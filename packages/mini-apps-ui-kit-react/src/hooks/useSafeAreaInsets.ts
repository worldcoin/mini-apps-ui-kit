function useSafeAreaInsets() {
  const safeAreaInsets = window?.MiniKit?.deviceProperties?.safeAreaInsets;
  return safeAreaInsets ?? { top: 0, right: 0, bottom: 0, left: 0 };
}

export default useSafeAreaInsets;
