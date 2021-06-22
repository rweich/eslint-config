export class InvalidMemberOrderingMethods {
  constructor() {
    // foo
  }

  private privateMethod(): string {
    return __dirname;
  }

  public get publicGetter(): number {
    return 1;
  }
}

new InvalidMemberOrderingMethods();
