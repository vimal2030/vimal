import { Testimony } from "../Testimony/Testimony";
import About from "../About/About";
import { Address } from "../Address/Address";
import Menu from "../Menu/Menu";
import EmblaCarousel from "../components/EmblaCarousel";
import { Footer } from "../Footer/Footer";
import Contact from "../Contact/Contact";

const Home = () => {
  const slides = [
    {
      imageUrl: "https://picsum.photos/600/350?v=1",
      text: "Slide 1 Text",
    },
    {
      imageUrl: "https://picsum.photos/600/350?v=2",
      text: "Slide 2 Text",
    },
    {
      imageUrl: "https://picsum.photos/600/350?v=3",
      text: "Slide 3 Text",
    },
  ];
  const about = [
    {
      title: "Our Story",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim recusandae consequatur assumenda, ut officia dolorem fugiat sunt doloremque sint facere! Ratione recusandae reiciendis, aut in vitaeut quod ullam facilis libero non qui ipsam. Consequatur inciduntvoluptates enim quasi porro ad autem fugit nemo. Distinctio, nihilad? Aperiam officia expedita tenetur officiis commodi laboriosam velmolestias doloremque, eligendi enim reprehenderit soluta explicaboassumenda! Rem eveniet, quos at quam qui alias doloribus accusamuslaudantium minima magnam odit quod aliquid repudiandae cupiditatedolore error, quis voluptatum consequatur delectus quas, quaeratimpedit autem. Molestias nostrum consectetur nam amet quae doloresvoluptatum eius!",
    },
  ];
  const address = [
    {
      desc: "A small river named Duden flows by their place and supplies",
      phone: 9384641042,
    },
    {
      title: "take away",
      address:
        "Cloud Kitchen Opp to koyambedu bus stand, jai nagar, 2nd main road, arumbakkam",
    },
    {
      days: "Monday - Friday",
      time: "9 am - 8 pm",
    },
  ];

  return (
    <>
      <EmblaCarousel slides={slides} />
      <Address address={address} />
      <About about={about} />
      <Menu />
      <Testimony />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
