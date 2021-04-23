import React, { useEffect, useState } from 'react'
import * as _style from 'scss/speciality/_ourSpec.module.scss'
import { specialityList } from 'components/_data';

const OurSpeciality = () => {
  const [specialities] = useState(specialityList);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    console.log("specialities", specialities)
    if (typeof window !== `undefined`) {
      if (window.innerWidth > 768)
        setIsLarge(true)
    }
  }, [])

  const colors = ['bg_prwkle', 'bg_lemonade', 'bg_salmon', 'bg_hotpink']


  return (
    <div className={_style.ourSpec__container}>

      {specialities.map((item, idx) => 
        <div className={_style.ourSpec__container} key={idx}>
          <div
            className={`${_style.ourSpec__odd}`}
            style={{order: (idx%2==0) ? 0 : 1}}
          >
            <div className={`${_style.ourSpec__ImgSection}`}>
              <img className={_style.ourSpec__Img} src={item.imgUrl} />
            </div>
          </div>
          <div
            className={`${_style.ourSpec__even} ${colors[idx]} text_white`}
            style={{order: (idx%2==0) ? 1 : 0}}
          >
            <h1 className="mb-2">{ item.title }</h1>
            <p>{ item.desc }</p>
          </div>
          
        </div>
      )}

      
    </div>
  )
}

export default OurSpeciality
