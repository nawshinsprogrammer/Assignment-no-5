document.getElementById('donate-amount')
.addEventListener('click',function(){
    const inputAmount =parseFloat(document.getElementById('input-amount').value)
    const bdtAmount =parseFloat(document.getElementById('bdt-amount').innerText)
      document.getElementById('bdt-amount').innerText=inputAmount
  
    if(inputAmount>0){
      const navAmount =parseFloat(document.getElementById('nav-amount').innerText)
      newBalance=navAmount-inputAmount
     
     document.getElementById('nav-amount').innerText=newBalance
    }
    
    else{
      alert('your account does not have enough balance')
    }
    
})


document.getElementById('donate-amount1')
.addEventListener('click',function(){
    const inputAmount =parseFloat(document.getElementById('input-amount1').value)
    const bdtAmount =parseFloat(document.getElementById('bdt-amount1').innerText)
      document.getElementById('bdt-amount1').innerText=inputAmount
  
    if(inputAmount>0){
      const navAmount =parseFloat(document.getElementById('nav-amount').innerText)
      newBalance=navAmount-inputAmount
     
     document.getElementById('nav-amount').innerText=newBalance
    }
    
    else{
      alert('your account does not have enough balance')
    }
    
})
document.getElementById('donate-amount2')
.addEventListener('click',function(){
    const inputAmount =parseFloat(document.getElementById('input-amount2').value)
    const bdtAmount =parseFloat(document.getElementById('bdt-amount2').innerText)
      document.getElementById('bdt-amount2').innerText=inputAmount
  
    if(inputAmount>0){
      const navAmount =parseFloat(document.getElementById('nav-amount').innerText)
      newBalance=navAmount-inputAmount
     
     document.getElementById('nav-amount').innerText=newBalance
    }
    
    else{
      alert('your account does not have enough balance')
    }
    
})