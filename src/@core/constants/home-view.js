import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Welcome to SoundSoulmates',
    text: 'SoundSoulmates is a new and emerging social and dating platform that will connect music lovers as individuals or as couples to others who match their musical interest. NO MORE will the only option be to go alone to a concert, or miss it entirely. We know how amazing it is to meet people who love your favorite artists and genres so we are setting out to help you find those compatible comRADDESTS and romances, one unity, one festival, one live show at a time…',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}

export const brandFeaturesContent = {
    heading: 'If they listen to the same playlist they belong in your circle',
    subHeading: '#soundandfoundthoughts',
    features: [
        {
            title: 'Create a Profile',
            description: 'Express yourself and create a unique profile with colorful backgrounds and themes, as well as a profile song of your choice.',
            icon: 'profile-plus'
        },
        {
            title: 'Like to Match',
            description: 'View people who are into the same music and interested in the same upcoming shows/festivals in your area',
            icon: 'match'
        },
        {
            title: 'Connect to Chat',
            description: 'Start chatting with people who are liked by you and like you too, your mates in music await',
            icon: 'chatting'
        },
        {
            title: 'Buy Tickets',
            description: 'Start chatting with people who are liked by you and like you too, your mates in music await',
            icon: 'ticket-printer'
        },
    ]
}

export const brandSelectionContent = {
    heading: 'The What and the Why',
    descriptions: [
        'SoundSoulmates will offer a little something for people in all stages of relationship status. WIth a double date feature and friend mode in addition to dating options, our goal is to be an all inclusive place to meet new squads and lovers to attend shows and festivals together. We are dedicated in our mission to connect you, and we couldn\'t sit back and wait any longer carrying on in a world where this resource was not available. Music is more than an interest or hobby - for many of us it rules our world and is a lifestyle!',
        'So if your love of the genres and dance floors runs deep down to the roots of your soul, we hear you, we see you and we are stepping up to the challenge to make you the platform you deserve to meet others like you. We are so grateful you found us, and excited to begin this journey with you!”'
    ],
}

export const benefitsContent = {
    heading: 'More than just a Dating App',
    text: 'A social network that allows you to find your people, as well as that special someone as you bond over music you both enjoy. SoundSoulmates also lets you explore your interests by notifying you of festivals near you, so you can meet your ‘likes’ as a group or a couple.',
    benefits: [
        {
            title: 'Search by Genre ',
            description: 'Search for like minded individuals who have listed the same genre, album, and artists as their favourite.',
            icon: 'star-music'
        },
        {
            title: 'Promote Events ',
            description: 'Event organizers can market and sell tickets to their musical events on the app as members of SoundSoulmates.',
            icon: 'styled-speaker'
        },
        {
            title: 'Customize your Profile ',
            description: 'Shine a light into your musical interests further by adding album art, and lyrical quotes to your profile.',
            icon: 'voice-waves'
        }
    ],
    contactUsText: 'Let us know how you want to be involved and we’ll reach out soon with more information.',
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is the app compatible with iOS or Android?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Who is this app aimed towards?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'What do I do if I have a question regarding my app?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'A Unique Learning and Gaming Experience Every Time You Play',
    text: 'Download the LearnedApp app and embark on an enlightening journey today.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        },
        {
            icon: 'instagram',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Beta User Sign-up',
    whyUsBtn: `Interested To Invest`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: 'Why SoundSoulmates', sectionId: 'whyUs' }
]
