import React,{useState} from 'react'
import './BottomButtons.css'

const UpButton = () => {

  const [showButton,setShowButton] = useState(false)
  window.addEventListener("scroll", () => {

    let dist = window.pageYOffset;

    if(dist>=100){
      setShowButton(true)
    }
    else
      setShowButton(false);
    
  });

  return (
    <div className='bottom-buttons'>
        <div className='bottom-buttons-container'>

            <a className={ (showButton)?`round-btn up show-btn`:'round-btn up'} href='#navbar'>
                <i className="fa-solid fa-arrow-up"></i>
            </a>

        </div>
    </div>
  )
}

export default UpButton