import React from 'react';
import {useState} from 'react';

const Calculation=()=>{
  
   let s1;
   let s2;
    const [num1, setNum1] = useState('');
    const[num2,setNum2]=useState('')
    const [result, setResult] = useState('');
    

  const getValue1= event => {
    setNum1(event.target.value);
    


    

    console.log('value is:', event.target.value);
  }
  const getValue2= event => {
    setNum2(event.target.value);
    s2=event.target.value;

    console.log('value is:', event.target.value);
  }

  //displaying two numbers
  
      function check(){
        if(num1==='' || num2===''){
            return false
        }
        else{
            return true;
        }
      }

        function add(){
            

            const sum = parseFloat(num1) + parseFloat(num2);
            setResult(sum);
            
            // return result;
        }
        function subtract(){
            const sub = parseFloat(num1) - parseFloat(num2);
            setResult(sub);
        }
        function mul(){
            const multiply = parseFloat(num1) * parseFloat(num2);
            setResult(multiply);
        }
        function division(){
            const divs = parseFloat(num1) / parseFloat(num2);
            setResult(divs);
        }
    return(
        <div className='container'>
             <div className='counter'>
                <div>
                    <h2>React Calculator</h2>
                </div>
            <div>
            <input type="text" placeholder='Num1' id='num1' onChange={getValue1} value={num1}></input>

            </div>
            <div>
            <input type="text" placeholder='Num2' id='num2' onChange={getValue2} value={num2}></input>

            </div>
            <div>
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={mul}>*</button>
                <button onClick={division}>/</button>
            </div>

            <div className='message'>
                {
                check()?<p> Result- {result}</p>:<p>Errorinput Fields can not empty</p>

                }

            

            </div>


        </div>

        </div>
       
    )

}

export default Calculation;