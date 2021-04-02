import path from 'path';

export default class Valid {
  public readonly one = 'one';
  protected readonly two = 'two';
  private readonly three = 'three';

  public foo() {
    console.log('foo');
    console.log(this.path());
  }

  private path() {
    return path.dirname(__filename);
  }
}

export class Valid2 extends Valid {
  // noop
}
