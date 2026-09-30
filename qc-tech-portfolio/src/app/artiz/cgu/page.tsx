import type { Metadata } from "next";
import styles from "./page.module.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: {
    absolute: "Conditions Générales d’Utilisation Artiz | Digitalloom",
  },
  description: "Conditions Générales d’Utilisation de l’application Artiz.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/artiz/cgu",
    languages: {
      "fr-FR": "/artiz/cgu",
    },
  },
  openGraph: {
    title: "Conditions Générales d’Utilisation Artiz | Digitalloom",
    description: "Conditions Générales d’Utilisation de l’application Artiz.",
    url: "/artiz/cgu",
    type: "website",
  },
};

function ContactEmail() {
  return (
    <a href="mailto:quentin.cordiero@gmail.com">quentin.cordiero@gmail.com</a>
  );
}

const sections = [
  {
    id: "objet",
    title: "Objet",
    content: (
      <>
        <p>
          Les présentes Conditions Générales d’Utilisation, ci-après « CGU », ont
          pour objet de définir les règles d’accès et d’utilisation de
          l’application Artiz.
        </p>
        <p>
          Artiz est un réseau social et une plateforme de mise en relation
          permettant notamment aux particuliers de découvrir des professionnels,
          artisans et indépendants, et aux professionnels de présenter leur
          activité, leurs réalisations et de répondre à certains besoins publiés
          sur la plateforme.
        </p>
        <p>L’utilisation d’Artiz implique l’acceptation des présentes CGU.</p>
      </>
    ),
  },
  {
    id: "editeur",
    title: "Éditeur",
    content: (
      <>
        <p>Artiz est édité par :</p>
        <address>
          Digitalloom
          <br />
          Micro-entreprise
          <br />
          France
        </address>
        <p>Contact : <ContactEmail /></p>
      </>
    ),
  },
  {
    id: "acces-au-service",
    title: "Accès au service",
    content: (
      <>
        <p>
          L’accès à certaines fonctionnalités d’Artiz nécessite la création d’un
          compte.
        </p>
        <p>
          L’utilisateur s’engage à fournir des informations exactes et à maintenir
          les informations de son compte à jour.
        </p>
        <p>
          Chaque utilisateur est responsable de la confidentialité de ses
          identifiants et des actions réalisées depuis son compte.
        </p>
      </>
    ),
  },
  {
    id: "types-de-comptes",
    title: "Types de comptes",
    content: (
      <>
        <p>Artiz distingue notamment deux types de comptes :</p>
        <h3>Particuliers</h3>
        <p>
          Les particuliers peuvent notamment consulter des profils professionnels,
          découvrir des réalisations, publier des besoins et contacter des
          professionnels lorsque les fonctionnalités de la plateforme le
          permettent.
        </p>
        <h3>Professionnels</h3>
        <p>
          Les professionnels peuvent notamment présenter leur activité, publier
          leurs réalisations et répondre aux besoins des particuliers lorsque
          leur compte professionnel est autorisé à utiliser ces fonctionnalités.
        </p>
      </>
    ),
  },
  {
    id: "verification-des-professionnels",
    title: "Vérification des professionnels",
    content: (
      <>
        <p>
          La création d’un compte professionnel nécessite notamment la fourniture
          d’un numéro SIRET valide.
        </p>
        <p>
          La validité d’un SIRET ne constitue pas à elle seule une preuve que
          l’utilisateur est habilité à représenter l’entreprise concernée.
        </p>
        <p>
          Artiz se réserve donc le droit de procéder à une vérification
          complémentaire et à une validation manuelle avant d’accorder les
          fonctionnalités réservées aux professionnels.
        </p>
        <p>
          Artiz peut refuser ou suspendre le statut professionnel lorsqu’une
          anomalie ou une incohérence est détectée.
        </p>
      </>
    ),
  },
  {
    id: "utilisation-de-la-plateforme",
    title: "Utilisation de la plateforme",
    content: (
      <>
        <p>
          Chaque utilisateur s’engage à utiliser Artiz de manière loyale, légale
          et respectueuse.
        </p>
        <p>Il est notamment interdit :</p>
        <ul>
          <li>de publier du contenu illégal ;</li>
          <li>de publier du contenu frauduleux, trompeur ou usurpant l’identité d’un tiers ;</li>
          <li>d’utiliser Artiz pour harceler, menacer ou nuire à une autre personne ;</li>
          <li>de tenter de contourner les règles de sécurité ou les restrictions techniques de la plateforme ;</li>
          <li>d’accéder sans autorisation aux données ou comptes d’autres utilisateurs ;</li>
          <li>d’utiliser Artiz pour envoyer du spam ;</li>
          <li>de détourner les fonctionnalités de mise en relation à des fins abusives ;</li>
          <li>de publier du contenu portant atteinte aux droits de propriété intellectuelle d’un tiers.</li>
        </ul>
      </>
    ),
  },
  {
    id: "regles-de-mise-en-relation",
    title: "Règles de mise en relation",
    content: (
      <>
        <p>
          Artiz met en place des règles destinées à limiter le démarchage non
          sollicité et les usages abusifs de la messagerie.
        </p>
        <p>
          Les possibilités de contact entre utilisateurs peuvent notamment
          dépendre :
        </p>
        <ul>
          <li>du type de compte ;</li>
          <li>de l’existence d’une publication ou d’un besoin ;</li>
          <li>d’une demande de devis ;</li>
          <li>d’une interaction préalable autorisée par la plateforme.</li>
        </ul>
        <p>
          Artiz peut limiter certaines communications entre utilisateurs afin de
          préserver la vocation de la plateforme.
        </p>
      </>
    ),
  },
  {
    id: "publications-et-contenus",
    title: "Publications et contenus",
    content: (
      <>
        <p>L’utilisateur reste responsable des contenus qu’il publie sur Artiz.</p>
        <p>
          Il garantit disposer des droits nécessaires pour publier les textes,
          photographies, images et autres contenus transmis à la plateforme.
        </p>
        <p>L’utilisateur conserve ses droits sur ses contenus.</p>
        <p>
          En publiant un contenu sur Artiz, l’utilisateur autorise Artiz à
          l’héberger, le reproduire techniquement et l’afficher dans le cadre du
          fonctionnement normal du service.
        </p>
        <p>
          Cette autorisation est limitée aux besoins de fonctionnement et de
          présentation de la plateforme.
        </p>
      </>
    ),
  },
  {
    id: "contenus-interdits",
    title: "Contenus interdits",
    content: (
      <>
        <p>Artiz peut retirer tout contenu :</p>
        <ul>
          <li>manifestement illégal ;</li>
          <li>frauduleux ;</li>
          <li>violent ou menaçant ;</li>
          <li>discriminatoire ;</li>
          <li>diffamatoire ;</li>
          <li>portant atteinte à la vie privée ;</li>
          <li>portant atteinte aux droits d’un tiers ;</li>
          <li>constituant du spam ;</li>
          <li>contraire à la finalité de la plateforme.</li>
        </ul>
        <p>
          Selon la gravité de la situation, Artiz peut également suspendre ou
          supprimer le compte concerné.
        </p>
      </>
    ),
  },
  {
    id: "avis",
    title: "Avis",
    content: (
      <>
        <p>
          Les utilisateurs peuvent être amenés à publier des avis ou évaluations
          concernant des professionnels.
        </p>
        <p>
          Les avis doivent correspondre à une expérience réelle et être rédigés
          de manière loyale.
        </p>
        <p>
          Les faux avis, avis achetés, avis publiés dans le but de nuire
          artificiellement à une personne ou à une entreprise et manipulations du
          système d’évaluation sont interdits.
        </p>
      </>
    ),
  },
  {
    id: "responsabilite-des-utilisateurs",
    title: "Responsabilité des utilisateurs",
    content: (
      <>
        <p>Les utilisateurs restent seuls responsables :</p>
        <ul>
          <li>de leurs publications ;</li>
          <li>de leurs messages ;</li>
          <li>des informations renseignées dans leur profil ;</li>
          <li>des prestations qu’ils proposent ou acceptent ;</li>
          <li>des engagements pris avec d’autres utilisateurs.</li>
        </ul>
        <p>
          Artiz n’est pas partie aux contrats ou accords éventuellement conclus
          entre utilisateurs.
        </p>
      </>
    ),
  },
  {
    id: "role-artiz",
    title: "Rôle d’Artiz",
    content: (
      <>
        <p>Artiz fournit un outil de mise en relation et de communication.</p>
        <p>Sauf indication contraire explicite, Artiz :</p>
        <ul>
          <li>n’est pas l’employeur des professionnels inscrits ;</li>
          <li>n’est pas leur mandataire ;</li>
          <li>n’exécute pas les prestations proposées ;</li>
          <li>ne garantit pas la qualité d’une prestation ;</li>
          <li>ne fixe pas les tarifs pratiqués par les professionnels.</li>
        </ul>
        <p>
          Les utilisateurs restent libres de décider avec qui ils souhaitent
          entrer en relation et de vérifier les informations nécessaires avant de
          conclure un accord.
        </p>
      </>
    ),
  },
  {
    id: "disponibilite-du-service",
    title: "Disponibilité du service",
    content: (
      <>
        <p>Artiz cherche à maintenir son service disponible dans de bonnes conditions.</p>
        <p>Toutefois, l’accès peut être temporairement interrompu notamment pour :</p>
        <ul>
          <li>maintenance ;</li>
          <li>mise à jour ;</li>
          <li>correction de bugs ;</li>
          <li>problème technique ;</li>
          <li>incident de sécurité ;</li>
          <li>événement indépendant de la volonté de l’éditeur.</li>
        </ul>
        <p>Aucune disponibilité permanente et sans interruption ne peut être garantie.</p>
      </>
    ),
  },
  {
    id: "evolution-du-service",
    title: "Évolution du service",
    content: (
      <>
        <p>Artiz est susceptible d’évoluer régulièrement.</p>
        <p>Des fonctionnalités peuvent être ajoutées, modifiées ou supprimées.</p>
        <p>
          Les présentes CGU peuvent également évoluer afin de tenir compte des
          nouvelles fonctionnalités, contraintes techniques ou évolutions
          réglementaires.
        </p>
      </>
    ),
  },
  {
    id: "signalement-et-support",
    title: "Signalement et support",
    content: (
      <>
        <p>
          Un utilisateur peut signaler un problème ou certains contenus
          directement depuis les fonctionnalités prévues dans Artiz.
        </p>
        <p>Le support peut également être contacté à :</p>
        <p><ContactEmail /></p>
        <p>
          Les signalements abusifs ou volontairement mensongers peuvent entraîner
          des mesures à l’encontre du compte concerné.
        </p>
      </>
    ),
  },
  {
    id: "suspension-et-suppression",
    title: "Suspension et suppression d’un compte",
    content: (
      <>
        <p>Artiz peut suspendre temporairement ou définitivement un compte notamment en cas :</p>
        <ul>
          <li>de violation des présentes CGU ;</li>
          <li>de fraude ;</li>
          <li>de tentative de contournement des règles de sécurité ;</li>
          <li>de publication répétée de contenus interdits ;</li>
          <li>d’utilisation abusive de la messagerie ;</li>
          <li>d’usurpation d’identité ;</li>
          <li>de comportement portant atteinte aux autres utilisateurs ou au fonctionnement du service.</li>
        </ul>
        <p>
          Lorsqu’elle est possible et adaptée à la situation, une information
          pourra être fournie à l’utilisateur concerné.
        </p>
      </>
    ),
  },
  {
    id: "suppression-volontaire-du-compte",
    title: "Suppression volontaire du compte",
    content: (
      <>
        <p>Un utilisateur peut supprimer son compte depuis l’application Artiz.</p>
        <p>La suppression est accessible depuis :</p>
        <p><code>Mon profil → Paramètres → Supprimer mon compte</code></p>
        <p>Une confirmation explicite est demandée avant l’opération.</p>
        <p>La suppression est irréversible.</p>
        <p>
          Les modalités concernant la suppression des données personnelles sont
          précisées dans la Politique de confidentialité d’Artiz.
        </p>
      </>
    ),
  },
  {
    id: "donnees-personnelles",
    title: "Données personnelles",
    content: (
      <>
        <p>
          Le traitement des données personnelles effectué dans le cadre d’Artiz
          est décrit dans une Politique de confidentialité distincte.
        </p>
        <p>Cette politique précise notamment :</p>
        <ul>
          <li>les catégories de données collectées ;</li>
          <li>leur utilisation ;</li>
          <li>les prestataires techniques ;</li>
          <li>les durées de conservation ;</li>
          <li>les droits des utilisateurs ;</li>
          <li>les modalités de suppression du compte.</li>
        </ul>
      </>
    ),
  },
  {
    id: "propriete-intellectuelle",
    title: "Propriété intellectuelle",
    content: (
      <>
        <p>
          La marque, le nom, l’identité visuelle, les éléments graphiques,
          l’interface et les éléments propres à Artiz restent la propriété de leur
          titulaire respectif.
        </p>
        <p>
          Sauf autorisation, il est interdit de reproduire ou exploiter ces
          éléments en dehors de l’utilisation normale de l’application.
        </p>
        <p>
          Les contenus publiés par les utilisateurs restent soumis aux droits de
          leurs auteurs respectifs.
        </p>
      </>
    ),
  },
  {
    id: "limitation-de-responsabilite",
    title: "Limitation de responsabilité",
    content: (
      <>
        <p>Artiz ne peut garantir :</p>
        <ul>
          <li>l’exactitude de toutes les informations renseignées par les utilisateurs ;</li>
          <li>la qualité des prestations proposées par les professionnels ;</li>
          <li>la solvabilité d’un utilisateur ;</li>
          <li>l’absence totale de comportement frauduleux.</li>
        </ul>
        <p>
          Les utilisateurs doivent effectuer les vérifications qu’ils jugent
          nécessaires avant toute prestation, paiement ou engagement avec une
          autre personne.
        </p>
        <p>
          Artiz met toutefois en œuvre des mécanismes de modération, de
          signalement et de contrôle destinés à limiter les abus.
        </p>
      </>
    ),
  },
  {
    id: "securite",
    title: "Sécurité",
    content: (
      <>
        <p>Toute tentative visant à compromettre la sécurité d’Artiz est interdite.</p>
        <p>Cela inclut notamment :</p>
        <ul>
          <li>tentative d’accès à des comptes tiers ;</li>
          <li>exploitation volontaire d’une faille ;</li>
          <li>contournement des contrôles d’accès ;</li>
          <li>extraction massive non autorisée de données ;</li>
          <li>attaque contre les infrastructures de la plateforme.</li>
        </ul>
        <p>La découverte d’une faille de sécurité peut être signalée à :</p>
        <p><ContactEmail /></p>
      </>
    ),
  },
  {
    id: "droit-applicable",
    title: "Droit applicable",
    content: (
      <>
        <p>Les présentes CGU sont soumises au droit français.</p>
        <p>
          En cas de différend, les parties sont invitées à rechercher
          préalablement une solution amiable.
        </p>
        <p>
          Les règles légales applicables concernant la compétence des
          juridictions restent pleinement applicables.
        </p>
      </>
    ),
  },
  {
    id: "modification-des-cgu",
    title: "Modification des CGU",
    content: (
      <>
        <p>Artiz peut modifier les présentes CGU lorsque cela est nécessaire.</p>
        <p>
          La date de dernière mise à jour figurant en haut du document permet
          d’identifier la version actuellement applicable.
        </p>
        <p>
          Lorsque les modifications sont importantes, une information pourra être
          présentée aux utilisateurs.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <p>Pour toute question relative à Artiz ou aux présentes CGU :</p>
        <p>
          Artiz – Digitalloom
          <br />
          E-mail : <ContactEmail />
        </p>
      </>
    ),
  },
];

export default function ArtizTermsPage() {
  return (
    <main className={styles.page}>
      <article className={styles.document} aria-labelledby="cgu-title">
        <header className={styles.header}>
          <p className={styles.brand}>
            Digitalloom <span aria-hidden="true">/</span> Artiz
          </p>
          <h1 id="cgu-title">
            Conditions Générales d’Utilisation – <span>Artiz</span>
          </h1>
          <p className={styles.updated}>
            Dernière mise à jour : <time dateTime="2026-09-30">30 septembre 2026</time>
          </p>
        </header>

        <details className={styles.contents}>
          <summary>Sommaire</summary>
          <nav aria-label="Sommaire des conditions d’utilisation">
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </details>

        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={styles.section}
            aria-labelledby={`${section.id}-title`}
          >
            <h2 id={`${section.id}-title`}>{index + 1}. {section.title}</h2>
            {section.content}
          </section>
        ))}
      </article>
    </main>
  );
}
