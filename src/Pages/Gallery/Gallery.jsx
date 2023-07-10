import React , {useState}from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar1 from '../../components/Navbar/Navbar1'
import './Gallery.css'
import {data} from '../../common/Gallery'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import BackButton from '../../components/BottomButtons/BackButton'
import UpButton from '../../components/BottomButtons/UpButton'

const Gallery = () => {

    const [index,setIndex] = useState(0);


  return (
    <div>
        <Navbar1/>
        <div className='gallery-container'>

            <h2 style={{textAlign:'center',fontWeight:'520'}}>Gallery</h2>
            <div className='row'>
              {
                data.map((project,index)=>{
                  return (
                    <div className='col-md-3 col-sm-6 col-xs-12 my-4 gallery-display'>
                      <GalleryCard img={project[0].img} images={project} title={project[0].title} showTitle={true}/>
                    </div>
                  )
                })
              }
            </div>
        </div>
        <UpButton/>
        <BackButton/>
        <Footer/>
    </div>
  )
}

export default Gallery