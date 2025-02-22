let weight = document.querySelector('#weight').value
let height = document.querySelector('#height').value
let btnCalculate = document.querySelector('#calculateBMI')
let result = document.querySelector('#result')

// BMI =weight (kg) / (height * height)

function calculateBMI(){
  weight = parseInt(document.querySelector('#weight').value);
  height = parseInt(document.querySelector('#height').value);
  if(weight === ''){
    alert('Please provide valid weight in KG ')
    return
  }
  if(height === ''){
    alert('Please provide valid height in cm')
    return
  
  }

  height = height / 100
  let bmi = weight / (height * height)
  return bmi 
}

btnCalculate.addEventListener('click', function(){
    let bmi = calculateBMI()
    result.innerHTML = `BMI = ${bmi}`
  })