import React from 'react'
import "./News.css"
import "../../css/carousel.css"
import "../../css/carousel.rtl.css"
import { Link } from 'react-router-dom'
const News = () => {
  return (
    <div>
         <link
      rel="canonical"
      href="https://getbootstrap.com/docs/5.2/examples/carousel/"
    />

    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
       <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
           <img src="assets/tech news.png" alt=""/>
          <Link className="navbar-brand" id="text" to="#">Tech<span>News</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="./home.html">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " href="more.html">More</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " href="about.html">About</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>

    <main>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption text-start">
                <img className="d-block w-100" src="../assets/tech news.png" alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption">
                <img
                  className="d-block w-100"
                  src="../assets/Screenshot (611).png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption text-end">
                <img
                  className="d-block w-100"
                  src="../assets/Screenshot (591).png"
                  alt=""
                />

              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="container marketing">
        <div className="row">
          <div className="cards col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src="../assets/Screenshot (611).png"
              alt=""
            />

            <h2 className="fw-normal">5G</h2>
            <p>iPhone support to 5G live in India</p>
            <p>
              <a className="btn btn-secondary" href="more.html"
                >View details &raquo;</a
              >
            </p>
          </div>
          <div className="cards col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src="../assets/Screenshot (615).png"
              alt=""
            />

            <h2 className="fw-normal">AI</h2>
            <p>
              Why tech insiders are so excited about ChatGPT, a chatbot that
              answers questions and writes essays
            </p>
            <p>
              <a className="btn btn-secondary" href="more.html"
                >View details &raquo;</a
              >
            </p>
          </div>
          <div className="cards col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src="../assets/Screenshot (609).png"
              alt=""
            />

            <h2 className="fw-normal">Web Development</h2>
            <p>Is Web Development a Good Career?</p>
            <p>
              <a className="btn btn-secondary" href="#">View details &raquo;</a>
            </p>
          </div>
        </div>


        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="">
            <h2>Twitter's paid blue tick re-launches after pause</h2>
            <img src="../assets/Screenshot (604).png" alt="" />
            <p>
              Twitter's paid-for verification feature is rolling out once again
              on Monday. It was paused last month after being swamped by
              impersonators. It is still $8 per month - but there is now an
              increased fee of $11 for those using the Twitter app on Apple
              devices. Twitter's owner Elon Musk has previously said in tweets
              that he resents the commission fee Apple charges on in-app
              purchases. Twitter Blue's additional features include an edit
              button.
            </p>

            <p>
              This has long been a feature requested by many Twitter users,
              although there are others who argue that it increases the
              potential for the spread of disinformation, if a tweet is altered
              after being widely shared. Blue-tick subscribers will also see
              fewer ads, have their tweets amplified above others, and be able
              to post and view longer, better quality videos, the platform says.
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="">
            <h2>
              Tech layoffs 2022: Another major tech company fires over 4000
              employees
            </h2>
            <img src="../assets/Screenshot (607).png" alt="" />
            <p>
              The tech industry is going through a tough time right now. Big
              Tech companies including Meta, Amazon, and Twitter have laid off
              hundreds and thousands of employees in the last couple of months.
              Joining the list of tech companies is the networking major Cisco.
              As per the latest reports, the company has started laying off 5
              per cent of its workforce. Reports of Cisco considering firing
              employees surfaced last month. The networking company is said to
              have laid off around 5 per cent of the workforce, which is over
              4000 employees. <br />
            </p>
            <p>
              It is said that the layoffs are a part of "rebalancing" act while
              "rightsizing certain businesses". The report quoted Chuck Robbins,
              Chairman and CEO of Cisco, who did not divulge into giving direct
              details related to layoffs but said he would "be reluctant to go
              into a lot of detail here until we're able to talk to them. I
              would say that what we're doing is rightsizing certain
              businesses". "You can just assume that we're going to -- we're not
              actually -- there's nothing that's a lower priority, but we are
              rightsizing certain businesses," Robbins further told analysts.
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="">
            <h2>Is Web Development a Good Career?</h2>
            <img src="../assets/Screenshot (609).png" alt="" />
            <p>
              Mondo’s annual Tech and Digital Marketing Salary guide found “Web
              Developer” was the most in-demand job title in tech and one of its
              top-paying jobs. And, according to the U.S. Bureau of Labor, the
              job market for Web Developers is expected to grow 15 percent by
              2026.
            </p>
            <p>
              The job outlook for Web Developers as very positive because Web
              Developers are in high demand across a variety of industries, and
              a worldwide gap in software and web development skills has most
              observers forecasting high demand well into the future.
            </p>
            <p>
              The U.S. Bureau of Labor Statistics expects employment of Web
              Developers to grow eight percent by 2029, much faster than the
              average for job roles. There is also no sign demand will wane. The
              expansion of e-commerce — online shopping is now expected to grow
              faster than the overall retail industry — and an ever-increasing
              reliance on mobile search will only create further need for
              talented Web and Software Developers. That means that even if many
              career changers from other tech disciplines decide they want to
              become a Web Developer, the job outlook should still remain
              positive.
            </p>
          </div>
        </div>


      </div>

      <footer className="container">
        <p className="float-end"><a href="#">Back to top</a></p>
        <p>
          &copy; 2017–2022 Company, Inc. &middot;
          <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
        </p>
      </footer>
    </main>

    </div>
  )
  }

export default News
