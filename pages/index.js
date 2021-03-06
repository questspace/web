import styled from '@emotion/styled';
import { rem } from 'polished';
import Articles from '../components/Articles';
import Members from '../components/Members';
import {
  CenteredTitlePerex,
  H1SubTitle,
  H1Title,
  H2SubTitle,
  H2Title,
  TitlePerex,
} from '../components/ReusableComponents';
import Subscriptions from '../components/Subscriptions';
import { useLanguageQuery, useTranslation } from 'next-export-i18n';
// import Events from '../components/Events';

const events = {
  sk: [
    {
      title: '111 Python programming meetup (October 24,2021)',
      by: 'by Python club',
      image: '/static/images/sample.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus.',
      link: '/',
    },
    {
      title: '222 Python programming meetup (October 24,2021)',
      by: 'by Python club',
      image: '/static/images/sample.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus.',
      link: '/',
    },
    {
      title: '333 Python programming meetup (October 24,2021)',
      by: 'by Python club',
      image: '/static/images/sample.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus.',
      link: '/',
    },
  ],
  en: [
    {
      title: '111 Python programming meetup (October 24,2021)',
      by: 'by Python club',
      image: '/static/images/sample.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus.',
      link: '/',
    },
    {
      title: '222 Python programming meetup (October 24,2021)',
      by: 'by Python club',
      image: '/static/images/sample.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus.',
      link: '/',
    },
    {
      title: '333 Python programming meetup (October 24,2021)',
      by: 'by Python club',
      image: '/static/images/sample.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus.',
      link: '/',
    },
  ],
};

const articles = {
  en: [
    {
      title: 'Meetups',
      id: "meetups",
      perex:
        `Our community brings together people from different walks of life and with different interests. But we are united by certain things, interests, hobbies. That's why at QuestSpace, different groups of people come together for meetups where they share experiences, push each other and support each other. JavaScript or Rust programmers, Linux guys, women in IT, Wikipedia contributors or OpenStreetMap enhancers, virtual and augmented reality fans -- we make sure that everyone in the community finds their own group.`,
      link: '/',
      content: (orientation) => (
        <NonControlledImage
          orientation={orientation}
          src="/static/images/meetup.png"
        />
      ),
    },
    {
      title: 'Workshops',
      id: "workshops",
      perex: `If you are a beginner in programming, electronics, crypto, AI, quantum computing or you want to explore your creative side doing art, we've got you covered! Workshops are perfect for learning new things and diving deeper into topics you're interested in by ramping up your skills in few hours. Participants go on to use their newly gained skills to build awesome projects, join interesting startups or help others within ours or other communities.`,
      link: '/',
      content: (orientation) => (
        <NonControlledImage
          orientation={orientation}
          src="/static/images/workshop.png"
        />
      ),
    },
    {
      title: 'Events',
      id: "events",
      perex:
        'Talks and hackathons on multiple topics; Pizza & Code where you program for fun and prizes; BuildberryPi where you compete for the most creative project built using RaspberryPi... and many more! Events by the community, for the community. We are curious creatures, who constantly want to learn new things, we are eager to listen to interesting talks and do activities that push us -- making us better in the process.',
      link: '/',
      content: (orientation) => (
        <NonControlledImage
          orientation={orientation}
          src="/static/images/event.png"
        />
      ),
    },
    {
      title: 'Decentralized Autonomous Organization (DAO)',
      id: "dao",
      perex:
        'We want our member to own part the community and participate on its governance in a decentralized way. DAOs allow us to experiment with new incentivization models where community members can use the crypto-based representation of their monthly subscription fee to vote on different matters. Your community contribution and duration of your paid membership gives you a weighted stake in the DAO governance.',
      link: '/',
      content: (orientation) => (
        <NonControlledImage
          orientation={orientation}
          src="/static/images/decentralized.png"
        />
      ),
    },
    // {
    //   title: 'Event showcase',
    //   perex:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus. Pellentesque nisi nibh, lobortis rutrum rhoncus pulvinar, tristique at nisi',
    //   link: '/',
    //   centered: true,
    //   content: () => <Events items={events} />,
    // },
  ],
  sk: [
    {
      title: 'Meetupy',
      id: "meetups",
      perex:
        'V na??ej komunite sa stret??vaj?? ??udia z r??znych ??ivotn??ch ciest a s r??znymi z??ujmami. Sp??jaj?? n??s ale ur??it?? veci, z??ujmy, z????uby. Preto sa v QuestSpace stret??vaj?? r??zne skupinky ??ud?? na meetupoch, kde medzi sebou zdie??aj?? sk??senosti, navz??jom sa pos??vaj?? a podporuj??. Program??tori v JavaScripte ??i Ruste, Linux??ci, ??eny v IT, prispievatelia do Wikipedie alebo vylep??ovatelia OpenStreetMap, ??i priaznivci virtu??lnej a roz????renej reality -- star??me sa o to, aby si v komunite ka??d?? na??iel to svoje.',
      link: '/',
      content: (orientation) => (
        <NonControlledImage
          orientation={orientation}
          src="/static/images/meetup.png"
        />
      ),
    },
    {
      title: 'Workshopy',
      id: "workshops",
      perex:
        'Ak ste za??iato??n??k v programovan??, elektronike, kryptografii, umelej inteligencii, kvantovej informatike alebo chcete presk??ma?? svoju kreat??vnu str??nku a venova?? sa umeniu, m??me pre v??s rie??enie! Workshopy s?? ide??lne na to, aby ste sa nau??ili nov?? veci a ponorili sa hlb??ie do t??m, ktor?? v??s zauj??maj??, t??m, ??e si za p??r hod??n roz????rite svoje zru??nosti. ????astn??ci ??alej vyu????vaj?? svoje novoz??skan?? zru??nosti na budovanie ????asn??ch projektov, prip??jaj?? sa k zauj??mav??m startupom alebo pom??haj?? in??m v r??mci na??ej alebo in??ch komun??t.',
      link: '/',
      content: (orientation) => (
        <NonControlledImage
          orientation={orientation}
          src="/static/images/workshop.png"
        />
      ),
    },
    {
      title: 'Eventy',
      id: "events",
      perex:
        'Predn????ky a hackathony na r??zne t??my; Pizza & Code, kde programujete pre z??bavu a r??zne ceny; BuildberryPi, kde s????a????te o najkreat??vnej???? projekt postaven?? na RaspberryPi... a mnoho ??al????ch! Podujatia organizovan?? komunitou pre komunitu. Sme zvedav?? bytosti, ktor?? sa chc?? neust??le u??i?? nov?? veci, radi po????vame zauj??mav?? predn????ky a rob??me aktivity, ktor?? n??s pos??vaj?? -- a v??aka ktor??m sme lep????.',
      link: '/',
      content: (orientation) => (
        <NonControlledImage
          orientation={orientation}
          src="/static/images/event.png"
        />
      ),
    },
    {
      title: 'Decentralizovan?? auton??mna organiz??cia (DAO)',
      id: "dao",
      perex:
        'Chceme, aby n???? ??len vlastnil ??as?? komunity a podie??al sa na jej riaden?? decentralizovan??m sp??sobom. DAO n??m umo????uj?? experimentova?? s nov??mi motiva??n??mi modelmi, v r??mci ktor??ch m????u ??lenovia komunity vyu????va?? kryptografick?? zast??penie svojho mesa??n??ho ??lensk??ho na hlasovanie o r??znych z??le??itostiach. V???? pr??spevok do komunity a trvanie v????ho platen??ho ??lenstva v??m d??va v????en?? podiel na spr??ve DAO.',
      link: '/',
      content: (orientation) => (
        <NonControlledImage
          orientation={orientation}
          src="/static/images/decentralized.png"
        />
      ),
    },
    // {
    //   title: 'Event showcase',
    //   perex:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus. Pellentesque nisi nibh, lobortis rutrum rhoncus pulvinar, tristique at nisi',
    //   link: '/',
    //   centered: true,
    //   content: () => <Events items={events} />,
    // },
  ],
};

