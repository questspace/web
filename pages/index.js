import styled from '@emotion/styled';
import { rem } from 'polished';
import Button from '../components/Button';
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
import { useRouter } from 'next/dist/client/router';
import useTranslation from 'next-translate/useTranslation';
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
        'V našej komunite sa stretávajú ľudia z rôznych životných ciest a s rôznymi záujmami. Spájajú nás ale určité veci, záujmy, záľuby. Preto sa v QuestSpace stretávajú rôzne skupinky ľudí na meetupoch, kde medzi sebou zdieľajú skúsenosti, navzájom sa posúvajú a podporujú. Programátori v JavaScripte či Ruste, Linuxáci, ženy v IT, prispievatelia do Wikipedie alebo vylepšovatelia OpenStreetMap, či priaznivci virtuálnej a rozšírenej reality -- staráme sa o to, aby si v komunite každý našiel to svoje.',
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
        'Ak ste začiatočník v programovaní, elektronike, kryptografii, umelej inteligencii, kvantovej informatike alebo chcete preskúmať svoju kreatívnu stránku a venovať sa umeniu, máme pre vás riešenie! Workshopy sú ideálne na to, aby ste sa naučili nové veci a ponorili sa hlbšie do tém, ktoré vás zaujímajú, tým, že si za pár hodín rozšírite svoje zručnosti. Účastníci ďalej využívajú svoje novozískané zručnosti na budovanie úžasných projektov, pripájajú sa k zaujímavým startupom alebo pomáhajú iným v rámci našej alebo iných komunít.',
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
        'Prednášky a hackathony na rôzne témy; Pizza & Code, kde programujete pre zábavu a rôzne ceny; BuildberryPi, kde súťažíte o najkreatívnejší projekt postavený na RaspberryPi... a mnoho ďalších! Podujatia organizované komunitou pre komunitu. Sme zvedavé bytosti, ktoré sa chcú neustále učiť nové veci, radi počúvame zaujímavé prednášky a robíme aktivity, ktoré nás posúvajú -- a vďaka ktorým sme lepší.',
      link: '/',
      content: (orientation) => (
        <NonControlledImage
          orientation={orientation}
          src="/static/images/event.png"
        />
      ),
    },
    {
      title: 'Decentralizovaná autonómna organizácia (DAO)',
      id: "dao",
      perex:
        'Chceme, aby náš člen vlastnil časť komunity a podieľal sa na jej riadení decentralizovaným spôsobom. DAO nám umožňujú experimentovať s novými motivačnými modelmi, v rámci ktorých môžu členovia komunity využívať kryptografické zastúpenie svojho mesačného členského na hlasovanie o rôznych záležitostiach. Váš príspevok do komunity a trvanie vášho plateného členstva vám dáva vážený podiel na správe DAO.',
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
    //   title: 'Mesačné členstvo',
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
  const { locale } = useRouter();
  const { t } = useTranslation('common');

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

      <Articles id="activities" items={articles[locale]} />
      <Subscriptions id="community" items={subscriptions[locale]} />
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
