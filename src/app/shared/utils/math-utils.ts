export class MathUtils {
  // Uses a secure, unpredictable random number generator

  static getCryptographicallyRandomInt(length: number): number {
    const $window = window as any;
    const crypto: Crypto = $window.crypto || $window.msCrypto;
    if (!crypto) {
      console.error('window.crypto is undefined');
      return MathUtils.getRandomInt(length);
    }

    const single = new Uint32Array(1);
    crypto.getRandomValues(single);
    return single[0] % length;
  }

  // Math random number

  static getRandomInt(length: number): number {
    const max = Math.floor(length);
    return Math.random() % max;
  }

  // Returns a random integer between min (inclusive) and max (inclusive).

  static getRandomIntRange(minimum: number, maximum: number): number {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
