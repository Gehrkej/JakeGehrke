import DraftTimeGraphic from '../assets/DraftTimeGraphic.jpeg'
import ftpGraphic from '../assets/ftpGraphic.png'
import GraphTesting from '../assets/GraphTesting.PNG'
import portfolio4 from '../assets/portfolio4.jpg'
import mstGraphic from '../assets/mstGraphic.png'
import GolfApp from '../assets/GolfApp.png'
import FightTheNight from '../assets/FightTheNight.png'
import ASOSU from '../assets/ASOSU.png'
import TarpaulinApi from '../assets/TarpaulinApi.png'

// Maps the `image` filename stored in projects.json to its imported asset.
// (JSON can't reference bundled assets by path, so the mapping lives here and
// is shared by portfolio.jsx and Project.jsx.)
const projectImages = {
    'DraftTimeGraphic.jpeg': DraftTimeGraphic,
    'ftpGraphic.png': ftpGraphic,
    'GraphTesting.PNG': GraphTesting,
    'portfolio4.jpg': portfolio4,
    'mstGraphic.png': mstGraphic,
    'GolfApp.png': GolfApp,
    'FightTheNight.png': FightTheNight,
    'ASOSU.png': ASOSU,
    'TarpaulinApi.png': TarpaulinApi,
}

export default projectImages
