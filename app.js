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
    .typeString('  <a href="https://discord.gg/z8NnwtjJFS">discord</a><br>')
    .typeString('  <a href="https://www.facebook.com/farmandfeedplano">facebook</a><br>')
    .typeString('  <a href="https://twitter.com/farm_and_feed">twitter</a><br>')
    .typeString('  <a href="https://www.linkedin.com/company/farmandfeed">linkedIn</a><br>')
    .typeString('  <a href="https://www.tiktok.com/@farmandfeed">tiktok</a><br>')
    .pauseFor(1000);
  typewriter.start();
  typewriter.stop();
  fastForward();
}

function menu() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('This is the menu.<br><br>')
    .pauseFor(300)
    .typeString('We have fun stations, couches and booths to reserve with:<br>')
    .typeString('PS5s, XBOX Xs, Switches, PCs:<br><br>')
    .typeString('      UPDATED HOURLY RENTAL PRICING - NEW FLAT RATES<br>')
    .typeString('<u>SPACE(capacity)       WEEKEND     WEEKDAY    LATE NIGHT*</u><br>')
    .typeString('BOOTHS(3+ people)      $25.00      $15.00         $10.00<br>')
    .typeString('DUOS (2-3 people)      $12.50      $ 8.00         $ 5.00<br>')
    .typeString('PCS                    $ 7.00      $ 5.00         $ 3.00<br>') 
    .typeString('     *Late night is after 10PM<br><br>')
    .pauseFor(300)
    .typeString('We have delicious food...FALL/WINTER MENU UPDATE<br><br>')
    .typeString('<u>HEADSHOTS</u><br>')
    .typeString('     MINI LONGANISA CORN DOGS:                         $ 8.50 <br>')
    .typeString('     filipino longanisa sausage, spicy banana ketchup, chives<br><br>')
    .typeString('     PIZZA ROLLS:                                      $ 9.25<br>')                     
    .typeString('     air bread, mozzarella, tomato jam, crispy pepperoni<br><br>')
    .typeString('     HUMMUS + SEASONAL VEGETABLES:                     $12.25<br>')
    .typeString('     hummus, whipped feta, pistachio, seasonal vegetables,<br>')
    .typeString('     house flatbread, dill, chili oil<br><br>')
    .typeString('     KIMCHI SWEET POTATO CHEESE FRIES:                 $ 8.75<br>')
    .typeString('     kimchi, sweet potato fries, gochujang nacho cheese, yum<br>')
    .typeString('     yum sauce, green onion, black sesame seed<br><br>')
    .typeString('     SPICY POPCORN CHICKEN SKEWERS:                    $ 9.00<br>') 
    .typeString('     chicken thigh, chile powder, thai basil, chili honey<br><br>')
    .typeString('     DEVILED EASTER EGGS:                              $ 8.25<br>')
    .typeString('     kewpie mayo, togarashi, sweet+spicy gochujang bacon<br><br>')
    .typeString('     FLAMIN\' HOT CHEETOS CORN CHEESEBALLS:             $ 7.50<br>') 
    .typeString('     brown butter roasted corn, bulldog sauce, kewpie,<br>')
    .typeString('     pickled red onion, bonito<br><br>')
    .typeString('<u>HANDHELDS</u><br>')
    .typeString('     GRILLED PORK LETTUCE CUPS:                        $11.75<br>') 
    .typeString('     pork collar or impossible sausage +$2, lettuce wrap,<br>')
    .typeString('     mango, nam prik noom, cucumber, herbs<br><br>')  
    .typeString('     BAOWSER SLIDERS:                                  $11.75<br>') 
    .typeString('     24hr beef brisket or impossible sausage +$2<br>')
    .typeString('     spicy hoisin, cilantro, jalapeno, pickled carrot+daikon,<br>')
    .typeString('     fried bao buns<br><br>')
    .typeString('     SPAM MUSUBI:                               $4/1 or $10/3<br>')
    .typeString('     pan fried spam, teriyaki sauce, seasoned rice, nori<br>')
    .typeString('     +$3 macaroni salad cavatappi, kewpie mayo, onion,<br>')
    .typeString('     pickled onion <br><br>')
    .typeString('                          <u>TACOS</u>                      <br>') 
    .typeString('     CHICKEN TINGA:                                    $ 7.75<br>')                               
    .typeString('     3 chicken tinga tacos on corn tortilla with cilantro,<br>')
    .typeString('     onion, shredded cabbage, queso fresco and lime<br><br>')
    .typeString('     GRILLED SHRIMP:                                   $10.00<br>') 
    .typeString('     3 grilled shrimp tacos on corn tortilla with cilantro,<br>')
    .typeString('     slaw, onion and lime<br><br>')
    .typeString('<u>HIT PAUSE</u><br>')
    .typeString('     SUPER SMASHBURGER:                                $14.50<br>')
    .typeString('     smash style burger, cheddar, caramelized onions, pickles,<br>')
    .typeString('     secret sauce, brioche bun, fries.  vegan available <br>')
    .typeString('     +$2 for bacon<br><br>')
    .typeString('     CLASSIC SMASHBURGER:                              $14.00<br>')
    .typeString('     smash-style burger with cheddar, lettuce, tomato, mayo,<br>')
    .typeString('     pickles, fries. vegan available.  +$2 for bacon<br><br>')
    .typeString('     HOT FISH SANDO:                                   $15.75<br>')
    .typeString('     buttermilk fried cod, sichuan chile oil, vinegar slaw,<br>') 
    .typeString('     yuzu kosho mayo, brioche bun, fries<br><br>')
    .typeString('     CRISPY FIRE CHOCOBO SANDWICH:                     $13.50<br>') 
    .typeString('     buttermilk fried chicken thigh, sweet+spicy gochujang<br>')
    .typeString('     glaze, vinegar slaw, brioche bun, fries, +2 for bacon<br><br>')
    .typeString('     CLASSIC CHOCOBO SANDWICH:                         $13.00<br>') 
    .typeString('     lemon thyme chicken thigh, lettuce, tomato, mayo, dill<br>')
    .typeString('     pickles, brioche bun, fries. crispy or grilled<br>')
    .typeString('     +2 for bacon<br><br>')
    .typeString('     NOT SO EASY MAC + CHEESE:                         $10.00<br>')
    .typeString('     cavatappi pasta, cheddar cheese, crispy panko topping,<br>')
    .typeString('     chive, +$2.50 for 24hr brisket with dr pepper, bbq sauce <br><br>')
    .typeString('     GRILLED CHEESE:                                   $11.00<br>')
    .typeString('     pickled red onion, cheddar, mozzarella, country loaf,<br>')
    .typeString('     fries, +$2 for soy braised pulled pork<br><br>')
    .typeString('     RUSH HOUR II:                                     $14.00<br>')
    .typeString('     lettuce mix, pickled onion, edamame, mango, cucumber,<br>')
    .typeString('     daikon, carrot, avocado, thai chili dressing,<br>')
    .typeString('     grilled lemon thyme chicken thigh, cilantro<br><br>')
    .typeString('     SMOKEY BEET SALAD:                                $14.00<br>')
    .typeString('     mixed greens, balsamic roasted beets, green beans,<br>')
    .typeString('     avocado, shallot, crumbled bacon, alfalfa sprouts, grilled<br>')
    .typeString('     lemon thyme chicken thigh with roasted beet vinaigrette<br><br>')
    .typeString('<u>FTW</u><br>')
    .typeString('     SEA SALT CHOCOLATE CHIP COOKIES:                  $ 5.75<br>')
    .typeString('     3 sea salt chocolate chip cookies,<br>')
    .typeString('     +$3 for peanut butter chocolate oat milk<br><br>')
    .typeString('     KOOPA BUN:                                        $ 7.00<br>') 
    .typeString('     please allow 15mins. salted egg yolk, sweet bun with <br>')
    .typeString('     brown butter salted duck egg semifreddo, OR <br>')
    .typeString('     cinnamon semifreddo + caramalized pineapple<br><br>')
    .typeString('     CANNOLI:                                   $4/1 or $10/3<br>')
    .typeString('     choice of filling: ube/coconut, pandan/sesame,<br>')
    .typeString('     passion fruit<br><br>')
    .typeString('     SPICED APPLE HAND PIE + VANILLA ICE CREAM:        $ 7.00<br>')
    .typeString('     bake to order, please allow 15 minutes,<br>')
    .typeString('     spiced apple filling, vanilla bean ice cream<br><br>')
    .typeString('     COOKIE ICE CREAM SANDWICH:                        $ 6.00<br>')
    .typeString('     brown butter chocolate chip cookie, vanilla ice cream,<br>')
    .typeString('     strawberry garnish<br><br>')
    .typeString('<u>SIDES</u><br>')
    .typeString('     FRIES                                             $ 4.00<br>')
    .typeString('     SWEET POTATO FRIES                                $ 6.00<br>')
    .typeString('     MAC + CHEESE                                      $ 4.00<br>')
    .typeString('     MAC SALAD                                         $ 4.00<br>')
    .typeString('     SALAD                                             $ 4.00<br><br>')
    .typeString('<u>L00T PLATE</u>                                             $11.11<br>')
    .typeString('     if you love the thrill of loot crates, RNG and<br>')
    .typeString('     crit rolls, then roll a 1D20 for food:<br><br>')
    .typeString('     <u>Roll</u>                     <u>Outcome</u><br>')
    .typeString('     1                        Bag of Flamin Hot Cheetos<br>')
    .typeString('     2  - 7                   Select an $8.55 menu item<br>')
    .typeString('     8  - 13                  Select a $12.00 menu item<br>')
    .typeString('     14 - 19                  Select a $16.25 menu item<br>')
    .typeString('     20                       Select any + FTW menu item<br><br>')
    .typeString('     please do not do this if you are going to be upset at an<br>')
    .typeString('     unfavorable outcome<br><br>')
    .typeString('And tasty beverages...<br><br>')
    .typeString('<u>NUKED CLASSICS </u><br>')
    .typeString('     BOARDWALK                                         $12.00<br>')
    .typeString('     rittenhouse rye whiskey, meletti amaro, orange and<br>')
    .typeString('     angostura bitters,<br><br>')
    .typeString('     GOLDSHIRE                                         $12.00<br>')
    .typeString('     new amsterdam gin, fresh lemon juice, mint, house ginger<br>')
    .typeString('     syrup, honey, topped with brut<br><br>')
    .typeString('     ERDTREE FLOWER                                    $12.00<br>')
    .typeString('     bombay sapphire east gin, saint germain elderflower<br>')
    .typeString('     liqueur, fresh orange juice, fever tree tonic<br><br>')
    .typeString('     HARD RESET                                        $10.00<br>')
    .typeString('     tito\'s, fresh lime juice, mint, ginger syrup, ginger beer<br><br>')
    .typeString('     RAD WATER                                         $10.00<br>')
    .typeString('     luzanul tequila, fresh lemon juice, house hibiscus syrup,<br>')
    .typeString('     topped with fever tree grapefruit soda<br><br>')
    .typeString('     D. VARITA                                         $12.00<br>')
    .typeString('     hibiscus flower + togarashi rim, painted donkey blanco<br>')
    .typeString('     tequila,house hibiscus syrup, triple sec, fresh lime<br>')
    .typeString('     and orange juice<br><br>')
    .typeString('<u>AI GENERATED</u><br>')
    .typeString('     KIRBY\'S DRINKLAND                                 $12.00<br>')
    .typeString('     house yogurt jinro soju, house strawberry puree+simple<br>')
    .typeString('     egg white, fresh lemon juice<br><br>')
    .typeString('     PALEBLOOD                                         $10.00<br>')
    .typeString('     tito\'s, dolfi creme de violet, lemon, house lavendar<br>')
    .typeString('     syrup, house grenadine<br><br>')
    .typeString('     GILLIONAIRE                                       $12.00<br>')
    .typeString('     dewar\'s white label, fresh oj, maple syrup, egg white<br>')
    .typeString('     chocolate bitters<br><br>')
    .typeString('     RUBY REDEMPTION                                   $10.00<br>')
    .typeString('     tito\'s, st germain elderflower liqueur, giffard\'s orgeat<br>')
    .typeString('     fresh lemon juice, mint,with fever tree grapefruit soda<br><br>')
    .typeString('     CORRUPTION                                        $12.00<br>')
    .typeString('     montelobos mezcal, novo cachaca, lemon bitters, agave<br><br>')
    .typeString('     MOJAVE SOJITO                                     $10.00<br>')
    .typeString('     jinro soju, prickly pear syrup, mint, fresh lime juice<br>')
    .typeString('     topped with soda<br><br>')
    .typeString('<u>PHASERS TO STUN</u><br>')
    .typeString('     R - RED WARRIOR                                   $ 7.50<br>')
    .typeString('     vodka, lemon juice, cranberry juice, simple, grenadine<br><br>')
    .typeString('     G - GAMER FUEL                                    $ 7.50<br>')
    .typeString('     midori, vodka, lime juice, lemon juice, orange juice,<br>')
    .typeString('     pineapple juice, mountain dew, lime wheel<br><br>')
    .typeString('     B -manaBURN                                       $ 7.50<br>')
    .typeString('     tequila, blue curacao, creme de violet, triple sec,<br>')
    .typeString('     simple<br><br>')
    .typeString('<u>NOT-TAILS</u><br>')
    .typeString('     REDSTONE DUST                                     $ 7.50<br>')
    .typeString('     strawberry puree, lime juice, simple syrup, sierra mist<br><br>')
    .typeString('     RIVENDELL                                         $ 7.50<br>')
    .typeString('     cream of coconut, mint ginger syrup, lime juice<br><br>')
    .typeString('     SNEAK 100                                         $ 7.50<br>')
    .typeString('     pineapple juice, passionfruit syrup, lime juice,<br>')
    .typeString('     grapefruit soda, pineapple frond<br><br>')
    .typeString('     SOFT DRINKS + ICED TEA                            $ 2.50<br>')
    .typeString('     pepsi, sierra mist, lemonade, mountain dew, dr. pepper,<br>')
    .typeString('     agave vanilla cream soda, pineapple cream soda<br><br>')
    .typeString('<u>BEER</u><br>')
    .typeString('     DRAFT                                             $ 6.00<br>')
    .typeString('     half life         - manhattan project - hazy IPA<br>')
    .typeString('     ABV: 6.2%, IBU: 33<br><br>')
    .typeString('     red gate          - manhattan project - amber<br>')
    .typeString('     ABV: 5.4%, IBU: ?<br><br>')
    .typeString('     day of the dead   - tupps             - pale ale<br><br>')
    .typeString('     cosmic prairie    - real ale          - hefeweizen<br>')
    .typeString('     ABV: 5.2%, IBU: 10<br><br>')
    .typeString('     BOTTLES                                           $ 4.25<br>')
    .typeString('     miller, shiner bock, dos equis, angry orchard<br><br>')
    .typeString('     CANS                                              $ 4.25<br>')
    .typeString('     michelob, cadillac bandito, mango cart, batsquatch<br>')
    .typeString('     power+light, kolsch, hefeweizen, plutonium 239, big wave<br>')
    .typeString('     pineapple cider, truly strawberry lemonade<br>')
    .typeString('     long drink strong $6, long drink cranberry $6<br><br>')
    .typeString('<u>WINE*</u><br>')
    .typeString('     CRAFTERS UNION                                    $ 9.00<br>')
    .typeString('     red blend, pinot grigio, brut bubbles<br>')
    .typeString('     *1 can of wine contains 2 glass<br>')
    .pauseFor(1000);
  typewriter.start();
  typewriter.stop();
  fastForward();
}

