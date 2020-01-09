import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

let employees = [
  {
    First: "GIOVANNI",
    Last: "SANGUILY",
    Position: "Chief Executive Officer",
    Hobbies: "Family, Drawing Comics, Disney, Boxing",
    Desc:
      "My name is Giovanni, but if you like, you can call me Gio for short. I’ll pretty much respond to any name that starts with a “G.” I’ve found I’m good at two things, IT Marketing and Sales. Over the past 10 years, I have closed more than $20 million in managed services revenue. I’ve also helped MSPs across 15 countries close over $50 million in managed services revenue. I think that my creative talent combined with my ability to tell stories has helped me be successful.",
    videoURL: "/wp-content/uploads/about-us-videos/Gio.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Gio.png",
  },
  {
    First: "RICHARD",
    Last: "PETTIS",
    Position: "Co-Founder & Chief Design Officer",
    Hobbies: "Movies, Fitness, Cooking, Art",
    Desc:
      "Hello Everyone, I’m Richard, one of the multimedia designers at TRIdigital. For over 6 years, I have been designing for the channel and I’ve enjoyed every minute of it. My passion for art and design started at the young age of 5 years old, and my artistic talent has been improving ever since. With an amazing team by my side, the creation of something from nothing is a reality.",
    videoURL: "/wp-content/uploads/about-us-videos/Richard.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Richard.png",
  },
  {
    First: "JOSEPH",
    Last: "MENDOZA",
    Position: "Chief Financial Strategy Officer",
    Hobbies: "Building, Scotch, Meat, Batman",
    Desc:
      "I’m TRIdigital’s Batman/Ron Swanson… but since they won’t let me call myself that – we’ve agreed upon Chief Financial Strategy Officer. My tech experience began in the 3rd grade when I started building computers and learned how to connect to the internet for free using our super fast dial-up connection. My transition into business began shortly after when I started selling cheat codes to video games. At TRIdigital I handle finance, HR, and help with overall strategy. I love building and problem solving so you can usually catch me in my garage with a variety of tools and wood.",
    videoURL: "/wp-content/uploads/about-us-videos/Joseph.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Joseph.png",
  },
  {
    First: "JASMINE",
    Last: "CUE",
    Position: "Operations",
    Hobbies: "Family Time, Sweet Coffee & Tea, Reading, Lettering",
    Desc:
      "Hi! I’m Jasmine Cue. I began my journey in the IT industry in 2008 with MSPU. I have worked my way up the chain while soaking up knowledge in IT, marketing, project management, and everything in between. I can always be found knee-deep in timelines, planning, and making sure our operations run like a well oiled machine. Apart from that, I am a mother to two beautiful children. I also like to believe that I am a travel-sized Wonder Woman. Being 5’1 doesn’t actually qualify me for Amazonian status.",
    videoURL: "",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Jasmine.png",
  },
  {
    First: "ADRIAN",
    Last: "CUE",
    Position: "Chief Experience Officer",
    Hobbies: "Family, Playing Sports, Learning And Growing, Comics",
    Desc:
      "Hi! I’m Adrian, the CXO here at TRIdigital. I have spent the last 10 years in the channel growing my sales and marketing knowledge. I started with the amazing and rewarding experience of directly selling and marketing IT services. Today, I am happy to say that I have been able to apply my success and skills to consult businesses across the country to help them change the way they view their sales and marketing efforts in order to grow. Here at TRIdigital, my goal is to provide you with an amazing experience and aid you in your journey to success.",
    videoURL: "/wp-content/uploads/about-us-videos/Adrian.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Adrian.png",
  },
  {
    First: "BILL",
    Last: "WETTINGFELD",
    Position: "Chief Technology Officer",
    Hobbies: "Food, Learning, Anime, Board Games",
    Desc:
      "Hey, I’m Bill! I’m the CTO of TRIdigital Marketing. I’m an eager sponge when it comes to knowledge. I started my journey by getting a Masters in Applied Mathematics, and afterward, quickly transitioned to Development. I spent five years honing my craft until I came on board as a member of the TRIdigital team as the CTO. Now I ensure that everything technology-related is up and running smoothly!",
    videoURL: "/wp-content/uploads/about-us-videos/Bill.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Bill.png",
  },
  {
    First: "JULIAN",
    Last: "PEREZ",
    Position: "Sr. Graphic Designer",
    Hobbies: "Coffee, Anime, ThunderCats, Netflix & Hulu",
    Desc:
      "¡Quiubo parce! I’m Julian Perez, a Sr. Graphic Designer at TRIdigital. I’ve been a Graphic Designer for 10 years and I love what I do so much. Besides IT, I have also created designs for the music industry. I do have a strong Colombian-English accent that some say is sexy, some say is cute, but I say is amazing because I’m bilingual. I’m a coffeeholic! I spend time watching my favorite shows like Attack on Titan, Sailor Moon, and ThunderCats on Netflix and Hulu. I am happily married and look forward to the time I spend with my beautiful wife.",
    videoURL: "/wp-content/uploads/about-us-videos/Julian.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Julian.png",
  },
  {
    First: "JUSTIN",
    Last: "HAYS",
    Position: "Software & Web Developer",
    Hobbies:
      "Fast & Loud Cars, Metal M/, Self Improvement & Helping Others Around Me, My Wife Gracie",
    Desc:
      "Ahoy! I’m the website guy! I’m here to build bad ass sites designed by bad ass designers. I’ve been in the website business for two years and have loved every second of it. I have my degrees in mathematics and education which translate nicely into my field. Using logic to solve problems and helping others fight through challenges is what I’m here for. We at the dev department look forward to your next site build =).",
    videoURL: "sf/wp-content/uploads/2019/11/Justin.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Justin.png",
  },
  {
    First: "ADRIANA",
    Last: "SANGUILY",
    Position: "Accounting Manager",
    Hobbies: "Family, Travel, Natural Healing/Medicine, Photography",
    Desc:
      "Hey, I’m Adriana, TRIdigital’s accounting manager. I graduated from Cal State Fullerton in 2008 with a bachelor’s degree in Business Administration with a concentration in Accounting. At TRIdigital, I run a tight money ship. Benjamin Franklin once said “beware of little expenses, a small leak will sink a great ship,” so it’s my job to make sure there aren’t any money leaks. I’m a proud mama bear to two handsome boys, so when I’m not at TRIdigital, I’m keeping up with my two little guys trying to plant the right seeds in their little minds.",
    videoURL: "",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Adriana.png",
  },
  {
    First: "GEOFF",
    Last: "POMELLA",
    Position: "Client Experience Coordinator",
    Hobbies: "Food, Comics, Movies, Exploring",
    Desc:
      "Heya! I’m Geoff Pomella, a Client Experience Coordinator here at TRIdigital. I’m a graduate from the University of North Texas in Creative Writing and have over five years of experience in both project and product management. Anytime I’m not at work you can find me diving into a good book or comic, and also spending a fair amount of my time with camping and doing photography.",
    videoURL: "",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Geoff.png",
  },
  {
    First: "RICARDO",
    Last: "ALBERTORIO",
    Position: "Creative Director",
    Hobbies: "Pizza, Art, Showa Tokusatsu Heroes, 80’S Cartoons/Movies",
    Desc:
      "Yo! My name is Ricardo and I’m a Creative Director here at TRIdigitial. I have over 7 years of experience in the industry. I have worked on a vast array of projects ranging from traditional design such as branding, web design and print, as well as nontraditional design such as video games and toy design, to name a few. I discovered my passion for art at a young age when my older brother inspired me to draw alongside him. Ever since then I’ve made it my goal in life to improve myself as an artist.",
    videoURL: "/wp-content/uploads/about-us-videos/Ricky%20A.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Ricky.png",
  },
  {
    First: "EMANUEL",
    Last: "MÁRQUEZ",
    Position: "Multimedia Engineer",
    Hobbies: "Video Games, Drawing, Adventure, Coffee",
    Desc:
      "Hey there! I’m Emanuel, one of the guys that makes pretty things for our clients. Growing up in the 90s, I was exposed to a lot of cartoons, movies and video games that sparked my interest in animation and illustration. I graduated from the “School of Fine Arts” in Puerto Rico where I majored in graphic design. Art has been a passion of mine, as well as playing games, so making video games in game jams has been a fun way to incorporate both.",
    videoURL: "/wp-content/uploads/about-us-videos/Ema.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Ema.png",
  },
  {
    First: "MARVIN",
    Last: "CHAU",
    Position: "Web Development Manager",
    Hobbies: "<3 Eating, Cooking, Traveling, Gaming",
    Desc:
      "Xin chào! My name is Marvin, and I’m one of the developers here. My fascination of creating things with my own hands started when I was a young child obsessed with cooking. I’m only 2 years into my development career, and loving every moment of it. Just like finding new recipes and techniques online, I love to research new languages and ideas and applying them to a site. I hope to get started on your site soon!",
    videoURL: "/wp-content/uploads/about-us-videos/Marvin.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Marvin.png",
  },
  {
    First: "DANIEL",
    Last: "CAPOTE",
    Position: "Multimedia Engineer",
    Hobbies: "Traveling, Going To The Movies, Video Games, Art",
    Desc:
      "Hola, I’m Daniel Capote, and I’m a Multimedia Engineer. I got the magic hands to make all your visual dreams come true. I’ve been doing this for 10 years and I don’t have any plans to stop anytime soon. I’m great at doing 2D /3D animations. My dream is to travel all over the world and meet different people (and experience different cultures).",
    videoURL: "/wp-content/uploads/2019/11/Danny.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Dan.png",
  },
  {
    First: "EIRA",
    Last: "RODRIGUEZ",
    Position: "Graphic Designer",
    Hobbies: "Food, Drawing, Reading, Traveling",
    Desc:
      "I’m Eira and I joined the TRIdigital team after 6 years of teaching art. I received my BFA from the School of Fine Arts and Design of Puerto Rico in 2011 with a concentration in Art Education. I enjoy anything that involves being creative and making something with your hands. Although I like traditional art, I’ve always been inspired by the possibilities of digital media. I got my first drawing tablet for my 16th birthday after struggling to draw in Photoshop with a mouse, and I knew I wanted to create art for the rest of my life.",
    videoURL: "/wp-content/uploads/about-us-videos/Eira.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Eira.png",
  },
  {
    First: "SCOTT",
    Last: "MITCHELL",
    Position: "Photographer/Videographer",
    Hobbies:
      "Sleeping In With My Dogs, Watching Tons Of Films, Drinking Way Too Much Coffee",
    Desc:
      "Heyo! I’m Scott, one of the multimedia dudes at TRidigital. I’ve been working professionally with cameras for five years now and have done everything from food to wedding photography. I’m also one of the guys who gets to travel to all of our clients to shove a camera in their face. (I know, I’m pretty fortunate). So if you’re signing on, I look forward to meeting you!",
    videoURL: "/wp-content/uploads/about-us-videos/Scott.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Scott.png",
  },
  {
    First: "ERIKA",
    Last: "LARA",
    Position: "Product Coach for Honey CRM",
    Hobbies: "Travel, Family Time, Running, Decorating, Learning",
    Desc:
      "Hey there, I’m Erika. I was born and raised in Cali. I have a BS in Applied Mathematics with an emphasis in Science and Engineering. My background as a Tutor and Reimbursement Analyst has definitely helped me strengthen several different areas of expertise. Now, I am one of the Product Coaches for Honey CRM. I am really happy to be part of this team and to have the ability to help anyone that asks me a question. When I’m not working, I love spending quality time with my loving husband and handsome son.",
    videoURL: "/wp-content/uploads/about-us-videos/Erika.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Erika.png",
  },
  {
    First: "GARRETT",
    Last: "HUGHES",
    Position: "Web Developer",
    Hobbies: "Music, Gaming, Working Out",
    Desc:
      "Hey, I’m Garrett. I worked in the finance industry for about a year, didn’t particularly like it, and used every minute of my free time to learn web development. Now I work here as a web developer and love every minute of it!! Look forward to building your site.",
    videoURL: "/wp-content/uploads/about-us-videos/Garrett.mp4",
    thumbnail:
      "http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Garrett.png",
  },
]

