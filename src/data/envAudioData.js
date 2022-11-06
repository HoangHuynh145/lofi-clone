// Env Audio
import cityTrafficAudio from '../access/musics/audio/city_traffic.mp3'
import keyBoardAudio from '../access/musics/audio/keyboard.mp3'
import oceanAudio from '../access/musics/audio/ocean.mp3'
import rainCityAudio from '../access/musics/audio/rain_city.mp3'
import summerStormAudio from '../access/musics/audio/summer_storm.mp3'
import birdsAudio from '../access/musics/audio/birds.mp3'

// Honolulu
import keyBoardIcon from '../access/svg/keyboard.svg'
import keyBoardActiveIcon from '../access/svg/keyBoard-active.svg'

import stormIcon from '../access/svg/storm.svg'
import stormActiveIcon from '../access/svg/storm-active.svg'

import oceanIcon from '../access/svg/ocean.svg'
import oceanActiveIcon from '../access/svg/ocean-active.svg'

// Book cafe
import cityTrafficIcon from '../access/svg/city-traffic.svg'
import cityTrafficActiveICon from '../access/svg/city-traffic-active.svg'

import cityRainIcon from '../access/svg/city-rain.svg'
import cityRainActiveIcon from '../access/svg/city-rain-active.svg'

// New York
import birdChirpingIcon from '../access/svg/bird-chirping.svg'
import birdChirpingActiveIcon from '../access/svg/bird-chirping-active.svg'



// anothers
import blizzardIcon from '../access/svg/blizzard.svg'
import campfireIcon from '../access/svg/campfire.svg'
import deepSpaceIcon from '../access/svg/deep-space.svg'
import fanIcon from '../access/svg/fan.svg'
import fireplaceIcon from '../access/svg/fireplace.svg'
import forestIcon from '../access/svg/forest.svg'
import forestRainIcon from '../access/svg/forest-rain.svg'
import peopleTakingIcon from '../access/svg/people-taking.svg'
import riverIcon from '../access/svg/river.svg'
import trainIcon from '../access/svg/train.svg'
import underwaterIcon from '../access/svg/underwater.svg'
import wavesIcon from '../access/svg/waves.svg'
import windIcon from '../access/svg/wind.svg'
import windowRainIcon from '../access/svg/window-rain.svg'

const envSounds = [
    {
        id: 1,
        name: 'Keyboard',
        type: 'keyBoard',
        iconDef: keyBoardIcon,
        iconActive: keyBoardActiveIcon,
        premium: false,
        audio: keyBoardAudio,
        places: ['Honolulu', 'Book Cafe'],
        firstOption: ['Book Cafe'],
        secondOption: ['Honolulu'],
        thirdOption: [],
    },

    {
        id: 2,
        name: 'Summer Storm',
        type: 'summerStorm',
        iconDef: stormIcon,
        iconActive: stormActiveIcon,
        premium: false,
        audio: summerStormAudio,
        places: ['Honolulu'],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 3,
        name: 'Ocean',
        type: 'ocean',
        iconDef: oceanIcon,
        iconActive: oceanActiveIcon,
        premium: false,
        audio: oceanAudio,
        places: ['Honolulu'],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 4,
        name: 'City traffic',
        type: 'cityTraffic',
        iconDef: cityTrafficIcon,
        iconActive: cityTrafficActiveICon,
        premium: false,
        audio: cityTrafficAudio,
        places: ['Book Cafe', 'New York'],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 5,
        name: 'City rain',
        type: 'cityRain',
        iconDef: cityRainIcon,
        iconActive: cityRainActiveIcon,
        premium: false,
        audio: rainCityAudio,
        places: ['Book Cafe', 'New York'],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 6,
        name: 'Bird Chirping',
        type: 'birdChirping',
        iconDef: birdChirpingIcon,
        iconActive: birdChirpingActiveIcon,
        premium: true,
        audio: birdsAudio,
        places: ['New York'],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 7,
        name: 'Blizzard',
        type: 'blizzard',
        iconDef: blizzardIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 8,
        name: 'Campfire',
        type: 'campfire',
        iconDef: campfireIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 9,
        name: 'Deep Space',
        type: 'deepSpace',
        iconDef: deepSpaceIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 10,
        name: 'Fan',
        type: 'fan',
        iconDef: fanIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 11,
        name: 'Fireplace',
        type: 'fireplace',
        iconDef: fireplaceIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 12,
        name: 'Forest',
        type: 'forest',
        iconDef: forestIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 13,
        name: 'ForestRain',
        type: 'forestRain',
        iconDef: forestRainIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 14,
        name: 'People Taking',
        type: 'peopleTaking',
        iconDef: peopleTakingIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 15,
        name: 'River',
        type: 'river',
        iconDef: riverIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 16,
        name: 'Train',
        type: 'train',
        iconDef: trainIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 17,
        name: 'Underwater',
        type: 'underwater',
        iconDef: underwaterIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 18,
        name: 'Waves',
        type: 'waves',
        iconDef: wavesIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 19,
        name: 'Wind',
        type: 'wind',
        iconDef: windIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

    {
        id: 20,
        name: 'Window Rain',
        type: 'window Rain',
        iconDef: windowRainIcon,
        premium: true,
        places: [],
        firstOption: [],
        secondOption: [],
        thirdOption: [],
    },

]


export default envSounds
