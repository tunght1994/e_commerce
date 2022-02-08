import React from 'react';
import PropTypes from 'prop-types'

const Banner = ({ data }) => {
    console.log(data);
    return (
        <div className='banner'>
            {
                data.map((item, i) => (
                    <BannerItem key={i} item={item} />
                ))
            }
        </div>
    );
};

Banner.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}


const BannerItem = props => {
    return (
        <div className="banner-item">
            <div className="banner-item-left">
                <h2>{props.item.title}</h2>
                <p>{props.item.description}</p>
            </div>
            <div className="banner-item-right">
                <img src={props.item.img} alt="" />
            </div>
        </div>
    )
}
export default Banner;
