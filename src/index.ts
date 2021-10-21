const supportsESM = async () => {
  try {
    // @ts-ignore
    await import("data:text/javascript,");
    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};

supportsESM();
