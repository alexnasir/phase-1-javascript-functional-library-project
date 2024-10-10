function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], i, collection);
    }
  
    return accumulator;
  }
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
    return undefined;
  }
  function myFilter(collection, predicate) {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
    return result;
  }
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  function myKeys(obj) {
    let keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  function myValues(obj) {
  let values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}
