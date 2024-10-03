import { ExecPipe } from './numericos.pipe';
import { ToComaDecimalPipe } from './numericos.pipe';

describe('ExecPipe', () => {
  let pipe = new ExecPipe();
  beforeAll(() => {
    pipe = new ExecPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('OK: Sin parámetros', () => {
    expect(pipe.transform(() => 1)).toBe(1)
  });
  it('OK: Con parámetros', () => {
    expect(pipe.transform((a: number, b: number) => a + b, 1, 2)).toBe(3)
  });
  xit('KO: sin función', () => {
    //pipe.transform(undefined)
    expect(eval('pipe.transform(undefined)')).toBeUndefined()
  });
});

describe('ToComaDecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new ToComaDecimalPipe();
    expect(pipe).toBeTruthy();
  });
  it('Con punto decimal', () => {
    const pipe = new ToComaDecimalPipe();
    expect(pipe.transform('12.3')).toBe('12,3');
  });
  it('Sin punto decimal', () => {
    const pipe = new ToComaDecimalPipe();
    expect(pipe.transform('123')).toBe('123');
  });
  it('Con coma decimal', () => {
    const pipe = new ToComaDecimalPipe();
    expect(pipe.transform('12,3')).toBe('12,3');
  });
  it('No numérico', () => {
    const pipe = new ToComaDecimalPipe();
    expect(pipe.transform('Abc')).toBe('Abc');
  });
  it('Numérico', () => {
    const pipe = new ToComaDecimalPipe();
    expect(pipe.transform(1.5)).toBe('1,5');
  });
});
