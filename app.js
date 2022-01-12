const logo =
'  ______                             ______            _ \n' +
' |  ____|                      _    |  ____|          | |\n' +
' | |__ __ _ _ __ _ __ ___    _| |_  | |__ ___  ___  __| |\n' +
' |  __/ _` | \'__| \'_ ` _ \\  |_   _| |  __/ _ \\/ _ \\/ _` |\n' +
' | | | (_| | |  | | | | | |   |_|   | | |  __/  __/ (_| |\n' +
' |_|  \\__,_|_|  |_| |_| |_|         |_|  \\___|\\___|\\__,_|\n\n';

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 20,
  autoStart: true,
  cursor: '█',
  strings: ['Connection link.... <br />Encoding....<br /> Uploading....']
});

function reset() {
  typewriter.stop();
  typewriter.state.lastFrameTime = null;
  typewriter.state.pauseUntil = null;
  typewriter.state.eventQueue = [];
  typewriter.state.calledEvents = [];
}

function about() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .changeDelay(-1)
    .typeString('<pre>' + logo + '</pre>')
    .changeDelay(20)
    .pauseFor(300)
    .typeString('FARM:/färm/ <br /> verb: in games. to farm. to quickly and repeatedly defeat a challenge or challenger, growing resources and abilities...<br /> noun: a place dedicated to growing and harvesting tasty resources... <br /> <br />')
    .pauseFor(300)
    .typeString('FEED:/fēd/ <br /> verb: in games. to feed. to be repeatedly defeated, helping the opponent... <br /> noun: sustenance.  a meal with loads of very good grub... <br /> <br />')
    .pauseFor(300)
    .typeString('Locate: <br />')
    .pauseFor(300)
    .typeString('<a href="https://goo.gl/maps/Ym5q1N9xt9EjyQ638">coordinates</a> <br />')
    .typeString('<a href="https://www.instagram.com/farm_and_feed">instagram</a> <br />')
    .typeString('<a href="https://www.facebook.com/farmandfeedplano">facebook</a> <br />')
    .typeString('<a href="https://twitter.com/farm_and_feed">twitter</a> <br />')
    .typeString('<a href="https://www.linkedin.com/company/farmandfeed">linkedIn</a> <br />')
    .typeString('<a href="https://www.tiktok.com/@farmfeed1">tiktok</a> <br />')
    .pauseFor(1000);
  typewriter.start();
}

function menu() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('This is the menu<br><br>')
    .pauseFor(300)
    .typeString('We have delicious food<br><br>')
    .pauseFor(300)
    .typeString('And tasty beverages')
    .pauseFor(1000);
  typewriter.start();
}

function reserve() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('Make a reservation<br><br>')
    .pauseFor(300)
    .typeString('<blockquote><a href="#">RESERVE</a><br><br>')
    .pauseFor(300)
    .typeString('Thank you')
    .pauseFor(1000);
  typewriter.start();
}

function order() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('Order food')
    .pauseFor(1000);
  typewriter.start();
}

function hours() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('Look at these amazing tentative hours:<br />')
    .typeString('<span> Monday 11AM - 12AM </span>')
    .typeString('Tuesday CLOSED')
    .typeString('Wednesday  11AM - 12AM')
    .typeString('Thursday 11AM - 12AM')
    .typeString('Friday  11AM - 2AM')
    .typeString('Saturday  11AM - 2AM')
    .typeString('Sunday 11AM - 12AM')
  
    .pauseFor(1000);
  typewriter.start();
}

function events() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('Watch cool stuff')
    .pauseFor(1000);
  typewriter.start();
}

function games() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('Play sweet games')
    .pauseFor(1000);
  typewriter.start();
}

function contact() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('We love email<br><br>')
    .pauseFor(300)
    .typeString('<blockquote><a href="mailto:info@farmandfeed.com">CONTACT US</a><br><br>')
    .pauseFor(300)
    .typeString('Thank you')
    .pauseFor(1000);
  typewriter.start();
}

window.onload = about;

let musicStarted = false;
document.querySelector('audio').addEventListener('play', () => {
  musicStarted = true;
});

document.addEventListener('click', (e) => {
  if (!musicStarted) {
    // Try to autostart the music
    document.querySelector('audio').play();
    musicStarted = true;
  }

  if (e.target.tagName !== 'A') {
    // For any click that isn't a link, fast forward the typewriter
    typewriter.stop();
    fastForward();
  }
});

function fastForward() {
  const eventQueue = typewriter.state.eventQueue;
  for (let i = 0; i < eventQueue.length; i++) {
    const event = eventQueue[i];
    switch (event.eventName) {
    case 'REMOVE_ALL':
    case 'REMOVE_LAST_VISIBLE_NODE':
      {
        const parent = typewriter.state.elements.wrapper;
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
        typewriter.state.visibleNodes = [];
      }
      break;
    case 'PASTE_STRING':
    case 'TYPE_CHARACTER':
      {
        const character = event.eventArgs.character;
        const node = document.createTextNode(character);
        const parentNode = event.eventArgs.node || typewriter.state.elements.wrapper;
        parentNode.appendChild(node);
        typewriter.state.visibleNodes.push({
          type: 'TEXT_NODE',
          character,
          node,
        });
      }
      break;
    case 'ADD_HTML_TAG_ELEMENT':
      {
        const node = event.eventArgs.node;
        const parentNode = event.eventArgs.parentNode || typewriter.state.elements.wrapper;
        parentNode.appendChild(node);
        typewriter.state.visibleNodes.push({
          type: 'TEXT_NODE',
          node,
          parentNode,
        });
      }
      break;
    }
  }
  reset();
}
