import styles from "./styles.module.scss";
import Link from "next/link";

export default function HeaderHero() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_title}>
          <h1>Um mundo mais sombrio e primitivo</h1>
          <p>
            Do mármore e colunas ornadas do Ólimpo para as florestas, este é um
            <br />
            reino novo, com suas próprias espécies de criaturas, monstros e
            deuses
          </p>
          <div className={styles.box_buttons}>
            <Link href="#" className={styles.button}>
              Compre Agora
            </Link>
            <Link href="#" className={styles.button_transparent}>
              sabia mais
            </Link>
          </div>
        </div>
        <div className={styles.box_cards}>
          {" "}
          <picture>
            <img
              src="Assets/headerhero/image03.png"
              className={styles.img}
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className={styles.blur}> </div>
    </section>
  );
}
