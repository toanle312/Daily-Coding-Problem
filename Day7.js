/*
  This problem was asked by Facebook.

  Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

  For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

  You can assume that the messages are decodable. For example, '001' is not allowed.
*/

const mem = {}
var numDecodings = function (str) {
  if (mem[str] !== undefined) return mem[str];
  if (str[0] === "0") return 0;

  const n = str.length;
  if (n === 1 || n === 0) return 1;

  let count = 0;
  const lastDigit = str[n - 1];
  const lastTwoDigit = str[n - 2] + lastDigit;

  // Đếm số lượng số có thể có khi decode từng ký tự cuối
  // nếu thỏa > 0 thì cập nhật lại số lượng số có thể có trước đó khi chưa decode ký tự cuối này
  if (+lastDigit > 0) count = numDecodings(str.slice(0, n - 1));

  // Đếm số lượng số có thể có khi decode từng cặp ký tự cuối
  // nếu thỏa >= 10 và <= 26 thì cộng thêm số lượng số có thể có trước đó khi chưa decode cặp ký tự cuối này
  if (+lastTwoDigit <= 26 && +lastTwoDigit >= 10) count = count + numDecodings(str.slice(0, n - 2));

  return mem[str] = count;

};

console.log(numDecodings("1011"))