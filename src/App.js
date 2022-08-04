// tehtävä 1.10

import { useState } from 'react'

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
 
  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={()=> setGood (good +1)} text='good' />
      <Button handleClick={()=> setNeutral (neutral +1)} text='neutral' />
      <Button handleClick={()=> setBad (bad +1)} text='bad' />

      <Statistics good= {good} neutral= {neutral} bad= {bad}/>
      
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const Statistics = (props) => {
  

  if (props.good + props.neutral + props.bad === 0) {
    return(
      <div>
        <h1>Statistics</h1>
        <h3> No feedback given </h3>
      </div>
    )
  }
 
  return(

    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value ={props.good} />

      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
  
      <p>all {props.good + props.neutral + props.bad}</p>
      <p>average {((props.good*1) + (props.neutral*0) - props.bad) / (props.good + props.neutral + props.bad)}</p>
      <p>positive {props.good / (props.good + props.neutral + props.bad) * 100 } %</p>
    
    </div>
  )

}

const StatisticLine = (props) => {
  console.log(props)
  
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
  
      <p>all {props.good + props.neutral + props.bad}</p>
      <p>average {((props.good*1) + (props.neutral*0) - props.bad) / (props.good + props.neutral + props.bad)}</p>
      <p>positive {props.good / (props.good + props.neutral + props.bad) * 100 } %</p>
   
    </div>

  )
 
}



export default App