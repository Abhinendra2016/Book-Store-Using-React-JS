import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Subhag Prabhune",
    text: "Colleen Hoover's Verity is a captivating psychological thriller that will keep you guessing until the very last page. Low on inspiration, struggling writer Lowen Ashford accepts a dream offer to complete the remaining manuscript of bestselling author Verity Crawford.However, as Lowen delves deeper into Verity's work, she uncovers unsettling truths that blur the lines between fiction and reality.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Priyam  Singh",
    text: "It Ends With Us by Colleen Hoover is a complex and emotional journey that explores the enduring power of love. Lily, the protagonist, finds herself caught between two men: Atlas, her childhood sweetheart with a troubled past, and Ryle, a successful neurosurgeon who offers her a seemingly perfect life. As Lily grapples with her feelings and a shocking revelation from her past, she must decide what she truly desires.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Mohit Sejwani",
    text: "Ready to be swept away by the raw emotions in Colleen Hoover's Ugly Love.This captivating novel tells the story of Tate Collins, a college baseball player known for his commitment phobia, and  Warner, a mysterious young woman hiding a painful secret.  Despite their contrasting personalities and undeniable attraction, both Tate and Warner vow to keep their relationship strictly physical.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
