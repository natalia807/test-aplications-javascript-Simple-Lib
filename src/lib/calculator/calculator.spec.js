import { sum } from './calculator';

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
  // expect(sum(2, 2)).not.toBe(4); // Verificar se os valores batem, ele retorna o valor e o esperado
});

it('should sum 2 and 2 even if one of them is a string and the result must be 4', () => {
  expect(sum('2', '2')).toBe(4);
});
it('should throw an error if wat is provided to the method cannot be summed', () => {
  expect(() => {
    sum('', 2);
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});

/*
    usa o .not antes do .toBe ou qualquer outro verificador, para forçar a negação e verificar o erro
*/
