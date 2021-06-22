export class InvalidMemberOrderingMethods {
  public static pubs;
  protected static pros;
  private static pris;
  public pub;
  protected pro;
  private pri;

  constructor() {
    // foo
  }

  public get publicGetter(): number {
    return 1;
  }

  get implicitPublicGetter(): number {
    return 1;
  }

  private get privateGetter(): number {
    return 1;
  }

  implicitPublicMethod(): void {
    // noop
  }

  private privateMethod(): string {
    return __dirname;
  }
}

new InvalidMemberOrderingMethods();
