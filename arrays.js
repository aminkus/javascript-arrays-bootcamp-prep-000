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
function destructivelyRemoveElementFromBeginningOfArray(array){return array.shift()}
function removeElementFromBeginningOfArray(array){ return array.slice(1)}
function destructivelyRemoveElementFromEndOfArray(array){return array.pop()}
function destructivelyRemoveElementFromEndOfArray(array){return array.slice(0)}





    
  

    