export default function EmployeeInfo() {
  const [employeeToShow, setEmployeeToShow] = useState(0)
  let vidURL =
    "http://tdgatsbytest.wpengine.com" + employees[employeeToShow].videoURL

  return (
    <div>
      <Container className="hero-section container blue-background">
        <Row className="two-columns pink-banner">
          <Col className="content-container column click-through">
            <h2 className="white-text">
              {employees[employeeToShow].First} {employees[employeeToShow].Last}
            </h2>
            <p className="white-text subtext">
              {employees[employeeToShow].Position}
            </p>
            <p className="likes heavy-weight white-text">
              {employees[employeeToShow].Hobbies}
            </p>
            <p className="white-text bio-content">
              {employees[employeeToShow].Desc}
            </p>
          </Col>
          <Col className="content-container column video-column">
            <video src={vidURL} autoPlay muted>
              <p>
                If you are reading this, it is because your browser does not
                support the HTML5 video element.
              </p>
            </video>
          </Col>
        </Row>
      </Container>
      <div className="employee-thumbnail-container">
        {employees.map((employee, index) => (
          <div
            className="thumbnail-container"
            key={index}
            onClick={() => setEmployeeToShow(index)}
          >
            <img src={employee.thumbnail} />
            <span className="name">{employee.First}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
