if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
  };
}

// dealer names
var maleFirstNames = ['Aidan', 'Alphonso', 'Anthony', 'Avon', 'Ben', 'Billy', 'Bobby', 'Bojack', 'Bert', 'Bret', 'Bruce', 'Cedric', 'Charles', 'Charlie', 'Chris', 'Clarence', 'Clark', 'Dave', 'David', 'Dexter', 'Drexyl', 'Eddie', 'Floyd', 'Frank', 'Freddie', 'Gerald', 'Gordon', 'Ilka', 'James', 'Jeff', 'Jethro', 'Jimmy', 'John', 'Ken', 'Kingston', 'Larry', 'Laurence', 'Leeroy', 'Lester', 'Malcolm', 'Marty', 'Maxwell', 'Michael', 'Mike', 'Paul', 'Pete', 'Randy', 'Ray', 'Reggie', 'Rick', 'Robert', 'Roland', 'Ron', 'Ronnie', 'Ross', 'Sean', 'Spencer', 'Spike', 'Steve', 'Stevie', 'Stringer', 'Stu', 'Stuart', 'Terry', 'Thomas', 'Tommy', 'Tony', 'William', 'Brian'];
var femaleFirstNames = ['Alicia', 'Amanda', 'Ashley', 'Barbara', 'Becky', 'Beverly', 'Catriona', 'Charlotte', 'Debbie', 'Eve', 'Fiona', 'Francesca', 'Geraldine', 'Harriet', 'Jacki', 'Jane', 'Jenny', 'Jessica', 'Joanne', 'Jodie', 'Josie', 'Julia', 'June', 'Kate', 'Kim', 'Kimmy', 'Laura', 'Lisa', 'Liz', 'Louisa', 'Louise', 'Margaret', 'Martina', 'Mary', 'Muriel', 'Natasha', 'Nicki', 'Pam', 'Patricia', 'Rachel', 'Rebecca', 'Rebel', 'Rhonda', 'Riley', 'Rose', 'Ruby', 'Samantha', 'Sarah', 'Scarlet', 'Shannon', 'Sharon', 'Sophie', 'Stacy', 'Stephanie', 'Susie', 'Tabitha', 'Tanya', 'Toni', 'Tracy', 'Tricia', 'Trish', 'Vera', 'Victoria', 'Yolanda', 'Michelle', 'Felicity'];
var lastNames = ['Adams', 'Barksdale', 'Baxter', 'Bell', 'Braxton', 'Bronson', 'Cray', 'Diamond', 'Edwards', 'Findus', 'Ford', 'Fox', 'Franklin', 'French', 'Gentworth', 'George', 'Gibson', 'Gittins', 'Grey', 'Grimes', 'Harrison', 'Hogan', 'Hopkins', 'Jackson', 'Jenkins', 'Jones', 'Lee', 'Lloyd', 'Long', 'Mackintosh', 'Manero', 'Marshall', 'Matrix', 'McGrath', 'McLaren', 'Mills', 'Moreno', 'Murphy', 'Page', 'Palmer', 'Perry', 'Plant', 'Potts', 'Reed', 'Rhoades', 'Rico', 'Roper', 'Savage', 'Scott', 'Smith', 'Somerville', 'Stevens', 'Stewart', 'Sulley', 'Templeton', 'Thompson', 'Tull', 'Washington', 'Willis', 'Wilson', 'Worley', 'Young', 'Merchant', 'Rodriguez', 'Gonzalez', 'King'];
var nicknames = ['Ace', 'Babyface', 'Beefsteak', 'Big dog', 'Birdy', 'Blaster', 'Boffin', 'Bones', 'Brains', 'Brandy', 'Brick', 'Bubbles', 'Bug Eye', 'Butter', 'California', 'Cheese', 'Chips', 'Coffee', 'Corky', 'Crusher', 'Doc', 'Dolamite', 'Egg', 'Fingers', 'Fletch', 'Foxy', 'Frosty', 'G', 'Ghost', 'Goat', 'Grafter', 'Hollywood', 'Ice', 'Jellybean', 'Linebacker', 'Lucky', 'Maniac', 'Muscles', 'Papa', 'Psycho', 'Scarface', 'Shooter', 'Silencer', 'Slim', 'Snoop', 'Space Cadet', 'Spud', 'The Face', 'The Hat', 'The Kid', 'The Mouth', 'Unit', 'Upgrayedd', 'Vampire', 'Wheezy', 'Wonder'];

// constants
var treeUpgradeBasePrice = 1000;
var treeUpgradePriceMulti = 1.95;
var treeUpgradeWeedMulti = 1.2;

var territoryUpgradePriceMulti = 5.2;
var territoryUpgradeBasePrice = 500;

var discountUpgradePriceMulti = 3.8;
var discountUpgradeBasePrice = 1000;

function DealerUpgrade(name, tooltip, price, volumeMod, priceMod, secondaryMod, synopsis) {
  this.name = name;
  this.tooltip = tooltip;
  this.price = price;
  this.volumeMod = volumeMod;
  this.priceMod = priceMod;
  this.secondaryMod = secondaryMod;
  this.synopsis = synopsis;
}

var dealerUpgrades = [
  new DealerUpgrade('Baseball bat', 'Handy in a street fight and helps to scare away the competition. Allows the dealer to sell drugs for 10% more money', 150, 1, 1.1, 0, '+10% margin'),
  new DealerUpgrade('Bicycle', 'The cheapest and most basic form of personal transportation. Allows the dealer to sell an extra 10% volume', 600, 1.1, 1, 0, '+10% volume'),
  new DealerUpgrade('iPhone 6 Plus', 'A state of the art smartphone. Allows the dealer to sell a small amount of other drugs on the side', 900, 1, 1, 0.1, '+10% secondary sales'),
  new DealerUpgrade('Superbike', 'One of the fastest ways to get around the urban jungle. Allows the dealer to sell an extra 20% volume', 25000, 1.2, 1, 0, '+20% volume'),
  new DealerUpgrade('Glock 17 9mm', 'A small but deadly firearm, nobody will mess with you if you have this. Allows the dealer to sell drugs for 20% more money', 5000, 1, 1.2, 0, '+20% margin'),
  new DealerUpgrade('Personal Assistant', 'A personal assistant to take your calls. Allows the dealer to sell even more drugs on the side', 85000, 1, 1, 0.2, '+20% secondary sales'),
  new DealerUpgrade('Armed Gang', 'A gang of tooled up homies to help eliminate the competition. Allows the dealer to sell drugs for 20% more money', 150000, 1, 1.2, 0, '+20% margin'),
  new DealerUpgrade('Ferrari 458 Italia', 'A fine Italian supercar. Allows the dealer to sell an extra 30% volume', 575000, 1.3, 1, 0, '+30% volume'),
  new DealerUpgrade('AW119 Ke Koala', 'A personal helicopter for transporting you and your homies! Allows the dealer to sell an extra 60% volume', 1890000, 1.6, 1, 0, '+60% volume'),
  new DealerUpgrade('Luxury Speedboat', 'A high speed civilian boat capable of outrunning the coastguard! Allows the dealer to sell an extra 80% volume', 5460000, 1.8, 1, 0, '+80% volume'),
  new DealerUpgrade('Personal Army', 'A small band of paid mercenaries to intimidate your rivals and collect your debts! Allows the dealer to sell drugs for 30% more money', 21630000, 1, 1.3, 0, '+30% margin')
];

