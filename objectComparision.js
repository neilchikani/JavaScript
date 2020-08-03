const a = {
  name: 'Neil',
  age: 29,
  address: {
    name: 'abc',
  },
};

const b = {
  name: 'Neil',
  age: 29,
  address: {
    name: 'abc',
  },
};

let count = 0;

function objectCompare(a, b) {
  const checkObjectA = typeof a !== 'object' || a instanceof Array;
  const checkObjectB = typeof b !== 'object' || b instanceof Array;
  const checkLengthA = Object.values(a).length;
  const checkLengthB = Object.values(b).length;

  if (checkObjectA || checkObjectB) {
    return 'input must be an object.';
  }

  if (!checkLengthA || !checkLengthB) {
    return 'input object must not be an empty.';
  }

  for (var prop in a) {
    let checkOwnProperty = a.hasOwnProperty(prop);
    if (checkOwnProperty) {
      if (typeof a[prop] === 'object') {
        objectCompare(a[prop], b[prop]);
      } else {
        if (b[prop] && b.hasOwnProperty(prop) && a[prop] === b[prop]) {
          count = count + 1;
        }
      }
    }
  }

  if (count === Object.values(a).length) {
    return 'Objects are same';
  } else {
    return 'Objects are not equal';
  }
}

objectCompare(a, b);
