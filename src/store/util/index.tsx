import { createHashHistory } from 'history';

type PayloadFunction<T> = (t: T) => { payload: T };

export function withPayloadType<T>(): PayloadFunction<T> {
  return (t: T) => ({ payload: t });
}

type PayloadMetaFunction<P, M> = (p: P, m: M) => { payload: P; meta: M };

export function withPayloadAndMetadataTypes<P, M>(): PayloadMetaFunction<P, M> {
  return (p: P, m: M) => ({ payload: p, meta: m });
}

export const history = createHashHistory();
