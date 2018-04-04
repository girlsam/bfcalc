export function calculateBodyFat(obj) {
  let sumOfSkinfolds = obj.umbilicus + obj.suprailiac + obj.thigh + obj.tricep,
      squareOfSum = sumOfSkinfolds * sumOfSkinfolds,
      total
  if (obj.gender === 'female') {
    total = (0.29669 * sumOfSkinfolds)
    - (0.00043 * squareOfSum)
    + (0.02963 * obj.age)
    + 1.4072;
  } else {
    total = (0.29288 * sumOfSkinfolds)
    - (0.0005 * squareOfSum)
    + (0.15845 * obj.age)
    - 5.76377;
  }
  return `${total.toFixed(2)}%`
}
