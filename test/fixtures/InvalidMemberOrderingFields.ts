export class InvalidMemberOrderingFields {
  private readonly three = 'three';
  protected readonly two = 'two';
  public readonly one = 'one';
}

new InvalidMemberOrderingFields();
