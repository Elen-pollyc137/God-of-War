import styles from "./styles.module.scss";

export default function Weapons() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_left}>
          <h2>Armas Lendárias</h2>
        </div>
        <div className={styles.box_right}>
          <div className={styles.options}>
            <div>
              <h2>
                Poder Rúnico <br /> Refinado
              </h2>
              <p>
                Novas habilidades permitem que Kratos use <br /> seu machado de
                maneira inéditas
              </p>
              <a href="#" className={styles.button}>
                {" "}
                Saiba Mais
              </a>
            </div>
            <div>
              <picture>
                <img src="Assets/weapons/image01.png" alt="Landscape picture" />
              </picture>
            </div>
          </div>
          <div className={styles.options}>
            {" "}
            <div>
              <h2>
                Mais do que um <br /> garoto com um arco
              </h2>
              <p>
                Atreus aprimorou suas habilidades de <br /> arquearia para
                desferir novos ataques
              </p>
              <a href="#" className={styles.button}>
                {" "}
                Saiba Mais
              </a>
            </div>
            <div>
              <picture>
                <img src="Assets/weapons/image02.png" alt="Landscape picture" />
              </picture>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
