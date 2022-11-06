import tutorialPlaylist from '../access/img/tutorial-playlist.mov';
import tutorialScenes from '../access/img/tutorial-scenes.mov';
import tutorialSounds from '../access/img/tutorial-sounds.mov';
import tutorialTools from '../access/img/tutorial-tools.mov';

const tutorialsVideo = [
    {
        id: 1,
        display: tutorialPlaylist,
    },

    {
        id: 2,
        display: tutorialScenes,
    },

    {
        id: 3,
        display: tutorialSounds,
    },

    {
        id: 4,
        display: tutorialTools,
    },
]

const tutorialContent = [
    {
        id: 1,
        firstTitle: 'The Perfect Playlist',
        secTitle: 'With One Click',
        firstSubTitle: 'Hit play and get into the zone instantly. No ads. No distracting lyrics.',
        secSubTitle: <span>3 Stations to suit your mood: chill, jazzy or sleepy.</span>,

    },

    {
        id: 2,
        firstTitle: 'Craft Your Focus Environment',
        secTitle: '',
        firstSubTitle: 'Would you rather get it done in the cafe, or escape to the beach? Lofi.co gives you both with interactive artworks.',
        secSubTitle: <span>Basic users can access 2 artworks, while premium users have exclusive access to a monthly updated catalog of 20+ illustrations.</span>,
    },

    {
        id: 3,
        firstTitle: 'Cut Out Distractions',
        secTitle: 'With Peaceful Sounds',
        firstSubTitle: 'Drown out even the noisiest neighbour with soothing background sounds. Each artwork comes with adjustable sounds like rain, waves or birds. Some sounds change the scene’s visuals.',
        secSubTitle: <span>Basic users get 3 sound effects. Premium users can mix and match 20+ sounds.</span>,
    },

    {
        id: 4,
        firstTitle: 'The Focus Zone (Premium)',
        secTitle: '',
        firstSubTitle: 'Deadline coming up? The Focus Zone lets you stay on track by gathering the best focus tools in one place - away from your distracting smartphone.',
        secSubTitle: <span>
            - Pomodoro timer: get more done in less time (without burning out)
            <br />
            - Notepad: never let a thought disappear
            <br />
            - Time logger: track your progress
            <br />
            - To-do list: always know what to do next
        </span>,
    },

]

export { tutorialsVideo, tutorialContent }
