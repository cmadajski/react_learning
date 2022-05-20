import React from 'react';
import img_1 from './author_img_1.jpeg';
import img_2 from './author_img_2.png'

export class AboutMe extends React.Component {
    handleClick() {
        const author_img = document.getElementsByClassName('author_img');
        if (author_img[0].alt === 'image 1') {
            author_img[0].src = img_2;
            author_img[0].alt = 'image 2'
            console.log(img_2);
        } else {
            author_img[0].src = img_1;
            author_img[0].alt = 'image 1'
            console.log(img_1);
        }
        
    }
    render() {
        const author = {
            name: 'Christian Madajski',
            location: 'Charlotte, NC',
            age: '28',
            role: 'Full Stack Engineer',
            phone: '980-290-0679',
            email: 'cmad7317@gmail.com',
            school: 'University of North Carolina at Charlotte',
            degree: 'B.S. Computer Science'
        }
        return (
            <div className='introduction'>
                <img className='author_img' src={img_1} alt='image 1' onClick={this.handleClick} />
                <div className='text'>
                    <span className='title'><strong>ABOUT THE AUTHOR</strong></span>
                    <span><strong>Name:</strong> {author.name}</span>
                    <span><strong>Location:</strong> {author.location}</span>
                    <span><strong>Role:</strong> {author.role}</span>
                    <span><strong>Degree:</strong> {author.degree}</span>
                    <span><strong>School:</strong> {author.school}</span>
                </div>
            </div>
        );
    }
}