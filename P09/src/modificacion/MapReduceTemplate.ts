/**
 * Template for map and reduce algorithms
 */
 export abstract class MapReduceTemplate {
  /**
   * Constructor
   * @param arr Array de entrada
   */
  constructor(protected arr: number[]) {}

  /**
   * Runs the algorithm.
   * @returns Returns algorithms result.
   */
  public run(): number {
    // Hook
    this.beforeMap();

    // Run Map algorithm
    this.arr = this.map(this.arr, (index: number) => {
      return index + 1;
    });
    // Hook
    this.afterMap();

    // Hook
    this.beforeReduce();

    // Run reduce algorithm
    const result = this.reduce();

    // Hook
    this.afterReduce();
    return result;
  }

  /**
   * Map function
   * @param {number[]} array
   * @param {Function} callback
   * @returns {number[]}
   */
  protected map(array: number[], callback: Function): number[] {
    const newArray: number[] = []
    for (let i = 0; i < array.length; i++) {
      newArray.push(callback(array[i]));
    }
    return newArray;
  }


  /**
   * Algorithm reduce
   */
  protected abstract reduce(): number;
  /**
   * Hook
   */
  protected beforeReduce() {
    // This is intentionaly
  }
  /**
   * Hook
   */
  protected afterReduce() {
    // This is intentionaly
  }

  /**
   * Hook
   * @returns Returns starting message.
   */
   public beforeMap(): string {
    return 'Starting Map ...';
  }
  /**
   * Hook
   * @returns Returns finishing message.
   */
  public afterMap(): string {
    return `Map finished.`;
  }
}
