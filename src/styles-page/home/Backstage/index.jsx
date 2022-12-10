import styles from "./styles.module.scss";

export default function Backstage() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_left}>
          <picture>
            <img src="Assets/backstage/image02.png" alt="Landscape picture" />
          </picture>
          <picture>
            <img src="Assets/backstage/image03.png" alt="Landscape picture" />
          </picture>
          <picture>
            <img src="Assets/backstage/image04.png" alt="Landscape picture" />
          </picture>
        </div>
        <div className={styles.box_right}>
          <h2>Lute no Reino Nórdico</h2>
          <p>
            Com a vingança contra os deuses do Olímpo em um <br /> passado
            distante, Kratos agora vive como um mortal <br /> no reino dos
            deuses e monstros nórdicos. <br /> <br /> É nesse mundo duro e
            implacável que ele deve lutar <br /> para sobreviver... e ensinar
            seu filho a fazer o <br /> mesmo.
          </p>
        </div>
      </div>
    </section>
  );
}
