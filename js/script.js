const button = document.querySelector("#btn")
const result = document.querySelector("#result")
const close = document.querySelector("#X")
const modal = document.querySelector("#modal-c")


button.addEventListener("click", function(event){
    event.preventDefault()
    modal.classList.add("modal-wrap")
    
    const weight = +document.querySelector("#weight").value 
    const height = +document.querySelector("#height").value
    let bmi = weight/(height*height)

    if(bmi<18.5){
        result.innerHTML = `BMI is : ${bmi}Kg/m&sup2 underweight`
        result.style.color="red"
    }else if((bmi >= 18.5) && (bmi <= 24.9)){
        result.innerHTML = `BMI is :  ${bmi}Kg/m&sup2 normalweight`
        result.style.color="green"
        
    } else if((bmi >= 25.0) && (bmi <= 29.9)){
        result.innerHTML = `BMI is :  ${bmi}Kg/m&sup2 overweight`
        result.style.color="crimson"
        
    }else if(bmi >=  30.0 ){
        result.innerHTML = `BMI is :  ${bmi}Kg/m&sup2 obessed`
        result.style.color="red"        

    }else{
        console.log("Invalid input")
        result.innerHTML = "Invalid input"
    }
})
close.addEventListener("click", ()=>{
    modal.classList.remove("modal-wrap")
})
 