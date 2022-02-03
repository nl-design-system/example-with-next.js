import { FormFieldDefinition, FormNormalizeFunction, NormalizerId } from '../../components/input/model';

export const trimWhitespace: FormNormalizeFunction = (value: string) => value.trim();

export const normalizeWhitespace: FormNormalizeFunction = (value: string) => value.replace(/\s+/g, ' ');

export const removeWhitespace: FormNormalizeFunction = (value: string) => value.replace(/\s+/g, '');

export const normalizeUnicode: FormNormalizeFunction = (value: string) => value.normalize('NFC');

export const toUpperCase: FormNormalizeFunction = (value: string): string => String(value).toUpperCase();

const identityTransform: FormNormalizeFunction = <T>(value: T): T => value;

const normalizers: { [index: string]: FormNormalizeFunction } = {
  'trim-whitespace': trimWhitespace,
  'normalize-whitespace': normalizeWhitespace,
  'normalize-unicode': normalizeUnicode,
};

// Warning: this function ignores normalizers that cannot be found.
export const lookupNormalizers = (refs: string[] | undefined): FormNormalizeFunction[] =>
  refs ? refs.map((ref) => (normalizers.hasOwnProperty(ref) ? normalizers[ref] : identityTransform)) : [];

const pushUnique = <T>(arr: T[], value: T) => {
  if (!arr.includes(value)) {
    arr.push(value);
  }
};

export const chooseNormalizers = (field: FormFieldDefinition): NormalizerId[] => {
  let normalizers = field.normalizers ? [...field.normalizers] : [];

  if (!field.preserveWhitespace) {
    pushUnique(normalizers, 'trim-whitespace');
    pushUnique(normalizers, 'normalize-whitespace');
  }

  return normalizers;
};
