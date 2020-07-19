import React, { Component, Fragment } from 'react';

class ImageUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fils: '',
            previewUrl: ''
        };
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading-', this.state.file);
    };

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    };

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} className="preview"/>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent text-center">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input className="fileInput btn btn-secondary my-2"
                        type="file"
                        onChange={(e) => this.handleImageChange(e)} />
                </form>
                <div className="imgPreview border border-dark mx-auto my-2">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}

export default ImageUpload;