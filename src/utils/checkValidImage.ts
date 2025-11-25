export const isValidImageUrl = (url: string) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true); // Image loaded successfully
    img.onerror = () => resolve(false); // Failed to load (invalid or unreachable)
    img.src = url;
  });
};
