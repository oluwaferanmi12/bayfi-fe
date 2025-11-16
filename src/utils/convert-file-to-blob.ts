export const convertImageToBlob = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file) return reject("No file provided");

    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result as string); // this is the base64 string
    };

    reader.onerror = reject;

    reader.readAsDataURL(file); // converts file -> base64 string
  });
};
