import { useState, useEffect } from 'react';

function HorizontallyScrollingText() {
  const [scrollPosition, setScrollPosition] = useState(0);

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
    <div style={{ overflow: "hidden", fontWeight: '800' }} className='d-flex'>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%', fontWeight: '400' }} className='m-4'>
        Css
        </div>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%' }} className='m-4'>
        HTML
        </div>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
        Java
        </div>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
        Javascript
        </div>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
        React
        </div>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
        Github
        </div>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
        Angular
        </div>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
        Bootstrap
        </div>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
        Canva
        </div>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
        Figma
        </div>
        <div style={{ transform: `translateX(-${scrollPosition}px)`, color: '#fff', fontSize: '40px', width: '100%'  }} className='m-4'>
        FireBase
        </div>
    </div>
  );
}

export default HorizontallyScrollingText;