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
  strings: ['Connection link....<br>Encoding....<br> Uploading....']
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
    .typeString('FARM:/färm/<br>')
    .typeString('  verb: in games. to farm. to quickly and repeatedly<br>')
    .typeString('        defeat a challenge or challenger, growing resources<br>')
    .typeString('        and abilities...<br>')
    .typeString('  noun: a place dedicated to growing and harvesting<br>')
    .typeString('        tasty resources...<br><br>')
    .pauseFor(300)
    .typeString('FEED:/fēd/<br>')
    .typeString('  verb: in games. to feed. to be repeatedly defeated,<br>')
    .typeString('        helping the opponent...<br>')
    .typeString('  noun: sustenance.  a meal with loads of very good grub...<br><br>')
    .pauseFor(300)
    .typeString('Locate:<br>')
    .pauseFor(300)
    .typeString('  <a href="https://goo.gl/maps/JPgZHbeJ43mJX5Ci8">coordinates</a><br>')
    .typeString('  <a href="https://www.instagram.com/farmandfeed">instagram</a><br>')
    .typeString('  <a href="https://www.facebook.com/farmandfeedplano">facebook</a><br>')
    .typeString('  <a href="https://twitter.com/farm_and_feed">twitter</a><br>')
    .typeString('  <a href="https://www.linkedin.com/company/farmandfeed">linkedIn</a><br>')
    .typeString('  <a href="https://www.tiktok.com/@farmandfeed">tiktok</a><br>')
    .pauseFor(1000);
  typewriter.start();
}

