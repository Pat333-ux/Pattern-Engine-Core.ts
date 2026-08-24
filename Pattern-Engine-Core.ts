export class PatternEngine {
  constructor() {
    this.patterns = new Map();
  }

  define(name, fn) {
    this.patterns.set(name, fn);
  }

  apply(name, context) {
    const handler = this.patterns.get(name);
    return handler ? handler(context) : "Pattern not found";
  }

  list() {
    return [...this.patterns.keys()];
  }
}
