import { U1Ops } from './u1ops';
import { U2Ops } from './u2ops';

export class ops implements U1Ops, U2Ops {
  public op1() {
    console.log('op 1 top');
  }

  public op2() {
    console.log('op 2 top');
  }
}
