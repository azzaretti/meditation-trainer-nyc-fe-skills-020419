const button = document.getElementById('button')
let logBook = []
let previousResults = []
let i = 0
let breaths = 0

function statType (input) {
  let stats = []
  stats.push(input)
  // let breaths = document.getElementById('breaths')
  // breaths.innerHTML = "You have taken " + breaths + " breaths! Are you relaxed yet?"
  let statBar = document.getElementById('stat-bar')
  let statAvg = stats.reduce((a,b) => a + b) / stats.length;
  statBar.innerHTML = "It takes an average of" + statAvg + " to breath!"
}

function buttonClick() {
  for (; i < 4; i++){
    let newResult = ((logBook[1] - logBook[0])/1000)
  if (i === 0){
    document.getElementById('doThis').innerHTML = "Take a nice, slow, deep breath.";
    button.innerHTML = "Click when your lungs are full"
    logBook.push(Math.floor(event.timeStamp))
    return i++  
    
  }
  else if (i === 1){
     document.getElementById('doThis').innerHTML = "Slowly, with control, breath out.";
     button.innerHTML = "Click when your lungs are empty"
     logBook.push(Math.floor(event.timeStamp))
     return i++
    
  }
  else if (i === 2) {
     document.getElementById('doThis').innerHTML = "Smile, you did it!";
     let logItem = document.createElement('li');
     document.getElementById('breathLog').appendChild(logItem);
     button.innerHTML = "Click to start your next breath"
     previousResults.push(newResult)
     logItem.innerHTML = "It took " + newResult + " seconds to take a breath!"
     breaths++
     return i++
    
  }
  if (i >= 3) {
    console.log('Game Over')
    i = -1
    statType(newResult)
    logBook.length = 0
  }

}

}


button.addEventListener ('click', buttonClick)

// button.addEventListener ('click', onClick)



// Each click runs code for that number
// Each click adds 1 
// Doesn't run after 4 clicks (max number of instructions)