import type { Metadata } from "next";
import styles from "../cgu/page.module.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: {
    absolute: "Politique de confidentialité Artiz | Digitalloom",
  },
  description: "Politique de confidentialité de l’application Artiz.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/artiz/confidentialite",
    languages: {
      "fr-FR": "/artiz/confidentialite",
    },
  },
  openGraph: {
    title: "Politique de confidentialité Artiz | Digitalloom",
    description: "Politique de confidentialité de l’application Artiz.",
    url: "/artiz/confidentialite",
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
    id: "responsable-du-traitement",
    title: "Responsable du traitement",
    content: (
      <>
        <p>
          L’application Artiz est éditée par :
        </p>
        <address>
          Digitalloom<br />
          Micro-entreprise<br />
          France
        </address>
        <p>
          Adresse e-mail de contact : <ContactEmail />
        </p>
        <p>
          Pour toute question concernant vos données personnelles ou l’exercice de vos droits, vous pouvez contacter l’éditeur à cette adresse.
        </p>
      </>
    ),
  },
  {
    id: "donnees-collectees",
    title: "Données collectées",
    content: (
      <>
        <p>
          Selon votre utilisation d’Artiz, les catégories de données suivantes peuvent être traitées.
        </p>
        <h3>Données de compte</h3>
        <p>
          Lors de la création d’un compte, Artiz peut collecter :
        </p>
        <ul>
          <li>votre nom ou nom public ;</li>
          <li>votre adresse e-mail ;</li>
          <li>votre type de compte : particulier ou professionnel ;</li>
          <li>les informations nécessaires à l’authentification de votre compte.</li>
        </ul>
        <p>
          Les mots de passe sont gérés par le service d’authentification Supabase et ne sont pas accessibles en clair par Artiz.
        </p>
        <h3>Données du profil</h3>
        <p>
          Vous pouvez compléter votre profil avec notamment :
        </p>
        <ul>
          <li>un nom public ;</li>
          <li>une photographie de profil ;</li>
          <li>une ville ;</li>
          <li>une biographie ;</li>
          <li>des informations relatives à votre activité professionnelle ;</li>
          <li>une image de couverture ;</li>
          <li>vos catégories ou domaines d’activité.</li>
        </ul>
        <p>
          Certaines de ces informations sont visibles par les autres utilisateurs d’Artiz.
        </p>
        <h3>Données des professionnels</h3>
        <p>
          Pour les comptes professionnels, Artiz demande notamment :
        </p>
        <ul>
          <li>un nom commercial ;</li>
          <li>un numéro SIRET ;</li>
          <li>des informations permettant de vérifier l’existence de l’entreprise et la cohérence du compte professionnel.</li>
        </ul>
        <p>
          Le statut professionnel est vérifié avant l’accès à certaines fonctionnalités réservées aux professionnels.
        </p>
        <h3>Publications et contenus</h3>
        <p>
          Lorsque vous utilisez Artiz, vous pouvez publier ou transmettre :
        </p>
        <ul>
          <li>des réalisations ;</li>
          <li>des besoins ou demandes ;</li>
          <li>du texte ;</li>
          <li>des photographies ;</li>
          <li>des commentaires ou interactions ;</li>
          <li>des avis ;</li>
          <li>des réponses à des publications.</li>
        </ul>
        <p>
          Ces contenus peuvent être visibles par d’autres utilisateurs selon leur nature.
        </p>
        <h3>Messagerie</h3>
        <p>
          Artiz permet l’échange de messages entre utilisateurs lorsque les règles de mise en relation de la plateforme l’autorisent.
        </p>
        <p>
          Les messages sont stockés afin de permettre le fonctionnement de la messagerie, l’affichage de l’historique des conversations et la gestion des messages lus ou non lus.
        </p>
        <h3>Données de support et signalements</h3>
        <p>
          Lorsque vous contactez le support ou signalez un problème, Artiz peut traiter :
        </p>
        <ul>
          <li>votre identifiant de compte ;</li>
          <li>le contenu de votre demande ;</li>
          <li>la page depuis laquelle le signalement a été effectué ;</li>
          <li>certaines informations techniques liées à l’application ;</li>
          <li>une capture d’écran si vous choisissez d’en joindre une.</li>
        </ul>
        <p>
          Ces informations servent au traitement de la demande et à l’amélioration du fonctionnement d’Artiz.
        </p>
        <h3>Journaux techniques</h3>
        <p>
          Artiz peut enregistrer certains événements techniques tels que :
        </p>
        <ul>
          <li>erreurs de l’application ;</li>
          <li>avertissements techniques ;</li>
          <li>page concernée ;</li>
          <li>contexte technique nécessaire au diagnostic ;</li>
          <li>identifiant interne de l’utilisateur lorsqu’il est connecté.</li>
        </ul>
        <p>
          Artiz cherche à limiter les informations enregistrées dans ces journaux et à ne pas y inclure inutilement de données personnelles sensibles.
        </p>
        <p>
          Les journaux techniques sont conservés temporairement puis supprimés automatiquement.
        </p>
        <h3>Notifications</h3>
        <p>
          Si vous autorisez les notifications, Artiz peut enregistrer un identifiant technique de notification associé à votre appareil afin de vous envoyer des notifications telles que :
        </p>
        <ul>
          <li>nouveaux messages ;</li>
          <li>réponses à vos demandes ;</li>
          <li>événements liés à votre compte ;</li>
          <li>notifications administratives lorsqu’elles vous concernent.</li>
        </ul>
        <p>
          Vous pouvez désactiver les notifications depuis l’application ou depuis les paramètres de votre téléphone.
        </p>
      </>
    ),
  },
  {
    id: "photographies-et-acces-aux-fichiers",
    title: "Photographies et accès aux fichiers",
    content: (
      <>
        <p>
          Artiz peut demander l’accès aux photographies de votre appareil lorsque vous choisissez vous-même d’ajouter une image, par exemple pour :
        </p>
        <ul>
          <li>votre profil ;</li>
          <li>une publication ;</li>
          <li>un besoin ;</li>
          <li>une réalisation ;</li>
          <li>une capture destinée au support.</li>
        </ul>
        <p>
          Artiz n’accède pas à vos photographies sans action de votre part.
        </p>
        <p>
          Les images sélectionnées peuvent être compressées ou optimisées avant leur envoi afin de réduire leur taille et leur consommation de stockage.
        </p>
      </>
    ),
  },
  {
    id: "finalites-des-traitements",
    title: "Finalités des traitements",
    content: (
      <>
        <p>
          Les données collectées sont utilisées pour :
        </p>
        <ul>
          <li>créer et sécuriser les comptes utilisateurs ;</li>
          <li>authentifier les utilisateurs ;</li>
          <li>afficher et gérer les profils ;</li>
          <li>permettre aux professionnels de présenter leurs activités ;</li>
          <li>permettre aux particuliers de rechercher des professionnels ;</li>
          <li>publier et consulter des réalisations ou demandes ;</li>
          <li>permettre la mise en relation et la messagerie ;</li>
          <li>gérer les avis, interactions et fonctionnalités sociales ;</li>
          <li>envoyer des notifications liées à l’activité du compte ;</li>
          <li>traiter les signalements et demandes d’assistance ;</li>
          <li>assurer la sécurité de la plateforme ;</li>
          <li>prévenir les abus et tentatives de contournement des règles d’Artiz ;</li>
          <li>diagnostiquer les erreurs techniques ;</li>
          <li>améliorer le fonctionnement de l’application.</li>
        </ul>
      </>
    ),
  },
  {
    id: "bases-juridiques",
    title: "Bases juridiques",
    content: (
      <>
        <p>
          Selon la nature du traitement, Artiz traite vos données sur les bases suivantes :
        </p>
        <h3>Exécution du service</h3>
        <p>
          Lorsque les données sont nécessaires pour créer votre compte, afficher votre profil, publier du contenu, utiliser la messagerie ou accéder aux principales fonctionnalités d’Artiz.
        </p>
        <h3>Intérêt légitime</h3>
        <p>
          Notamment pour assurer la sécurité de la plateforme, prévenir les abus, résoudre les problèmes techniques et améliorer le service.
        </p>
        <h3>Consentement</h3>
        <p>
          Lorsque votre autorisation est nécessaire, notamment pour certaines permissions du téléphone ou les notifications.
        </p>
        <h3>Obligations légales</h3>
        <p>
          Lorsque certaines informations doivent être conservées ou communiquées afin de respecter une obligation légale.
        </p>
      </>
    ),
  },
  {
    id: "destinataires-et-prestataires",
    title: "Destinataires et prestataires",
    content: (
      <>
        <p>
          Les données peuvent être traitées par les services techniques nécessaires au fonctionnement d’Artiz.
        </p>
        <h3>Supabase</h3>
        <p>
          Artiz utilise Supabase notamment pour :
        </p>
        <ul>
          <li>la base de données ;</li>
          <li>l’authentification ;</li>
          <li>le stockage de fichiers ;</li>
          <li>les fonctions serveur ;</li>
          <li>certains services temps réel.</li>
        </ul>
        <h3>Expo</h3>
        <p>
          Artiz utilise des services Expo notamment pour la construction et la distribution technique de l’application ainsi que pour certaines fonctionnalités de notifications push.
        </p>
        <h3>Firebase / Google</h3>
        <p>
          Firebase Cloud Messaging peut être utilisé pour l’acheminement des notifications sur les appareils Android.
        </p>
        <h3>Services externes nécessaires aux vérifications professionnelles</h3>
        <p>
          Certaines informations professionnelles, telles qu’un SIRET, peuvent être comparées avec des données issues de registres ou services officiels afin de permettre la vérification des comptes professionnels.
        </p>
        <p>
          Artiz ne vend pas les données personnelles de ses utilisateurs.
        </p>
        <p>
          Les données ne sont pas transmises à des partenaires publicitaires pour créer des profils publicitaires personnalisés.
        </p>
      </>
    ),
  },
  {
    id: "hebergement-et-transferts-de-donnees",
    title: "Hébergement et transferts de données",
    content: (
      <>
        <p>
          Certains prestataires utilisés par Artiz peuvent traiter des données depuis des infrastructures situées dans différents pays.
        </p>
        <p>
          Lorsque des données personnelles font l’objet d’un transfert hors de l’Espace économique européen, Artiz s’appuie sur les mécanismes de protection prévus par la réglementation applicable et sur les garanties proposées par ses prestataires.
        </p>
      </>
    ),
  },
  {
    id: "duree-de-conservation",
    title: "Durée de conservation",
    content: (
      <>
        <p>
          Les données du compte sont conservées pendant la durée d’utilisation du service.
        </p>
        <p>
          Les contenus publiés et données associées sont conservés tant que le compte existe ou jusqu’à leur suppression lorsqu’une fonctionnalité permet leur suppression.
        </p>
        <p>
          Les journaux techniques sont conservés pendant une durée limitée, actuellement fixée à 60 jours, sauf nécessité exceptionnelle liée à la sécurité ou à l’analyse d’un incident.
        </p>
        <p>
          Les demandes de support peuvent être conservées pendant la durée nécessaire à leur traitement et au suivi des problèmes techniques.
        </p>
        <p>
          Certaines données peuvent exceptionnellement être conservées plus longtemps lorsqu’une obligation légale, une procédure ou la prévention d’une fraude le nécessite.
        </p>
      </>
    ),
  },
  {
    id: "suppression-du-compte",
    title: "Suppression du compte",
    content: (
      <>
        <p>
          Vous pouvez supprimer votre compte directement depuis l’application :
        </p>
        <p>
          <code>Mon profil → Paramètres → Supprimer mon compte</code>
        </p>
        <p>
          Pour éviter une suppression accidentelle, Artiz demande une confirmation explicite avant l’opération.
        </p>
        <p>
          La suppression du compte entraîne notamment la suppression des données associées au compte, telles que le profil, les publications, demandes, messages, fichiers et autres informations rattachées au compte, sous réserve des éventuelles obligations légales de conservation.
        </p>
        <p>
          Après suppression, cette opération est irréversible.
        </p>
        <p>
          Une page Web dédiée à la suppression du compte est disponible à l’adresse suivante :
        </p>
        <p>
          <a href="/artiz/suppression-compte">https://digitalloom.fr/artiz/suppression-compte</a>
        </p>
      </>
    ),
  },
  {
    id: "vos-droits",
    title: "Vos droits",
    content: (
      <>
        <p>
          Conformément à la réglementation applicable sur la protection des données, notamment le RGPD, vous disposez notamment des droits suivants :
        </p>
        <ul>
          <li>droit d’accès à vos données ;</li>
          <li>droit de rectification ;</li>
          <li>droit à l’effacement ;</li>
          <li>droit à la limitation du traitement ;</li>
          <li>droit d’opposition lorsque ce droit est applicable ;</li>
          <li>droit à la portabilité lorsque ce droit est applicable ;</li>
          <li>droit de retirer votre consentement lorsqu’un traitement est basé sur celui-ci.</li>
        </ul>
        <p>
          Vous pouvez exercer vos droits en contactant :
        </p>
        <p>
          <ContactEmail />
        </p>
        <p>
          Une vérification de votre identité pourra être demandée lorsqu’elle est nécessaire afin d’éviter qu’une personne non autorisée accède à vos données.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la Commission nationale de l’informatique et des libertés (CNIL).
        </p>
      </>
    ),
  },
  {
    id: "securite",
    title: "Sécurité",
    content: (
      <>
        <p>
          Artiz met en œuvre des mesures techniques et organisationnelles destinées à protéger les données personnelles.
        </p>
        <p>
          Cela comprend notamment :
        </p>
        <ul>
          <li>des règles d’accès aux données côté serveur ;</li>
          <li>l’utilisation de politiques de sécurité au niveau de la base de données ;</li>
          <li>la séparation des droits entre particuliers, professionnels et administrateurs ;</li>
          <li>l’utilisation de connexions sécurisées ;</li>
          <li>l’absence de clés administrateur dans l’application mobile ;</li>
          <li>le contrôle côté serveur de certaines opérations sensibles ;</li>
          <li>la limitation des accès aux fichiers stockés ;</li>
          <li>la journalisation contrôlée des erreurs techniques.</li>
        </ul>
        <p>
          Aucun système informatique ne peut toutefois garantir une sécurité absolue.
        </p>
      </>
    ),
  },
  {
    id: "comptes-professionnels",
    title: "Comptes professionnels",
    content: (
      <>
        <p>
          Un numéro SIRET valide ne constitue pas à lui seul une preuve que la personne inscrite est autorisée à représenter l’entreprise concernée.
        </p>
        <p>
          Artiz peut donc appliquer une vérification supplémentaire ou une validation manuelle avant d’accorder les fonctionnalités professionnelles.
        </p>
        <p>
          Les informations utilisées exclusivement pour cette vérification ne sont pas nécessairement visibles publiquement.
        </p>
      </>
    ),
  },
  {
    id: "mineurs",
    title: "Mineurs",
    content: (
      <>
        <p>
          Artiz n’est pas spécifiquement destiné aux enfants.
        </p>
        <p>
          Les utilisateurs mineurs doivent utiliser le service conformément aux règles applicables à leur âge et, lorsque cela est requis, avec l’autorisation de leur représentant légal.
        </p>
      </>
    ),
  },
  {
    id: "modification-de-la-politique",
    title: "Modification de la politique",
    content: (
      <>
        <p>
          Cette politique de confidentialité peut être mise à jour lorsque les fonctionnalités d’Artiz évoluent, lorsque de nouveaux traitements sont mis en œuvre ou lorsque la réglementation l’exige.
        </p>
        <p>
          La date de dernière mise à jour indiquée en haut de cette page permet d’identifier la version applicable.
        </p>
        <p>
          En cas de modification importante concernant l’utilisation des données personnelles, les utilisateurs pourront être informés par un moyen approprié.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <p>
          Pour toute question concernant cette politique ou vos données personnelles :
        </p>
        <p>
          Artiz – Digitalloom<br />
          E-mail : <ContactEmail />
        </p>
      </>
    ),
  },
];

export default function ArtizPrivacyPage() {
  return (
    <main className={styles.page}>
      <article className={styles.document} aria-labelledby="privacy-title">
        <header className={styles.header}>
          <p className={styles.brand}>
            Digitalloom <span aria-hidden="true">/</span> Artiz
          </p>
          <h1 id="privacy-title">
            Politique de confidentialité – <span>Artiz</span>
          </h1>
          <p className={styles.updated}>
            Dernière mise à jour : <time dateTime="2026-09-30">30 septembre 2026</time>
          </p>
        </header>

        <details className={styles.contents}>
          <summary>Sommaire</summary>
          <nav aria-label="Sommaire de la politique de confidentialité">
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </details>

        <div className={styles.section}>
          <p>
            La présente politique de confidentialité explique comment l’application Artiz collecte, utilise, stocke et protège les données personnelles de ses utilisateurs.
          </p>
          <p>
            Artiz est un réseau social local permettant notamment aux particuliers de découvrir et contacter des professionnels, et aux professionnels de présenter leur activité, leurs réalisations et de répondre à des besoins publiés sur la plateforme.
          </p>
        </div>

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
