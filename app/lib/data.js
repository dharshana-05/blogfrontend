export const blogData = [
  {
    id: '1',
    title: 'Labrador Retriever',
    image: '/labrador.jpg',
    description:
      'Labrador Retrievers are one of the most popular dog breeds in the world. Known for their friendly nature, intelligence, and enthusiasm, they make excellent family companions and are also used extensively in service roles such as guide dogs, therapy dogs, and search-and-rescue work. They are highly trainable and get along well with children and other pets.',
  },
  {
    id: '2',
    title: 'German Shepherd',
    image: '/german.jpg',
    description:
      'German Shepherds are intelligent, courageous, and versatile working dogs. They are often employed in police, military, and protection work due to their alertness and loyalty. With proper training, they also make excellent family pets and are known for forming deep bonds with their owners. They require regular mental stimulation and physical exercise.',
  },
  {
    id: '3',
    title: 'Golden Retriever',
    image: '/golden.jpg',
    description:
      'Golden Retrievers are loving, intelligent, and reliable dogs known for their gentle temperament. They are incredibly patient and well-suited for families with children. Their eagerness to please makes them one of the easiest breeds to train, and they are frequently used in therapy and assistance roles. Their thick golden coats require regular grooming.',
  },
  {
    id: '4',
    title: 'Poodle',
    image: '/poodle.jpg',
    description:
      'Poodles are highly intelligent and elegant dogs that come in standard, miniature, and toy sizes. They are hypoallergenic and known for their distinctive curly coat. Despite their refined appearance, poodles are energetic and love to play. They excel in obedience and agility and are ideal for active owners who can keep them mentally engaged.',
  },
  {
    id: '5',
    title: 'Bulldog',
    image: '/bulldog.jpg',
    description:
      'Bulldogs are sturdy, muscular dogs with a calm and affectionate disposition. Despite their intimidating appearance, they are gentle and excellent with children. Bulldogs are known for their loyalty and love spending time relaxing with their families. However, due to their short snouts, they are prone to breathing issues and require special care in hot weather.',
  },
  {
    id: '6',
    title: 'Beagle',
    image: '/beagle.jpg',
    description:
      'Beagles are small to medium-sized hounds known for their exceptional sense of smell and friendly temperament. They are curious and energetic, often getting into mischief if not given enough exercise. Beagles thrive in active households and are especially good with children. They do have a tendency to bark and can be vocal when excited or alerting.',
  },
  {
    id: '7',
    title: 'Rottweiler',
    image: '/rottweiler.jpg',
    description:
      'Rottweilers are powerful and confident dogs with a natural guarding instinct. They are incredibly loyal and protective of their families. With proper socialization and training, they can be affectionate and obedient companions. Rottweilers require a strong leader and plenty of exercise to maintain their mental and physical health.',
  },
  {
    id: '8',
    title: 'Dachshund',
    image: '/dachshund.jpg',
    description:
      'Dachshunds, also known as "wiener dogs", are short-legged, long-bodied hounds originally bred for hunting small animals like badgers. They are lively, clever, and have a bold personality despite their small size. Dachshunds enjoy digging and can be stubborn, so early training is important. They come in smooth, wirehaired, and longhaired coat types.',
  },
  {
    id: '9',
    title: 'Siberian Husky',
    image: '/siberianhusky.jpg',
    description:
      'Siberian Huskies are medium-sized working dogs known for their striking appearance and endurance. Bred to pull sleds over long distances in cold climates, they are energetic, independent, and friendly. Huskies are not ideal for first-time dog owners as they require experienced handling, regular exercise, and a secure yard due to their escape-artist tendencies.',
  },
  {
    id: '10',
    title: 'Doberman',
    image: '/doberman.jpg',
    description:
      'Dobermans are sleek, powerful, and alert dogs known for their loyalty and fearlessness. Originally developed as guard dogs, they are highly trainable and make excellent companions for experienced owners. Dobermans are affectionate with their families and are natural protectors. They need both mental stimulation and physical activity to thrive.',
  },
  {
    id: '11',
    title: 'Shih Tzu',
    image: '/shihtzu.jpg',
    description:
      'Shih Tzus are small companion dogs with a rich royal history, originally bred to be lap dogs for Chinese emperors. They are affectionate, lively, and get along well with families, especially in apartment settings. Their luxurious coat requires regular grooming, and they enjoy being pampered. Shih Tzus are alert and can be quite playful.',
  },
  {
    id: '12',
    title: 'Boxer',
    image: '/boxer.jpg',
    description:
      'Boxers are muscular, energetic dogs with a strong sense of loyalty and playfulness. They are intelligent and thrive in active households. Boxers form close bonds with children and are known to be patient and protective. They require daily exercise and mental stimulation. Their expressive faces and goofy nature make them a favorite among families.',
  },
  {
    id: '13',
    title: 'Pomeranian',
    image: '/pomeranian.jpg',
    description:
      'Pomeranians are tiny dogs with a bold personality. Despite their size, they are fearless, curious, and full of energy. Their fluffy coats and fox-like faces make them incredibly adorable. They are known to be vocal and make good watchdogs. Regular grooming and training from a young age are important to manage their confident and sometimes stubborn nature.',
  },
  {
    id: '14',
    title: 'Great Dane',
    image: '/greatdane.jpg',
    description:
      'Great Danes are one of the tallest dog breeds and are often referred to as "gentle giants." They have a calm, loving temperament and are excellent with children. Despite their size, they are surprisingly gentle and affectionate. Great Danes require space to move comfortably and benefit from early training to manage their strength and size.',
  },
  {
    id: '15',
    title: 'Chihuahua',
    image: '/chihuahua.jpg',
    description:
      'Chihuahuas are the smallest dog breed in the world, but they have a huge personality. They are lively, alert, and deeply loyal to their owners. Chihuahuas often bond closely with one person and can be wary of strangers. They thrive in warm environments and are best suited for indoor living. Their compact size makes them perfect for city dwellers.',
  },
];


export function getBlogData() {
  if (typeof window !== 'undefined') {
    const localData = localStorage.getItem('blogData');
    const parsed = localData ? JSON.parse(localData) : [];
    return [...blogData, ...parsed];
  }
  return blogData; 
}


export function saveBlogData(newData) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('blogData', JSON.stringify(newData));
  }
}