var silkRoadUpgrade = {type:'SilkRoad',name:'Develop Silk Road',tooltip:'Develop the Silk Road dark web site to allow you to bulk sell drugs in units of 1kg',price:141592,glyph:'glyphicon-cloud'};
var prestigeDealerUpgrade = {type:'PrestigeDealer',name:'Dealer Captain',tooltip:'Recruit a dealer captain with perfect attributes. This will reset your progress!',price:5000000,glyph:'glyphicon-tower'};

function ProductionUpgrade(name, tooltip, price, producer, upVal, drug) {
  this.type = 'ProductionUpgrade';
  this.name = name;
  this.tooltip = tooltip;
  this.price = price;
  this.producer = producer;
  this.upVal = upVal;
  this.drug = drug;
  this.glyph = 'glyphicon-circle-arrow-up';
}
function DrugUnlock (name,tooltip,price,drug) {
  this.type = 'DrugUnlock';
  this.name = name;
  this.tooltip = tooltip;
  this.price = price;
  this.drug = drug;
  this.glyph = 'glyphicon-tint';
}

function formatMoney(input) {
  return '$' + formatNumber(input);
}

function formatNumber(input) {
  if (!input) input = 0;
  if (input >= 1000000000000)
  return (input / 1000000000000).toFixed(2) + 'T';
  if (input >= 1000000000)
  return (input / 1000000000).toFixed(2) + 'B';
  if (input >= 1000000)
  return (input / 1000000).toFixed(2) + 'M';
  if (input >= 1000)
  return (input / 1000).toFixed(2) + 'K';

  return input.toFixed(2);
}

var productionUpgradesMaster = [
  new ProductionUpgrade('Fertilizer', 'Nutrient rich fertilizer, increases the amount of weed produced by your cannabis plants by 30%!', 500, 'Cannabis Plant', 1.3, 'Weed'),
  new ProductionUpgrade('Hydroponics', 'High tech agriculture system, increases the amount of weed produced by your cannabis plants by 50%!', 6500, 'Cannabis Plant', 1.5, 'Weed'),

  new ProductionUpgrade('Auto Hygrometer', 'An automatically controlled humidity system, increases the amount of shrooms produced by your mushroom farms by 50%!', 5000, 'Mushroom Farm', 1.5, 'Magic Mushrooms'),
  new ProductionUpgrade('Irrigation system', 'An computer controlled irrigation system, increases the amount of shrooms produced by your mushroom farms by 50%!', 25000, 'Mushroom Farm', 1.5, 'Magic Mushrooms'),

  new ProductionUpgrade('Recreational Vehicle', 'Increases the amount of meth made by your cooks by 50%!', 40000, 'Meth Cook', 1.5, 'Meth'),
  new ProductionUpgrade('Underground Lab', 'Increases the amount of meth made by your cooks by 50%!', 130000, 'Meth Cook', 1.5, 'Meth'),

  new ProductionUpgrade('Corrupt Chemist', 'Increases the amount of speed produced by your chefs by 60%!', 75000, 'Base Chef', 1.6, 'Speed'),
  new ProductionUpgrade('Criminal Pharmacy', 'Increases the amount of speed produced by your chefs by 50%!', 190000, 'Base Chef', 1.5, 'Speed'),

  new ProductionUpgrade('College education', 'Increases the amount of acid made by your lab technicians by 50%!', 80000, 'Lab Technician', 1.5, 'Acid'),
  new ProductionUpgrade('Digital Distillation', 'Increases the amount of acid made by your lab technicians by 50%!', 120000, 'Lab Technician', 1.5, 'Acid'),

  new ProductionUpgrade('Gang protection', 'Increases the amount of crack made by your crack dens by 50%!', 145000, 'Crack Den', 1.5, 'Crack'),
  new ProductionUpgrade('Police Payoff', 'Get the feds off your back to increase the amount of crack made by your crack dens by 45%!', 280000, 'Crack Den', 1.45, 'Crack'),

  new ProductionUpgrade('Haber process research', 'Increases the amount of PCP made by your chemical labs by 50%!', 190000, 'Chemical Lab', 1.5, 'PCP'),
  new ProductionUpgrade('Mass Spectrometer', 'Increases the amount of PCP made by your chemical labs by 70%!', 550000, 'Chemical Lab', 1.7, 'PCP'),

  new ProductionUpgrade('Polytunnel complex', 'Increases the amount of heroin made by your opium farms by 50%!', 210000, 'Opium Farm', 1.5, 'Heroin'),
  new ProductionUpgrade('Cropdusting', 'Increases the amount of heroin made by your opium farms by 50%!', 750000, 'Opium Farm', 1.5, 'Heroin'),

  new ProductionUpgrade('PhD Students', 'A small army of PhD students to assist the professors in their important work. Increases the amount of MDMA made by your chemistry professors by 60%!', 250000, 'Chemistry Professor', 1.6, 'MDMA'),
  new ProductionUpgrade('Research Facility', 'Increases the amount of MDMA made by your chemistry professors by 40%!', 1000000, 'Chemistry Professor', 1.4, 'MDMA'),

  new ProductionUpgrade('Plastic surgery disguise', 'Increases the amount of cocaine smuggled by your drug mules by 30%!', 350000, 'Drug Mule', 1.3, 'Cocaine'),
  new ProductionUpgrade('Cartel deal', 'Broker a deal with a major cartel south of the border. Increases the amount of cocaine smuggled by your drug mules by 80%!', 1500000, 'Drug Mule', 1.8, 'Cocaine'),
  new ProductionUpgrade('DEA Mole', 'Install a mole within the DEA to help make your operations go more smoothly. Increases the amount of cocaine smuggled by your drug mules by 50%!', 2500000, 'Drug Mule', 1.5, 'Cocaine'),

  new ProductionUpgrade('Cult Leader Cain', 'Religious leader of the Nuke cult. Increases the amount of Nuke made by your Robot Criminals by 60%!', 14500000, 'Robot Criminal', 1.6, 'Nuke'),
  new ProductionUpgrade('Deprogrammed Robocop', 'The one thing slowing down your Nuke operation, reprogrammed to use against your enemies! Increases the amount of Nuke made by your Robot Criminals by 50%!', 28000000, 'Robot Criminal', 1.5, 'Nuke'),

  new ProductionUpgrade('Neural Net Research', 'Increases the amount of Cyber Crank made by your Blackhat Hiveminds by 50%!', 45000000, 'Blackhat Hivemind', 1.5, 'Cyber Crank'),
  new ProductionUpgrade('Global Botnet', 'Increases the amount of Cyber Crank made by your Blackhat Hiveminds by 45%!', 75000000, 'Blackhat Hivemind', 1.45, 'Cyber Crank'),

  new ProductionUpgrade('Human Test Subjects', 'Test your drug batches on human subjects. They might not survive the process but it will increase the amount of Ephemerol produced by 60%!', 120000000, 'Secret Facility', 1.6, 'Ephemerol'),
  new ProductionUpgrade('ConSec Scanner', 'Increases the amount of Ephemerol made by your Secret Facilities by 75%!', 275000000, 'Secret Facility', 1.75, 'Ephemerol'),

  new ProductionUpgrade('Peachtree Block', 'Give your Chem-techs somewhere safe to work. Increases the amount of Slo-mo produced by 100%!', 575000000, 'Chem-tech', 2, 'Slo-mo'),

  new ProductionUpgrade('The Ludovico Technique', 'Take control over your Droogs and keep them focused on the important work of producing Drencrom. Increases the amount of Drencrom produced by 100%!', 575000000, 'Droog Squad', 2, 'Drencrom'),

  new ProductionUpgrade('Guild Navigator', 'Increases the amount of Melange produced by 30%!', 2575000000, 'Sandworm', 1.3, 'Melange'),
  new ProductionUpgrade("Muad'Dib", 'Leader of the Fremen. Increases the amount of Melange produced by 50%!', 7900000000, 'Sandworm', 1.5, 'Melange')
];

