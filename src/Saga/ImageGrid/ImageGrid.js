import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "../Button";

import { loadImages } from "../actions";

import "./styles.css";

function ImageGrid({ isLoading, images, error, loadImages }) {
    useEffect(() => {
        !isLoading && loadImages();
    }, []);
    return (
        <div className="content">
            <section className="grid">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width
                        )}`}
                    >
                        <img src={image.urls.small} alt={image.user.username} />
                    </div>
                ))}
            </section>
            {error && <div className="error">{JSON.stringify(error)}</div>}
            <Button
                onClick={() => !isLoading && loadImages()}
                loading={isLoading}
            >
                Load More
            </Button>
        </div>
    );
}

const mapStateToProps = ({ isLoading, images, error }) => {
    console.log("ImageGrid --> mapStateToProps", isLoading, images, error);
    return {
        isLoading,
        images,
        error,
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log("ImageGrid --> mapDispatchToProps");
    return {
        loadImages: () => dispatch(loadImages()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