const subscriptions = {
  sk: [
    // {
    //   title: 'gold community',
    //   pricePerMonth: 10,
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus. Pellentesque nisi nibh, lobortis rutrum rhoncus pulvinar, tristique at nisi',
    //   opens: ['Meetups', 'Workshops'],
    // },

    // {
    //   title: 'Mesa??n?? ??lenstvo',
    //   pricePerMonth: 50,
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus. Pellentesque nisi nibh, lobortis rutrum rhoncus pulvinar, tristique at nisi',
    //   opens: ['Meetupy', 'Workshopy', 'Eventy'],
    // },
    
  ],
  en: [
    // {
    //   title: 'gold community',
    //   pricePerMonth: 10,
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus. Pellentesque nisi nibh, lobortis rutrum rhoncus pulvinar, tristique at nisi',
    //   opens: ['Meetups', 'Workshops'],
    // },

    // {
    //   title: 'Monthly membership',
    //   pricePerMonth: 50,
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus inauctor nunc. Duis ac felis metus. Pellentesque nisi nibh, lobortis rutrum rhoncus pulvinar, tristique at nisi',
    //   opens: ['Meetups', 'Workshops', 'Events'],
    // },
  ],
};

export default function Home() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const currentLocale = (query && query.lang) || 'sk';

  return (
    <Wrapper>
      <Banner>
        <MainTitle>
          <H1Title>{t('main_title')}</H1Title>
          <H1SubTitle>{t('main_subtitle')}</H1SubTitle>
          <TitlePerex>{t('title_text')}</TitlePerex>
          {/* <Button backgroundInside="#021226" type="gradient">
            {t('learn_more')}
          </Button> */}
        </MainTitle>

        <SubTitle>
          <H2Title>{t('subtitle_title')}</H2Title>
          <H2SubTitle>{t('subtitle_subtitle_1')}<br />{t('subtitle_subtitle_2')}</H2SubTitle>
          <CenteredTitlePerex>{t('subtitle_text')}</CenteredTitlePerex>
        </SubTitle>
      </Banner>

      <Articles id="activities" items={articles[currentLocale]} />
      <Subscriptions id="community" items={subscriptions[currentLocale]} />
    </Wrapper>
  );
}

const NonControlledImage = styled.img`
  position: absolute;
  left: ${(props) => (props.orientation === 'left' ? rem(-80) : 'auto')};
  right: ${(props) => (props.orientation === 'right' ? rem(-80) : 'auto')};
  width: ${rem(300)};

  ${(props) => props.theme.media.s`
  width: ${rem(300)};
    `};

  @media (min-width: 1024px) {
    width: auto;
    left: ${(props) => (props.orientation === 'left' ? rem(0) : 'auto')};
    right: ${(props) => (props.orientation === 'right' ? rem(0) : 'auto')};
  } ;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const MainTitle = styled.div`
  margin-bottom: ${rem(50)};

  ${(props) => props.theme.media.m`
    margin-bottom: ${rem(260)};
    `};
`;

const Wrapper = styled.div`
  margin-top: ${rem(20)};

  ${(props) => props.theme.media.m`
    margin-top: ${rem(120)}; 
    `};
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${rem(40)};
`;
