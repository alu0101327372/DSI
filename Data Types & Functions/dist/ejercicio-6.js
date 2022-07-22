"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipsInRange = void 0;
/**
 * Método que calcula el rango de Ips válidas entre dos IPs.
 * @param ip1 primea Ip
 * @param ip2 segunda Ip
 * @returns número de Ips válidas
 */
function ipsInRange(ip1, ip2) {
    let ip1Array = ip1.split('.');
    let ip2Array = ip2.split('.');
    let result1 = [];
    let result2 = [];
    ip1Array.forEach(element => {
        result1.push(parseInt(element).toString(2).padStart(8, '0'));
    });
    ip2Array.forEach(element => {
        result2.push(parseInt(element).toString(2).padStart(8, '0'));
    });
    let str1 = result1.join('');
    let str2 = result2.join('');
    return Math.abs(parseInt(str1, 2) - parseInt(str2, 2));
}
exports.ipsInRange = ipsInRange;
