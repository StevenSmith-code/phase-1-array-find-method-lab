// code your solution here
const superbowlWin = (arr) =>{
    const win = arr.find(item => item.result ==="W")
    return win ? win.year : undefined
}