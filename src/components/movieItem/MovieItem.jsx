import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./MovieItem.css";
export default function MovieItem({
    title,
    cover,
    category,
    rate,
    cast,
    release,
}) {
    return (
        <div className="movie-item" style={{textAlign: 'center'}}>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={cover}
                    style={{ height: "450px" }}
                />
                <Card.Body style={{ height: "360px" }}>
                    <Card.Title style={{color:'red'}}>{title}</Card.Title>
                    <Card.Subtitle style={{color:'gray'}}>Category</Card.Subtitle>
                    <Card.Text > {category} </Card.Text>
                    <Card.Subtitle style={{color:'gray'}}>Rate</Card.Subtitle>
                    <Card.Text> {rate} </Card.Text>
                    <Card.Subtitle style={{color:'gray'}}>Cast</Card.Subtitle>
                    <Card.Text> {cast} </Card.Text>
                    <Card.Subtitle style={{color:'gray'}}>Release date</Card.Subtitle>
                    <Card.Text> {release} </Card.Text>
                    <Button variant="primary">See details</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
// MovieItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     cover: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     cast: PropTypes.string.isRequired,
//     rate: PropTypes.number.isRequired,
//     release: PropTypes.string.isRequired,
// };
MovieItem.defaultProps = {
    title: "Movie Title",
    cover: "https://i.pinimg.com/originals/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg",
    category: "N/A",
    cast: "N/A",
    rate: "N/A",
    release: "N/A",
};
