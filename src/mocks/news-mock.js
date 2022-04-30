export default function NewsItems() {
  return (
    [
      {
        id: 1,
        title: 'Winged paintings',
        subtitle: 'The place of birds in art',
        image: './imgs/robin.jpg',
        alt: 'photograph of a robin',
        url: './catalogue/birds',
        button: 'Visit page'
      },

      {
        id: 2,
        title: 'Lizards in art',
        subtitle: 'Depictions of lizards in art',
        image: './imgs/lizard.jpg',
        alt: 'photograph of a lizard',
        url: './catalogue/lizards',
        button: 'Visit page'
      },

      {
        id: 3,
        title: 'Conservation activities',
        subtitle: 'Join our conservation activities',
        image: './imgs/workshop.jpg',
        alt: 'photograph of a workshop',
        url: '#',
        button: 'Learn more'
      }
    ]
  )
}