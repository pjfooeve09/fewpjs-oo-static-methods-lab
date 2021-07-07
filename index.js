class Formatter {
  static capitalize(str) {
    var r = /\b\w/gi

    return str.replace(r,(match) => match.toUpperCase())
  }
  static sanitize(str) {
    var r = /[$@!#^*({]/gi

    return str.replace(r,'')
  }
  static titleize(str) {
    let array = str.split(' ')
    let badArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArray = []
    // for (let i = 0; i < array.length; i++) {
      // if (array.includes(badArray.forEach(word => word))) {
      //   newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
      // } else {
      //   newArray.push(array[i])
      // }
    // }
    let upcasearray = array.map(word => {
      if ( word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from') {
        newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
        else {
          newArray.push(word)
        }
    })
    return newArray.join(' ').charAt(0).toUpperCase() + newArray.join(' ').slice(1)
  }
}