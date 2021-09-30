const _ = {
    clamp(number, lower, upper){
     var lowerClampedValue = Math.max(number, lower);
     var clampedValue = Math.min(lowerClampedValue,  upper);
  return clampedValue;
    },
  
    inRange(number, start, end){
      if (end === undefined){
          end = start;
          start = 0;
      }
      if(start > end){
        temp = end;
        end = start;
        start = temp;
      }
  
  var isInRange = start <= number && number < end;
  return isInRange;      
      },
  
      words(str){
        const words = str.split(' ');
        return words;
      },
  
      pad(string, length){
        if (length <= string.length){
          return string;
        }
      var startPaddingLength = Math.floor((
        length - string.length) / 2);
  
      var endPaddingLength = length - 
      string.length- startPaddingLength;
  
      paddedString = ' '.repeat(startPaddingLength)+ string + ' '.repeat(endPaddingLength);
  
  return paddedString;
      },
  
      has(object, key){
        const hasValue = object[key]
        if(hasValue !=undefined){
          return true;
        }return false;
      },
      
      invert(object){
        let invertedObject = {};
        for(let key in object){
          const originalValue = object[key];
          invertedObject = {originalValue : key}
        }
        return invertedObject;
      },
  
      findKey(object, predicate){
        for (let key in object){
          var value = object[key];
          let predicateReturnValue = 
          predicate(value);
          if (predicateReturnValue){
            return key;  
            };
        };
          return undefined;
      },
  
      drop(array, n){
        if(n === undefined){
          n = 1;
        }
       let droppedArray = array.slice(n, array.length);
      return droppedArray;
      },
      dropWhile(array, predicate){
        const callBack = (element, index) => {
          return !predicate(element, index, array);
        }
  let dropNumber = array.findIndex(callBack);
  let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
  
      }, 
  
      chunk(array, size = 1){
          let arrayChunks = [];
          for (let i = 0; i < array.length; i = i + size){
        let arrayChunk = array.slice(i,  i + size);
         arrayChunks.push(arrayChunk);
          }
          return arrayChunks;
      }
  
  
    };
  
  
  
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;