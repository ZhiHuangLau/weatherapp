const button= document.getElementById("submitbtn")

button.addEventListener("click", (event) =>{
  const input= document.getElementById("city");
  const cty=input.value;
  weather(cty);
});

async function weather(params) {
  console.log(params)
  const link= 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'.concat(params,'?key=67HRJB3GTDARMSXYCWLBFVK2G')
  try{const output= await fetch(link, {mode:"cors"});
  const data= await output.json();
  console.log(data);
  }catch (error){
    console.log(error);
  }
};