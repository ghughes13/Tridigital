import React from "react"
import { Col } from "react-bootstrap"
import YourVideo from "./video-player.js"

export default function SingleReivew(props) {
  let data = [
    {
      video: "39haizsr07",
      name: "Xpert Technologies",
      leadName: 86,
      review: "“When we came to TRIdigital, we were about to give up.”",
      type: "half",
    },
    {
      video: "ngr0hfa2lq",
      name: "KJ Technology",
      leadName: 788,
      review:
        "“There’s one day when you realize we’re not just going to get there by referrals.”",
      type: "half",
    },
    {
      video: "oci1slbfvt",
      name: "GB Tech",
      leadName: 518,
      review:
        "“Before TRIdigital we closed 1-2 sales a quarter. With TRIdigital, we’re closing one lead a month”",
      type: "half",
    },
    {
      video: "bmsvx1dm63",
      name: "BEI Technology",
      leadName: 242,
      review:
        "“I feel and see the results that there’s a team of professionals that are solid in marketing”",
      type: "half",
    },
    {
      video: "e18q8mdrr1",
      name: "ISG Technology",
      leadName: 410,
      review: "“The leads are coming in”",
      type: "half",
    },
    {
      video: "hz4kgcz7rt",
      name: "Blue River Tech Partners",
      leadName: 231,
      review: "“We’re getting 2-3 new deals every month at $250 a user”",
      type: "half",
    },
    {
      video: "t6clkn9ww4",
      name: "AnchorSix",
      leadName: 334,
      review: "“The people who are coming to us have been warm or hot leads”",
      type: "half",
    },
    {
      video: "ndf1iuo0d1",
      name: "KME Systems",
      leadName: 256,
      review:
        "“We felt like you listened to us, as well as gave us excellent feedback on how to succeed.”",
      type: "half",
    },
    {
      video: "5pemwygs7d",
      name: "Axxys Technology",
      leadName: 449,
      review:
        "“We’ve grown our business exponentially since working with TRIdigital”",
      type: "half",
    },
    {
      video: "4ju7j6imz8",
      name: "IT Direct",
      leadName: 498,
      review: "“We’ve had a lot of success talking to our clients”",
      type: "half",
    },
    {
      video: "t8nkmxqer5",
      name: "Grexo Technology",
      leadName: 827,
      review: "“We have so many leads we can’t follow up with all of them.”",
      type: "half",
    },
    {
      video: "5zqukpga5w",
      name: "PRO OnCall",
      leadName: "1,440",
      review:
        "“Once the process got started, I knew I was dealing with a team of professionals. “",
      type: "half",
    },
    {
      video: "h5nj5w51up",
      name: "Trend Micro",
      leadName: 501,
      review:
        "“TRIdigital is a dynamic team of crazy talented, creative thinking, terrific people.”",
      type: "half",
    },
    {
      video: "8jm77syoyx",
      name: "Ipro Media",
      leadName: "1,196",
      review:
        "“TRIdigital is passionate about marketing as my team is about technology.”",
      type: "half",
    },
    {
      video:
        "http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3452.png",
      name: "Ipro Media",
      leadName: "Richie Bell | President",
      review: "“Great company. Highly recommend.”",
      type: "personal-half",
    },
    {
      video:
        "http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3453.png",
      name: "Numata",
      leadName: "Jakobus Koorts | Owner",
      review:
        "“I had a great time meeting everyone in person. I felt like the meeting was very productive.”",
      type: "personal-half",
    },
    {
      video:
        "http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3455.png",
      name: "Preferred Technology Solutions",
      leadName: "Julia McKinney | Consultant",
      review:
        "“I can’t ask for a better company to work with. I am learning more and more about the amazing processes and tools that TRIdigital has established for Preferred Technology.",
      type: "personal-half",
    },
    {
      video:
        "http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3456.png",
      name: "Centre Technologies",
      leadName: "Jakobus Koorts | Owner",
      review:
        "“Everyone at TRIdigital is a pleasure to work with. They are exceptionally creative, hardworking and are passionate about their clients and marketing as a whole.”",
      type: "personal-half",
    },
    {
      video:
        "http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3451.png",
      name: "Affinity IT Group",
      leadName: "Rick Tetreau | President",
      review:
        "“Our top compliment: Your understanding of Managed Services and how to create content and materials suited to what we do and who we are. There are many other compliments but that is #1. \n \n Thank you for everything you have done for us. We are looking forward to a long relationship between Affinity IT Group and TRIdigital.”",
      type: "full",
    },
    {
      video:
        "http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3454.png",
      name: "Dynamic Business Technologies",
      leadName: "Nathan Franks | MD",
      review:
        "“It takes a marketing team with balls to start the conversation with metrics and committing to an outcome before you even know who we are. To say that we had an amazing alignment is a understatement, it felt like the team just got us, that we are twin companies separated at incorporation. Look forward to a long and fruitful relationship with the occasional visit across the pond!”",
      type: "full",
    },
    {
      video:
        "http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3457.png",
      name: "PCX Technologies",
      leadName: "Ken Reichardt | CEO",
      review:
        "“Just wrapped up our on-boarding meeting at this point but I left very excited about the possibilities for the future. I’ve shared my experience with the entire company and everyone, especially my sales resources are extremely excited and optimistic. Everyone is rallied around our relationship with TRIdigital and our Marketing/Sales initiative.”",
      type: "full",
    },
    {
      video:
        "http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3458.png",
      name: "Ingram Micro",
      leadName: "Mary Ann Burns | Senior Marketing Manager",
      review:
        "“We began working with TriDigital in the summer of 2014. We were looking for new and innovative ways to market our services to our partner base. In our discovery consultation with TriDigital they informed us on how we can improve our marketing results by revamping our marketing materials for mobile device compatibility and include videos in all of our literature. That approach sounded good to us so we contracted with TriDigital to head up the design and development of online digital playbooks for a few of the products and service we offer.  \n \n We began sending out email campaigns, which had call to actions that lead our prospects to view the online digital playbooks. The results were surprising and far better than we expected. Our conversion rates increased significantly due to the leads generated from mobile device users. We are very pleased with their service. They have a great design team, excellent process, and a fantastic marketing solution. We recommend their service to anyone in the channel looking to improve their marketing efforts.”",
      type: "full",
    },
    {
      video:
        "http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3459.png",
      name: "Intel",
      leadName: "Bret Costelow | Director of North America Sales",
      review:
        "“The results were outstanding. Many of the MSP’s leveraged TRIdigital’s marketing services immediately and began generating leads and closing more sales.Some of our MSP’s doubled and even tripled their sales output within the first 90 days.  We would also recommend TRIdigital to any vendor and MSP looking to improve the marketing and sales performance of their reseller part”",
      type: "full",
    },
  ]

  let number = props.number

  console.log(data)

  if (props.type === "half") {
    return (
      <Col className="content-container centered-text half">
        <div className="review-container">
          <YourVideo props={data[number - 1]} />
          <div class="data-container">
            <p className="company-name">{data[number - 1].name}</p>
            <p className="pink-text">
              Total leads: {data[number - 1].leadName}
            </p>
            <p className="quote">{data[number - 1].review}</p>
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="314.541"
                height="38.89"
                viewBox="0 0 314.541 38.89"
              >
                <g
                  id="Group_1202"
                  data-name="Group 1202"
                  transform="translate(-468.001 -3813.076)"
                >
                  <path
                    id="Path_744"
                    data-name="Path 744"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(118.001 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_745"
                    data-name="Path 745"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(186.804 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_746"
                    data-name="Path 746"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(254.145 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_747"
                    data-name="Path 747"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(322.951 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_748"
                    data-name="Path 748"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(391.755 3451.449)"
                    fill="#fcac18"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Col>
    )
  } else if (props.type === "personal-half") {
    return (
      <Col className="content-container centered-text half-person">
        <div className="review-container">
          <img src={data[number - 1].video} />
          <div class="data-container">
            <p className="company-name">{data[number - 1].name}</p>
            <p className="pink-text">{data[number - 1].leadName}</p>
            <p className="quote">{data[number - 1].review}</p>
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="314.541"
                height="38.89"
                viewBox="0 0 314.541 38.89"
              >
                <g
                  id="Group_1202"
                  data-name="Group 1202"
                  transform="translate(-468.001 -3813.076)"
                >
                  <path
                    id="Path_744"
                    data-name="Path 744"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(118.001 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_745"
                    data-name="Path 745"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(186.804 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_746"
                    data-name="Path 746"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(254.145 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_747"
                    data-name="Path 747"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(322.951 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_748"
                    data-name="Path 748"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(391.755 3451.449)"
                    fill="#fcac18"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Col>
    )
  } else {
    return (
      <div className="review-container content-container centered-text full-person">
        <img src={data[number - 1].video} />
        <div class="data-container">
          <p className="company-name">{data[number - 1].name}</p>
          <p className="pink-text">{data[number - 1].leadName}</p>
          <div className="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="314.541"
              height="38.89"
              viewBox="0 0 314.541 38.89"
            >
              <g
                id="Group_1202"
                data-name="Group 1202"
                transform="translate(-468.001 -3813.076)"
              >
                <path
                  id="Path_744"
                  data-name="Path 744"
                  d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                  transform="translate(118.001 3451.449)"
                  fill="#fcac18"
                />
                <path
                  id="Path_745"
                  data-name="Path 745"
                  d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                  transform="translate(186.804 3451.449)"
                  fill="#fcac18"
                />
                <path
                  id="Path_746"
                  data-name="Path 746"
                  d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                  transform="translate(254.145 3451.449)"
                  fill="#fcac18"
                />
                <path
                  id="Path_747"
                  data-name="Path 747"
                  d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                  transform="translate(322.951 3451.449)"
                  fill="#fcac18"
                />
                <path
                  id="Path_748"
                  data-name="Path 748"
                  d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                  transform="translate(391.755 3451.449)"
                  fill="#fcac18"
                />
              </g>
            </svg>
          </div>
          <p className="quote">{data[number - 1].review}</p>
        </div>
      </div>
    )
  }
}
