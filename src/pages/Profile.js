import React, {useEffect} from 'react'
import useElementOnScreen from "../utils/useOnScreen";
import {
  CardRow,
  Container,
  Testimonial,
  TestimonialsContainer
} from "../components/bottombar";
import {TestimonialCard} from "../components/testimonialcard/TestimonialCard";

import Band_Capricio_Logo from "../assets/images/brands/Band_Capricio_Logo.png";
import Behold_social from "../assets/images/brands/Behold_social.png";
import Ikshana_Logo from "../assets/images/brands/Ikshana_Logo.png";
import Virtual_Overseas_Consultancy_logo from "../assets/images/brands/Virtual_Overseas_Consultancy_logo.png";

export function Profile(props) {

  let profilePageRef = props.propRef;
  let isProfilePageVisible = useElementOnScreen(profilePageRef);

  let testimonialData = [
    {
      name: "Teja",
      employmentTitle: "",
      reviewTitle: "Great service!",
      reviewBody: "Snigdha's exceptional ability to comprehend our requirements and capture the essence of our brand was truly impressive. Her innovative ideas and imaginative approach brought a breath of fresh air to our branding and content strategy. Since she joined our team, we noticed a remarkable transformation in how people perceive Capricio's brand and content, significantly improving our online presence.      ",
      brandName: "Team Caprico",
      date: "01/01/2021",
      profileImage: Band_Capricio_Logo
    },
    {
      name: "Lavanya",
      employmentTitle: "",
      reviewTitle: "Amazing service!",
      reviewBody: "She is a talented, enthusiastic, and versatile writer who helped us start our blog journey. As a startup, working with independent content writers was the first choice, and working with Snigdha helped us more than we could expect. She is so quick in understanding our requirements and delivering the content in the shortest possible time. We appreciate her ability to create content on various titles across our businesses.",
      brandName: "Behold.Social",
      date: "01/01/2023",
      profileImage: Behold_social
    },
    {
      name: "Aman",
      employmentTitle: "",
      reviewTitle: "Great service!",
      reviewBody: "I've worked with Snigdha and her team for over six months, and would highly recommend them! They are very professional, accommodating, and deadline-oriented. The delivery of SOPs to our company's clients is crucial and an essential part of the admission process. They are extremely knowledgeable about professional writing and placement strategy and have always kept our students happy with their work.",
      brandName: "Virtual Overseas Consultancy",
      date: "01/01/2021",
      profileImage: Virtual_Overseas_Consultancy_logo
    },
    {
      name: "Hyma",
      employmentTitle: "Founder",
      reviewTitle: "Great service!",
      reviewBody: "I strongly believe in the power of words, whether they are expressed in writing or verbally. This is why when I saw Snigdhas work, I knew she had this power. I worked with Snigdha on various projects to write content. Be it for Website development, content for profiles, or speeches for beurocrats where they address nations on various topics like sports, politics, or arts, she does her research and uses appropriate words to express the right sentiments and emotions. Her commitment towards her work is commendable and very professional. Thank you so much for always being ready with your 'words' for me, Snigdha ❤️",
      brandName: " Ikshana Consulting Firm",
      date: "01/01/2021",
      profileImage: Ikshana_Logo
    },
  ];

  useEffect(() => {
    if (isProfilePageVisible) {
      props.onVisible();
    }
  }, [isProfilePageVisible, props]);

  return (
    <Container ref={profilePageRef}>
      <TestimonialsContainer>
        <Testimonial>
          TESTIMONIALS
        </Testimonial>
        <CardRow>
          {
            testimonialData.map((testimonial, index) => {
              return (
                <TestimonialCard key={index} testimonial={testimonial}/>
              )
            })
          }
        </CardRow>
      </TestimonialsContainer>
    </Container>
  )
}