module.exports = function multiply(first, second) {
    let big = BigInt(first) * BigInt(second);
    let bigStr = big.toString();
    return bigStr
}
