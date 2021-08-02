export type StateSetter<S> = React.Dispatch<React.SetStateAction<S>>;

export type PageSetter = React.Dispatch<React.SetStateAction<number>>;

export type SelectEvent = React.ChangeEvent<
  HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
>;

export type SelectOrInputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement
>;
