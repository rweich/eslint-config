export class InvalidMemberOrderingMethods {
  private path(): string {
    return 'foo';
  }

  public foo(): void {
    console.log('foo');
    console.log(this.path());
  }
}

new InvalidMemberOrderingMethods().foo();
