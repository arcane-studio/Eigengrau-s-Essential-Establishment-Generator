import { random } from './random'
import { assign } from './utils'

interface MagicTrinket {
  type: string
  name: string
  prefixTrinket: string
  suffixTrinket: string
  prefixProperty: string
  suffixProperty: string
  description: string
}

export function createMagicTrinket (): MagicTrinket {
  const types = ['Belt', 'Bracers', 'Circlet', 'Gauntlets', 'Amulet', 'Boots', 'Hat', 'Helm', 'Scabbard', 'Orb', 'Cap', 'Amulet', 'Pendant', 'Medallion', 'Mask', 'Cloak', 'Ring', 'Quiver', 'Tiara', 'Collar', 'Gloves', 'Candlestick', 'Brooch', 'Decorative Dagger', 'Mirror', 'Jade Pyramid', 'Bronze Figurine', 'Dragon Fang Pendant', 'Pawn', 'Puzzlebox', 'Linen Handkerchief', 'Iron Key', 'Cloth Doll', 'Oil Lamp', 'Ale Stine', "Imp's Skull", 'Walking Stick', 'Ingot', 'Meteor Stone Fragment', 'Torch', 'Silver Bell', 'Coin', 'Leather Pouch', 'Quill Pen', 'Scales', 'Gaming Die', 'Small Brass Cage', 'Chime', 'Iron Ring', 'Amulet', 'Emblem', 'Hourglass', 'Padlock', 'Magnifying glass', 'Manacles', 'Perfume Vial', "Miner's Pick", 'Pouch', 'Robes', 'Shovel', 'Signal Whistle', 'Spyglass', 'Vial', 'Waterskin', 'Abacus', 'Crystal', 'Staff', 'Wand', 'Book', 'Glass Bottle', 'Crowbar', 'Totem', 'Flask', 'Tankard', 'Instrument', 'Playing Card Set']
  const prefixes = ['Abyssal', "Acolyte's", 'Adamantine', 'Adroit', 'Alarming', 'Arborean', 'Arcadian', 'Arctic', 'Arresting', "Assassin's", 'Astral', "Barbarian's", "Bard's", 'Beastial', "Beastspeaker's", 'Benedictine', 'Blasted', 'Blessed', 'Bold', 'Bountiful', "Burglar's", 'Bytopian', 'Carcerian', 'Cardinal', 'Cartographic', 'Channelling', 'Chill', 'Clockwork', 'Cloy', 'Compassionate', 'Concordant', "Conjurer's", 'Corrosive', 'Crawling', "Dancer's", 'Defensive', "Delver's", 'Desperate', "Druid's", "Drunkard's", 'Dynamic', "Eavesdropper's", 'Elysian', 'Etherbound', 'Exalting', 'Expeditious', 'Inaccurate', 'Fathoming', 'Favored', 'Feathered', 'Feybound', 'First', 'Forgiven', "Fortune Teller's", 'Friendly', 'Gehennan', 'Gracious', 'Grim', 'Hadean', 'Harmonious', 'Healing', 'Hellish', 'Heroic', 'Histrionic', 'Holy', 'Iconic', "Inquisitor's", 'Inspired', 'Leaping', "Liar's", 'Limbo', 'Locating', 'Loquacious', 'Malediction', 'Manipulating', "Master's", 'Maverick', 'Messenger', 'Meteoric', 'Mindful', 'Miraculous', 'Mocking', 'Natural', 'Neutralizing', 'Nimble', 'Nourishing', 'Pandemonium', "Preacher's", 'Projecting', 'Protective', "Reaper's", 'Renaissance', 'Revealing', 'Riutal', 'Sacred', 'Sagacious', "Sage's", 'Secret', 'Sentinel', 'Shading', 'Shadowbound', "Shepherd's", 'Shielding', 'Shifting', 'Silent', "Smith's", "Sojourner's", 'Solemn', 'Sparkling', 'Striding', "Surgeon's", 'Tenacious', "Tracker's", 'Translucent', "Trickster's", 'Accurate', 'Unbroken', 'Verdant', 'Victorious', 'Vigilant', 'Vigorous', 'Vital', "War Leader's", 'Waterborne', 'Windborne', "Wizard's", 'Wrathful']
  const suffixes = ['of the Abyss', 'of the Acolyte', 'of Adamantine', 'of Intellect', 'of Alarms', 'of Arborea', 'of Arcadia', 'of the North', 'of Safety', 'of the Assassin', 'of the Astral Sea', 'of the Barbarian', 'of the Bard', 'of the Beastlands', 'of Beastspeakers', 'of Benediction', 'of Blasting', 'of Blessings', 'of Boldness', 'of Bounty', 'of the Burglar', 'of Bytopia', 'of Carceri', 'of the Lodestone', 'of Cartography', 'of Channelling', 'of Chills', 'of Gears', 'of Cloying', 'of Compassion', 'of Concordance', 'of the Conjurer', 'of Dissolving', 'of Vermin', 'of the Dancer', 'of Defence', 'of the Delver', 'of Last Chances', 'of the Druid', 'of Taverns', 'of the Dynamo', 'of Eavesdropping', 'of Elysium', 'of Ethereal Shores', 'of Exaltation', 'of Expedience', 'of Falsehoods', 'of Tongues', 'of the Favored', 'of Feathers', 'of the Fey', 'of Speed', 'of Forgiveness', 'of the Fortune Teller', 'of Friendship', 'of Gehenna', 'of Grace', 'of Coercion', 'of Hades', 'of Harmony', 'of Healing', 'of the Nine Hells', 'of Heroes', 'of Histrionics', 'of Faith', 'of Symbols', 'of the Inquisitor', 'of Inspiration', 'of Leaping', 'of Lies', 'of Limbo', 'of Locating', 'of the Silver Tongue', 'of Malediction', 'of Manipulation', 'of Servants', 'of the Maverick', 'of Messages', 'of Falling Stars', 'of Mindfulness', 'of Miracles', 'of Mockery', 'of Nature', 'of Neutrality', 'of Agility', 'of Nourishment', 'of Pandemonium', 'of the Preacher', 'of Projection', 'of Protection', 'of the Reaper', 'of the Renaissance', 'of Revelation', 'of Rituals', 'of the Sacred', 'of Acumen', 'of the Sage', 'of Secrets', 'of the Sentinel', 'of Shade', 'of the Shadowfell', 'of the Shepherd', 'of Shielding', 'of Shifting', 'of the Night', 'of Reparations', 'of the Sojouner', 'of Solemnity', 'of Lights', 'of Strides', 'of the Surgeon', 'of the Tenacious', 'of the Tracker', 'of Translucence', 'of Trickery', 'of Truth', 'of Heart', 'of Druidcraft', 'of Victory', 'of Vigilance', 'of Vigor', 'of Vitality', 'of the War Leader', 'of the Sea', 'of the Labyrinth Wind', 'of the Wizard', 'of Ysgard']
  const properties = [
    'When on the plane of the Abyss, the bearer has advantage on saving throws against Abyssal Corruption. (DMG p. 62)',
    'The bearer gains a +1 bonus to Wisdom (Religion) checks.',
    'The item is indestructible.',
    'The bearer gains +1 bonus to Intelligence saving throws.',
    'Contains 1d4 unreplenishable charges of the Alarm spell (1st level).',
    'When on the plane of Arborea, the bearer has advantage on saving throws against the effects of Intense Yearning. (DMG p. 61)',
    'When on the plane of Arcardia, the bearer is unaffected by Planar Vitality (DMG p. 67)',
    'The bearer suffers no harm in temperature as cold as -20 degrees Fahrenheit.',
    'Once per day, the bearer may use their reaction to reduce fall damage by 1d6 until the end of turn.',
    'The bearer may add their proficiency bonus to damage rolls dealt during surprise rounds.',
    'When travelling the Astral Sea, it takes half the number of hours to locate a Color Pool to a specific plane. You have advantage on saving throws vs. the effects of Psychic Wind (DMG p. 47-48)',
    'The bearer gains a +1 bonus to Strength (Athletics) checks.',
    'The bearer gains +1 to Charisma (Performance) checks.',
    'When on the plane of The Beastlands, the bearer has advantage on saving throws vs. Beast Transformation (DMG p. 60)',
    'Contains 1d4 unreplenishable charges of the Speak with Animals spell (1st level).',
    'Contains 1d4 unreplenishable charges of the Healing Word spell (1st level).',
    'Contains 1d4 unreplenishable charges of the Fire Bolt spell (1st level).',
    'Whenever bearer of this item receives divine healing, they gain an additional 1d4 hit points.',
    'Contains 1d4 unreplenishable charges of the Heroism spell (1st level).',
    'Contains 1d4 unreplenishable charges of the Goodberry spell (1st level).',
    'The bearer gains +1 to Dexterity (Sleight of Hand) checks.',
    'When on the plane of Bytopia, the bearer has advantage on saving throws against Pervasive Goodwill. (DMG p. 59-60)',
    'When on the plane of Carceri, the bearer knows the direction to the closest secret exit from this prison plane. (DMG p. 63)',
    'The wielder can use an action to learn which way is north.',
    'On its own volition, the item records a map of the environments that the bearer is exploring, and can magically project it for the bearer to see.',
    'Once per day, the bearer may ignore the Verbal and/or Somatic components of a spell they are casting.',
    'Contains 1d4 unreplenishable charges of the Ray of Frost spell (1st level).',
    'When on the plane of Mechanus, the bearer has advantage on saving throws against Imposing Order (DMG p. 66)',
    'The bearer may cast Friends once per day.',
    'Contains 1d4 unreplenishable charges of the Cure Wounds spell (1st level).',
    'The bearer has advantage on saving throws vs. Psychic Dissonance when travelling the Outer Planes. (DMG p. 59)',
    'The bearer may cast Prestidigitation once per day.',
    'Contains 1d4 unreplenishable charges of the Acid Splash spell (1st level).',
    'The crawling things of the earth, such as insects, snakes, and vermin, are attracted to this item. When placed on the ground, such creatures will scurry toward the item like moths drawn to the flame.',
    'The bearer gains a +1 bonus to Dexterity (Acrobatics) checks.',
    'Whenever the bearer takes a dodge action, they may move an additional 5 feet.',
    "While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.",
    'The bearer has advantage on perception checks when searching for items long lost in the the Swamp of Oblivion on the Plane of Earth. (DMG p. 54)',
    'The bearer gains a +1 bonus to Intelligence (Nature) checks.',
    'The bearer always knows the direction to the closest alcoholic beverage.',
    'The bearer has +1 to Charisma saving throws.',
    'As long as it is on the same plane, the bearer can hear through this item as if they were present.',
    'When on the plane of Elysium, the bearer has advantage on saving throws against the effects of Overwhelming Joy (DMG p. 60)',
    "The bearer can see creatures in the Border Ethereal that overlap with their plane as clearly as if they were fully in the bearer's plane. Such creatures appear as apparitions or ghosts.",
    'Contains 1d4 unreplenishable charges of the Bless spell (1st level).',
    'Contains 1d4 unreplenishable charges of the Expeditious Retreat spell.',
    'The bearer gains a +1 bonus to Charisma (Deception) checks.',
    'Contains 1d4 unreplenishable charges of the Comprehend Languages spell.',
    'Once per day, the bearer may roll a saving throw with advantage.',
    'Contains 1d4 unreplenishable charges of the Feather Fall spell (1st level).',
    'The bearer knows the general direction to the closest Fey Crossing within a 60 mile radius. (DMG p. 50)',
    'The bearer gain a +1 bonus to initiative rolls',
    'When on the plane of Mount Celestia, the bearer of this item can receive the benefits of Blessed Beneficence regardless of their alignment.',
    'Every time you are hit by a monster, you glimpse a random image of its future or past.',
    'Contains 1d4 unreplenishable charges of the Animal Friendship spell (1st level).',
    'When on the plane of Gehenna, the bearer has advantage on saving throws against Cruel Hindrance. (DMG p. 63)',
    'The bearer may cast Spare the Dying once per day.',
    'The bearer gains a +1 bonus to Charisma (Intimidation) checks if the target can see this item.',
    'When on the plane of Hades, the bearer has advantage on saving throws against Vile Transformation. (DMG p. 63)',
    'Attuning to this item takes only 1 minute.',
    'This item contains 4 weak healing nodes. As an action, a character can use one node to heal 1d4 hit points at touch range. The item regains 1d4 charges at sunrise.',
    'When in the Nine Hells, the bearer has advantage on saving throws against Pervasive Evil. (DMG p. 64)',
    'The bearer has advantage on saving throws vs. fear.',
    'the bearer gains +1 to Charisma (Performance) checks.',
    'When the bearer of this item rolls hit dice, they can choose to re-roll them and take the second result.',
    "The item is inscribed with holy symbols of the God of the DM's choice. A cleric or paladin that serves that god may use this item as a divine focus.",
    'The bearer gains a +1 bonus to Intelligence (Investigation) checks.',
    'The bearer regains their Constitution modifier in temporary hit points whenever they gain or use inspiration.',
    'Contains 1d4 unreplenishable charges of the Jump spell (1st level).',
    'Contains 1d4 unreplenishable charges of the Silent Image spell (1st level).',
    'When on the plane of Limbo, the bearer has advantage to Intelligence checks to alter or move non-magical objects within the plane. (DMG p. 61-62)',
    'Once attuned, the bearer always knows the exact location of this item',
    'The bearer gains +1 to Charisma (Persuasion) checks.',
    'Contains 1d4 unreplenishable charges of the Bane spell(1st level).',
    'The bearer may cast Mage Hand once per day.',
    'Contains 1d4 unreplenishable charges of the Unseen Servant spell (1st level).',
    'The bearer has a +1 bonus to any skill check involving gambling and games of chance (Insight, Sleight of Hand, Investigation, etc).',
    'The bearer may cast Message once per day.',
    'Contains 1 unreplenishable charge of Scorching Ray (1st level).',
    'The bearer gains a +1 bonus to Wisdom saving throws.',
    'The bearer may cast Thaumaturgy once per day.',
    'The bearer may cast Vicious Mockery once per day.',
    'Contains 1d4 unreplenishable charges of the Locate Animals or Plants spell (1st level).',
    'Contains 1d4 unreplenishable charges of the Protection from Good and Evil spell (1st level).',
    'The bearer gains a +1 bonus to Dexterity saving throws.',
    'The bearer rarely feels hungry, and only needs to consume one-fifth the usual amount of food.',
    'When on the plane of Pandemonium, the bearer has advantage on saving throws against the Mad Winds. (DMG p. 62)',
    'The bearer may extend the range of their Channel Divinity by 5 feet.',
    'The bearer can send messages mentally to willing characters within 30 feet. This communication is one-way only.',
    'The bearer may cast Blade Ward once per day.',
    'The bearer has advantage on death saving throws.',
    'Once per day, the bearer may gain +1 to any skill check.',
    'Contains 1d4 unreplenishable charges of the Detect Magic spell (1st level).',
    'Whenever the bearer casts a spell as a ritual, they have advantage to maintain concentration during the ritual.',
    'The bearer may increase their Lay on Hands hit point pool by 5.',
    'The bearer gains +1 to Wisdom (Insight) checks.',
    'The bearer gains a +1 bonus to Intelligence (History) checks.',
    'Contains 1d4 unreplenishable charges of the Illusory Script spell (1st level).',
    'Faintly glows when creatures of a certain race (DMs choice) are within a 100 foot radius.',
    'The bearer suffers no harm in temperatures as high as 120 degrees Fahrenheit.',
    'The bearer knows the general direction to the closest Shadow Crossing within a 60 mile radius. They have advantage on saving throws vs. Shadowfell Dispair (DMG p. 51-52)',
    'The bearer gains a +1 bonus to (Wisdom) Animal Handling checks.',
    'This item contains 1d4 unreplenishable charges of the Shield spell.',
    'The bearer may change minor aspects of the physical appearance of this item.',
    'The bearer gains a +1 bonus to Dexterity (Stealth) checks.',
    'The bearer may cast Mending once per day.',
    'A poem, story, or map that describes a long-forgotten treasure is etched on the surface of the item.',
    'The bearer may spend an action removing all the failed death saving throws from a target within 5 feet of them. The target is still not stabilized.',
    'The bearer may cast Dancing Lights once per day.',
    'Contains 1d4 unreplenishable charges of the Longstrider spell (1st level).',
    'The bearer gains a +1 bonus to Wisdom (Medicine) checks.',
    'When the bearer takes a long rest, they gain back one additional hit die.',
    'The bearer gains a +1 to Wisdom (Survival) checks.',
    'The bearer gains an extra level one spell slot, which recovers only after a full moon rises.',
    'The bearer may cast Minor Illusion once per day.',
    'The bearer may cast True Strike once per day.',
    'The bearer gains a +1 bonus to Constitution saving throws.',
    'The bearer may cast Druidcraft once per day.',
    "Whenever the bearer kills a creature they gain temporary hit points equal to the creature's CR.",
    'The bearer gains +2 to their Passive Perception.',
    'The bearer gains a +1 bonus to Strength saving throws.',
    "The bearer's maximum hit points increases by their constitution modifier while attuned to this item. These hit points are lost when the bearer unattunes the item.",
    'The bearer can use an action to amplify their voice so that it clearly carries for up to 300 feet.',
    'The item floats on water or other liquids. Its bearer has advantage on Strength (Athletics) checks to swim.',
    'When in the Plane of Air, the bearer can navigate the Labyrinth Wind intuitively, and knows the path to the nearest Earth Mote within 60 miles.',
    'The bearer gains a +1 to Intelligence (Arcana) checks.',
    'When on the plane of Ysgard, the bearer is unaffected by Immortal Wrath. (DMG p. 61)'
  ]

  const prefixTrinketRoll = random(properties.length - 1)
  const suffixTrinketRoll = random(properties.length - 1)

  const trinket = {
    type: random(types),
    prefixTrinket: prefixes[prefixTrinketRoll],
    suffixTrinket: suffixes[suffixTrinketRoll],
    prefixProperty: properties[prefixTrinketRoll],
    suffixProperty: properties[suffixTrinketRoll]
  }

  assign(trinket, {
    description: `${trinket.prefixProperty} ${trinket.suffixProperty}`,
    name: `${trinket.prefixTrinket} ${trinket.type} ${trinket.suffixTrinket}`
  })

  return trinket
}
