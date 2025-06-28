function IndexAdvantageItem ({image, title, description}) {
    return (
        <div className="index-advatages__item">
            <div className="advatages__item__image">
                <img src={image} alt={title} />
            </div>
            <div className="advatages__item__text">
                <span className="advatages__item__title">
                    {title}
                </span>
                <p className="advatages__item__description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default IndexAdvantageItem;