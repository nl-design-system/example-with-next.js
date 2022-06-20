import {
  UtrechtIconActueel,
  UtrechtIconAfval,
  UtrechtIconAfvalContainer,
  UtrechtIconAfvalkalender,
  UtrechtIconAfvalOphaal,
  UtrechtIconAfvalScheiden,
  UtrechtIconAgenda,
  UtrechtIconAirborne,
  UtrechtIconAttentie,
  UtrechtIconAuto,
  UtrechtIconBedrijventerrein,
  UtrechtIconBegroting,
  UtrechtIconBelastingen,
  UtrechtIconBevolking,
  UtrechtIconBevrijding,
  UtrechtIconBezwaarEnBeroep,
  UtrechtIconBijstandsuitkering,
  UtrechtIconBladerenOpruimen,
  UtrechtIconBouwenEnVerbouwen,
  UtrechtIconBrandgevaar,
  UtrechtIconBuitengebied,
  UtrechtIconComputerregeling,
  UtrechtIconContactGemeente,
  UtrechtIconContainer,
  UtrechtIconDocumenten,
  UtrechtIconDuurzaamheid,
  UtrechtIconEconomieWerkInkomen,
  UtrechtIconEikenprocessie,
  UtrechtIconEnergietransitie,
  UtrechtIconEvenementen,
  UtrechtIconFiets,
  UtrechtIconFormule1,
  UtrechtIconGebruikerCentraal,
  UtrechtIconGebruikerIngelogd,
  UtrechtIconGebruikersvraag,
  UtrechtIconGemeenteraad,
  UtrechtIconGemivaLocatie,
  UtrechtIconGezicht,
  UtrechtIconGladheid,
  UtrechtIconGrafiek,
  UtrechtIconGrofvuil,
  UtrechtIconHondenbelasting,
  UtrechtIconHorecavergunningen,
  UtrechtIconHuis,
  UtrechtIconHuisEnOmgeving,
  UtrechtIconHulpmiddelenVinden,
  UtrechtIconIdkaart,
  UtrechtIconInEnOmUwHuis,
  UtrechtIconInformatie,
  UtrechtIconInformatieEnBetalen,
  UtrechtIconInkomen,
  UtrechtIconJeugd,
  UtrechtIconKerstbomen,
  UtrechtIconKindEnFamilie,
  UtrechtIconKoningsdag,
  UtrechtIconKopenEnHuren,
  UtrechtIconKopenEnVerkopen,
  UtrechtIconLeerlingenvervoer,
  UtrechtIconLetOp,
  UtrechtIconLiefdadigheid,
  UtrechtIconLocatie,
  UtrechtIconManege,
  UtrechtIconMeeuwenoverlast,
  UtrechtIconMelding,
  UtrechtIconMeldingOpenbareRuimte,
  UtrechtIconMobiliteit,
  UtrechtIconMonitorAgrofood,
  UtrechtIconMonitorDuurzaamheid,
  UtrechtIconMonitorSociaal,
  UtrechtIconMonitorVirus,
  UtrechtIconMonitorWoningmarkt,
  UtrechtIconNatuurLandschap,
  UtrechtIconNieuwsbrief,
  UtrechtIconOmgeving,
  UtrechtIconOmgevingsvergunning,
  UtrechtIconOnderhoud,
  UtrechtIconOndernemen,
  UtrechtIconOnderscheidingen,
  UtrechtIconOnderwijs,
  UtrechtIconOpeningstijden,
  UtrechtIconOverDeGemeente,
  UtrechtIconOverDeStad,
  UtrechtIconParkeervoorzieningGehandicapten,
  UtrechtIconParkeren,
  UtrechtIconPaspoort,
  UtrechtIconPaspoortIdkaartGecombineerd,
  UtrechtIconPrijskaartje,
  UtrechtIconRaadEnCollege,
  UtrechtIconReclame,
  UtrechtIconRecreatie,
  UtrechtIconRegelingLaagInkomen,
  UtrechtIconRijbewijs,
  UtrechtIconSchoolkostenregeling,
  UtrechtIconSinterklaas,
  UtrechtIconSociaalZorgWelzijn,
  UtrechtIconSport,
  UtrechtIconSportCultureleActiviteit,
  UtrechtIconSportkledingMuziekinstrumenten,
  UtrechtIconStationSneltrein,
  UtrechtIconStationStoptrein,
  UtrechtIconStookverbod,
  UtrechtIconStrand,
  UtrechtIconSubsidie,
  UtrechtIconTemperatuurMelding,
  UtrechtIconTrouwenEnGeregistreerdPartnerschap,
  UtrechtIconTuinbouw,
  UtrechtIconUittreksel,
  UtrechtIconUwGemeente,
  UtrechtIconUwWijk,
  UtrechtIconVacatures,
  UtrechtIconVeerboot,
  UtrechtIconVeiligeWijk,
  UtrechtIconVergaderen,
  UtrechtIconVergunningAlgemeen,
  UtrechtIconVerhuizen,
  UtrechtIconVerkiezingen,
  UtrechtIconVervoersvoorziening,
  UtrechtIconVirus,
  UtrechtIconVluchtelingenOpvang,
  UtrechtIconVoeding,
  UtrechtIconVrijwilligerswerk,
  UtrechtIconVuurwerk,
  UtrechtIconWandelen,
  UtrechtIconWerkzaamheden,
  UtrechtIconWijkteam,
  UtrechtIconWinkelen,
  UtrechtIconWinkelwagen,
  UtrechtIconWmo,
  UtrechtIconWozWaarde,
  UtrechtIconZwemabonnement,
} from "@frameless/icon-web-component-react";
import { UtrechtDocument, UtrechtHeading } from "@utrecht/web-component-library-react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import {
  Heading2,
  LanguageToggle,
  Link,
  PageContent,
  PageHeader,
  ThemeSwitcher,
  UnorderedList,
  UnorderedListItem,
} from "../src/components";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["demo-overview", "stepper-form", "theme-switcher"])),
  },
});

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <UtrechtDocument>
        <Head>
          <title>Demo</title>
          <meta name="description" content={t("demo-overview:page-title")} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageHeader>
          <ThemeSwitcher />
          <nav>
            <LanguageToggle />
          </nav>
        </PageHeader>
        <main>
          <PageContent>
            <UtrechtHeading level={1}>{t("demo-overview:page-title")}</UtrechtHeading>
            <UnorderedList>
              <UnorderedListItem>
                <Link href="/stepper-form/step-1">{t("stepper-form:page-title")}</Link>
              </UnorderedListItem>
            </UnorderedList>
            <Heading2>Iconenset</Heading2>
            <dl className="example-iconset-list">
              <div>
                <dt>
                  <code>&lt;UtrechtIconActueel /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconActueel />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconAfval /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconAfval />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconAfvalContainer /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconAfvalContainer />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconAfvalOphaal /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconAfvalOphaal />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconAfvalScheiden /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconAfvalScheiden />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconAfvalkalender /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconAfvalkalender />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconAgenda /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconAgenda />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconAirborne /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconAirborne />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconAttentie /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconAttentie />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconAuto /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconAuto />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBedrijventerrein /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBedrijventerrein />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBegroting /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBegroting />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBelastingen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBelastingen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBevolking /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBevolking />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBevrijding /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBevrijding />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBezwaarEnBeroep /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBezwaarEnBeroep />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBijstandsuitkering /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBijstandsuitkering />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBladerenOpruimen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBladerenOpruimen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBouwenEnVerbouwen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBouwenEnVerbouwen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBrandgevaar /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBrandgevaar />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconBuitengebied /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconBuitengebied />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconComputerregeling /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconComputerregeling />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconContactGemeente /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconContactGemeente />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconContainer /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconContainer />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconDocumenten /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconDocumenten />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconDuurzaamheid /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconDuurzaamheid />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconEconomieWerkInkomen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconEconomieWerkInkomen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconEikenprocessie /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconEikenprocessie />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconEnergietransitie /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconEnergietransitie />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconEvenementen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconEvenementen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconFiets /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconFiets />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconFormule1 /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconFormule1 />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconGebruikerCentraal /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconGebruikerCentraal />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconGebruikerIngelogd /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconGebruikerIngelogd />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconGebruikersvraag /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconGebruikersvraag />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconGemeenteraad /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconGemeenteraad />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconGemivaLocatie /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconGemivaLocatie />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconGezicht /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconGezicht />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconGladheid /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconGladheid />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconGrafiek /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconGrafiek />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconGrofvuil /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconGrofvuil />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconHondenbelasting /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconHondenbelasting />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconHorecavergunningen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconHorecavergunningen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconHuis /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconHuis />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconHuisEnOmgeving /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconHuisEnOmgeving />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconHulpmiddelenVinden /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconHulpmiddelenVinden />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconIdkaart /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconIdkaart />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconInEnOmUwHuis /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconInEnOmUwHuis />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconInformatie /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconInformatie />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconInformatieEnBetalen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconInformatieEnBetalen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconInkomen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconInkomen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconJeugd /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconJeugd />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconKerstbomen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconKerstbomen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconKindEnFamilie /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconKindEnFamilie />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconKoningsdag /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconKoningsdag />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconKopenEnHuren /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconKopenEnHuren />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconKopenEnVerkopen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconKopenEnVerkopen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconLeerlingenvervoer /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconLeerlingenvervoer />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconLetOp /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconLetOp />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconLiefdadigheid /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconLiefdadigheid />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconLocatie /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconLocatie />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconManege /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconManege />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconMeeuwenoverlast /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconMeeuwenoverlast />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconMelding /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconMelding />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconMeldingOpenbareRuimte /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconMeldingOpenbareRuimte />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconMobiliteit /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconMobiliteit />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconMonitorAgrofood /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconMonitorAgrofood />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconMonitorDuurzaamheid /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconMonitorDuurzaamheid />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconMonitorSociaal /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconMonitorSociaal />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconMonitorVirus /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconMonitorVirus />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconMonitorWoningmarkt /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconMonitorWoningmarkt />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconNatuurLandschap /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconNatuurLandschap />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconNieuwsbrief /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconNieuwsbrief />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconOmgeving /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconOmgeving />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconOmgevingsvergunning /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconOmgevingsvergunning />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconOnderhoud /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconOnderhoud />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconOndernemen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconOndernemen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconOnderscheidingen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconOnderscheidingen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconOnderwijs /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconOnderwijs />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconOpeningstijden /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconOpeningstijden />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconOverDeGemeente /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconOverDeGemeente />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconOverDeStad /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconOverDeStad />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconParkeervoorzieningGehandicapten /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconParkeervoorzieningGehandicapten />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconParkeren /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconParkeren />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconPaspoort /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconPaspoort />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconPaspoortIdkaartGecombineerd /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconPaspoortIdkaartGecombineerd />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconPrijskaartje /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconPrijskaartje />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconRaadEnCollege /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconRaadEnCollege />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconReclame /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconReclame />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconRecreatie /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconRecreatie />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconRegelingLaagInkomen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconRegelingLaagInkomen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconRijbewijs /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconRijbewijs />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconSchoolkostenregeling /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconSchoolkostenregeling />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconSinterklaas /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconSinterklaas />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconSociaalZorgWelzijn /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconSociaalZorgWelzijn />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconSport /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconSport />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconSportCultureleActiviteit /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconSportCultureleActiviteit />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconSportkledingMuziekinstrumenten /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconSportkledingMuziekinstrumenten />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconStationSneltrein /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconStationSneltrein />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconStationStoptrein /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconStationStoptrein />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconStookverbod /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconStookverbod />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconStrand /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconStrand />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconSubsidie /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconSubsidie />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconTemperatuurMelding /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconTemperatuurMelding />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconTrouwenEnGeregistreerdPartnerschap /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconTrouwenEnGeregistreerdPartnerschap />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconTuinbouw /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconTuinbouw />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconUittreksel /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconUittreksel />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconUwGemeente /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconUwGemeente />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconUwWijk /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconUwWijk />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVacatures /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVacatures />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVeerboot /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVeerboot />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVeiligeWijk /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVeiligeWijk />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVergaderen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVergaderen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVergunningAlgemeen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVergunningAlgemeen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVerhuizen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVerhuizen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVerkiezingen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVerkiezingen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVervoersvoorziening /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVervoersvoorziening />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVirus /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVirus />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVluchtelingenOpvang /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVluchtelingenOpvang />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVoeding /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVoeding />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVrijwilligerswerk /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVrijwilligerswerk />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconVuurwerk /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconVuurwerk />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconWandelen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconWandelen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconWerkzaamheden /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconWerkzaamheden />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconWijkteam /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconWijkteam />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconWinkelen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconWinkelen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconWinkelwagen /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconWinkelwagen />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconWmo /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconWmo />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconWozWaarde /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconWozWaarde />
                </dd>
              </div>
              <div>
                <dt>
                  <code>&lt;UtrechtIconZwemabonnement /&gt;</code>
                </dt>
                <dd>
                  <UtrechtIconZwemabonnement />
                </dd>
              </div>
            </dl>
          </PageContent>
        </main>
      </UtrechtDocument>
    </>
  );
}
