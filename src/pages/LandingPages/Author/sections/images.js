import { useState, useEffect, useRef } from "react";

const ScrollImageChanger = () => {
    const images = window.innerWidth <= 768 ? [
        "/mobImage16.jpg",
        "/mobImage2.jpg",
        "/mobImage3.jpg",
        "/mobImage4.jpg",
        "/mobImage5.jpg",
        "/mobImage6.jpg",
        "/mobImage7.jpg",
        "/mobImage8.jpg",
        "/mobImage9.jpg",
        "/mobImage10.jpg",
        "/mobImage11.jpg",
        "/mobImage12.jpg",
        "/mobImage13.jpg",
        "/mobImage14.jpg",
        "/mobImage15.jpg",
    ] : [
        "/deskTopImage4.jpg",
        "/deskTopImage2.jpg",
        "/deskTopImage3.jpg",
        "/deskTopImage1.jpg",
        "/deskTopImage5.jpg",
        "/deskTopImage6.jpg",
        "/deskTopImage7.jpg",
        "/deskTopImage8.jpg",
        "/deskTopImage9.jpg",
        "/deskTopImage10.jpg",
        "/deskTopImage11.jpg",
        "/deskTopImage12.jpg",
        "/deskTopImage13.jpg",
        "/deskTopImage14.jpg"
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.offsetHeight;
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Ensure scrolling happens only within the section
            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight - viewportHeight) {
                const progress = (scrollPosition - sectionTop) / (sectionHeight - viewportHeight);
                const index = Math.min(Math.floor(progress * images.length), images.length - 1);
                setActiveIndex(index);
            }
        };

        const onScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div ref={sectionRef} className="scroll-section">
            <div className="image-container" id="snaps">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        className={index === activeIndex ? "active" : ""}
                        loading="lazy"
                        crossOrigin="anonymous"
                    />
                ))}
            </div>

            <div className="scroll-space"></div>

            <style jsx>{`
                .scroll-section {
                    position: relative;
                    width: 100%;
                    height: ${images.length * 100 / 3}vh; /* Ensures smooth scrolling */
                }
                .image-container {
                    position: sticky;
                    top: 0;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .image-container img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }
                .image-container img.active {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default ScrollImageChanger;