function Drug(name, pricePerGram, costToUnlock) {
  this.name = name;
  this.pricePerGram = pricePerGram;
  this.qty = 0;
  this.total = 0;
  this.selected = true;
  this.costToUnlock = costToUnlock;
  this.totalCash = 0;
  this.drugUnlock = new DrugUnlock('Research ' + this.name, 'Spend money to research production of a new drug, ' + this.name + '. Your customers will love it!', this.costToUnlock, this.name);
}

function muscle(name, price, respect, priceMulti) {
  this.name = name;
  this.price = price;
  this.qty = 0;
  this.selected = true;
  this.respect = respect;
  this.priceMulti = priceMulti;
}
var createMuscleMaster = function() {
  return [
    new muscle('Hood Rat', 80, 1, 1.2),
    new muscle('Young Thug', 1000, 5, 1.25),
    new muscle('Hired Goon', 12000, 75, 1.27),
    new muscle('Crooked Cop', 130000, 500, 1.28),
    new muscle('Bought Judge', 1500000, 2000, 1.3),
    new muscle('Corrupt Senator', 4500000, 7500, 1.31),
    new muscle('Puppet World Leader', 33700000, 45000, 1.32),
    new muscle('Hunter Killer Submarine', 7500100800, 150000, 1.33),
    new muscle('Nimitz-class aircraft carrier', 45500700000, 350000, 1.34),
    new muscle('Orbital Ion Cannon', 9345500700000, 7490000, 1.35)
  ];
};

var muscleMaster = createMuscleMaster();

var createDrugsMaster = function() {
  return [
    new Drug('Weed', 4.2, 0),
    new Drug('Magic Mushrooms', 6, 2000),
    new Drug('Meth', 10, 7000),
    new Drug('Speed', 15, 20000),
    new Drug('Acid', 20, 40000),
    new Drug('Crack', 30, 75000),
    new Drug('PCP', 40, 90000),
    new Drug('Heroin', 50, 120000),
    new Drug('MDMA', 60, 180000),
    new Drug('Cocaine', 70, 250000),
    new Drug('Nuke', 240, 5500000),
    new Drug('Cyber Crank', 666.67, 15000000),
    new Drug('Ephemerol', 3400, 95000000),
    new Drug('Slo-mo', 11250, 465000000),
    new Drug('Drencrom', 63250, 1200000000),
    new Drug('Melange', 270000, 4840000000)];
};

