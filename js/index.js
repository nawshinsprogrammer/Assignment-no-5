document.getElementById('donate-amount')
.addEventListener('click',function(){
    const inputAmount =parseFloat(document.getElementById('input-amount').value)
    const bdtAmount =parseFloat(document.getElementById('bdt-amount').innerText)
      document.getElementById('bdt-amount').innerText=inputAmount
  
    if(inputAmount>0){
      const navAmount =parseFloat(document.getElementById('nav-amount').innerText)
      newBalance=navAmount-inputAmount
     
     document.getElementById('nav-amount').innerText=newBalance
     alert('successfully!Done')
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
     alert('successfully!Done')
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
     alert('successfully!Done')
    }
    
    else{
      alert('your account does not have enough balance')
    }

    const historyItem =document.createElement("div");
      historyItem.className = "bg-white p-3 rounded-md border";
      historyItem.innerHtml=`
      <p>inputAmount:$${inputAmount}</p>
      <p class="text-xs text-gray-500">${newDate().toLocalDateString()}</p>
      `
    const historyContainer =document.getElementById('history-section');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
})

  // history tab
  const historyTab =document.getElementById('history-tab')
  const donationTab =document.getElementById('donation-tab')
 
  historyTab.addEventListener('click',function(){
    historyTab.classList.add('text-2xl','font-bold','bg-lime-400')
    donationTab.classList.remove('text-2xl','font-bold','bg-lime-400')
    document.getElementById('main-id').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')

    
  })

  document.getElementById('donation-tab').addEventListener('click',function(){
   
    donationTab.classList.add('main-id');
  })
 
  document.getElementById('blog-id').addEventListener('click',function(){
    window.location.href ='./blog.html'

  })

  