function reserve() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('We have fun stations, couches and booths to reserve with:<br>')
    .typeString('PS5s, XBOX Xs, Switches, PCs:<br><br>')
    .typeString('      UPDATED HOURLY RENTAL PRICING - NEW FLAT RATES<br>')
    .typeString('<u>SPACE(capacity)       WEEKEND     WEEKDAY    LATE NIGHT*</u><br>')
    .typeString('BOOTHS(3+ people)      $25.00      $15.00         $10.00<br>')
    .typeString('DUOS (2-3 people)      $12.50      $ 8.00         $ 5.00<br>')
    .typeString('PCS                    $ 7.00      $ 5.00         $ 3.00<br>') 
    .typeString('     *Late night is after 10PM<br><br>')
    .typeString('     $5 for unlimited board games in the bar area<br><br>')          
    .pauseFor(300)
    .typeString('    <a href="https://www.sevenrooms.com/reservations/farmfeed?duration-picker=true">RESERVE GAMING+FOOD+DRINK</a><br><br>')
    .typeString('    <a href="https://www.sevenrooms.com/reservations/farmfeed">RESERVE FOOD+DRINK</a><br><br>')
    .typeString('    <a href="mailto:events@farmandfeed.com">For events and parties please click here to email</a><br><br>') 
    .typeString('Or call: 432-356-3467<br><br>') 
    .pauseFor(300)
    .typeString('Please review our <u>CODE of CONDUCT</u> before booking:<br>')
    .typeString('     No Toxicity - To each other and to our staff.<br><br>')
    .typeString('     Kids <15 must always be accompanied by an adult and are not to<br>')
    .typeString('     be alone at any table/booth/couch/pc or disturbing other guests.<br><br>')
    .typeString('     We take credit card info prior to gaming in case of stolen or damaged equipment.<br><br>')
    .typeString('     There is a 20% service charge on groups 6 or greater.  For us to best accomodate<br>')
    .typeString('     large groups, please reach out: <a href="mailto:events@farmandfeed.com">email events team</a><br><br>')
    .typeString('     Do not download or delete games on our consoles/pcs. See below for requests.<br><br>')
    .typeString('     We do our best to accomodate, but if requests were not specified in advance,<br>')
    .typeString('     we cannot guarantee specific game/console/pc availability.<br><br>')
    .typeString('     If you are unhappy with anything please just let us know. We want <br>')
    .typeString('     this to be a great experience as much as you do!<br><br>') 

    .typeString('Thank you')
    .pauseFor(1000);
  typewriter.start();
  typewriter.stop();
  fastForward();
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
  typewriter.stop();
  fastForward();
}

