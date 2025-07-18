'use client';
import Image from 'next/image';
import Link from 'next/link';
import './page.css';

export default function Home() {
  return (
    <div className="homeWrapper">
     
      <section className="hero">
        <div className="heroContent">
          <h1>This is Pawspective Blog</h1>
          <p>Your go-to place to explore, love, and learn about all dog breeds.</p>
          <div className="ctaButtons">
            <Link href="/loginmain">
              <button className="btn">Login</button>
            </Link>
            <Link href="/home">
              <button className="btnAlt">View Blogs</button>
            </Link>
          </div>
        </div>
        <Image
          src="/shihtzu.jpg"
          alt="Happy Dog"
          width={500}
          height={350}
          className="heroImage"
        />
      </section>

      
      <section className="aboutPreview">
        <h2> About DogVerse</h2>
        <p>
          At DogVerse, we bring together all things pawsome — breed info, care tips, and inspiring stories.
        </p>
      </section>

    
      <footer className="footer">
        <p>© 2025 DogVerse Blog. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
