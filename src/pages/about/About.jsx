import Header from '../../components/Header'
import HeaderImage from '../../images/header.png'
import StoryImage from '../../images/story.jpg'
import VisionImage from '../../images/vision.jpg'
import MissionImage from '../../images/mission.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur nesciunt, aut quia corporis magnam obcaecati quae reprehenderit distinctio ex!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos officia ratione maxime, suscipit veniam in a labore repudiandae doloremque temporibus nam? Harum voluptates non molestias, perferendis quos iure sequi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem inventore aliquid molestias eveniet id pariatur veritatis fugiat necessitatibus possimus. Quae, totam? Incidunt eos, culpa nostrum illum corrupti vitae unde.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos officia ratione maxime, suscipit veniam in a labore repudiandae doloremque temporibus nam? Harum voluptates non molestias, perferendis quos iure sequi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem inventore aliquid molestias eveniet id pariatur veritatis fugiat necessitatibus possimus. Quae, totam? Incidunt eos, culpa nostrum illum corrupti vitae unde.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae impedit ipsam debitis placeat consectetur asperiores dicta temporibus perspiciatis vero in recusandae omnis fuga, facilis voluptatum, aperiam amet hic. Assumenda, esse.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">

          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos officia ratione maxime, suscipit veniam in a labore repudiandae doloremque temporibus nam? Harum voluptates non molestias, perferendis quos iure sequi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem inventore aliquid molestias eveniet id pariatur veritatis fugiat necessitatibus possimus. Quae, totam? Incidunt eos, culpa nostrum illum corrupti vitae unde.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos officia ratione maxime, suscipit veniam in a labore repudiandae doloremque temporibus nam? Harum voluptates non molestias, perferendis quos iure sequi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem inventore aliquid molestias eveniet id pariatur veritatis fugiat necessitatibus possimus. Quae, totam? Incidunt eos, culpa nostrum illum corrupti vitae unde.
            </p>
          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>


      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos officia ratione maxime, suscipit veniam in a labore repudiandae doloremque temporibus nam? Harum voluptates non molestias, perferendis quos iure sequi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem inventore aliquid molestias eveniet id pariatur veritatis fugiat necessitatibus possimus. Quae, totam? Incidunt eos, culpa nostrum illum corrupti vitae unde.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos officia ratione maxime, suscipit veniam in a labore repudiandae doloremque temporibus nam? Harum voluptates non molestias, perferendis quos iure sequi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem inventore aliquid molestias eveniet id pariatur veritatis fugiat necessitatibus possimus. Quae, totam? Incidunt eos, culpa nostrum illum corrupti vitae unde.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae impedit ipsam debitis placeat consectetur asperiores dicta temporibus perspiciatis vero in recusandae omnis fuga, facilis voluptatum, aperiam amet hic. Assumenda, esse.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