function hours() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('HOLIDAY HOURS:<br>')
    .typeString('  Tuesday November 22 we are OPEN <br>')
    .typeString('  Thursday November 24 we are CLOSED <br><br>')  
    .typeString('Look at these amazing hours:<br>')
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
  typewriter.stop();
  fastForward();
}

function events() {
  reset();
  typewriter
    .deleteAll(1)
    .pauseFor(50)
    .typeString('<a href="mailto:events@farmandfeed.com">For your own events and parties please email here</a><br><br>') 
    .typeString('<a href="https://www.sevenrooms.com/events/farmfeed">CLICK FOR OUR UPCOMING EVENTS and to BOOK A SPOT!</a><br><br>')
    //.typeString('<u>EXAMPLES</u><br>')
    //.typeString('FALL GUYS SUNDAY LAN LUNACY<br>')
    //.typeString('This Sunday 3 - 5 we are hosting a Fall Guys local server<br>')
    //.typeString('event to stress test our LAN capabilities. Farm+Feed only <br>')
    //.typeString('servers to play against each other in some friendly fun. <br>')
    //.typeString('No cost to signup, no gaming charge, fun food/drink and <br>')
    //.typeString('giftcard giveaways throughout.  3 - 5PM Sunday.<br><br>') 
    .typeString('<u>MAGIC MONDAYS</u><br>')
    .typeString('Every Monday night 7:00pm.<br>')
    .typeString('Commander deck $5 entry, players receive 1 pack/round<br>')
    .typeString('up to 2 packs. 2x 90min games. Winner of round gets either<br>')
    .typeString('an additional pack or Dragon Shield card sleeves 100ct, while<br>')
    .typeString('supplies last.  Thank you DRAGON SHIELD!<br>')
    .typeString('Please, mid-power level only. 4 person pods.<br><br>')
    .typeString('<u>KID\'S SUMMER CAMP</u><br>')
    .typeString('Weekdays 2 - 4PM, closed Tuesdays<br>')
    .typeString('$15/child for tutorial menu item + soda + 2hrs of gaming.<br>')
    .typeString('accompanying adult has no gaming seat fee.<br><br>')
    .typeString('<u>BLOOD ON THE CLOCK TOWER</u><br>')
    .typeString('1st Wednesday of every month.  7 - 11PM.<br>')
    .typeString('This game of deception and sleuthing seats 8-15 people,<br>')
    .typeString('and we\'ll play a few rounds so that everyone gets a chance at the fun!<br>')
    .typeString('no entry fee.<br><br>')
    .typeString('<u>DFW BOARDGAMES + GEEKS PLANO MEETUP</u><br>')
    .typeString('1st and 3rd Wednesdays of every month. 6 - 11PM.<br>')
    .typeString('Join fellow boardgame fans to play from our selection,<br>')
    .typeString('or bring your own. no entry fee.<br><br>')
    .typeString('<u>ADVENTURERS\' GUILD - DND 4th WEDNESDAY OF EVERY MONTH</u><br>')
    .typeString('Our in-house Dungeon Masters want to bring<br>')
    .typeString('more people into the game and are holding ongoing <br>')
    .typeString('DnD sessions. Come campaign in the awesome<br>')
    .typeString('world of Dungeons and Dragons! $10/person<br>')
    .typeString('Next session is July 27th <br><br>')
    .typeString('<u>COLLISIONS TOURNAMENT - FIGHTING GAMES</u><br>')
    .typeString('End of each month.  Bring your stick and join this<br>')
    .typeString('welcoming, fun group of fighting game fans as they battle<br>')
    .typeString('it out for combo glory!<br><br>')
    .typeString('<u>CHEF\'S TABLE</u><br>')
    .typeString('Quarterly private Chef\'s Table for our most loyal guests.<br>')
    .typeString('2nd Wednesday of each quarter.  Invite only<br>')
    .typeString('tasting of new, up and coming menu items.<br><br>')

    //.typeString('LEAGUE OF LEGENDS CLASS WITH OUR OWN MASTER<br>')
    //.typeString('Play some games with our own in-house master and<br>')
    //.typeString('review footage after matches to help improve your<br>')
    //.typeString('gameplay.  All levels welcome.<br>')
    //.typeString('Stay tuned for first date later this month.<br><br>')   
    //.typeString('LAN-OLYMPICS<br>')
    //.typeString('Do you want free gaming for a year?<br>')
    //.typeString('Are you really competitive in un-competitive games?<br>')
    //.typeString('Then this in-house LAN tourney is for you.<br>')
    //.typeString('Large scale Fall Guys, MarioKart, and more to see who<br>')
    //.typeString('is the greatest casual player of them all.  Stay tuned!<br>')
    .pauseFor(1000);
  typewriter.start();
  typewriter.stop();
  fastForward();
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
  typewriter.stop();
  fastForward();
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
  typewriter.stop();
  fastForward();
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
