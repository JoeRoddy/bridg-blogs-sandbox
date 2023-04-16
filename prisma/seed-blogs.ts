import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const blogs = [
  {
    title: 'Why LeBron James is the Greatest of All Time',
    body: "LeBron James has achieved a level of greatness on the court that few NBA players have ever reached. He's won four championships, been named NBA Finals MVP four times, and has been named league MVP four times as well. His combination of size, athleticism, and skill is unmatched, and he's consistently proven himself to be a leader on and off the court.",
  },
  {
    title: 'The Rise of Steph Curry and the Golden State Warriors',
    body: "In recent years, the Golden State Warriors have emerged as one of the most dominant teams in the NBA. Led by sharpshooter Steph Curry, they've won three championships in the last five years, and have revolutionized the game with their 'small-ball' style of play. Curry's combination of shooting ability and ball-handling skills has made him one of the most exciting players in the league to watch.",
  },
  {
    title: 'The Impact of Kobe Bryant on the NBA',
    body: 'Kobe Bryant was one of the most iconic figures in NBA history, and his sudden death in 2020 shocked the world. He was a five-time NBA champion, two-time Finals MVP, and league MVP in 2008. His competitive drive and work ethic inspired a generation of players, and his legacy will continue to be felt throughout the league for years to come.',
  },
  {
    title: 'The Future of the NBA: Top Prospects to Watch',
    body: 'The NBA is constantly evolving, and every year there are new players who emerge as potential stars. Some of the top prospects to watch in the coming years include Zion Williamson, LaMelo Ball, and Cade Cunningham. These young players have the potential to reshape the league and usher in a new era of basketball.',
  },
  {
    title: 'The Evolution of the NBA: From Wilt Chamberlain to LeBron James',
    body: 'The NBA has undergone significant changes over the years, from the rule changes to the players who have dominated the game. From the dominant big men of the past like Wilt Chamberlain and Bill Russell, to the current era of high-flying, athletic wings like LeBron James, the league has seen it all.',
  },
  {
    title: 'The Greatest NBA Rivalries of All Time',
    body: 'Some of the most memorable moments in NBA history have come from intense rivalries between teams and players. From the Celtics-Lakers battles of the 1980s to the Bulls-Pistons clashes of the 1990s, these rivalries have added an extra layer of excitement to the game.',
  },
  {
    title: "The Art of the Dunk: A Look at the NBA's Best Dunkers",
    body: "There's nothing quite like a thunderous dunk to get the crowd on its feet, and the NBA has had no shortage of high-flyers over the years. Some of the best dunkers of all time include Michael Jordan, Vince Carter, and Dominique Wilkins, who have all left fans in awe with their gravity-defying feats.",
  },
  {
    title: 'The Impact of Analytics on the NBA',
    body: 'In recent years, the NBA has seen a shift towards a more analytics-driven approach to the game. Teams are using data to make smarter decisions about everything from player personnel to in-game strategies, and the impact of these analytics can be seen on the court.',
  },
];

(async () => {
  const users = await db.user.findMany();

  const proms = blogs.map((blog) => {
    const ranUser = users[Math.floor(Math.random() * users.length)];

    return db.blog.create({ data: { ...blog, userId: ranUser.id } });
  });

  await Promise.all(proms);
  console.log('done!');
})();
