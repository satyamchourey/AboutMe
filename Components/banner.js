import bannerImg from "../Assets/banner1.jpg";
import Image from "next/image";
export default function Banner() {
  return (
    <>
      <section>
        <Image src={bannerImg} />
      </section>
    </>
  );
}
