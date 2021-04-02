export class InvalidMemberOrderingMethods {
  private path(): string {
    return __dirname;
  }

  public foo(): void {
    console.log('foo');
    console.log(this.path());
  }
}

new InvalidMemberOrderingMethods().foo();
