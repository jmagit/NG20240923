import { FormControl } from '@angular/forms';
import { isNotBlankValidator } from './mis-validadores.directive'

fdescribe('Mis validadores', () => {
  describe('isNotBlankValidator', () => {
    describe('OK', () => {
      it('Una cadena', () => {
        const valor = new FormControl('valor')

        const result = isNotBlankValidator(valor)

        expect(result).toBeNull()
      });

      it('Con un 0', () => {
         expect(isNotBlankValidator(new FormControl(0))).toBeNull()
      });

    });
    describe('KO', () => {
      it('Solo blancos', () => {
        const valor = new FormControl('    ')

        let result = isNotBlankValidator(valor)

        expect(result).withContext('Solo blancos').not.toBeNull()
        expect(result?.['isNotBlank']).toBeDefined()
        expect(result?.['isNotBlank']).toBe('No puede estar vacío')
      });
      it('cadena vacía', () => {
        const valor = new FormControl('')

        const result = isNotBlankValidator(valor)

        expect(result).not.toBeNull()
        expect(result?.['isNotBlank']).toBeDefined()
        expect(result?.['isNotBlank']).toBe('No puede estar vacío')
      });

      ['', '    ', null, undefined].forEach(item => {
        it(`con valor "${item}"`, () => {
          const valor = new FormControl(item)

          const result = isNotBlankValidator(valor)

          expect(result).not.toBeNull()
          expect(result?.['isNotBlank']).toBeDefined()
          expect(result?.['isNotBlank']).toBe('No puede estar vacío')
          });
      });
    });
  });
});
