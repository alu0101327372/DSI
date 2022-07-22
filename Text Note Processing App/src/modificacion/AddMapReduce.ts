import { MapReduceTemplate } from './MapReduceTemplate';

/**
 * Class to an array reduce with addition.
 */
export class AddMapReduce extends MapReduceTemplate {
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
    let result = 0;
    this.arr.forEach((element) => {
      result += element;
    });
    return result;
  }
  /**
   * Hook
   * @returns Returns starting message.
   */
  public beforeReduce(): string {
    return 'Starting AddMapReduce ...';
  }
  /**
   * Hook
   * @returns Returns finishing message.
   */
  public afterReduce(): string {
    return `AddMapReduce finished. Result: ${this.reduce()}`;
  }
}