var drugsMaster = createDrugsMaster();

  function Producer(name, basePrice, drug, priceMulti, prodPerUnit) {
    this.name = name;
    this.basePrice = basePrice;
    this.qty = 0;
    this.drug = drug;
    this.priceMulti = priceMulti;
    this.prodPerUnit = prodPerUnit;
  }

  var createProductionMaster = function() {
    return [
      new Producer('Cannabis Plant', 15, 'Weed', 1.12, 0.2),
      new Producer('Mushroom Farm', 150, 'Magic Mushrooms', 1.15, 0.3),
      new Producer('Meth Cook', 1000, 'Meth', 1.2, 0.5),
      new Producer('Base Chef', 2500, 'Speed', 1.21, 0.4),
      new Producer('Lab Technician', 5000, 'Acid', 1.22, 0.5),
      new Producer('Crack Den', 10000, 'Crack', 1.23, 0.5),
      new Producer('Chemical Lab', 20000, 'PCP', 1.24, 0.4),
      new Producer('Opium Farm', 30000, 'Heroin', 1.25, 0.5),
      new Producer('Chemistry Professor', 40000, 'MDMA', 1.26, 0.4),
      new Producer('Drug Mule', 50000, 'Cocaine', 1.27, 0.25),
      new Producer('Robot Criminal', 700000, 'Nuke', 1.28, 0.16),
      new Producer('Blackhat Hivemind', 2500000, 'Cyber Crank', 1.29, 0.08),
      new Producer('Secret Facility', 5000000, 'Ephemerol', 1.30, 0.04),
      new Producer('Chem-tech', 12000000, 'Slo-mo', 1.31, 0.02),
      new Producer('Droog Squad', 35000000, 'Drencrom', 1.31, 0.015),
      new Producer('Sandworm', 75000000, 'Melange', 1.32, 0.01)];
  };

  var productionMaster = createProductionMaster();

    function dealerName() {
      var name = maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
      if (Math.random() > 0.7) {
        name = femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
      }
      if (Math.random() > 0.8) {
        name = name + ' "' + nicknames[Math.floor(Math.random() * nicknames.length)] + '"';
      }
      name = name + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
      return name;
    }

    function Dealer(seed) {
      this.seed = seed;
      Math.seedrandom(seed);
      this.volume = Math.random() + 0.5;
      this.price = Math.random() + 0.5;

      this.originalVolume = this.volume;
      this.originalPrice = this.price;

      this.sideVolume = 0;
      this.name = dealerName();
      this.cashEarned = 0;
      this.selected = true;
      this.drug = "Weed";
      this.drugIndex = 0;
      this.upgrades = [];
      this.cashOneSecondAgo = 0;
      this.cashPerSecond = 0;
    }

    function getActualDealerPrice(dealer, drug) { return dealer.price * drug.pricePerGram; }

    function getActualDealerVolume(dealer, drug) {
      if (dealer.arrested) return 0;
      if (drug == dealer.drug || drug.name == dealer.drug)
      return dealer.volume * 3;
      else
      return dealer.sideVolume * dealer.volume * 3;
    }

    function GameModel() {
      this.drugs = [drugsMaster[0]];
      this.muscle = [muscleMaster[0]];
      this.upgrades = [];
      this.currencyCode = '$';
      this.cash = 100;
      this.respect = 0;
      this.totalCashEarned = 0;
      this.treeUpgrades = 0;
      this.dealers = [];
      this.production = [productionMaster[0]];
      this.territoryUpgrades = 0;
      this.discountUpgrades = 0;
      this.workMode = false;
      this.lastDealerRefresh = 0;
      this.silkRoadUnlocked = false;
    }

    angular.module('dopeslingerApp', ['ngSanitize', 'ngAnimate','jg.progressbar'])
    .animation('.dealer-hire-anim', function() {
      return {
        enter : function(element, done) {
          element.hide().slideDown(1000,done);
        },
        leave: function (element, done) {
          element.slideUp(1000,done);
        }
      };
    })
    .animation('.drug-anim', function() {
      return {
        enter : function(element, done) {
          element.hide().fadeIn(done);
        },
        leave: function (element, done) {
          element.fadeOut(done);
        }
      };
    })
    .animation('.research-anim', function() {
      return {
        enter : function(element, done) {
          element.hide().fadeIn(done);
        },
        leave: function (element, done) {
          element.fadeOut(done);
        }
      };
    })
    .animation('.content-open', function () {
      return {
        enter: function (element, done) {
          //run the animation here and call done when the animation is complete
          return function (cancelled) {
            //this (optional) function will be called when the animation
            //completes or when the animation is cancelled (the cancelled
            //flag will be set to true if cancelled).
          };
        },
        beforeAddClass: function (element, className, done) {
          element.css('display', 'none');
          done();
        },
        //animation that can be triggered after the class is added
        addClass: function (element, className, done) {
          element.slideDown(done);
          $(window).trigger('resize');
        },

        //animation that can be triggered after the class is added
        beforeRemoveClass: function (element, className, done) {
          element.slideUp(done);
        }
      };
    })
    .filter('weight', function () {
      return function (input) {
        if (input === null) {
          return 0;
        }
        if (input >= 1000)
        return (input / 1000).toFixed(2) + 'kg';

        return input.toFixed(2) + "g";
      };
    })
    .filter('money', function () {
      return formatMoney;
    })
    .filter('respect', function() {
      return formatNumber;
    })
    .controller('DopeController', ['$scope', '$document', '$window', '$sce', '$interval', '$timeout', '$animate', function ($scope, $document, $window, $sce, $interval, $timeout, $animate) {

      var lastUpdate = 0;
      var lastSaved = 0;
      var interval;
      var cashOneSecond = 0;
      var timeOneSecond = 0;

      $scope.log = [];

      $scope.currentTab = "production";
      $scope.gameModel = new GameModel();
      $scope.prestigeDealers = [];
      $scope.kingpins = [];
      $scope.options = {
        autoSilk : false,
        hideTop : false
      };
      $scope.cashPerSecond = 0;
      $scope.prestiged = false;
      $scope.hireDealers = [];
      $scope.toggleWorkMode = function () { $scope.options.workMode = !$scope.options.workMode;};
      $scope.toggleNightMode = function () { $scope.options.nightMode = !$scope.options.nightMode;};
      $scope.kongregateLargeWindow = function () { $scope.options.kongregateLargeWindow = true;};
      $scope.kongregateSmallWindow = function () { $scope.options.kongregateLargeWindow = false;};
      $scope.hideTop = function () { alwaysShowScroll = !alwaysShowScroll; $scope.options.hideTop = !$scope.options.hideTop; fadeTop();};
      $scope.priceOfTerritory = function () { return territoryUpgradeBasePrice * Math.pow(territoryUpgradePriceMulti, $scope.gameModel.territoryUpgrades); };
      $scope.priceOfDiscount = function () { return discountUpgradeBasePrice * Math.pow(discountUpgradePriceMulti, $scope.gameModel.discountUpgrades); };
      $scope.cashPercentage = function (value) { return Math.min(100, $scope.gameModel.cash / value * 100); };
      $scope.respectPercentage = function (value) { return Math.min(100, $scope.gameModel.respect / value * 100); };
      $scope.productionPrice = function (production) { return production.basePrice * Math.pow(production.priceMulti, production.qty) * $scope.discountMulti(); };
      $scope.musclePrice = function (muscle) { return muscle.price * Math.pow(muscle.priceMulti, muscle.qty) * $scope.discountMulti(); };
      $scope.discountMulti = function () { return Math.pow(0.9, $scope.gameModel.discountUpgrades); };
      $scope.discountPrice = function (price) { return price * $scope.discountMulti(); };
      $scope.updateDealerLevel = function (dealer) {
        if (dealer.type !== 'Prestige'){
          return;
        }
        if (!dealer.level)
          dealer.level = 0;
        var subtract = dealer.level > 0 ? 500000 * Math.pow(1.9, dealer.level -1) : 0;
        dealer.currentXp = (dealer.cashEarned - subtract) / ((500000 * Math.pow(1.9,dealer.level)-subtract)) * 100;
        if (dealer.currentXp >= 100 && dealer.level < 10) {
          dealer.currentXp = 0;
          dealer.level++;
          $scope.levelUpMsg = dealer.name + " has earned enough experience to reach level " + dealer.level + "!";
          $scope.levelUpMsgExpires = new Date().getTime() + 20000;
          $timeout(fixTopPadding,10);
        }

      };
      $scope.captainMulti = function () {
        var multi = $scope.kingpinMulti();
        for (var i = 0; i < $scope.gameModel.dealers.length; i++) {
          if ($scope.gameModel.dealers[i].type == 'Prestige' && !$scope.gameModel.dealers[i].arrested)
          multi += 1 + ($scope.gameModel.dealers[i].level / 2);
        }
        return multi;
      };
      $scope.kingpinMulti = function () {
        return 1 + $scope.kingpins.length;
      };
      $scope.availableUpgrades = [];
      $scope.dealerSort = 'none';

      $scope.getDrugByName = function (name) {
        for (var i = 0; i < $scope.gameModel.drugs.length; i++) {
          if ($scope.gameModel.drugs[i].name == name)
          return $scope.gameModel.drugs[i];
        }
        return null;
      };

      $scope.silkQty = function(drug) {
        if (drug.qty > 1000)
          return Math.floor(drug.qty / 1000);

        return 1;
      };

      $scope.sellOnSilkRoad = function (drug) {
        if (drug.qty > 1000) {
          var qtyToSell = $scope.silkQty(drug) * 1000;
          drug.qty -= qtyToSell;
          var cashEarned = $scope.drugStreetPrice(drug) * qtyToSell * 0.9;
          $scope.gameModel.cash += cashEarned;
          $scope.gameModel.totalCashEarned += cashEarned;
        }
      };

      $scope.actualDealerVolume = function (dealer, drug) { return getActualDealerVolume(dealer, drug); };

      $scope.actualDealerPrice = function (dealer, drug) {
        if (drug === undefined) {
          drug = $scope.getDrugByName(dealer.drug);
        }

        return dealer.price * $scope.drugStreetPrice(drug);
      };

      $scope.drugStreetPrice = function (drug) {
        if ($scope.gameModel.buff && $scope.gameModel.buff.drugname == drug.name)
        return drug.pricePerGram * $scope.gameModel.buff.modifier;

        return drug.pricePerGram;
      };

      $scope.updateDealerDrugIndex = function(){
        for (var i=0; i< $scope.gameModel.drugs.length; i++) {
          for (var j=0; j < $scope.gameModel.dealers.length; j++) {
            if ($scope.gameModel.dealers[j].drug == $scope.gameModel.drugs[i].name) {
              $scope.gameModel.dealers[j].drugIndex = i;
            }
          }
        }
      };

      $scope.upgradeUnlocked = function (upgrade) {
        var upgradeUnlocked = false;
        for (var j = 0; j < $scope.gameModel.upgrades.length; j++) {
          if ($scope.gameModel.upgrades[j].name == upgrade.name)
          upgradeUnlocked = true;
        }
        return upgradeUnlocked;
      };

      $scope.otherUpgradesForThisDrugUnlocked = function (upgrade) {

        for (var i = 0; i < productionUpgradesMaster.length; i++) {
          if (productionUpgradesMaster[i].drug == upgrade.drug) {
            if (productionUpgradesMaster[i].name == upgrade.name)
            return true;

            if (!$scope.upgradeUnlocked(productionUpgradesMaster[i]))
            return false;
          }
        }
        return true;
      };

      $scope.toggleAutoSilk = function () {
        if ($scope.options.autoSilk)
        $scope.options.autoSilk = false;
        else
        $scope.options.autoSilk = true;
      };

      $scope.getUpgradesForDrug = function(drug) {
        var upgradesForDrug = [];
        for (var i=0; i<$scope.availableUpgrades.length;i++){
          if ($scope.availableUpgrades[i].drug == drug.name)
          upgradesForDrug.push($scope.availableUpgrades[i]);
        }
        return upgradesForDrug;
      };

      $scope.calculateAvailableUpgrades = function () {
        $scope.availableUpgrades = [];
        $scope.drugResearch = [];
        $scope.dealerResearch = [];

        for (var i = 0; i < drugsMaster.length; i++) {
          var drugUnlocked = false;

          if ($scope.getDrugByName(drugsMaster[i].name) !== null)
            drugUnlocked = true;

          if (!drugUnlocked && (i > 0 && $scope.getDrugByName(drugsMaster[i - 1].name) !== null) && ($scope.gameModel.totalCashEarned > (drugsMaster[i].costToUnlock * 0.8) || $scope.kingpins.length > 0)) {
            $scope.drugResearch.push(drugsMaster[i].drugUnlock);
          }
        }
        for (i = 0; i < productionUpgradesMaster.length; i++) {

          if (!$scope.upgradeUnlocked(productionUpgradesMaster[i]) && $scope.getDrugByName(productionUpgradesMaster[i].drug) !== null && ($scope.gameModel.totalCashEarned > (productionUpgradesMaster[i].price * 1) || $scope.kingpins.length > 0) && $scope.otherUpgradesForThisDrugUnlocked(productionUpgradesMaster[i])) {
            $scope.availableUpgrades.push(productionUpgradesMaster[i]);
          }
        }
        if (($scope.gameModel.totalCashEarned > (silkRoadUpgrade.price * 1.5) || $scope.kingpins.length > 0) && !$scope.gameModel.silkRoadUnlocked)
        $scope.dealerResearch.push(silkRoadUpgrade);

        if ($scope.gameModel.totalCashEarned > (prestigeDealerUpgrade.price * 1.5) || $scope.kingpins.length > 0)
          $scope.dealerResearch.push(prestigeDealerUpgrade);

        for (var i = 0; i < muscleMaster.length; i++) {
          if (($scope.gameModel.totalCashEarned > muscleMaster[i].price * 2 || $scope.kingpins.length > 0) && $scope.gameModel.muscle && $scope.gameModel.muscle.length <= i) {
            $scope.gameModel.muscle.push(muscleMaster[i]);
          }
        }

        $timeout(function(){$(window).trigger('resize');},0);
      };

      $scope.purchaseUpgrade = function (upgrade) {
        if ($scope.gameModel.cash < upgrade.price * $scope.discountMulti())
        return;

        var i = 0;
        switch (upgrade.type) {
          case 'PrestigeDealer':
          $scope.prestigeDealerPrice = prestigeDealerUpgrade.price;
          $('#prestigeDealerModal').modal('show');
          return;
          case 'SilkRoad':
          $scope.gameModel.silkRoadUnlocked = true;
          break;
          case 'DrugUnlock':
          for (i = 0; i < drugsMaster.length; i++) {
            if (drugsMaster[i].name == upgrade.drug) {
              $scope.gameModel.drugs.push(drugsMaster[i]);
            }
          }
          for (i = 0; i < productionMaster.length; i++) {
            if (productionMaster[i].drug == upgrade.drug) {
              $scope.gameModel.production.push(productionMaster[i]);
            }
          }
          break;
          case 'ProductionUpgrade':
          for (i = 0; i < $scope.gameModel.production.length; i++) {
            if ($scope.gameModel.production[i].name == upgrade.producer) {
              $scope.gameModel.production[i].prodPerUnit *= upgrade.upVal;
              $scope.gameModel.upgrades.push(upgrade);
            }
          }
          break;
        }
        $scope.gameModel.cash -= upgrade.price * $scope.discountMulti();
        $scope.calculateAvailableUpgrades();
        writeToCookie();
      };

      $scope.createKingpin = function(dealer) {
        $scope.kingpinDealer = dealer;
        $('#kingpinModal').modal('show');
      };

      $scope.confirmKingpin = function() {
        $('#kingpinModal').modal('hide');
        for (var i = 0; i < $scope.gameModel.dealers.length; i++) {
          if ($scope.gameModel.dealers[i].seed == $scope.kingpinDealer.seed) {
            $scope.gameModel.dealers.splice(i,1);
          }
        }
        for (var i = 0; i < $scope.prestigeDealers.length; i++) {
          if ($scope.prestigeDealers[i].seed == $scope.kingpinDealer.seed) {
            $scope.prestigeDealers.splice(i,1);
          }
        }
        for (var i = 0; i < $scope.hireDealers.length; i++) {
          if ($scope.hireDealers[i].seed == $scope.kingpinDealer.seed) {
            $scope.hireDealers.splice(i,1);
          }
        }
        $scope.kingpins.push($scope.kingpinDealer.name);

        // $scope.gameModel.dealers
        $scope.kingpinDealer = undefined;
        writeToCookie();
        kongregate.stats.submit('kingpins', $scope.kingpins.length);
      };

      $scope.cancelKingpin = function() {
        $('#kingpinModal').modal('hide');
        $scope.kingpinDealer = undefined;
      };

      $scope.increaseProduction = function (production) {
        if ($scope.gameModel.cash > $scope.productionPrice(production)) {
          $scope.gameModel.cash = $scope.gameModel.cash - $scope.productionPrice(production);
          production.qty++;
          writeToCookie();
        }
      };

      $scope.hireMuscle = function (muscle) {
        if ($scope.gameModel.cash > $scope.musclePrice(muscle)) {
          $scope.gameModel.cash = $scope.gameModel.cash - $scope.musclePrice(muscle);
          muscle.qty++;
          writeToCookie();
        }
      };

      $scope.producersForDrug = function (drug) {
        var producers = [];
        for (var i = 0; i < $scope.gameModel.production.length; i++) {
          if ($scope.gameModel.production[i].drug == drug.name)
          producers.push($scope.gameModel.production[i]);
        }
        return producers;
      };

      function readFromCookie() {

        if (typeof (Storage) == "undefined") {
          return;
        }

        try {
          if (localStorage.getItem("gameModel") !== null) $scope.gameModel = JSON.parse(localStorage.getItem("gameModel"));
          if (localStorage.getItem("prestigeDealers") !== null) $scope.prestigeDealers = JSON.parse(localStorage.getItem("prestigeDealers"));
          if (localStorage.getItem("kingpins") !== null) $scope.kingpins = JSON.parse(localStorage.getItem("kingpins"));
          if (localStorage.getItem("options") !== null) $scope.options = JSON.parse(localStorage.getItem("options"));
        } catch (e) {
          console.log(e);
        }

        if ($scope.options.hideTop) {
          alwaysShowScroll = true;
          fadeTop();
        }
      }

      function writeToCookie() {
        if (typeof (Storage) == "undefined") {
          return;
        }

        $scope.gameModel.dateOfSave = Date.now();

        try {
          localStorage.setItem("gameModel", JSON.stringify($scope.gameModel));
          localStorage.setItem("prestigeDealers", JSON.stringify($scope.prestigeDealers));
          localStorage.setItem("kingpins", JSON.stringify($scope.kingpins));
          localStorage.setItem("options", JSON.stringify($scope.options));
        } catch (e) {

        }

      }

      $scope.drugMadePerSecond = function(drug) {
        var producers = $scope.producersForDrug(drug);
        var qty = 0;
        for (var j = 0; j < producers.length; j++) {
          qty += producers[j].qty * producers[j].prodPerUnit;
        }
        return qty * $scope.kingpinMulti();
      };

      $scope.drugSoldPerSecond = function (drug) {
        var qty = 0;
        for (var j = 0; j < $scope.gameModel.dealers.length; j++) {
          qty += getActualDealerVolume($scope.gameModel.dealers[j], drug);
        }
        return qty;
      };

      $scope.resetGame = function () {
        try {
          localStorage.removeItem('gameModel');
        } catch (e) {
          console.log(e);
        }

        window.location.reload();
      };

      $scope.selectDrug = function (drug) {
        drug.selected = !drug.selected;
      };

      $scope.selectDealer = function (dealer) {
        dealer.selected = !dealer.selected;
      };

      $scope.getStars = function (number, max) {
        var stars = "<span class='glyphicon glyphicon-star'></span>";
        for (var i = 0; i < Math.round((number - 0.5) * (max - 1)) ; i++) {
          stars = stars + "<span class='glyphicon glyphicon-star'></span>";
        }
        return stars;
      };

      $scope.dealerHired = function (dealerId) {
        for (var i = 0; i < $scope.gameModel.dealers.length; i++) {
          if ($scope.gameModel.dealers[i].seed == dealerId)
          return true;
        }
        return false;
      };

      $scope.availableDealerUpgrades = [];
      var upgradeDealer;

      $scope.areDealerUpgradesAvailable = function(dealer) {
        for (var i = 0; i < dealerUpgrades.length; i++) {
          var alreadyBought = false;
          for (var j = 0; j < dealer.upgrades.length; j++) {
            if (dealer.upgrades[j].name == dealerUpgrades[i].name)
              alreadyBought = true;
          }
          if (!alreadyBought && $scope.gameModel.totalCashEarned > dealerUpgrades[i].price - 2000)
            return true;
        }
        return false;
      };

      $scope.dealerUpgradeModal = function (dealer) {

        $scope.calculateAvailableDealerUpgrades(dealer);

        $('#upgradeDealerModal').on('shown.bs.modal', function (e) {
          var height = 0;

          $('#upgradeDealerModal .height-match').each(function(){

            if ($(this).height() > height)
            height = $(this).height();
          });

          $('#upgradeDealerModal .height-match').each(function(){
            if (height > $(this).height())
            $(this).find('button').css('margin-top',(height - $(this).height()) + 'px');
          });
        });
        $('#upgradeDealerModal').modal('show');
      };

      $scope.upgradeDealer = function(){return upgradeDealer;};

      $scope.calculateAvailableDealerUpgrades = function(dealer) {
        upgradeDealer = dealer;
        $scope.availableDealerUpgrades = [];

        for (var i = 0; i < dealerUpgrades.length; i++) {
          var alreadyBought = false;
          for (var j = 0; j < dealer.upgrades.length; j++) {
            if (dealer.upgrades[j].name == dealerUpgrades[i].name)
            alreadyBought = true;
          }
          dealerUpgrades[i].realPrice = dealerUpgrades[i].price * $scope.discountMulti();

          if (dealer.type == 'Prestige') dealerUpgrades[i].realPrice = dealerUpgrades[i].price * 4 * $scope.discountMulti();

          if (!alreadyBought && ($scope.gameModel.totalCashEarned > dealerUpgrades[i].price - 2000 || $scope.kingpins.length > 0))
          $scope.availableDealerUpgrades.push(dealerUpgrades[i]);
        }
      };


      $scope.purchaseDealerUpgrade = function (upgrade) {
        if ($scope.gameModel.cash < upgrade.realPrice)
        return;

        $scope.gameModel.cash -= upgrade.realPrice;
        upgradeDealer.upgrades.push(upgrade);
        upgradeDealer.volume *= upgrade.volumeMod;
        upgradeDealer.price *= upgrade.priceMod;
        upgradeDealer.sideVolume += upgrade.secondaryMod;
        $scope.calculateAvailableDealerUpgrades(upgradeDealer);
        writeToCookie();
      };

      $scope.dealerRefreshRate = function(){
        return 60000 - (Math.min(59, $scope.kingpins.length) * 1000);
      };

      $scope.secondsToDealerRefresh = 0;

      $scope.refreshDealers = function () {
        if (!$scope.gameModel.lastDealerRefresh)
        $scope.gameModel.lastDealerRefresh = 0;

        var currentTime = new Date().getTime();
        if (currentTime > $scope.gameModel.lastDealerRefresh + $scope.dealerRefreshRate()) {
          $scope.gameModel.lastDealerRefresh = currentTime;
        }
        $scope.hireDealers = [new Dealer($scope.gameModel.lastDealerRefresh), new Dealer($scope.gameModel.lastDealerRefresh - 25000), new Dealer($scope.gameModel.lastDealerRefresh - 45000)];

        $scope.hireDealers.push.apply($scope.hireDealers, $scope.prestigeDealers);
        writeToCookie();
      };

      $scope.hireDealerModal = function () {
        if ($scope.hireDealers.length === 0) {
          $scope.refreshDealers();
          $animate.enabled(false);
          $timeout(function(){$animate.enabled(true);},1000);
        }

        $('#hireDealerModal').modal('show');
      };

      $scope.hireDealer = function (dealer) {
        $('#hireDealerModal').modal('hide');
        if ($scope.gameModel.dealers.length < 1 + $scope.gameModel.territoryUpgrades && !$scope.dealerHired(dealer.seed)) {
          dealer.drug = 'Weed';
          dealer.payCops = false;
          $scope.gameModel.dealers.push(dealer);
          writeToCookie();
        } else {
          $timeout(function () {
            $window.alert('You already have the maximum number of dealers working for you. Either fire a dealer or expand your territory to hire another.');
          });
        }
      };

      $scope.fireDealerModal = function (dealer) {
        $scope.dealerToFire = dealer;
        $scope.dealerToFire.kids = (2 + Math.random() * 6).toFixed();
        $('#fireDealerModal').modal('show');
      };

      $scope.payBail = function(dealer) {
        if ($scope.gameModel.cash >= dealer.bail) {
          $scope.gameModel.cash -= dealer.bail;
          dealer.arrested = false;
          dealer.bail = 0;
          dealer.arrestMessage = false;
        }
      };

      $scope.fireDealerConfirm = function () {
        for (var i = 0; i < $scope.gameModel.dealers.length; i++) {
          if ($scope.gameModel.dealers[i].seed == $scope.dealerToFire.seed) {
            $scope.dealerToFire.drug = 'Weed';
            $scope.gameModel.dealers.splice(i,1);
            writeToCookie();
            $('#fireDealerModal').modal('hide');
            return;
          }
        }
      };

      $scope.fireDealerCancel = function () {
        $('#fireDealerModal').modal('hide');
      };

      $scope.expandTerritory = function () {
        var upgradeCost = territoryUpgradeBasePrice * Math.pow(territoryUpgradePriceMulti, $scope.gameModel.territoryUpgrades);
        if ($scope.gameModel.respect > upgradeCost) {
          $scope.gameModel.respect = $scope.gameModel.respect - upgradeCost;
          $scope.gameModel.territoryUpgrades++;
          writeToCookie();
        }
      };

      $scope.getDiscount = function () {
        var upgradeCost = discountUpgradeBasePrice * Math.pow(discountUpgradePriceMulti, $scope.gameModel.discountUpgrades);
        if ($scope.gameModel.respect > upgradeCost) {
          $scope.gameModel.respect = $scope.gameModel.respect - upgradeCost;
          $scope.gameModel.discountUpgrades++;
          writeToCookie();
        }
      };

      function update() {
        var updateTime = new Date().getTime();
        var timeDiff = (Math.min(1000, Math.max(updateTime - lastUpdate,0))) / 1000;

        innerUpdate(timeDiff, updateTime);
      }

      function innerUpdate(timeDiff, updateTime) {
        var cashEarned = 0;
        var respectEarned = 0;
        var messagesHaveChanged = false;

        var dealers = $scope.gameModel.dealers.concat().sort(function(a,b){return b.price - a.price;});

        if ($scope.levelUpMsg && $scope.levelUpMsgExpires <= updateTime) {
          $scope.levelUpMsg = undefined;
          messagesHaveChanged = true;
        }

        if ($scope.gameModel.buff && $scope.gameModel.buff.expires <= updateTime) {
          $scope.gameModel.buff = undefined;
          $scope.buffMsg = undefined;
          messagesHaveChanged = true;
        }

        if ($scope.gameModel.lastDealerRefresh)
          $scope.secondsToDealerRefresh = (($scope.gameModel.lastDealerRefresh + $scope.dealerRefreshRate() - updateTime) / 1000).toFixed();

        if ($scope.gameModel.buff)
          $scope.buffMsg = $scope.gameModel.buff.msg.format((($scope.gameModel.buff.expires - updateTime) / 1000).toFixed());

        for (var i = 0; i < $scope.gameModel.drugs.length; i++) {
          var drug = $scope.gameModel.drugs[i];

          if ($scope.options.autoSilk && $scope.gameModel.silkRoadUnlocked && drug.qty > 1500) {
            var amountToSell = Math.floor((drug.qty - 500) / 1000) * 1000;
            drug.qty -= amountToSell;
            cashEarned += amountToSell * $scope.drugStreetPrice(drug) * 0.9;
          }

          var j = 0;

          var producers = $scope.producersForDrug(drug);
          for (j = 0; j < producers.length; j++) {
            drug.qty += producers[j].qty * producers[j].prodPerUnit * timeDiff * $scope.kingpinMulti();
            drug.total += producers[j].qty * producers[j].prodPerUnit * timeDiff * $scope.kingpinMulti();
          }

          for (j = 0; j < dealers.length; j++) {
            if (dealers[j].drug == drug.name && drug.qty >= getActualDealerVolume(dealers[j], drug) * timeDiff) {
              var earned = $scope.actualDealerPrice(dealers[j], drug) * getActualDealerVolume(dealers[j], drug) * timeDiff;
              if (dealers[j].payCops)
              earned *= 0.9;
              cashEarned += earned;
              drug.qty -= getActualDealerVolume(dealers[j], drug) * timeDiff;
              dealers[j].cashEarned += earned;
              $scope.updateDealerLevel(dealers[j]);
            }
          }

          for (j = 0; j < dealers.length; j++) {
            if (dealers[j].drug != drug.name && drug.qty >= getActualDealerVolume(dealers[j], drug) * timeDiff) {
              var earned = $scope.actualDealerPrice(dealers[j], drug) * getActualDealerVolume(dealers[j], drug) * timeDiff;
              if (dealers[j].payCops)
              earned *= 0.9;
              cashEarned += earned;
              drug.qty -= getActualDealerVolume(dealers[j], drug) * timeDiff;
              dealers[j].cashEarned += earned;
              $scope.updateDealerLevel(dealers[j]);
            }
          }
        }

        for (var i = 0; i < $scope.gameModel.muscle.length; i++) {
          respectEarned += $scope.gameModel.muscle[i].qty * $scope.gameModel.muscle[i].respect;
        }

        respectEarned *= $scope.captainMulti();

        $scope.gameModel.cash += cashEarned;
        $scope.gameModel.totalCashEarned += cashEarned;

        $scope.gameModel.respectPerSecond = respectEarned;
        $scope.gameModel.respect += respectEarned * timeDiff;

        lastUpdate = updateTime;
        if (updateTime - timeOneSecond >= 1000) {
          timeOneSecond = updateTime;
          $scope.cashPerSecond = $scope.gameModel.cash - cashOneSecond;
          cashOneSecond = $scope.gameModel.cash;

          for (i = 0; i < dealers.length; i++) {
            dealers[i].cashPerSecond = dealers[i].cashEarned - dealers[i].cashOneSecondAgo;
            dealers[i].cashOneSecondAgo = dealers[i].cashEarned;
          }
        }

        if (lastSaved < updateTime - 30000) {
          if (Math.random() > 0.96 && $scope.gameModel.totalCashEarned > 30000) {
            var dealerToArrest = $scope.gameModel.dealers[Math.floor(Math.random() * $scope.gameModel.dealers.length)];
            if (!dealerToArrest.arrested && !dealerToArrest.payCops) {
              var bailValue = dealerToArrest.cashPerSecond * 95;
              dealerToArrest.arrested = true;
              dealerToArrest.bail = bailValue;
              dealerToArrest.arrestMessage = dealerToArrest.name + ' has been arrested by the cops! Bail has been set at ' + formatMoney(bailValue) + '.';
              messagesHaveChanged = true;
            }
          }
          if (Math.random() > 0.9 && !$scope.gameModel.buff) {
            var buffDrug = $scope.gameModel.drugs[Math.floor(Math.random() * $scope.gameModel.drugs.length)];
            var percentage = 2 + (Math.random() * 3);
            var time = 60 + (Math.random() * 100);
            $scope.gameModel.buff = {
              drugname: buffDrug.name,
              modifier: percentage,
              expires: new Date().getTime() + (time * 1000),
              msg: "One of your rivals has been busted by the cops. The lack of competition is causing " + buffDrug.name + " to sell for " + (percentage * 100).toFixed() + "% of the normal street price for the next {0} seconds!"
            };
          }
          messagesHaveChanged = true;
          $scope.calculateAvailableUpgrades();
          writeToCookie();
          lastSaved = updateTime;
        }

          if (messagesHaveChanged) {
            $timeout(fixTopPadding,10);
          }
        }

        function onReady() {

          for (var i=0; i < $scope.prestigeDealers.length; i++) {
            for (var j=0; j < $scope.gameModel.dealers.length; j++) {
              if ($scope.prestigeDealers[i].seed == $scope.gameModel.dealers[j].seed) {
                $scope.prestigeDealers[i] = $scope.gameModel.dealers[j];
              }
            }
          }

          if (typeof $scope.gameModel.respect === "undefined") {
            $scope.gameModel.respect = 0;
            $scope.gameModel.muscle = [muscleMaster[0]];
          }

          if (typeof $scope.gameModel.discountUpgrades === "undefined")
          $scope.gameModel.discountUpgrades = 0;

          // check for offline progress
          if ($scope.gameModel.dateOfSave) {
            var milliSecondsInADay = 86400000;
            var minimumMilliSecondsToCalc = 30000;
            var timeDiffSinceLastSave = Math.min(Date.now() - $scope.gameModel.dateOfSave, milliSecondsInADay);

            if (timeDiffSinceLastSave > minimumMilliSecondsToCalc) {

              var respectBefore = $scope.gameModel.respect;
              var cashBefore = $scope.gameModel.cash;

              innerUpdate(timeDiffSinceLastSave / 1000, Date.now());

              $scope.offlineRespect = $scope.gameModel.respect - respectBefore;
              $scope.offlineCash = $scope.gameModel.cash - cashBefore;

              $("#offlineModal").modal('show');
            }
          }

          $scope.calculateAvailableUpgrades();
          $scope.updateDealerDrugIndex();
          prestigeDealerUpgrade.price = 5000000 * Math.pow(1.18, $scope.prestigeDealers.length + $scope.kingpins.length);
          $scope.updatePromise = $interval(update, 200);
          $scope.prestiged = false;
        }

        $document.ready(function () {
          scrollMenu();
          readFromCookie();

          onReady();
          if ($scope.options.kongregateLargeWindow) {
            kongResize = true;
          }
        });

        $scope.randomPrestigeName = function() {
          $scope.prestigeDealerName = dealerName();
        };

        $scope.prestigeDealerConfirm = function() {
          if ($scope.gameModel.cash >= prestigeDealerUpgrade.price * $scope.discountMulti() && !$scope.prestiged) {
            $scope.prestiged = true;
            var prestigeDealer = new Dealer(new Date().getTime());
            prestigeDealer.name = $scope.prestigeDealerName;
            prestigeDealer.price = 1.5;
            prestigeDealer.originalPrice = 1.5;
            prestigeDealer.volume = 1.5;
            prestigeDealer.originalVolume = 1.5;
            prestigeDealer.type= 'Prestige';
            prestigeDealer.level = 0;
            $scope.prestigeDealers.push(prestigeDealer);

            for (var i=0; i<$scope.prestigeDealers.length; i++){
              $scope.prestigeDealers[i].arrested = false;
              $scope.prestigeDealers[i].drug = "Weed";
            }
            productionMaster = createProductionMaster();
            muscleMaster = createMuscleMaster();
            drugsMaster = createDrugsMaster();

            try {
              localStorage.removeItem('gameModel');
              localStorage.setItem("prestigeDealers", JSON.stringify($scope.prestigeDealers));
            } catch (e) {
              console.log(e);
            }

            $scope.gameModel = new GameModel();
            $interval.cancel($scope.updatePromise);
            $scope.prestigeDealerName = "";
            onReady();
            $scope.refreshDealers();
          }
          $('#prestigeDealerModal').modal('hide');
        };

        $scope.prestigeDealerCancel = function(){
          $('#prestigeDealerModal').modal('hide');
        };

        $scope.exportGame = function() {
          $scope.exportGameSave = LZString.compressToEncodedURIComponent(JSON.stringify(
            {
              gameModel : $scope.gameModel,
              prestigeDealers : $scope.prestigeDealers,
              kingpins : $scope.kingpins,
              options : $scope.options
            }
          ));
          $scope.importError = undefined;
          $("#optionsModal").modal('hide');
          $("#exportModal").modal('show');
        };

        $scope.importGame = function() {
          if (typeof $scope.importGameSave == 'undefined' || $scope.importGameSave.length < 1) {
            $scope.importError = "No game save entered";
            return;
          }
          try {
            var gameSave = JSON.parse(LZString.decompressFromEncodedURIComponent($scope.importGameSave));

            $scope.gameModel = gameSave.gameModel;
            $scope.prestigeDealers = gameSave.prestigeDealers;
            $scope.kingpins = gameSave.kingpins;
            $scope.options = gameSave.options;

            $("#exportModal").modal('hide');

            $scope.importGameSave = "";
            $scope.exportGameSave = "";

          } catch (err) {
            $scope.importError = "Game save could not be parsed";
          }
        };

      }]);
