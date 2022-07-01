import { MapReduceTemplate } from './MapReduceTemplate';

/**
 * Class to an array reduce with divition.
 */
export class SubMapReduce extends MapReduceTemplate {
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
    let result: number = this.arr[0] * 2;
    this.arr.forEach((element) => {
      result -= element;
    });
    return result;
  }
  /**
   * Hook
   * @returns Returns starting message.
   */
  public beforeReduce(): string {
    return 'Starting SubMapReduce ...';
  }
  /**
   * Hook
   * @returns Returns finishing message.
   */
  public afterReduce(): string {
    return `SubMapReduce finished. Result: ${this.reduce()}`;
  }
}
