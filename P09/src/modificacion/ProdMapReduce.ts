import { MapReduceTemplate } from './MapReduceTemplate';

/**
 * Class to an array reduce with product.
 */
export class ProdMapReduce extends MapReduceTemplate {
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
    let result = 1;
    this.arr.forEach((element) => {
      result *= element;
    });
    return result;
  }
  /**
   * Hook
   * @returns Returns starting message.
   */
  public beforeReduce(): string {
    return 'Starting ProdMapReduce ...';
  }
  /**
   * Hook
   * @returns Returns finishing message.
   */
  public afterReduce(): string {
    return `ProdMapReduce finished. Result: ${this.reduce()}`;
  }
}
