import backgroundLevel2 from '../img/level2/background.png'
import mountains from '../img/level2/mountains.png'
import lgPlatformLevel2 from '../img/level2/lgPlatform.png'
import mdPlatformLevel2 from '../img/level2/mdPlatform.png'
import spriteFireFlowerShootLeft from '../img/mario/spriteFireFlowerShootLeft.png'
import spriteFireFlowerShootRight from '../img/mario/spriteFireFlowerShootRight.png'

export const images = {
  mario: {
    shoot: {
      fireFlower: {
        right: spriteFireFlowerShootRight,
        left: spriteFireFlowerShootLeft
      }
    }
  },
  levels: {
    1: {
      background: ''
    },
    2: {
      background: backgroundLevel2,
      mountains,
      lgPlatform: lgPlatformLevel2,
      mdPlatform: mdPlatformLevel2
    }
  }
}
