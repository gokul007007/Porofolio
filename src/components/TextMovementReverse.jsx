// import { useState, useEffect } from 'react';

// function HorizontallyScrollingTextReverse() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     function handleScroll() {
//       setScrollPosition(window.scrollY);
//     }

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);


//   return (
//     <div style={{ overflow: "hidden", fontWeight: '800' }} className='d-flex'>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%' }} className='m-4'>
//         Css
//         </div>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%' }} className='m-4'>
//         HTML
//         </div>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
//         Java
//         </div>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
//         Javascript
//         </div>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
//         React
//         </div>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
//         Github
//         </div>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
//         SCSS
//         </div>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
//         Bootstrap
//         </div>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
//         Canva
//         </div>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
//         Figma
//         </div>
//         <div style={{ transform: `translateX(${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
//         FireBase
//         </div>
//     </div>
//   );
// }

// export default HorizontallyScrollingTextReverse;




import React, { useState, useEffect } from 'react';


const HorizontallyScrollingTextReverse = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const words = ['Css', 'HTML', 'Java', 'Javascript', 'React', 'Github', 'Scss', 'Css', 'HTML', 'Java', 'Javascript', 'React', 'Github', 'Scss', 'Github', 'Bootstrap', 'Canva', 'Figma', 'FireBase', 'Css', 'HTML', 'Java', 'Javascript', 'React', 'Github', 'Scss', 'Bootstrap', 'Canva', 'Figma', 'FireBase', 'Css', 'HTML', 'Java', 'Javascript', 'React', 'Github', 'SCSS', 'Bootstrap', 'Canva', 'Figma', 'FireBase'];

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ display: 'flex', overflow: 'scroll', whiteSpace: 'nowrap', color: '#fff', paddingBottom: '113px', marginTop: '25px' }}>
      {words.map((word, index) => (
        <div key={index} style={{ transform: `translateX(-${scrollPosition}px)`, display: 'inline-block', margin: '0 10px', fontWeight: '800', color: '#fff', fontSize: '30px' }}>
          {word}
        </div>
      ))}
    </div>
  );
};

export default HorizontallyScrollingTextReverse;


