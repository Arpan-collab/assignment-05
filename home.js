const donateNowBtn = document.getElementById('donateNowBtn').addEventListener('click',function (){
const amountHere = document.getElementById('amountHere').value;
const amount = parseFloat(amountHere);
if (typeof amount === 'number'){
const totalDonation = document.getElementById('totalDonation').innerText;
const totalDonationAmount = parseFloat(totalDonation);
const totalsum = totalDonationAmount + amount
document.getElementById('totalDonation').innerText = totalsum.toFixed(2);

} else{
    alert('Please Try Again Letter ')
    
}
})
