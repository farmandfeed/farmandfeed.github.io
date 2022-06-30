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
  delay: 300,
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
    .typeString('  <a href="https://discord.gg/xESNekhAME">discord</a><br>')
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
    .typeString('PS5s, XBOX Xs, Switches, PCs.<br><br>')
    .typeString('     $5/hr/person until 6PM and after 10PM<br>')
    .typeString('     $10/hr/person 6PM - 10PM<br>')
    .typeString('     $5 for unlimited board games in the bar area<br><br>')
    .pauseFor(300)
    .typeString('We have delicious food...<br><br>')
    .typeString('<u>HEADSHOTS</u><br>')
    .typeString('     MINI LONGANISA CORN DOGS:                         $10.00 <br>')
    .typeString('     filipino longanisa sausage, spicy banana ketchup, chives<br><br>')
    .typeString('     PIZZA ROLLS:                                      $10.00<br>')                     
    .typeString('     air bread, mozzarella, tomato jam, crispy pepperoni<br><br>')
    .typeString('     GRILLED HALLOUMI CAPRESE SALAD:                   $ 8.50<br>')
    .typeString('     crispy halloumi, pickled red onion, arugula, heirloom<br>')
    .typeString('     tomato, balsamic glaze, tahini citrus dressing<br><br>')
    .typeString('     KIMCHI SWEET POTATO CHEESE FRIES:                 $ 8.50<br>')
    .typeString('     kimchi, sweet potato fries, gochujang nacho cheese, yum<br>')
    .typeString('     yum sauce, green onion, black sesame seed<br><br>')
    .typeString('     SPICY POPCORN CHICKEN SKEWERS:                    $10.00<br>') 
    .typeString('     houseblend chile powder, thai basil, chili honey<br><br>')
    .typeString('     DEVILED EASTER EGGS:                              $ 8.50<br>')
    .typeString('     kewpie mayo, togarashi, sweet + spicy gochujang bacon<br><br>')
    .typeString('     PORK AND PINEAPPLE TACO:                          $10.00<br>') 
    .typeString('     slow roasted pork or impossible sausage,grilled pineapple, <br>')
    .typeString('     nam prik noom, queso fresco, cilantro, flour tortilla or<br>')
    .typeString('     lettuce wrap<br><br>')     
    .typeString('     BAOWSER SLIDERS:                                  $10.00<br>') 
    .typeString('     24hr beef brisket or impossible sausage, spicy hoisin,<br>') 
    .typeString('     cilantro, jalapeno, pickled carrot & daikon,<br>')
    .typeString('     fried bao buns<br><br>')
    .typeString('     HOT CHEETOS OR DORITO COOL RANCH CORN CHEESEBALLS:$ 8.50<br>') 
    .typeString('     brown butter roasted corn, bulldog sauce, kewpie,<br>')
    .typeString('     pickled red onion, bonito<br><br>')
    .typeString('<u>HIT PAUSE</u><br>')
    .typeString('     SUPER SMASHBURGER:                                $15.00<br>')
    .typeString('     cheddar, caramelized onions, pickles, secret sauce, <br>')
    .typeString('     brioche bun, fries, +2 for bacon<br><br>')
    .typeString('     VEGAN SMASHBURGER:                                $17.00<br>')
    .typeString('     burger except with impossible meat, aged vegan cheddar<br><br>')
    .typeString('     HOT FISH SANDO:                                   $15.00<br>')
    .typeString('     buttermilk fried cod, sichuan chile oil, vinegar slaw,<br>') 
    .typeString('     yuzu kosho mayo, brioche bun, fries<br><br>')
    .typeString('     NOT SO EASY BRISKET MAC AND CHEESE:               $15.00<br>')
    .typeString('     cavatappi pasta, cheddar cheese, 24hr brisket, dr pepper<br>')
    .typeString('     bbq sauce, crispy panko topping, chive<br><br>')
    .typeString('     PULLED PORK GRILLED CHEESE:                       $15.00<br>')
    .typeString('     soy braised pork, pickled red onion, cheddar, mozzarella<br>')
    .typeString('     country loaf, fried<br><br>')
    .typeString('     CRISPY CHOCOBO SANDWICH:                          $15.00<br>') 
    .typeString('     buttermilk fried chicken, sweet+spicy gochujang glaze,<br>')
    .typeString('     vinegar slaw, brioche bun, fries, +2 for bacon<br><br>')
    .typeString('     RUSH HOUR:                                        $15.00<br>')
    .typeString('     rice paper crisps, raw ahi tuna, salmon, cucumber, avocado,<br>') 
    .typeString('     mango, edamame, spicy chili aioli, sesame seed<br><br>')
    .typeString('     GRILLED THAI SHRIMP SALAD:                        $15.00<br>')
    .typeString('     grilled shrimp, mango, avocado, charred jalapeno, grilled<br>')
    .typeString('     zucchini, thai basil, mint, thai chili vinaigrette<br><br>')
    .typeString('<u>FTW</u><br>')
    .typeString('     MILK AND COOKIES:                                 $ 5.75<br>')
    .typeString('     sea salt chocolate chip cookies,<br>')
    .typeString('     peanut butter chocolate oat milk made<br><br>')
    .typeString('     KOOPA ICE CREAM SANDWICH:                         $ 7.00<br>') 
    .typeString('     please allow 15mins. salted egg yolk, brown butter,<br>')
    .typeString('     semifreddo OR cinnamon semifreddo + caramalized pineapple<br><br>')
    .typeString('     SPICED APPLE HAND PIE + VANILLA ICE CREAM:        $ 7.00<br>')
    .typeString('     bake to order, please allow 15 minutes, spiced apple filling<br>')
    .typeString('     vanilla bean ice cream<br><br>')
    .typeString('<u>TUTORIAL MODE</u><br>')
    .typeString('     PLAIN CHEESE BURGER AND FRIES                     $15.00<br>')
    .typeString('     POPCORN CHICKEN SKEWERS - NO SPICE                $10.00<br>')
    .typeString('     NOT SO EASY BAKE MAC AND CHEESE                   $10.00<br>')
    .typeString('     GRILLED CHEESE SANDWICH                           $10.00<br>')
    .typeString('     PIZZA ROLLS - NO PEPPERONI                        $ 8.50<br>')
    .typeString('     SIDE OF FRIES                                     $ 4.00<br><br>')
    .typeString('<u>L00T PLATE  $10  </u><br>')
    .typeString('     if you love the thrill of loot crates, RNG and crit rolls,<br>')
    .typeString('     then roll a 1D20 for food: <br><br>')
    .typeString('     <u>Roll</u>                      <u>Outcome</u><br>')
    .typeString('       1                        Bag of Flamin Hot Cheetos<br>')
    .typeString('     2  - 7                     Select an $8.50 menu item<br>')
    .typeString('     8  - 13                    Select a $10.00 menu item<br>')
    .typeString('     14 - 19                    Select a $15.00 menu item<br>')
    .typeString('       20                     Select a $15.00 + FTW menu item<br><br>')
    .typeString('     please do not do this if you are going to be upset at an<br>')
    .typeString('     unfavorable outcome<br><br>')
    .typeString('And tasty beverages...<br><br>')
    .typeString('<u>COCKTAILS </u><br>')
    .typeString('     KIRBYS DRINKLAND                                  $10.00<br>')
    .typeString('     yogurt soju, calvados, strawberry puree, egg white,<br>')
    .typeString('     lemon<br>')
    .typeString('     GOLDSHIRE                                         $12.00<br>')
    .typeString('     gin, lemon, ginger syrup, honey, sparkling wine<br>')
    .typeString('     ERDTREE FLOWER                                    $12.00<br>')
    .typeString('     bombay east gin, saint germaine, oj, tonic, orange bitters<br>')
    .typeString('     HARD RESET                                        $12.00<br>')
    .typeString('     tito\'s, lime juice, mint ginger syrup, ginger beer<br>')
    .typeString('     RAD WATER                                         $10.00<br>')
    .typeString('     espolon silver, lime juice, club soda, pink grapefuit<br>')
    .typeString('     soda<br>')
    .typeString('     PALEBLOOD                                         $10.00<br>')
    .typeString('     tito\'s, creme de violet, lemon juice, lavendar simple<br>')
    .typeString('     syrup<br>')
    .typeString('     BOARDWALK                                         $10.00<br>')
    .typeString('     rye whiskey, averna amaro, bitters, orange<br>')
    .typeString('     GILLIONAIRE                                       $12.00<br>')
    .typeString('     dewar\'s, oj, maple syrup, bitters<br><br>')
    .typeString('<u>PHASERS TO STUN</u><br>')
    .typeString('     RED WARRIOR                                       $ 7.50<br>')
    .typeString('     vodka, lemon juice, cranberry juice, simple, grenadine<br>')
    .typeString('     MANABURN                                          $ 7.50<br>')
    .typeString('     tequila, blue curacao, creme de violet, triple sec, simple <br>')
    .typeString('     NEW DROPS                                         $10-12<br>')
    .typeString('     our bartenders are always working on fresh concoctions,<br>')
    .typeString('     ask to try their latest <br><br>')
    .typeString('<u>NOT-TAILS</u><br>')
    .typeString('     REDSTONE DUST                                     $ 7.00<br>')
    .typeString('     strawberry puree, lime juice, simple syrup, sierra mist<br>')
    .typeString('     RIVENDELL                                         $ 7.00<br>')
    .typeString('     cream of coconut, mint ginger syrup, lime juice<br>')
    .typeString('     SOFT DRINKS + ICED TEA                            $ 2.50<br>')
    .typeString('     pepsi, sierra mist, lemonade, mountain dew, dr. pepper,<br>')
    .typeString('     agave vanilla cream soda, pineapple cream soda<br><br>')
    .typeString('<u>BEER</u><br>')
    .typeString('     DRAFT                                             $ 6.00<br>')
    .typeString('     seasonal rotation of 4 taps.  please ask your server<br>')
    .typeString('     BOTTLES/CANS                                      $ 4.25<br>')
    .typeString('     bud light, michelob ultra, cadillac bandito, mangocart<br>')
    .typeString('     dos equis, guiness, angry orchard, truly strawlemonade<br>')
    .typeString('     manhattan project plutonium, rogue batsquatch ipa<br>')
    .typeString('     long drink strong $6 <br><br>')
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
    .typeString('    <a href="mailto:events@farmandfeed.com">For events and parties please click here to email</a><br><br>') 
    .typeString('Or call: 432-356-3467<br><br>') 
    .pauseFor(300)
    .typeString('Please review our <u>CODE of CONDUCT</u> before booking:<br>')
    .typeString('     No Toxicity - To each other and to our staff.<br><br>')
    .typeString('     Kids <13 must always be accompanied by an adult and are not to<br>')
    .typeString('     be alone at any table/booth/couch/pc or disturbing other guests.<br><br>')
    .typeString('     We take credit card info prior to gaming.  If equipment is stolen or <br>')
    .typeString('     maliciously broken we will charge the card for replacement value.<br><br>')
    .typeString('     There is a 20% service charge on groups >6.  Large groups should book <br>')
    .typeString('     through our events/party process below, for us to best accomodate.<br><br>')
    .typeString('     Do not download or delete games on our consoles/pcs. See below for requests.<br>')
    .typeString('     We do our best to accomodate, but if requests were not specified in advance,<br>')
    .typeString('     we cannot guarantee specific game/console/pc availability.<br><br>')
    .typeString('     If you are unhappy with anything please just let us know. We want <br>')
    .typeString('     this to be a great experience as much as you do!<br><br>')      
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
    .typeString('<a href="mailto:events@farmandfeed.com">For your own events and parties please email here</a><br><br>') 
    .typeString('<a href="https://www.sevenrooms.com/events/farmfeed">CLICK FOR OUR UPCOMING EVENTS and to BOOK A SPOT!</a><br><br>')
    .typeString('<u>EXAMPLES</u><br>')
    .typeString('FALL GUYS SUNDAY LAN LUNACY<br>')
    .typeString('This Sunday 3 - 5 we are hosting a Fall Guys local server<br>')
    .typeString('event to stress test our LAN capabilities. Farm+Feed only <br>')
    .typeString('servers to play against each other in some friendly fun. <br>')
    .typeString('No cost to signup, no gaming charge, fun food/drink and <br>')
    .typeString('giftcard giveaways throughout.  3 - 5PM Sunday.<br><br>') 
    .typeString('MAGIC MONDAYS<br>')
    .typeString('Every Monday night starting Monday, March 21st, 7:00pm<br>')
    .typeString('Commander deck $15 entry, which includes 2 packs.<br>')
    .typeString('2x 90min games. You knock a player out you take their pack.<br>')
    .typeString('Winner gets an additional pack on the house.<br>')
    .typeString('Please, mid-power level only. 4 person pods.<br><br>')
    .typeString('CHEF\'S TABLE<br>')
    .typeString('Quarterly private Chef\'s Table for our most loyal guests.<br>')
    .typeString('2nd Wednesday of each quarter: 4/13, 7/13 etc. you will<br>')
    .typeString('be invited to a tasting of new, up and coming menu items.<br><br>')
    .typeString('ADVENTURERS\' GUILD - DND LAST WEDNESDAY OF EVERY MONTH<br>')
    .typeString('Our in-house Dungeon Masters want to bring<br>')
    .typeString('more people into the game and are holding ongoing <br>')
    .typeString('DnD session. Come campaign in the awesome<br>')
    .typeString('world of Dungeons and Dragons! $10/person<br>')
    .typeString('Next session is March 30th <br><br>')
    .typeString('LEAGUE OF LEGENDS CLASS WITH OUR OWN MASTER<br>')
    .typeString('Play some games with our own in-house master and<br>')
    .typeString('review footage after matches to help improve your<br>')
    .typeString('gameplay.  All levels welcome.<br>')
    .typeString('Stay tuned for first date later this month.<br><br>')   
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
    .typeString('Call us at: 432-356-3467<br><br>')
    .typeString('Find us at:<br>')
    .typeString('     Shops at Legacy North, 7401 Lone Star Drive <br>')
    .typeString('     STE B120<br>')
    .typeString('     Plano, TX 75024<br>')
    .typeString('     <a href="https://goo.gl/maps/JPgZHbeJ43mJX5Ci8">coordinates</a><br><br>')
    .typeString('We love email<br><br>')
    .pauseFor(300)
    .typeString('<blockquote><a href="mailto:info@farmandfeed.com">GENERAL QUESTIONS</a><br><br>')
    .typeString('<blockquote><a href="mailto:events@farmandfeed.com">EVENTS + PARTIES + RESERVATIONS</a><br><br>')
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
