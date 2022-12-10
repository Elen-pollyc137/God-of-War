import { IconArrow, IconArrowLeft } from "./icon";
import styles from "./styles.module.scss";

export default function VideoReels() {
  const Icon = [
    {
      id: 1,
      img: "Assets/videoreels/image01.png",
      text: <>Kratos</>,
    },
    {
      id: 2,
      img: "Assets/videoreels/image02.png",
      text: <>Atreus</>,
    },
    {
      id: 3,
      img: "Assets/videoreels/image03.png",
      text: <>Freya</>,
    },
    {
      id: 4,
      img: "Assets/videoreels/image04.png",
      text: <>Angrboda</>,
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          Os maiores heróis dos Noves Reinos{" "}
        </div>

        <div className={styles.box_cards}>
          <IconArrowLeft />
          {Icon.map(({ id, img, text }) => (
            <div key={id} className={styles.options}>
              <div className={styles.box_img}>
                <picture>
                  <img src={img} alt="Landscape picture" />
                </picture>
                <p>{text}</p>
              </div>
            </div>
          ))}
          <IconArrow />
        </div>
      </div>
    </section>
  );
}
