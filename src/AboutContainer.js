import React from "react";

export function AboutContainer() {

    const coding = require('./coding.jpg');
    const jet = require('./jet.jpg');
    const homePic = require('./home.jpg');
    const dream = require('./dream.jpg');

    return (
        <section>
        <div className="image-cards">
          <div className="box1" id="box1">
            <img src={homePic} alt="home pic" className="home-pic" />
            <p>I grew up in Suffolk, Virginia. It was a rather rural area, but I was still a kid with big dreams. I first found my passion for technology at a young age.
        I was always fast with computers, and manuevering through different systems was a breeze for me. I was always the 'technology-inclined' one in the family, and as a result
        was always tasked with fixing our technological shortcomings. At around age 13, I started teaching myself a little bit of java as a side hobby. I carried this on for a 
        few years, and then around 18 years old I joined the U.S. Air Force.</p>
          </div>
          <div className="box2" id="box2">
            <img src={jet} alt="Jet" className="jet" />
            <p>When I joined, I entered on an open contract; this meant that any job within the field (electrical) that
        I was assigned into would be a possibility for me (I was kind of suckered into this option by the recruiter). After bootcamp, I was assigned to become an avionics technician for
        the F-16 fighter jet. At first, I thought this sounded like a pretty cool opportunity. I was located in Madison, Wi. for several years, and was not accustomed to the cold. I would go on to learn how to fix these
        jets over the course of the next few years, and also learn that the job I was doing wasn't for me. I wanted to pursue my original dreams. </p>
          </div>
          <div className="box3" id="box3">
            <img src={coding} alt="coding" className="coding" />
            <p>I have since moved on from my duties in the Air Force, and am once again teaching myself to code. I
        started with html, CSS, and JavaScript, and have since begun taking deeper dives into learning JavaScript. In fact, this portfolio is created using react and npm! I still possess the same curiosity and desire to learn that I did when I was a kid, 
        and I am excited to see where the road carries me.</p>
          </div>
          <div className="box4" id="box4">
            <img src={dream} alt="Dream" className="dream" />
            <p>My ultimate dream has always been to become a video game developer. Gaming is my biggest hobby, and it always has been. My desire to learn coding started from gaming.
        I had originally hoped to follow a career path in the Air Force that would lead me towards my endgoal. Unfortunately, I was not that lucky. I ended up with a job maintaining
        F-16s in Madison, Wi. I was there for 4 years; I learned a lot, but I quickly realized that was not what I wanted to do with my career. It was back to Virginia for me 
        immediately after I left the Air Force. I have been self-teaching through Codecademy and am excited to see where this takes me.</p>
          </div>
        </div>
        <div className="underline-section"></div>
        <p className="continued" id="box5">
        As I said earlier, I started off learning Java. I was a part of a community that was 'modding' different games and releasing open source versions of their own creations.
        This was an interesting hobby for me, and I found it consuming a lot of my time outside of sports and school. This went on for several years, until I released my own 
        version with my own modifications. It felt really cool to create something from nothing using only the tools I had taught myself. Now that I am getting back into programming,
        I thought it would be more suitable to start off learning web development. Learning HTML and CSS has surely been easier than the JavaScript, but the JavaScript is pretty
        familiar after all these years, given its similiarites to Java. This portfolio site is a personal project, but also a professional one. I would like to share a quote that I read that stuck with me:
        "Programming isn't about what you know, it is about what you can figure out" -Chris Pine. Hopefully, my hard work can prove
        that you don't need a degree to excel in any field; all you need is the dedication to succeed and the love for the skill. <br /><br />
        The projects listed in the projects tab are
        from past work that I have been completing to advance my learning. They are completed solely using HTML, CSS, and JavaScript. For now, there are only two listed, but there will
        be more added in the near future. If you have read this far, I want to personally thank you! There is a form at the bottom of this page for any feedback that you may recommend
        for my portfolio. Thank you again for visiting. :)
        </p>
        
      </section>
    );
}