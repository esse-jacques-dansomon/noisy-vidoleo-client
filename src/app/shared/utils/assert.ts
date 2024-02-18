export class Assert {
  static isNotNull(value: object | any, name?: string, message?: string): void {
    if (value === null || value === void 0) {
      const errorMessage: string = message || (name ? '"{0}" cannot be null.' : 'Specified value cannot be null.');

      this.throwError(errorMessage, name);
    }
  }

  static isTrue(value: boolean, name?: string, message?: string): void {
    if (!value) {
      const errorMessage: string = message || (name ? '"{0}" is not a "true".' : 'Specified value is not a "true".');

      this.throwError(errorMessage, name);
    }
  }

  static isFalse(value: boolean, name?: string, message?: string): void {
    if (value) {
      const errorMessage: string = message || (name ? '"{0}" is not a "false".' : 'Specified value is not a "false".');

      this.throwError(errorMessage, name);
    }
  }

  static isMatch(value: string, pattern: RegExp, name?: string, message?: string): void {
    if (!pattern.test(value)) {
      const errorMessage: string =
        message || (name ? '"{0}" is not match pattern.' : 'Specified value is not match pattern.');

      this.throwError(errorMessage, name);
    }
  }

  static inRange(value: number, from: number, to: number, name?: string, message?: string): void {
    if (value < from || value > to) {
      const errorMessage: string =
        message || (name ? '"{0}" is out of range [{1}, {2}].' : 'Specified value out of range [{1}, {2}].');

      throw new Error(errorMessage.format(name || '', from, to));
    }
  }

  static isArray(value: object, name?: string, message?: string): void {
    if (Object.prototype.toString.call(value) !== '[object Array]') {
      const errorMessage: string = message || (name ? '"{0}" is not a array.' : 'Specified value is not a array.');

      this.throwError(errorMessage, name);
    }
  }

  static throwError(errorMessage: string, name?: string): void {
    if (name !== undefined) {
      throw new Error(errorMessage.format({ name }));
    } else {
      throw new Error(errorMessage);
    }
  }
}
