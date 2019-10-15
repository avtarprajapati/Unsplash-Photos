import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 }

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // get heigth of image when it loaded
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight);
        const heigth = this.imageRef.current.clientHeight;
        const spans = Math.ceil(heigth / 10);
        this.setState({ spans }); 
    }

    render() {
        const {description, urls} = this.props.image; 
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;