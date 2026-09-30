import type { Metadata } from "next";
import styles from "../cgu/page.module.css";
import deletionStyles from "./page.module.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: {
    absolute: "Suppression de compte Artiz | Digitalloom",
  },
  description:
    "Comment supprimer votre compte Artiz et ses données, ou contacter le support si vous n’avez plus accès à l’application.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/artiz/suppression-compte",
    languages: {
      "fr-FR": "/artiz/suppression-compte",
    },
  },
  openGraph: {
    title: "Suppression de compte Artiz | Digitalloom",
    description:
      "Comment supprimer votre compte Artiz et ses données, ou contacter le support si vous n’avez plus accès à l’application.",
    url: "/artiz/suppression-compte",
    type: "website",
  },
};

export default function ArtizAccountDeletionPage() {
  return (
    <main className={styles.page}>
      <article className={styles.document} aria-labelledby="deletion-title">
        <header className={styles.header}>
          <p className={styles.brand}>
            Digitalloom <span aria-hidden="true">/</span> Artiz
          </p>
          <h1 id="deletion-title">
            Suppression de compte – <span>Artiz</span>
          </h1>
          <p className={styles.updated}>
            Dernière mise à jour : <time dateTime="2026-09-30">30 septembre 2026</time>
          </p>
        </header>

        <div className={`${styles.section} ${deletionStyles.intro}`}>
          <p>
            Vous pouvez supprimer votre compte Artiz et les données qui lui sont
            associées depuis l’application. Artiz est édité par Digitalloom.
          </p>
          <p>
            Vous n’avez plus accès à l’application ?{" "}
            <a href="#contacter-le-support">Demandez la suppression au support.</a>
          </p>
        </div>

        <section
          className={styles.section}
          aria-labelledby="supprimer-dans-application-title"
        >
          <h2 id="supprimer-dans-application-title">
            1. Supprimer votre compte depuis l’application
          </h2>
          <p>Dans l’application Artiz, suivez ce chemin :</p>
          <p>
            <code>Mon profil → Paramètres → Supprimer mon compte</code>
          </p>
          <ol className={deletionStyles.steps}>
            <li>Ouvrez Artiz et connectez-vous à votre compte.</li>
            <li>
              Rendez-vous dans <strong>Mon profil</strong>, puis dans{" "}
              <strong>Paramètres</strong>.
            </li>
            <li>
              Sélectionnez <strong>Supprimer mon compte</strong>.
            </li>
            <li>
              Lisez les informations affichées, puis confirmez explicitement la
              suppression lorsque l’application vous le demande.
            </li>
          </ol>
        </section>

        <section className={styles.section} aria-labelledby="donnees-supprimees-title">
          <h2 id="donnees-supprimees-title">2. Quelles données sont supprimées ?</h2>
          <p>
            La suppression du compte entraîne notamment la suppression des données
            qui lui sont associées :
          </p>
          <ul>
            <li>votre profil et les informations de votre compte ;</li>
            <li>vos publications, réalisations et demandes ;</li>
            <li>vos messages ;</li>
            <li>vos photographies et fichiers ;</li>
            <li>les autres informations rattachées à votre compte.</li>
          </ul>
          <p>
            Certaines données peuvent exceptionnellement être conservées lorsqu’une
            obligation légale, une procédure ou la prévention d’une fraude le
            nécessite. Les durées de conservation, notamment celles des journaux
            techniques et des demandes de support, sont précisées dans la{" "}
            <a href="/artiz/confidentialite#duree-de-conservation">
              politique de confidentialité d’Artiz
            </a>.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="suppression-definitive-title">
          <h2 id="suppression-definitive-title">3. Une suppression irréversible</h2>
          <p className={deletionStyles.notice}>
            <strong>La suppression de votre compte est définitive et irréversible.</strong>{" "}
            Une fois la suppression effectuée, vous ne pourrez pas récupérer votre
            compte ni les données supprimées.
          </p>
        </section>

        <section
          id="contacter-le-support"
          className={styles.section}
          aria-labelledby="contacter-le-support-title"
        >
          <h2 id="contacter-le-support-title">
            4. Vous n’avez plus accès à l’application ?
          </h2>
          <p>
            Vous pouvez demander la suppression de votre compte et des données
            associées par e-mail auprès du support Artiz, assuré par Digitalloom :
          </p>
          <p>
            <a href="mailto:quentin.cordiero@gmail.com?subject=Demande%20de%20suppression%20de%20compte%20Artiz">
              quentin.cordiero@gmail.com
            </a>
          </p>
          <p>
            Utilisez l’objet <strong>Demande de suppression de compte Artiz</strong>
            {" "}et indiquez l’adresse e-mail associée à votre compte ainsi que votre
            nom public pour permettre son identification. Précisez que vous
            souhaitez supprimer votre compte et ses données.
          </p>
          <p>
            Une vérification de votre identité pourra être demandée avant la
            suppression afin de protéger votre compte contre une demande non
            autorisée.
          </p>
        </section>
      </article>
    </main>
  );
}
