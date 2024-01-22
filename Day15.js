/**
  This problem was asked by Facebook.

  Given a stream of elements too large to store in memory, pick a random element from the stream with 
  uniform probability.
  => Các số sẽ được lưu trong file và ta sẽ không biết trước số lượng các số
  => Do số các số lượng rất lớn nên chỉ duyệt được một lần, do đó không thể lưu lại các số trong mảng
*/
// count to count the number in the stream
let count = 0;
let result = 0;

const randomElement = (number) => {
  count++;
  // update result if count equals to 1
  if (count === 1) { result = number }
  else {
    const i = Math.floor(Math.random() * count);
    // update result if random number is matching with condition
    if (i === count - 1) result = number;
  }
  // return result if random number is not matching with condition
  return result;
}

const solution = () => {
  const stream = [1, 3, 5, 8, 9, 11, 22, 4, 55, 56, 88, 999, 9];
  const stream_eof = stream.length;
  for (let i = 0; i < stream_eof; i++) {
    randomElement(stream[i]);
    if (i === stream_eof - 1) {
      console.log(randomElement(stream[i]));
    }
  }
}

solution();
