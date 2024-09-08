export interface CreateProductFormPropTypes {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: {[key: string]: string};
}