function menu() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('This is the menu.<br><br>')
    .pauseFor(300)
    .typeString('We have fun stations, couches and booths to reserve with:<br>')
    .typeString('PS5s, XBOX Xs, Switches, PCs.<br>')
    .typeString('     $5/hr/person until 6PM and after 10PM<br>')
    .typeString('     $10/hr/person 6PM - 10PM<br>')
    .typeString('     $5 for unlimited board games in the bar area<br><br>')
    .pauseFor(300)
    .typeString('We have delicious food...<br><br>')
    .typeString('<u>HEADSHOTS</u><br>')
    .typeString('     MINI LONGANISA CORN DOGS:                         $10.00 <br>')
    .typeString('     filipino longanisa sausage, spicy banana ketchup<br>')
    .typeString('     PIZZA ROLLS:                                      $10.00<br>')                     
    .typeString('     air bread, mozzarella, tomato jam, crispy pepperoni<br>')
    .typeString('     SPICY POPCORN CHICKEN SKEWERS:                    $10.00<br>') 
    .typeString('     houseblend chile powder, thai basil, chili honey<br>')
    .typeString('     DEVILED EASTER EGGS:                              $ 8.50<br>')
    .typeString('     kewpie mayo, togarashi, sweet + spicy gochujang bacon<br>')
    .typeString('     GRILLED PORK / IMPOSSIBLE SAUSAGE LETTUCE CUPS:   $10.00<br>') 
    .typeString('     pork collar or impossible sausage,nam prik noom,<br>')
    .typeString('     pickled cucumber<br>')
    .typeString('     BAOWSER SLIDERS:                                  $10.00<br>') 
    .typeString('     24hr beef brisket or impossible sausage, spicy hoisin,<br>') 
    .typeString('     cilantro, jalapeno, pickled carrot & daikon,<br>')
    .typeString('     fried bao buns<br>')
    .typeString('     HOT CHEETOS CORN CHEESEBALLS:                     $ 8.50<br>') 
    .typeString('     brown butter roasted corn, bulldog sauce, kewpie,<br>')
    .typeString('     pickled red onion, bonito<br><br>')
    .typeString('<u>HIT PAUSE</u><br>')
    .typeString('     GG BURGER:                                        $15.00<br>')
    .typeString('     dry aged beef patty, tillamook cheddar, caramelized<br>')
    .typeString('     onions, pickles, secret sauce, potato bun, fries<br>')
    .typeString('     +2 for bacon<br>')
    .typeString('     VEGAN GG BURGER:                                  $17.00<br>')
    .typeString('     impossible meats, aged cashew nut cheddar, caramelized<br>')
    .typeString('     onions, pickles, sauce, vegan potato bun, fries<br>')
    .typeString('     HOT FISH SANDO:                                   $15.00<br>')
    .typeString('     buttermilk fried atlantic cod, sichuan chile oil, slaw,<br>') 
    .typeString('     pickles, yuzu kosho mayo, potato bun, fries<br>')
    .typeString('     HOT CHICKEN SANDWICH:                             $15.00<br>') 
    .typeString('     buttermilk fried chicken, slaw, potato bun, fries<br>')
    .typeString('     +2 for bacon<br>')
    .typeString('     SEASONAL POWER-UP - The RUSH Hour:                $15.00<br>')
    .typeString('     rice paper crisps, ahi tuna, salmon, cucumber, avocado,<br>') 
    .typeString('     mango, edamame, spicy chili aioli <br>')
    .typeString('<u>FTW</u><br>')
    .typeString('     MILK AND COOKIES:                                 $ 5.75<br>')
    .typeString('     sea salt chocolate chip cookies,<br>')
    .typeString('     peanut butter chocolate oat milk made<br>')
    .typeString('     WARM PINEAPPLE BUN:                               $ 7.00<br>') 
    .typeString('     salted egg yolk, brown butter, semifreddo<br><br>')
    .typeString('And tasty beverages...<br><br>')
    .typeString('<u>COCKTAILS </u><br>')
    .typeString('     KIRBYS DRINKLAND                                  $10.00<br>')
    .typeString('     yogurt soju, calvados, strawberry puree, egg white,<br>')
    .typeString('     lemon<br>')
    .typeString('     GOLDSHIRE                                         $12.00<br>')
    .typeString('     gin, lemon, ginger syrup, honey, sparkling wine<br>')
    .typeString('     TONIC THE HEDGEHOG                                $10.00<br>')
    .typeString('     new amsterdam gin, blue curacao, grenadine, tonic,<br>')
    .typeString('     cherry<br>')
    .typeString('     HARD RESET                                        $12.00<br>')
    .typeString('     titos, lime juice, mint ginger syrup, ginger beer<br>')
    .typeString('     RAD WATER                                         $10.00<br>')
    .typeString('     espolon silver, lime juice, club soda, pink grapefuit<br>')
    .typeString('     soda<br>')
    .typeString('     PALEBLOOD                                         $10.00<br>')
    .typeString('     titos, creme de violet, lemon juice, lavendar simple<br>')
    .typeString('     syrup<br>')
    .typeString('     BOARDWALK                                         $10.00<br>')
    .typeString('     rye whiskey, averna amaro, bitters, orange<br>')
    .typeString('     DRATINI                                           $12.00<br>')
    .typeString('     titos, cointreau, hynotiq, lemon<br><br>')
    .typeString('<u>NOT-TAILS</u><br>')
    .typeString('     REDSTONE DUST                                     $ 7.00<br>')
    .typeString('     strawberry puree, lime juice, simple syrup, sierra mist<br>')
    .typeString('     RIVENDELL                                         $ 7.00<br>')
    .typeString('     cream of coconut, mint ginger syrup, lime juice<br>')
    .typeString('     SOFT DRINKS + ICED TEA                            $ 2.50<br>')
    .typeString('     pepsi, sierra mist, lemonade, mountain dew, dr. pepper,<br>')
    .typeString('     agave vanilla cream soda, pineapple cream soda<br><br>')
    .typeString('<u>BEER</u><br>')
    .typeString('     DRAFT                                             $ 5.00<br>')
    .typeString('     miller lite, shiner bock, yuengling, sinful temptress<br>')
    .typeString('     BOTTLES                                           $ 4.25<br>')
    .typeString('     coors light, bud light, michelob ultra, modelo, corona,<br>')
    .typeString('     dos equis, guiness, angry orchard, truly strawlemonade<br><br>')
    .typeString('<u>WINE*</u><br>')
    .typeString('     CRAFTERS UNION                                    $ 9.00<br>')
    .typeString('     red blend, pinot grigio,brut bubbles<br>')
    .typeString('     *1 can of wine contains 2 glass<br>')
    .pauseFor(1000);
  typewriter.start();
}

