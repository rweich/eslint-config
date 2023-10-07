export class ValidSwitchCaseBraces {
  public test(a: string): string {
    switch (a) {
      case 'a':
        return 'a';
      case 'b': {
        const b = 'b';
        return b;
      }
      default:
        return 'def';
    }
  }
}
