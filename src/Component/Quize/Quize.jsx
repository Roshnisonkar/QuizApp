zimport React, { useState } from 'react'
import { Data } from '../Data/Data'
import './Quize.css'

const Quize = () => {
const [data , setdata ]= useState(Data)
const [index , setIndex] = useState(0);
const [ score , setScore ] = useState(0);

console.log(data);

const next = () =>{

    if(index < data.length-1)
    {
        setIndex(index+1);
    }
    else
    {
        //   document.querySelector('.score').innerHTML= `<p>Your Score is ${score}/5</p>`
        document.querySelector(".score").innerHTML=`<p>Your Score : ${score}/4</p>`
                   document.querySelector(".quiz").innerHTML='';
          
              let nextBtn = document.querySelector("#next");
                 nextBtn.innerHTML="Play Again";

                 nextBtn.classList.add("reset");
                 const reset = document.querySelector('.reset')
                 reset.addEventListener("click" , ()=>{
                    window.location.reload();
                 })
    }

const checked = document.querySelectorAll('.CheckedVal');
     checked.forEach((curVal)=>{
        curVal.checked=false
     });
}

const handleinput = (event) =>{
    let chooseValue = event.target.value;
    console.log(chooseValue);
    if(chooseValue === data[index].Ans)
    {
        setScore(score+1);
    }
}
console.log(score);

  return (
   <>
   <div className="container">
    <div className="quiz">
 <div> 
    <h1>{data[index].q}</h1>
 </div>
 <div className='option'>
    <input type="radio" name='select'  value={data[index].a} onChange={handleinput}  className='CheckedVal'/>
    <p>{data[index].a}</p>
 </div>
 <div className='option'>
    <input type="radio" name='select' value={data[index].b} onChange={handleinput}   className='CheckedVal'/>
    <p>{data[index].b}</p>
 </div>
 <div className='option'>
    <input type="radio"  name='select' value={data[index].c} onChange={handleinput}  className='CheckedVal'/>
    <p>{data[index].c}</p>
 </div>
 <div className='option'>
    <input type="radio"  name='select' value={data[index].d} onChange={handleinput}  className='CheckedVal'/>
    <p>{data[index].d}</p>
 </div>
    </div>
    <div className="score">

          </div>
<div className="btns">
    <button id='next' onClick={next}>Next</button>
</div>
   </div>
   </>
  )
}

export default Quize