import styles from "./styles.module.scss";
import Link from "next/link";

export default function NavBar() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_icon}>
          <a href="#">
            <picture>
              <img src="Assets/navbar/image01.png" alt="" />
            </picture>
          </a>
        </div>
        <div className={styles.box_card}>
          {" "}
          <a href="#">
            <picture>
              <img
                src="Assets/navbar/image02.png"
                className={styles.img}
                alt=""
              />
            </picture>
          </a>
        </div>
        <div className={styles.box_menu}>
          <Link href="#" className={styles.options}>
            Vídeos e Telas
          </Link>
          <Link href="#" className={styles.options}>
            Bastidores
          </Link>
          <Link href="#guns" className={styles.options}>
            Armas
          </Link>
          <Link href="#" className={styles.button}>
            Compre Agora
          </Link>
        </div>
      </div>
    </section>
  );
}
