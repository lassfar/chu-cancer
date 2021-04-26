import React from 'react'

const Card = ({ dataList, classNames }) => {
  return (
    
    <div className={_style.blog}>
      {dataList.map((item, idx) => (
        <div className={_style.blog__card} key={idx}>
          <div className={_style.blog__cardHeader}>
            <img className={_style.blog__cardImg} src={`${item.imgUrl}`} alt={item.desc.substring(0, 20)} />
          </div>
          <div className={_style.blog__cardBody}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
