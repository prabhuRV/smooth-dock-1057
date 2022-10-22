import React from "react";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Test = () => {
  const [slider, setSlider] = React.useState(0);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/jira-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/github-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/monday-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/notion-primary.webp",
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {cards.map((url, index) => (
          <SwiperSlide>
            <Box
           
            m="auto"
              boxShadow="md"
              
              rounded="md"
              bg="white"
              mb={5}
              key={index}
            >
              <Image textAlign="center" h={"400px"} w="600px" src={url} alt="" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Test;
