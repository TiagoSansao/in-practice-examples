import { ops } from './ops';

export class UOpsFactory {
  static create(uOpsEscolhido: string) {
    switch (uOpsEscolhido) {
      case 'U1Ops':
        return new ops();
    }
    throw Error();
  }
}
