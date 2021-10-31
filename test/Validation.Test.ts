import { ESLint } from 'eslint';
import test from 'tape';

const esLint: ESLint = new ESLint();
test('finds errors on invalid import ordering', async (t) => {
  const result = await esLint.lintFiles('./test/fixtures/ImportOrder.ts');
  t.equal(result.length, 1, 'linter should create one result');
  t.equal(result[0].errorCount, 1, 'should have one error');
  t.end();
});
test('finds errors on invalid class-member-padding', async (t) => {
  const result = await esLint.lintFiles('./test/fixtures/InvalidClassMemberPadding.ts');
  t.equal(result.length, 1, 'linter should create one result');
  t.equal(result[0].errorCount, 2, 'should have two errors');
  t.end();
});
test('finds errors on invalid import order', async (t) => {
  const result = await esLint.lintFiles('test/fixtures/InvalidImportOrder.ts');
  t.equal(result.length, 1, 'linter should create one result');
  t.equal(result[0].errorCount, 1, 'should have one error');
  t.end();
});
test('finds errors on invalid key order', async (t) => {
  const result = await esLint.lintFiles('test/fixtures/InvalidKeyOrder.ts');
  t.equal(result.length, 1, 'linter should create one result');
  t.equal(result[0].errorCount, 1, 'should have one error');
  t.end();
});
test('finds errors on invalid member ordering (field)', async (t) => {
  const result = await esLint.lintFiles('test/fixtures/InvalidMemberOrderingFields.ts');
  t.equal(result.length, 1, 'linter should create one result');
  t.equal(result[0].errorCount, 2, 'should have two errors');
  t.end();
});
test('finds errors on invalid member ordering (method)', async (t) => {
  const result = await esLint.lintFiles('test/fixtures/InvalidMemberOrderingMethods.ts');
  t.equal(result.length, 1, 'linter should create one result');
  t.equal(result[0].errorCount, 1, 'should have one error');
  t.end();
});
test('finds no errors on a valid file', async (t) => {
  const result = await esLint.lintFiles('test/fixtures/Valid.ts');
  t.equal(result.length, 1, 'linter should create one result');
  t.equal(result[0].errorCount, 0, 'should have no errors');
  t.end();
});
test('finds no errors on valid node import', async (t) => {
  const result = await esLint.lintFiles('test/fixtures/ValidNodeImport.ts');
  t.equal(result.length, 1, 'linter should create one result');
  t.equal(result[0].errorCount, 0, 'should have no errors');
  t.end();
});
test('finds no errors on valid to-array-syntax', async (t) => {
  const result = await esLint.lintFiles('test/fixtures/ValidToArray.ts');
  t.equal(result.length, 1, 'linter should create one result');
  t.equal(result[0].errorCount, 0, 'should have no errors');
  t.end();
});
test('finds no errors on valid filenames', async (t) => {
  const result = await esLint.lintFiles('test/fixtures/filenames/**');
  t.equal(result.length, 3, 'linter should create three results');
  for (const r of result) {
    t.equal(r.errorCount, 0, 'should have no errors');
  }
  t.end();
});
