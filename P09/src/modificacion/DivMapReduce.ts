import { MapReduceTemplate } from './MapReduceTemplate';

/**
 * Class to an array reduce with divition.
 */
export class DivMapReduce extends MapReduceTemplate {
  /**
   * Constructor
   * @param arr Array to reduce
   */
  constructor(protected arr: number[]) {
    super(arr);
  }
  /**
   * Algorithm reduce
   */
  public reduce(): number {
    let result: number = Math.pow(this.arr[0], 2);
    this.arr.forEach((element) => {
      result /= element;
    });
    return Math.trunc(result);
  }
  /**
   * Hook
   * @returns Returns starting message.
   */
  public beforeReduce(): string {
    return 'Starting DivMapReduce ...';
  }
  /**
   * Hook
   * @returns Returns finishing message.
   */
  public afterReduce(): string {
    return `DivMapReduce finished. Result: ${this.reduce()}`;
  }
}
