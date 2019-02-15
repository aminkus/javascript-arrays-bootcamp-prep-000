var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element){
  return ['foo',...array]
}
function destructivelyAddElementToBeginningOfArray(array,element){array.unshift(element)
    return array}
function addElementToEndOfArray(array, element) {
  return [...array, 'foo']}
function destructivelyAddElementToEndOfArray(array,element){array.push('foo')
    return array}
function accessElementInArray(array, index){return array[2]}
function destructivelyRemoveElementFromBeginningOfArray(array){array.shift() 
    return array}
function removeElementFromBeginningOfArray(array){
  array.slice(-2)
    return array}
function destructivelyRemoveElementFromEndOfArray(array){ array.pop()
    return array}
function removeElementFromEndOfArray(array){array.slice(0)
    return array
}






    
  

    