function reserve() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('We have fun stations, couches and booths to reserve with:<br>')
    .typeString('PS5s, XBOX Xs, Switches, PCs.<br>')
    .typeString('     $5/hr/person until 6PM and after 10PM<br>')
    .typeString('     $10/hr/person 6PM - 10PM<br>')
    .typeString('     $5 for unlimited board games in the bar area<br><br>')
    .pauseFor(300)
    .typeString('    <a href="https://www.sevenrooms.com/reservations/farmfeed?duration-picker=true">RESERVE GAMING+FOOD+DRINK</a><br><br>')
    .typeString('    <a href="https://www.sevenrooms.com/reservations/farmfeed">RESERVE FOOD+DRINK</a><br><br>')
    .typeString('Or call: 432-356-3467<br><br>')
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
    .typeString('Order food online:<br><br>')
    .pauseFor(300)
    .typeString('    <a href="https://www.toasttab.com/farmandfeed">ORDER FOOD</a><br><br>')
    .pauseFor(300)
    .typeString('Thank you')
    .pauseFor(1000);
  typewriter.start();
}

function hours() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('Look at these amazing tentative hours:<br>')
    .typeString('<br>')
    .typeString('  Monday      11AM - 12AM<br>')
    .typeString('  Tuesday     CLOSED<br>')
    .typeString('  Wednesday   11AM - 12AM<br>')
    .typeString('  Thursday    11AM - 12AM<br>')
    .typeString('  Friday      11AM - 2AM<br>')
    .typeString('  Saturday    11AM - 2AM<br>')
    .typeString('  Sunday      11AM - 12AM<br><br>')
    .typeString('Shops at Legacy North, 7401 Lone Star Drive <br>')
    .typeString('STE B120<br>')
    .typeString('Plano, TX 75024<br>')
    .pauseFor(1000);
  typewriter.start();
}

function events() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('<a href="http://sevn.ly/x7toJNEs">SEE ALL UPCOMING EVENTS and BOOK A SPOT!</a><br><br>')
    .typeString('<u>EXAMPLES</u><br>')
    .typeString('IT TAKES TWO VALENTINE"S DAY CHALLENGE<br>')
    .typeString('The couple that progresses the furtherst in<br>')
    .typeString('the game, It Takes Two, gets their evening comped.<br>')
    .typeString('6:30 entry, challenge begins at 7pm and ends at 9pm.<br>')
    .typeString('Monday, February 14th 2022: $75 per couple.<br><br>')
    .typeString('LEAGUE OF LEGENDS CLASS WITH OUR OWN MASTER<br>')
    .typeString('Play some games with our own in-house master and<br>')
    .typeString('review footage after matches to help improve your<br>')
    .typeString('gameplay.  All levels welcome.<br>')
    .typeString('Stay tuned for first date later this month.<br><br>')
    .typeString('DnD Character Creation Day<br>')
    .typeString('Our in-house Dungeon Masters want to bring<br>')
    .typeString('more people into the game and are holding a<br>')
    .typeString('session for character creation.  Develop your<br>')
    .typeString('hero"s backstory, roll attributes and learn about<br>')
    .typeString('about the awesome world of Dungeons and Dragons!<br>
    .typeString('$10/person for a 4 to 5 hour session. Monday 2/28<br>')
    .typeString('LAN-OLYMPICS<br>')
    .typeString('Do you want free gaming for a year?<br>')
    .typeString('Are you really competitive in un-competitive games?<br>')
    .typeString('Then this in-house LAN tourney is for you.<br>')
    .typeString('Large scale Fall Guys, MarioKart, and more to see who<br>')
    .typeString('is the greatest casual player of them all.  Stay tuned!<br>')
    .pauseFor(1000);
  typewriter.start();
}

function games() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('Play sweet games<br>')
    .pauseFor(300)
    .typeString('    <a href="https://docs.google.com/spreadsheets/d/1C1YDj-6ldxhRh5d_I_yh00HmuiS3m8MJ3-KiQSsRsXw/edit?usp=sharing">GAME LIBRARY</a><br>')
    .pauseFor(1000);
  typewriter.start();
}

function contact() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('Call us at: 432-356-3467<br>')
    .typeString('Find us at:<br>')
    .typeString('     Shops at Legacy North, 7401 Lone Star Drive <br>')
    .typeString('     STE B120<br>')
    .typeString('     Plano, TX 75024<br>')
    .typeString('     <a href="https://goo.gl/maps/JPgZHbeJ43mJX5Ci8">coordinates</a><br><br>')
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
