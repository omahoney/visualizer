import { useState, useRef, ReactElement, ChangeEvent } from 'react';
import styles from '../styles/Slider.module.css'

type SliderObjType = {
  id: number,
  topLabel: string,
  bottomLabel: string,
  step: string,
  value: string,
  min: string,
  max: string,
  weight: number
}

type SliderProps = {
  slider: SliderObjType,
  //updateScore: (e: ChangeEvent<HTMLInputElement>) => void
}

const Slider = (props: SliderProps): ReactElement => {

  const { slider } = props
  const { id, topLabel, bottomLabel, step, value, min, max } = slider

  const valueIndicatorRef = useRef(null)

  const [rangeValue, setRangeValue] = useState('0')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRangeValue(e.target.value)

    valueIndicatorRef.current.style.fontWeight = '900'

    if (parseInt(e.target.value) < 25) {
      valueIndicatorRef.current.style.height = '25px'
    } else {
      valueIndicatorRef.current.style.height = parseInt(e.target.value) + '%'
    }

    if (parseInt(e.target.value) < 25) {
      valueIndicatorRef.current.style.color = 'rgb(239 68 68)'
    } else if (parseInt(e.target.value) < 75) {
      valueIndicatorRef.current.style.color = 'orange'
    } else {
      valueIndicatorRef.current.style.color = 'green'
    }
    //updateScore(e)
  }
  
  return (
    <div className="range-slider flex flex-col items-center my-2">
      <div className='w-100 h-8 flex flex-col justify-center items-center text-center font-extra-bold text-md'>
        {topLabel}
      </div>
      <div className='h-100 flex'>
        <input 
          id={`slider-${id}`} 
          className={styles.vertSlider} 
          // ref={inputRef} 
          type="range" 
          step={step} 
          value={rangeValue} 
          min={min} 
          max={max} 
          onChange={handleOnChange} 
        />
        <div className='mb-2 flex flex-col h-100 justify-end'>
          <div ref={valueIndicatorRef} className='-ml-12 text-red-500 font-extrabold'>
            {rangeValue}
          </div>
        </div>
      </div>
      <span className='mt-1'>{bottomLabel}</span>
    </div> 
  )
}

export default Slider;