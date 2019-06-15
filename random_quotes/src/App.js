import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
    	curQuote: 0,
    	quotes: [
      	{ author: "Buddha", quote: "Give, even if you only have a little." },
      	{ author: "Buddha", quote: "There is no fear for one whose mind is not filled with desires." },
        { author: "Buddha", quote: "Even death is not to be feared by one who has lived wisely." },
        { author: "Buddha", quote:   "Irrigators channel waters; fletchers straighten arrows; carpenters bend wood; the wise master themselves." },
        { author: "Buddha", quote:  "Drop by drop is the water pot filled. Likewise, the wise man, gathering it little by little, fills himself with good." },
        { author: "Buddha", quote:  "Better than a thousand hollow words, is one word that brings peace." },
        { author: "Buddha", quote:  "The root of suffering is attachment." },
        { author: "Buddha", quote:  "Silence the angry man with love. Silence the ill-natured man with kindness. Silence the miser with generosity. Silence the liar with truth." },
        { author: "Buddha", quote:  "People with opinions just go around bothering each other." },
        { author: "Buddha", quote:  "Nothing can harm you as much as your own thoughts unguarded." },
        { author: "Buddha", quote:  "Meditate… do not delay, lest you later regret it." },
        { author: "Buddha", quote:  "Understanding is the heartwood of well-spoken words." },
        { author: "Buddha", quote:  "Ceasing to do evil, Cultivating the good, Purifying the heart: This is the teaching of the Buddhas." },
        { author: "Buddha", quote:  "Delight in meditation and solitude. Compose yourself, be happy. You are a seeker." },
        { author: "Buddha", quote:  "Ardently do today what must be done. Who knows? Tomorrow, death comes." },
        { author: "Buddha", quote:  "What you are is what you have been. What you’ll be is what you do now." },
        { author: "Buddha", quote:  "If anything is worth doing, do it with all your heart." },
        { author: "Buddha", quote:  "All that we are is the result of what we have thought." },
        { author: "Buddha", quote:  "Stop, stop. Do not speak. The ultimate truth is not even to think." },
        { author: "Buddha", quote:  "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path." },
        { author: "Buddha", quote:  "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world." },
        { author: "Buddha", quote:  "Our life is shaped by our mind; we become what we think. Joy follows a pure thought like a shadow that never leaves." },
        { author: "Buddha", quote:  "Chaos is inherent in all compounded things. Strive on with diligence." },
        { author: "Buddha", quote:  "An idea that is developed and put into action is more important than an idea that exists only as an idea." },
        { author: "Buddha", quote:  "Work out your own salvation. Do not depend on others." },
        { author: "Buddha", quote:  "You only lose what you cling to." },
        { author: "Buddha", quote:  "True love is born from understanding." },
        { author: "Buddha", quote:  "He is able who thinks he is able." },
        { author: "Buddha", quote:  "You are a seeker. Delight in the mastery of your hands and your feet, of your words and your thoughts." },
        { author: "Buddha", quote:  "The one who has conquered himself is a far greater hero than he who has defeated a thousand times a thousand men." },
        { author: "Buddha", quote:  "Do not look for a sanctuary in anyone except your self." },
        { author: "Buddha", quote:  "Nothing is forever except change." },
        { author: "Buddha", quote:  "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship." },
        { author: "Corey Taylor", quote: "Do what you do and mean it every second of the day. If you don't, you're living someone else's life."},
        { author: "Corey Taylor", quote: "The best friends you will ever have are the ones who don't make you feel like you owe them a damn thing."},
        { author: "Corey Taylor", quote: "You have incredible lives ahead of you. You have incredible things that you can accomplish. If you feel that, you will have an amazing life. Do not let anything build a wall too high for you to get over. And I know that might seem very cliche, but I've had alot of friends who had hurt themselves. And when you're younger, a lot of that stuff is so temporary. You can get through it. You're stronger than you think. You'll ALWAYS be stronger than you think. Feel with your heart and do what you want."},
        { author: "Corey Taylor", quote: "I don't mean to be overly sensitive or anything like that, but you just have to take a minute in every day, and just reflect on where you are, and just realise what you've got, because you just never know where the next huge change in your life is going to come from."},
        { author: "Corey Taylor", quote: "It's amazing and sad what we have to do to survive sometimes."},
        { author: "Corey Taylor", quote: "Life owes you nothing. You owe yourself everything."},
        { author: "Corey Taylor", quote: "The future is meant for those who are willing to let go of the worst parts of the past. When you cannot take two steps without turning around to inspect your footsteps, you are getting nowhere fast."},
        { author: "Corey Taylor", quote: "Sin is a matter of opinion. Sins are only sins if you are hurting other people."},
        { author: "Corey Taylor", quote: "If you feel like talking, you talk, if you don't, you don't."},
        { author: "Corey Taylor", quote: "You ever want to feel powerless? Watch the people you care about being hurt and know there is nothing you can do about it."},
        { author: "Corey Taylor", quote: "You can have the best intentions in the world but if you do nothing, you are nothing."},
        { author: "Corey Taylor", quote: "Live your life, no matter what that life is."},
        { author: "Corey Taylor", quote: "Some of the smartest people I know are metal fans."},
        { author: "Aaron Lewis", quote: "I've never needed government to hold my hand."},
        { author: "Paul Gray", quote: "Cats were put into the world to disprove the dogma that all things were created to serve man."},
        { author: "Cliff Burton", quote: "We do what we want. We don't care what anyone else thinks."},
        { author: "Cliff Burton", quote: "You don't burn out from going too fast. You burn out from going too slow and getting bored."},
        { author: "Cliff Burton", quote: "Control your life through insanity."},
        { author: "Cliff Burton", quote: "Every once in a while we may fall on our face, but we insist on doing what we wanna do."},
        { author: "Peter Steel", quote: "Base not your joy on the deeds of others. For what has been given can be taken away."},
        { author: "Peter Steel", quote: "We live to avoid death, we exist to avoid unexistence."},
        { author: "Peter Steel", quote: "I think anyone who has an opinion, and voices it, will offend someone."},
        { author: "Peter Steel", quote: "It's a funny thing, when you talk to God, you're religious, but when he talks to you, you're a psychopath."},
        { author: "Peter Steel", quote: "I'm the product of 6 million years of evolution? Come on, man. I crawled out of a swamp yesterday."},
        { author: "Peter Steel", quote: "Have faith that when bad things happen to you, I belief in an after life, it is better to suffer here on Earth than what awaits you. That is why I pray for pain, and I get it. I do."},
        { author: "Peter Steel", quote: "I don't like the human race in general. We are the only species who hunt for sport, who kill due to emotional need."},
        { author: "Peter Steel", quote: "I'm a big fan of the effects of alcohol."},
        { author: "Peter Steel", quote: "Treat each other the way you would like to be treated."},
        { author: "Ozzy Osbourne", quote: "Maybe it's not too late to learn how to love and forget how to hate."},
        { author: "Ozzy Osbourne", quote: "Sometimes I'm scared of being Ozzy Osbourne. But it could have been worse. I could have been Sting."},
        { author: "Ozzy Osbourne", quote: "Of all the things I've lost I miss my mind the most."},
        { author: "Ozzy Osbourne", quote: "When you’re in love, it’s not just about the messing around in the sack, it’s about how empty you feel when they’re gone."},
        { author: "Ozzy Osbourne", quote: "You've got to believe in yourself, or no one will believe in you. Imagination is like a bird on the wing, flying free for you to use."},
        { author: "Ozzy Osbourne", quote: "If you can laugh at your mistakes, it's a good thing."},
        { author: "Ozzy Osbourne", quote: "It's all part of my journey - I've done a lot of stupid things, but you learn by your mistakes."},
        { author: "Ozzy Osbourne", quote: "Hating people isn’t a productive way of living. So what’s the point in hating anyone? There’s enough hate in the world as it is, without me adding to it."},
        { author: "Ozzy Osbourne", quote: "You learn who your friends are when the sh-t hits the fan."},
        { author: "Ozzy Osbourne", quote: "I used to get upset by people not understanding me, but I’ve made a career out of it now."},
        { author: "Zakk Wylde", quote: "The work these brave men and women do is extremely important, not only to our nation but to all the countries that our troops are stationed at around the world. I am grateful to the USO for having us and to all the troops who shared their day with us."},
        { author: "Zakk Wylde", quote: "Face your fear Accept your war it is what it is."},
        { author: "Zakk Wylde", quote: "Whatever it is you love, and whatever it is that you want to do, that's what you should be doing."},
        { author: "Zakk Wylde", quote: "Any guy that's not working with the same amount of intensity and passion that I do, I don't want to know."},
        { author: "Zakk Wylde", quote: "Every day you try to get better."},
        { author: "Zakk Wylde", quote: "You never toot your own horn."},
        { author: "Slash", quote: "You can't wait around for destiny to give you what you think you deserve, you have to earn it, even if you think you've paid your dues."},
        { author: "Slash", quote: "Rock n' roll is about attitude and rebellion. It's supposed to be fun and spontaneous."},
        { author: "Slash", quote: "Risk isn't a word in my vocabulary. It's my very existence."},
        { author: "Slash", quote: "A day doesn't go by where I don't get surprised by something."},
        { author: "Slash", quote: "I dont believe in having regrets."},
        { author: "Jimmy Page", quote: "So many people are frightened to take a chance in life and there's so many chances you have to take."},
        { author: "Jimmy Page", quote: "Music is the one thing that has been consistently there for me. It hasn’t let me down."},
        { author: "Jimmy Page", quote: "I may not believe in myself, but I believe in what I'm doing."},
        { author: "Robert Plant", quote: "The whole idea of music, from the beginning of time, was for people to be happy."},
        { author: "Robert Plant", quote: "There's still time to change the road you're on..."},
        { author: "Robert Plant", quote: "I think that passion and love and pain are all bearable, and they go to make love beautiful."},
        { author: "Robert Plant", quote: "Music is for every single person that walks the planet."},
        { author: "Robert Plant", quote: "Don't be hard on yourself. And take as many chances, risks, as you can."},
        { author: "Robert Plant", quote: "I like the idea of being alone. I like the idea of often being alone in all aspects of my life. I like to feel lonely. I like to need things."},
        { author: "Robert Plant", quote: "Boredom is the beginning of all destruction and everything that is negative."},
        { author: "Nikki Sixx", quote: "If you don’t deal with your demons, they will deal with you, and it’s gonna hurt."},
        { author: "Nikki Sixx", quote: "The trouble with asking questions is you sometimes get answers you don't wanna hear."},
        { author: "Nikki Sixx", quote: "When You've lost it all....thats when you realize that Life is Beautiful."},
        { author: "Nikki Sixx", quote: "Don't waste your death on a half assed life."},
        { author: "Nikki Sixx", quote: "Perfection is unattainable, so I like to live in imperfection."},
        { author: "Nikki Sixx", quote: "Addiction - When you can give up something any time, as long as it's next Tuesday."},
        { author: "Nikki Sixx", quote: "Life is like a long ride to nowhere in particular."},
        { author: "Nikki Sixx", quote: "Selling my soul would be a lot easier if I could just find it."},
        { author: "Nikki Sixx", quote: "Overconfidence comes from fear and doubt, and you boast an ego when you're feeling less than."},
        { author: "Nikki Sixx", quote: "Ego is the great enemy. Ego will hold you back every single time."},
        { author: "Nikki Sixx", quote: "Darkness can be funny. It can be quirky. There are different ways that that stuff comes out as a creative person. But the actual conflicted, twisted, decaying, rotting soul? That's not me. No more."},
        { author: "Nikki Sixx", quote: "I had to find the courage to turn my life around."},
        { author: "Vince Neil", quote: "I lost my faith in God when I lost my daughter to Cancer, the beast. I begged, I cried, I offered my life for hers, and day by day, I watched that beautiful little Angel slip off. So, excuse me for not taking my seat next to you on Sunday in Church, I feel too cheated to worship."},
        { author: "Sebastian Bach", quote: "What is music for? It's to make you feel good."},
        { author: "Kurt Cobain", quote: "Dreaming of the person you want to be is wasting the person you already are."},
        { author: "Kurt Cobain", quote: "You do learn things and one of them is that happiness has nothing to do with validation from other people, the important thing is being happy with yourself ... finding something that is important to you and sticking with it no matter what anyone says. The truth is you've got to really be tough because there are all kinds of forces that are always trying to get you to do things their way ... trying to tell you that you are throwing your life away if you don't follow their advice."},
        { author: "Kurt Cobain", quote: "I'd rather be hated for who I am, than loved for who I am not."},
        { author: "Kurt Cobain", quote: "Life is a waste of time and time is a waste of life, so let's all get wasted and have the time of our lives."},
        { author: "Kurt Cobain", quote: "Wanting to be someone else is a waste of who you are."},
        { author: "Kurt Cobain", quote: "Just because it's all you want, doesn't mean it's all you need."},
        { author: "Kurt Cobain", quote: "Humans are stupid. I'm ashamed to be human."},
        { author: "Kurt Cobain", quote: "If chasing cool is important to you, you're an idiot!"},
        { author: "Kurt Cobain", quote: "I don’t have the passion anymore, and so remember, it’s better to burn out than to fade away."},
        { author: "Kurt Cobain", quote: "I’m not mad. I’m in a perfectly happy mood, you a**hole."},
        { author: "Kurt Cobain", quote: "Rather be dead than cool."},
        { author: "Kurt Cobain", quote: "People think of life as being so sacred and they feel like this is their only chance and they have to do something with their life and make an impact As far as I'm concerned, it's just a pitstop for the afterlife. It's just a little test to see how you can handle reality."},
        { author: "Kurt Cobain", quote: "If you die you're completely happy and your soul somewhere lives on."},
        { author: "Kurt Cobain", quote: "If you're really a mean person you're going to come back as a fly and eat poop."},
        { author: "Kurt Cobain", quote: "The worst crime is faking it."},
        { author: "Kurt Cobain", quote: "Once you fall in love... It's different."},
        { author: "Kurt Cobain", quote: "None of you will ever know what I am thinking."},
        { author: "Kurt Cobain", quote: "I like to complain and do nothing to make things better."},
        { author: "Kurt Cobain", quote: "A friend is nothing but a known enemy."},
        { author: "Kurt Cobain", quote: "Life isn't nearly as sacred as the appreciation of passion."},
        { author: "Kurt Cobain", quote: "Oh well, whatever, nevermind."},
        { author: "Kurt Cobain", quote: "To be positive at all times is to ignore all that is important, sacred or valuable. To be negative at all times is to be threatened by ridiculousness and instant discredibility."},
        { author: "Kurt Cobain", quote: "You can't buy happiness."},
        { author: "Kurt Cobain", quote: "Practice makes perfect, but nobody's perfect, so why practice?"},
        { author: "Kurt Cobain", quote: "There is nothing I can say that I haven't thought before."},
        { author: "Kurt Cobain", quote: "all i want...is mac and cheese"},
        { author: "Frances Bean Cobain", quote: "I can count on one hand how many people I trust."},
        { author: "Frances Bean Cobain", quote: "If you're a big Nirvana fan, a big Hole fan, then I understand why you would want to get to know me, but I'm not my parents."},
        { author: "Dave Grohl", quote: "No one is you, and that is your power."},
        { author: "Dave Grohl", quote: "That’s one of the great things about music. You can sing a song to 85,000 people and they’ll sing it back for 85,000 different reasons."},
        { author: "Dave Grohl", quote: "You will only be great at things you love to do don't pursue a career in something you hate to do."},
        { author: "Dave Grohl", quote: "You look up to your heroes and you shouldn't be intimidated by them; you should be inspired by them."},
        { author: "Dave Grohl", quote: "How do I stay humble? Because I'm the best at being humble."},
        { author: "Dave Grohl", quote: "The human element of making music is what's most important."},
        { author: "Dave Grohl", quote: "I think people should feel encouraged to be themselves."},
        { author: "Dave Grohl", quote: "Don't look at the poster on your wall and think 'I could never do that.' Look at the poster on your wall and think 'I'm gonna do that!'"},
        { author: "Dave Grohl", quote: "Always have the highest bar for yourself."},
        { author: "Dave Grohl", quote: "I'm not into albums that are meant to sound perfect."},
        { author: "Dave Grohl", quote: "Who's to say what's a good voice and not a good voice?"},
        { author: "Dave Grohl", quote: "Develop that individuality by working as hard as you can at what you love."},
        { author: "Dave Grohl", quote: "Through Kurt I saw the beauty of minimalism and the importance of music that's stripped down."},
        { author: "Dave Grohl", quote: "Sharing music is not a crime. It shouldn't be. There should be a deeper meaning to making music than just selling downloads."},
        { author: "Dimebag Darrell", quote: "Music drives you. It wakes you up, it gets you pumping. And, at the end of the day, the correct tune will chill you down."}                      
      ]
    }

    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
  	let len = this.state.quotes.length;
    let nextQuote = getRandomInt(0, len - 1);
    this.setState({curQuote: nextQuote});
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="panel panel-default" id="quote-box">
            {/* <div class="panel-body"> */}
              <div id="text">"{this.state.quotes[this.state.curQuote].quote}"</div>
              <div id="author">- {this.state.quotes[this.state.curQuote].author}</div>
              <span class="btn">
              <a  class="App-link" href="twitter.com/intent/tweet" id="tweet-quote">Tweet Quote</a>
              </span>
              <span class="btn">
              <input type="button" id="new-quote" value="New Quote" onClick={this.newQuote}></input>
              </span>
            {/* </div> */}
          </div>
        </header>
        <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'></script>
      </div>
    );
  }
}

export default App;
