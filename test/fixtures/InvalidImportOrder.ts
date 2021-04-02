import Valid, { Valid2 } from './Valid';
import { InvalidMemberOrderingMethods } from './InvalidMemberOrderingMethods';
import { InvalidClassMemberPadding } from './InvalidClassMemberPadding';

export class InvalidImportOrder {
  private v!: InvalidMemberOrderingMethods | null;
  private w!: InvalidClassMemberPadding | null;
  private x!: Valid | Valid2;
}
