export class InvalidSwitchCaseBraces {
  public test(a: string): string {
    switch (a) {
      case 'a': {
        return a;
      }
      default:
        return a;
    }
  }
}
