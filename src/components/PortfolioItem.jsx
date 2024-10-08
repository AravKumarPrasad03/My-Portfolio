import React, { useState } from 'react';
import Close from '../assets/close.svg';

export const PortfolioItem = ({ img, title, details }) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);

        // Target the current portfolio item container for the blur effect
        const currentItem = document.querySelector('.portfolio__item-active');

        if (!modal && currentItem) {
            currentItem.classList.remove('portfolio__item-active');
        } else {
            document.querySelector('.portfolio__item-active')?.classList.remove('portfolio__item-active');
            currentItem?.classList.add('portfolio__item-active');
        }
    };

    return (
        <div className={`portfolio__item ${modal ? 'portfolio__item-active' : ''}`}>
            <img src={img} alt="" className="portfolio__img" />

            <div className="portfolio__hover" onClick={toggleModal}>
                <h3 className="portfolio__title">{title}</h3>
            </div>

            {modal && (
                <div className="portfolio__modal">
                    <div className="portfolio__modal-content">
                        <img
                            src={Close}
                            alt=""
                            className="modal__close"
                            onClick={toggleModal}
                        />
                        <h3 className="modal__title">{title}</h3>

                        <ul className="modal__list grid">
                            {details.map(({ icon, title, desc }, index) => (
                                <li className="modal__item" key={index}>
                                    <snap className="item__icon">{icon}</snap>

                                    <div className="item__title">
                                        <span className="item__title">{title}</span>
                                        <span className="item__details">{desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <img src={img} alt="" className="modal__img" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioItem;
