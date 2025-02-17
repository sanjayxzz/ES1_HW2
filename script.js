
//1//

function calculateSalary(hoursWorked, hourlyRate){
  const  salary = hoursWorked * hourlyRate;
    return salary
  }
  const totalSalary = calculateSalary(40,15)
  console.log(totalSalary)
  
  //2//
  
  function calculateBonus (workedHours,marks,salary){
  let updatedSalary = salary
    if(workedHours > 25 & marks > 85 ){
      updatedSalary = salary + (salary * 0.1)
    }else if(workedHours > 15 & marks > 75){
      updatedSalary = salary + ( salary * 0.05)
    }
    return updatedSalary;
  }
  console.log(calculateBonus(20,80,5000))
  
    //3//
  
  function calculateFinalAmount(price1,quantity1,price2,quantity2){
    const tottalPrice1 = price1 * quantity1
  
  const totalPrice2 = price2 * quantity2
    const finalAmount = tottalPrice1 + totalPrice2
  
    return finalAmount
  }
  
  console.log(calculateFinalAmount(200,10,500,5))
  
  
  
  //4//
  
  function calculateAllowence(age,isStudent,baseAllowence){
    updatedAllowence = baseAllowence
    if(age < 18 && isStudent ){
      updatedAllowence = baseAllowence + 100
  } else if(age >= 18 && age <= 25 && isStudent){
    updatedAllowence = baseAllowence + 50
  }
  return updatedAllowence;
  }
  console.log(calculateAllowence(16,true, 500));
  
  //5//
  
  function calculateShippingCost (totalWeight,country,baseCost){
    let updateCost = baseCost;
    if(totalWeight <= 1 && country === "local"){
  updateCost = baseCost + 10
  } else if (totalWeight > 1 && country === "international"){
    updateCost = baseCost + 20
  }
    return updateCost;
  }
  console.log(calculateShippingCost(0.5,"local",50))
