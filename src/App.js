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
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.good + props.neutral + props.bad} />
      <StatisticLine text="average" value ={((props.good*1) + (props.neutral*0) - props.bad) / (props.good + props.neutral + props.bad)} />
      <StatisticLine text="positive" value ={props.good / (props.good + props.neutral + props.bad) * 100 } />
    
    </div>
  )

}

const StatisticLine = (props) => {
  
  console.log(props)
  
  return (
    <div>
        {props.text}
        {props.value}
    </div>

  )
 
}



export default App