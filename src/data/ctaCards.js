import placeholderImg from '../assets/ui/wishlist-button.png'
import langit_lupa_screenshot_1 from  '../assets/Section-Images/langit_lupa_screenshot_1.jpg'
import langit_lupa_screenshot_2 from  '../assets/Section-Images/langit_lupa_screenshot_2.jpg'
import langit_lupa_screenshot_3 from  '../assets/Section-Images/langit_lupa_screenshot_3.jpg'
import langit_lupa_screenshot_4  from '../assets/Section-Images/langit_lupa_screenshot_4.jpg'
import office_assemble from '../assets/Section-Images/office_assemble.png'
import promotions from '../assets/Section-Images/promotions.png'


export const ctaCards = [
  {
    id: 1,
    type: 'slider',
    images: [langit_lupa_screenshot_1, langit_lupa_screenshot_2, langit_lupa_screenshot_3, langit_lupa_screenshot_4],
  },
  {
    id: 2,
    type: 'image',
    image: office_assemble,
    alt: 'Card 2',
    offset: { marginLeft: '2rem' },
  },
  {
    id: 3,
    type: 'image',
    image: promotions,
    alt: 'Card 3',
  },
  {
    id: 4,
    type: 'image',
    image: placeholderImg,
    alt: 'Card 4',
  },
  {
    id: 5,
    type: 'video',
    title: 'Watch Our Video',
    description: 'Check out the latest on YouTube',
    buttonLabel: 'Watch Now',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
]
