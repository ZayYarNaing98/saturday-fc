// Static club content. Edit these values to update the site.
import squadSunset from './assets/photos/squad-sunset.webp'
import trainingWide from './assets/photos/training-wide.webp'
import squadDarkKits from './assets/photos/squad-dark-kits.webp'
import celebration from './assets/photos/celebration.webp'
import squadBlack from './assets/photos/squad-black.webp'
import squadTrack from './assets/photos/squad-track.webp'
import action1 from './assets/photos/action-1.webp'
import action2 from './assets/photos/action-2.webp'
import squadRed from './assets/photos/squad-red.webp'
import kit from './assets/photos/kit.webp'
import huddle from './assets/photos/huddle.webp'
import squadWhites from './assets/photos/squad-whites.webp'
import teamSheet from './assets/photos/team-sheet.webp'
import squadYellow from './assets/photos/squad-yellow.webp'
import squadMint from './assets/photos/squad-mint.webp'
import squadFloodlights from './assets/photos/squad-floodlights.webp'
import squadStadium from './assets/photos/squad-stadium.webp'
import squadGoldenHour from './assets/photos/squad-golden-hour.webp'
import squadMintSky from './assets/photos/squad-mint-sky.webp'
import pitchsideRest from './assets/photos/pitchside-rest.webp'
import trainingStretch from './assets/photos/training-stretch.webp'

export const club = {
  name: 'Saturday FC',
  shortName: 'Saturday',
  founded: 2017,
  tagline: 'Where every match has a story',
  city: 'Yangon',
  ground: 'Saturday Home Ground',
  kickoff: 'Every Saturday · 7:00 AM',
  email: 'hello@saturdayfc.com',
  phone: '+95 9 000 000 000',
}

export const photos = {
  hero: squadSunset,
  story: squadDarkKits,
  kit,
  kitSquad: squadRed,
  join: huddle,
}

export const ticker = [
  'Every Saturday',
  `Since ${club.founded}`,
  club.tagline,
  'One team',
  'One naga',
  'Red till the end',
]

export const story = [
  {
    year: '2017',
    title: 'A Saturday kickabout',
    text: 'A handful of friends booked a pitch for one Saturday morning. Nobody wanted to stop, so they booked the next one too.',
  },
  {
    year: '2019',
    title: 'From friends to a squad',
    text: 'Word spread, numbers grew, and Saturday FC entered its first friendly tournaments around the city.',
  },
  {
    year: '2023',
    title: 'The naga crest',
    text: 'The club adopted the naga — a symbol of strength and protection — as the heart of its new crest.',
  },
  {
    year: 'Today',
    title: 'Still every Saturday',
    text: 'Dozens of members, a proud red kit and the same rule as day one: show up, play hard, finish with tea together.',
  },
]

// x/y are percentages across the pitch (0,0 = top-left, attacking upwards).
export const lineup = {
  formation: '4-3-3',
  players: [
    { number: 1, name: 'Min Khaing', x: 50, y: 90 },
    { number: 42, name: 'zaybimendi', x: 84, y: 70 },
    { number: 4, name: 'KM', x: 62, y: 74 },
    { number: 5, name: 'Ohmm', x: 38, y: 74 },
    { number: 3, name: 'Ye Naung', x: 16, y: 70 },
    { number: 6, name: 'Chan Myae', x: 50, y: 55 },
    { number: 8, name: 'MML', x: 72, y: 45 },
    { number: 10, name: 'Ye Min', x: 28, y: 45 },
    { number: 7, name: 'SYY', x: 82, y: 24 },
    { number: 9, name: 'Ethan', x: 50, y: 16 },
    { number: 11, name: 'Do Lay', x: 18, y: 24 },
  ],
}

// Set to null when the next fixture isn't confirmed yet, e.g.
// { date: '2026-10-11', time: '07:00', opponent: 'Opponent FC', venue: club.ground }
export const nextMatch = null

export const lastResult = {
  date: '2026-10-04',
  opponent: 'MONREC FC',
  us: 3,
  them: 2,
  headline: 'Never write us off — 2–0 down, three goals in the last ten minutes.',
  scorers: ['Ko KMO (chip)', 'Ko CM (40-yard rocket)', 'YaYa (90+)'],
}

export const kitInfo = {
  title: 'Red till the end',
  text: 'Our home shirt is crimson red with navy and white trim — the colours of the naga crest. Every player gets their name and number on the back.',
  features: ['Crimson red home shirt', 'Navy & white trim', 'Custom name and number', 'Naga crest on the chest'],
}

export const gallery = [
  { src: squadSunset, caption: 'The whole Saturday family' },
  { src: squadFloodlights, caption: 'Under the floodlights at dusk' },
  { src: action2, caption: 'Matchday on the dry pitch' },
  { src: squadYellow, caption: 'Squad in yellow' },
  { src: celebration, caption: 'Celebrating another win' },
  { src: trainingStretch, caption: 'Stretching before kick-off' },
  { src: squadRed, caption: 'In the red home kit' },
  { src: squadMint, caption: 'Squad in mint green' },
  { src: trainingWide, caption: 'Warm-up before kick-off' },
  { src: squadGoldenHour, caption: 'Golden hour on the pitch' },
  { src: huddle, caption: 'Team talk' },
  { src: squadStadium, caption: 'Lined up at the stadium' },
  { src: squadBlack, caption: 'Squad in black' },
  { src: pitchsideRest, caption: 'Catching our breath pitchside' },
  { src: action1, caption: 'Chasing the ball' },
  { src: squadMintSky, caption: 'Mint kits, blue sky' },
  { src: squadTrack, caption: 'Squad photo by the track' },
  { src: teamSheet, caption: 'The hand-drawn team sheet' },
  { src: squadWhites, caption: 'Squad in white' },
]
