export const keysOf = <T extends Record<string, unknown>>(record: T) => Object.keys(record) as (keyof T)[];

export const entriesOf = <T extends Record<string, unknown>>(record: T) => Object.entries(record) as Array<[keyof T, T[keyof T]]>;

export const valuesOf = <T extends Record<string, unknown>>(record: T) => Object.values(record) as Array<T[keyof T]>;

export const isNullish = (value: unknown): value is null | undefined => value === null || value === undefined;

export const filterNullish = <T>(array: readonly T[]) => array.filter((value): value is NonNullable<T> => !isNullish(value));
