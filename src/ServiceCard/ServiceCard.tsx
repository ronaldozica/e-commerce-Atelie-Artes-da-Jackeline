import './ServiceCard.css';

export default function ServiceCard() {
    return (
        <div>
            <div className="center">
                <div className="property-card">
                    <a href="/">
                        <div className="property-image">
                            <div className="property-image-title">
                                {/* Optional <h5>Card Title</h5> If you want it, turn on the CSS also. */}
                            </div>
                        </div></a>
                    <div className="property-description">
                        <h5> Card Title </h5>
                        <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                    </div>
                    <a href="/">
                        <div className="property-social-icons">
                            {/* I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions */}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}  