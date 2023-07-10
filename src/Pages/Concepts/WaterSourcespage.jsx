import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar1 from '../../components/Navbar/Navbar1'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function WaterSourcespage() {
    return (
        <>
            <Navbar1/>
          <div id = "WaterSources" className='ConceptCard' >
        <h2 style={{ textAlign: "center" }} >WATER SOURCES</h2>
         <p> Generally water intrusion into any structure due to</p>
         <p> <ol>
          <li>Rain water for above ground waterproofing.</li>
          <li>Below ground waterproofing water sources may be ground water and high hydrostatic pressure of water present in soil.</li>
        </ol>
        </p>
        <p>
        The availability of water into the structure is due to numerous sources that includes:
        </p>
        <p>
          <ol>
          <li>Natural gravity</li>
          <li>Surface tension</li>
          <li>Wind on air currants</li>
          <li>Capillary action</li>
          <li>Hydrostatic Pressure</li>
          <li>Encounter to first problem eloping of roof shall &frac14; in/ft instead of that roof 80% of waterproofing problem may be reduce by dreaming away from structure.</li>
          <li>Surface tension is the momentum that occurs when water is being moved by gravity approaches in change building plane. Example : Brick face to lintel. This problem occurs at mortar joints. To prevent this situation drip edges, flashing stop water intrusion.</li>
          <li>If there is wind present in rain storm water is docilely affected by wind current. Flashing will prevent wind and water to penetrate inside the structure.</li>
          <li>Capillary action occurs in a situation where water is absorbed into envelops substrate by wicking action. This situation is most likely to occurs with masonry on concrete portion of envelop on below ground levels. May be during construction it may have high voids, specs within composition.</li>
          </ol>
        </p>
        <p>
          High hydrostatic pressure most commonly affects the below ground portion of the structure, it may depends on subject to waterproofing. This pressure can be significant, particularly below ground areas where the water table is near the surface or rises near the surfaces during the heavy rain falls. Water under this significant pressure will sealed out any jointures&rsquo; in the envelope especially the areas of weakness e.g. terminations and transition between the envelope component. That is why below grade system have to be better protected against water infiltration then those above grade. For example concrete above grade is only protection by water repellants, whereas below grade same concrete must be protected with a waterproofing material to prevent any leakages into the structure.
        </p>
        </div>
        <Footer />
        <UpButton />
        <BackButton/>
      </>
  )
}
