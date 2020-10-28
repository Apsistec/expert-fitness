import { User } from 'src/app/_models/users.model';

export interface Rating {
  id: string;
  author: string;
  uid: string;
  stars: number;
  review?: string;
  employeeId?: string;
}

export const Ratings: Rating[] = [
  {
    id: null,
    author: 'Barbara Allen',
    stars: 5,
    review: 'After 35 years of studying and practicing resistance training, I found myself enjoying my routine less and less. Expert Fitness has re-newed my spirit by new “tailor-made” workouts! I’m learning the value of stretching and functional training. The trainers at Expert Fitness have studied Exercise Science and use state-of-the art equipment.',
    uid: 'sdfdsfs1e1q13klaffbe'
  },
  {
    id: null,
    author: 'Glenna Bell',
    stars: 4,
    review: 'With my chronic fatigue, Expert Fitness has helped me improve the way I move and has helped improve my endurance to complete my daily activites.',
    uid: 'sdffsdpospkfspokpkq13s'
  },
  {
    id: null,
    author: 'Jamie Avey',
    stars: 5,
    review: 'In my fitness journey I have lost 9 pounds and 3 inches in my waist and have gone from size 9 to size 6 in clothing.  I love what I now see in the  mirror every morning, and how I feel physically and emotionally. I have made all these changes with alot of commitment and hard work',
    uid: 'sdfdsfs1edsfasdterklkovsl'
  },
  {
    id: null,
    author: 'Liz Young',
    stars: 5,
    review: 'The upbeat attitude at Expert Fitness is contagious. When someone is trying to help you and they are positive- we all benefit! Good Job You Are All Good People!',
    uid: 'sdfdsfs1edsfasdterklkovsl'
  },
  {
    id: null,
    author: 'Lynn Renaud',
    stars: 5,
    review: 'I workout at Expert Fitness because they are creative and offer a perfect balance of push and motivation. They always offer something new and are professionals with great positive attitudes.',
    uid: 'sdfdsfs1edsfasdterklkovsl'
  },
  {
    id: null,
    author: 'Laura Philipps',
    stars: 5,
    review: 'I love everyone\'s upbeat, freindly attitide. It is infectious and motivational!',
    uid: 'sdfdsfs1edsfasdterklkovsl'
  },
  {
    id: null,
    author: 'Susan Horton',
    stars: 5,
    review: 'The staff at Expert Fitness is kind, thoughtful and very professional - a joy to be around! ',
    uid: 'sdfdsfs1edsfasdterklkovsl'
  },
  {
    id: null,
    author: 'Jay Horton',
    stars: 5,
    review: 'The staff at Expert Fitness are Great! They are freindly, courteous, helpful and encouraging. What a great place to work out! Having a personal trainer is like having someone to be accountable to and make me show up when I wouldn\'t on my own.',
    uid: 'sdfdsfs1edsfasdterklkovsl'
  },
];
