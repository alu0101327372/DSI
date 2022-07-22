/**
 * Método que calcula el rango de Ips válidas entre dos IPs.
 * @param ip1 primea Ip
 * @param ip2 segunda Ip
 * @returns número de Ips válidas
 */
export function ipsInRange(ip1: string, ip2: string): number {
  let ip1Array: string[] = ip1.split('.');
  let ip2Array: string[] = ip2.split('.');

  let result1: string[] = [];
  let result2: string[] = [];
  ip1Array.forEach(element => {
    result1.push(parseInt(element).toString(2).padStart(8, '0'));
  });

  ip2Array.forEach(element => {
    result2.push(parseInt(element).toString(2).padStart(8, '0'));
  });

  let str1: string = result1.join('');
  let str2: string = result2.join('');

  return Math.abs(parseInt(str1, 2) - parseInt(str2, 2));
}
