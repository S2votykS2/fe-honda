class CommonUtils {
  static isNumber1(number) {
    if (number === 1) return true;
    return false;
  }
  static toBase64FromFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  static toBase64FromBuffer = (file) =>
    new Buffer(file, "base64").toString("binary");
}

export default CommonUtils;
